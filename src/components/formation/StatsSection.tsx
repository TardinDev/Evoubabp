import { formations } from "../../utils/formationData";

const ACCENT = '#4b0082';

const stats = [
  { value: "56+", label: "Étudiants formés" },
  { value: "96%", label: "Taux de satisfaction" },
  { value: `${formations.length}`, label: "Formations disponibles" },
  { value: "850h", label: "Heures de contenu" },
];

export default function StatsSection() {
  return (
    <section id="stats-section" className="py-16 md:py-24 px-6 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2
          className="font-extrabold leading-[1.1] tracking-tight mb-12"
          style={{ fontSize: 'clamp(1.8rem, 3.6vw, 2.75rem)' }}
        >
          Les résultats <span style={{ color: ACCENT }}>en chiffres</span>
        </h2>

        <dl className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-black/15 m-0">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col-reverse border-r border-b border-black/15 p-6 md:p-9">
              <dt className="text-sm md:text-base text-black/65 font-medium">{label}</dt>
              <dd
                className="font-extrabold tracking-tight leading-none m-0 mb-3"
                style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: ACCENT }}
              >
                {value}
              </dd>
            </div>
          ))}
        </dl>

        <figure className="mt-12 md:mt-16 m-0 max-w-3xl pl-6 border-l-2" style={{ borderColor: ACCENT }}>
          <blockquote className="m-0 text-xl md:text-2xl font-bold leading-snug">
            «&nbsp;Grâce à Evoubabp Academy, j&rsquo;ai pu transformer ma passion en carrière.
            Les formations sont exceptionnelles et le suivi personnalisé fait toute la différence.&nbsp;»
          </blockquote>
          <figcaption className="mt-5 text-sm text-black/65">
            <span className="font-bold text-[#0a0a0a]">Alexandre Martin</span>
            {" · "}Développeur Full-Stack chez TechCorp
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
