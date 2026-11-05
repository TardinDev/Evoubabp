'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { useTranslation } from '../../hooks/useTranslation'
import {
  AP, body, body2, btnPrimary, btnSecondary, card, cardHover, container, containerWide,
  h1, h2, h3, lead, link, section, small, focusRing,
} from './appleStyle'

const FORMATION_URL = '/formations/machine-learning'

// Formules affichées pour chaque brique (notation mathématique, identique en FR/EN)
const FORMULAS = [
  '{ (x⁽ⁱ⁾, y⁽ⁱ⁾) }, i = 1 … m',
  'ŷ = f(x) = w · x + b',
  'J(w, b) = ¹⁄₂ₘ Σ (ŷ⁽ⁱ⁾ − y⁽ⁱ⁾)²',
  'w ← w − α · ∂J/∂w',
  'F1 = 2 · P · R / (P + R)',
]

// Fonction coût de la démo : J(w) = (w − 3)² + 0,5, minimum en w = 3
const W_MIN = 3
const cost = (w: number) => (w - W_MIN) ** 2 + 0.5
const gradient = (w: number) => 2 * (w - W_MIN)
const W_START = -1.5

const VIEW_W = 600
const VIEW_H = 340
const PAD = { left: 48, right: 20, top: 20, bottom: 36 }
const DOMAIN_W: [number, number] = [-2, 8]
const DOMAIN_J: [number, number] = [0, 26]

const sx = (w: number) =>
  PAD.left + ((w - DOMAIN_W[0]) / (DOMAIN_W[1] - DOMAIN_W[0])) * (VIEW_W - PAD.left - PAD.right)
const sy = (j: number) =>
  VIEW_H - PAD.bottom - ((j - DOMAIN_J[0]) / (DOMAIN_J[1] - DOMAIN_J[0])) * (VIEW_H - PAD.top - PAD.bottom)

const CURVE_PATH = (() => {
  const pts: string[] = []
  for (let i = 0; i <= 120; i++) {
    const w = DOMAIN_W[0] + (i / 120) * (DOMAIN_W[1] - DOMAIN_W[0])
    pts.push(`${i === 0 ? 'M' : 'L'}${sx(w).toFixed(1)},${sy(cost(w)).toFixed(1)}`)
  }
  return pts.join(' ')
})()

const PYTHON_SNIPPET = `import numpy as np

w, b, alpha = 0.0, 0.0, 0.01

for epoch in range(1000):
    y_hat = w * X + b                    # modèle
    error = y_hat - y
    J = (error ** 2).mean() / 2          # fonction coût
    dw = (error * X).mean()              # gradients
    db = error.mean()
    w -= alpha * dw                      # descente de gradient
    b -= alpha * db`

const isDiverged = (w: number) => Math.abs(w - W_MIN) > 40
const isConverged = (w: number) => Math.abs(gradient(w)) < 0.01

const GradientDescentDemo = () => {
  const { t } = useTranslation()
  const ml = t.machineLearning
  const [alpha, setAlpha] = useState(0.1)
  const [path, setPath] = useState<number[]>([W_START])

  const current = path[path.length - 1]
  const diverged = isDiverged(current)
  const converged = !diverged && path.length > 1 && isConverged(current)

  const step = (n: number) => {
    setPath((prev) => {
      const next = [...prev]
      for (let i = 0; i < n; i++) {
        const w = next[next.length - 1]
        if (isDiverged(w) || (next.length > 1 && isConverged(w))) break
        next.push(w - alpha * gradient(w))
      }
      return next
    })
  }

  const visible = useMemo(
    () => path.filter((w) => w >= DOMAIN_W[0] - 0.5 && w <= DOMAIN_W[1] + 0.5 && cost(w) <= DOMAIN_J[1] + 2),
    [path],
  )
  const trail = visible.map((w, i) => `${i === 0 ? 'M' : 'L'}${sx(w).toFixed(1)},${sy(cost(w)).toFixed(1)}`).join(' ')
  const dotW = Math.min(Math.max(current, DOMAIN_W[0]), DOMAIN_W[1])
  const dotJ = Math.min(cost(dotW), DOMAIN_J[1])

  const status = diverged ? ml.diverged : converged ? ml.converged : alpha > 1 ? ml.hintLarge : alpha <= 0.1 ? ml.hintSmall : ''

  return (
    <div className={`${card} p-5 sm:p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}>
      <div className="lg:col-span-7">
        <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} role="img" aria-label={ml.chartLabel} className="w-full h-auto">
          <defs>
            <clipPath id="ml-plot-area">
              <rect x={PAD.left} y={PAD.top - 10} width={VIEW_W - PAD.left - PAD.right} height={VIEW_H - PAD.top - PAD.bottom + 10} />
            </clipPath>
          </defs>
          <line x1={PAD.left} y1={VIEW_H - PAD.bottom} x2={VIEW_W - PAD.right} y2={VIEW_H - PAD.bottom} stroke="#D2D2D7" />
          <line x1={PAD.left} y1={PAD.top} x2={PAD.left} y2={VIEW_H - PAD.bottom} stroke="#D2D2D7" />
          {[-2, 0, 2, 4, 6, 8].map((w) => (
            <text key={w} x={sx(w)} y={VIEW_H - PAD.bottom + 22} textAnchor="middle" fontSize={12} fill={AP.text3} fontFamily={AP.font}>
              {w}
            </text>
          ))}
          {[0, 10, 20].map((j) => (
            <text key={j} x={PAD.left - 12} y={sy(j) + 4} textAnchor="end" fontSize={12} fill={AP.text3} fontFamily={AP.font}>
              {j}
            </text>
          ))}
          <text x={VIEW_W - PAD.right} y={VIEW_H - PAD.bottom - 10} textAnchor="end" fontSize={14} fill={AP.text2} fontFamily={AP.font}>
            w
          </text>
          <text x={PAD.left + 10} y={PAD.top + 6} fontSize={14} fill={AP.text2} fontFamily={AP.font}>
            J(w)
          </text>
          <line x1={sx(W_MIN)} y1={sy(cost(W_MIN))} x2={sx(W_MIN)} y2={VIEW_H - PAD.bottom} stroke="#D2D2D7" strokeDasharray="3 4" />
          <g clipPath="url(#ml-plot-area)">
            <path d={CURVE_PATH} fill="none" stroke={AP.text} strokeWidth={2} />
            {visible.length > 1 && <path d={trail} fill="none" stroke={AP.accent} strokeWidth={1.5} strokeOpacity={0.5} />}
            {visible.slice(0, -1).map((w, i) => (
              <circle key={i} cx={sx(w)} cy={sy(cost(w))} r={3.5} fill={AP.accent} fillOpacity={0.3} />
            ))}
          </g>
          <circle
            cx={sx(dotW)}
            cy={sy(dotJ)}
            r={8}
            fill={diverged ? '#E30000' : AP.accent}
            stroke="white"
            strokeWidth={2}
            className="transition-all duration-300 ease-out motion-reduce:transition-none"
          />
        </svg>
      </div>

      <div className="lg:col-span-5">
        <label htmlFor="ml-alpha" className="flex items-baseline justify-between text-[17px] mb-3">
          <span>{ml.learningRate}</span>
          <span className="tabular-nums font-semibold" style={{ color: AP.accent }}>{alpha.toFixed(2)}</span>
        </label>
        <input
          id="ml-alpha"
          type="range"
          min={0.05}
          max={1.05}
          step={0.05}
          value={alpha}
          onChange={(e) => setAlpha(Number(e.target.value))}
          className="w-full mb-8 cursor-pointer"
          style={{ accentColor: AP.accent }}
        />

        <div className="flex flex-wrap gap-3 mb-8">
          <button type="button" onClick={() => step(1)} disabled={diverged || converged} className={`${btnPrimary} disabled:opacity-40 disabled:cursor-not-allowed`}>
            {ml.stepOnce}
          </button>
          <button type="button" onClick={() => step(10)} disabled={diverged || converged} className={`${btnSecondary} disabled:opacity-40 disabled:cursor-not-allowed`}>
            {ml.stepTen}
          </button>
          <button type="button" onClick={() => setPath([W_START])} className={`px-3 py-3 text-[17px] bg-transparent border-0 cursor-pointer ${link}`}>
            {ml.reset}
          </button>
        </div>

        <dl className="grid grid-cols-3 gap-4 m-0 rounded-[12px] p-4" style={{ backgroundColor: AP.gray }} aria-live="polite">
          <div>
            <dt className={small}>{ml.iteration}</dt>
            <dd className="m-0 mt-1 text-[21px] font-semibold tabular-nums">{path.length - 1}</dd>
          </div>
          <div>
            <dt className={small}>w</dt>
            <dd className="m-0 mt-1 text-[21px] font-semibold tabular-nums">{diverged ? '∞' : current.toFixed(3)}</dd>
          </div>
          <div>
            <dt className={small}>{ml.cost}</dt>
            <dd className="m-0 mt-1 text-[21px] font-semibold tabular-nums">{diverged ? '∞' : cost(current).toFixed(3)}</dd>
          </div>
        </dl>

        <p className="mt-5 min-h-[3rem] text-[15px] leading-[1.45] m-0" style={{ color: diverged ? '#E30000' : AP.text2 }} aria-live="polite">
          {status}
        </p>
      </div>
    </div>
  )
}

interface MachineLearningSectionProps {
  id?: string
}

const MachineLearningSection: React.FC<MachineLearningSectionProps> = ({ id }) => {
  const { t } = useTranslation()
  const ml = t.machineLearning

  return (
    <div id={id} style={{ fontFamily: AP.font, color: AP.text }}>
      {/* Hero */}
      <section className={`${section} bg-white text-center`}>
        <div className={container}>
          <h1 className={h1}>{ml.heroTitle}</h1>
          <p className={`${lead} mt-6 max-w-[640px] mx-auto`}>{ml.heroSubtitle}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href={FORMATION_URL} className={btnPrimary}>{ml.ctaFormation}</Link>
            <a href="#projets" className={btnSecondary}>{ml.ctaProjects}</a>
          </div>
        </div>
      </section>

      {/* Supervisé / non supervisé */}
      <section className={section} style={{ backgroundColor: AP.gray }}>
        <div className={containerWide}>
          <div className="text-center max-w-[720px] mx-auto mb-14">
            <h2 className={h2}>{ml.typesTitle}</h2>
            <p className={`${lead} mt-4`}>{ml.typesSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {ml.types.map((type, i) => (
              <article key={type.title} className={`${card} p-8 md:p-10 flex flex-col`}>
                <h3 className={h3}>{type.title}</h3>
                <p className={`${body} mt-4`}>{type.definition}</p>
                <p className={`${body2} mt-4`}>{type.analogy}</p>
                <ul className="mt-6 mb-8 p-0 list-none space-y-2.5">
                  {type.examples.map((ex) => (
                    <li key={ex} className="text-[17px] leading-[1.45] pl-4 border-l-2" style={{ borderColor: AP.accent }}>
                      {ex}
                    </li>
                  ))}
                </ul>
                <Link href={`${FORMATION_URL}#${i === 0 ? 'projet-1' : 'projet-3'}`} className={`mt-auto text-[17px] ${link}`}>
                  {type.inCourse}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Les cinq briques */}
      <section className={`${section} bg-white`}>
        <div className={containerWide}>
          <div className="text-center max-w-[720px] mx-auto mb-14">
            <h2 className={h2}>{ml.stepsTitle}</h2>
            <p className={`${lead} mt-4`}>{ml.stepsSubtitle}</p>
          </div>
          <ol className="list-none p-0 m-0 space-y-4">
            {ml.steps.map((s, i) => (
              <li
                key={s.title}
                className="rounded-[18px] p-7 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-5"
                style={{ backgroundColor: AP.gray }}
              >
                <div className="md:col-span-4 flex gap-5">
                  <span aria-hidden="true" className="font-semibold text-[40px] leading-none tabular-nums" style={{ color: AP.accent }}>
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-[21px] font-semibold leading-tight m-0">{s.title}</h3>
                    <p className={`${small} mt-1.5`}>{s.tagline}</p>
                  </div>
                </div>
                <p className="md:col-span-3 m-0 text-[19px] leading-snug whitespace-nowrap overflow-x-auto">
                  {FORMULAS[i]}
                </p>
                <div className="md:col-span-5">
                  <p className={`${body} mb-4`}>{s.description}</p>
                  <ul className="p-0 m-0 list-none space-y-1.5">
                    {s.points.map((p) => (
                      <li key={p} className="text-[15px] leading-[1.45]" style={{ color: AP.text2 }}>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Démo */}
      <section className={section} style={{ backgroundColor: AP.gray }}>
        <div className={containerWide}>
          <div className="text-center max-w-[720px] mx-auto mb-14">
            <h2 className={h2}>{ml.demoTitle}</h2>
            <p className={`${lead} mt-4`}>{ml.demoIntro}</p>
          </div>
          <GradientDescentDemo />
        </div>
      </section>

      {/* Code */}
      <section className={`${section} bg-white`}>
        <div className={container}>
          <h2 className={`${h2} text-center mb-12`}>{ml.codeTitle}</h2>
          <pre
            className="overflow-x-auto rounded-[18px] p-7 md:p-10 text-[14px] leading-[1.7] m-0"
            style={{ backgroundColor: AP.dark, color: '#F5F5F7', fontFamily: AP.mono }}
          >
            <code>{PYTHON_SNIPPET}</code>
          </pre>
        </div>
      </section>

      {/* Projets */}
      <section id="projets" className={`${section} scroll-mt-28`} style={{ backgroundColor: AP.gray }}>
        <div className={containerWide}>
          <div className="text-center max-w-[720px] mx-auto mb-14">
            <h2 className={h2}>{ml.projectsTitle}</h2>
            <p className={`${lead} mt-4`}>{ml.projectsSubtitle}</p>
          </div>
          <ul className="list-none p-0 m-0 grid md:grid-cols-3 gap-6">
            {ml.projects.map((p, i) => (
              <li key={p.title}>
                <Link
                  href={`${FORMATION_URL}#projet-${i + 1}`}
                  className={`${card} ${cardHover} ${focusRing} group h-full p-8 flex flex-col no-underline text-[#1D1D1F]`}
                >
                  <span className={small}>{p.kind}</span>
                  <h3 className={`${h3} mt-3`}>{p.title}</h3>
                  <p className={`${body2} mt-3 mb-8`}>{p.situation}</p>
                  <span className="mt-auto flex items-center justify-between gap-4">
                    <span className="text-[17px] group-hover:underline underline-offset-4" style={{ color: AP.accent }}>
                      {ml.projectCta}
                    </span>
                    <span className={small}>{p.duration}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className={`${section} bg-white text-center`}>
        <div className={container}>
          <h2 className={h2}>{ml.ctaTitle}</h2>
          <p className={`${lead} mt-4`}>{ml.ctaSubtitle}</p>
          <div className="mt-10">
            <Link href={FORMATION_URL} className={btnPrimary}>{ml.ctaButton}</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MachineLearningSection
