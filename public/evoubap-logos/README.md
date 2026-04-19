# Logos Evoubap

Pack de logos pour **evoubap.com** — format SVG vectoriel.

## Contenu

| Fichier | Description | Usage recommandé |
|---|---|---|
| `evoubap-logo-gradient.svg` | Version dégradé violet/rose | Site web, entête, présentations |
| `evoubap-logo-minimalist.svg` | Version minimaliste bleu nuit | Documents officiels, papeterie |
| `evoubap-logo-geometric.svg` | Version géométrique cyan | Communication tech/digital |
| `evoubap-icon.svg` | Icône carrée (512x512) | Favicon, app mobile, avatar réseaux sociaux |

## Utilisation dans React / React-Native

### React (web)
```tsx
import Logo from './evoubap-logo-gradient.svg';

<img src={Logo} alt="Evoubap" />
```

### React-Native
```tsx
import { SvgXml } from 'react-native-svg';
import logoXml from './evoubap-logo-gradient.svg';

<SvgXml xml={logoXml} width="200" height="80" />
```

## Conversion en PNG

Les SVG peuvent être convertis en PNG à n'importe quelle résolution via :
- [cloudconvert.com](https://cloudconvert.com/svg-to-png)
- ImageMagick : `convert -density 300 logo.svg logo.png`
- Figma / Illustrator

## Couleurs de la charte

- Violet principal : `#7C3AED`
- Rose accent : `#EC4899`
- Cyan : `#06B6D4`
- Bleu nuit : `#0F172A`
- Indigo foncé : `#1E1B4B`
