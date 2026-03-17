export interface BlogArticle {
  slug: string
  title: string
  summary: string
  date: string
  readingTime: string
  keywords: string
  metaDescription: string
  content: string
}

export const blogArticles: BlogArticle[] = [
  {
    slug: 'react-native-vs-flutter-2026',
    title: 'React Native vs Flutter en 2026 : le guide pour bien choisir',
    summary:
      'Comparaison technique approfondie entre React Native et Flutter : performances, DX, écosystème et cas d\'usage pour vous aider à choisir le bon framework mobile.',
    date: '2026-03-15',
    readingTime: '12 min',
    keywords:
      'React Native vs Flutter, framework mobile 2026, React Native, Flutter, développement mobile, comparaison framework',
    metaDescription:
      'React Native vs Flutter en 2026 : comparaison complète des performances, de l\'écosystème et de la DX. Guide pour choisir le meilleur framework mobile.',
    content: `## Introduction

Le choix du framework mobile est une décision cruciale pour tout projet. En 2026, **React Native** et **Flutter** restent les deux leaders incontestés du développement mobile cross-platform. Mais lequel choisir ? Ce guide compare ces deux technologies en profondeur.

## Architecture et fonctionnement

### React Native

React Native utilise un **bridge** pour communiquer entre le code JavaScript et les composants natifs. Depuis l'introduction de la **New Architecture (Fabric + TurboModules)**, les performances ont considérablement été améliorées grâce à l'interface JSI (JavaScript Interface) qui permet une communication synchrone et directe.

\`\`\`tsx
// Composant React Native avec la nouvelle architecture
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
});
\`\`\`

### Flutter

Flutter adopte une approche différente avec son **moteur de rendu Skia/Impeller**. Il dessine chaque pixel directement sur un canvas, sans passer par les composants natifs. Cela garantit une cohérence visuelle parfaite entre iOS et Android.

\`\`\`dart
// Composant Flutter équivalent
import 'package:flutter/material.dart';

class WelcomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Text(
          'Bienvenue',
          style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
        ),
      ),
    );
  }
}
\`\`\`

## Performances

### Benchmarks 2026

| Critère | React Native | Flutter |
|---------|-------------|---------|
| Démarrage à froid | ~800ms | ~600ms |
| Animations 60fps | Oui (Reanimated 3) | Oui (natif) |
| Taille APK de base | ~8 MB | ~12 MB |
| Consommation mémoire | Modérée | Faible |
| Rendu liste longue | Excellent (FlashList) | Excellent |

React Native a comblé une grande partie de l'écart grâce à la **New Architecture**. Les animations complexes restent toutefois légèrement plus fluides avec Flutter grâce à son rendu direct.

## Developer Experience (DX)

### Langage

- **React Native** : JavaScript / TypeScript — langage que la majorité des développeurs web connaissent déjà
- **Flutter** : Dart — langage spécifique à apprendre, mais bien conçu et type-safe

### Hot Reload

Les deux frameworks offrent un excellent **hot reload**. Flutter a historiquement eu l'avantage, mais React Native avec **Metro** et la nouvelle architecture offre désormais une expérience comparable.

### Écosystème de packages

React Native bénéficie de l'écosystème **npm** avec des centaines de milliers de packages. Flutter a un écosystème plus jeune via **pub.dev**, mais qui grandit rapidement et dont les packages sont généralement de meilleure qualité moyenne.

## Quand choisir React Native ?

- Votre équipe maîtrise déjà **React / TypeScript**
- Vous avez besoin de partager du code avec une **application web React**
- Vous souhaitez un accès facilité aux **modules natifs** existants
- Le projet nécessite une **intégration forte avec l'écosystème JavaScript** (Node.js, monorepo)

## Quand choisir Flutter ?

- Vous recherchez une **cohérence visuelle pixel-perfect** entre plateformes
- L'application a des **animations complexes** et personnalisées
- L'équipe est prête à apprendre **Dart**
- Vous ciblez aussi le **web et le desktop** avec un seul codebase

## Conclusion

En 2026, les deux frameworks sont **matures et performants**. Le choix dépend principalement de votre contexte :

- **Équipe JavaScript/React** → React Native
- **UI très personnalisée et animations** → Flutter
- **Partage de code web + mobile** → React Native

En tant que développeur React Native freelance à Paris, j'accompagne mes clients dans ce choix en fonction de leurs contraintes techniques et business.`,
  },
  {
    slug: 'api-rest-nodejs-typescript',
    title: 'Créer une API REST avec Node.js et TypeScript : guide complet',
    summary:
      'Guide complet pour créer une API REST professionnelle avec Node.js et TypeScript : architecture, validation, authentification JWT et tests.',
    date: '2026-03-10',
    readingTime: '15 min',
    keywords:
      'API REST Node.js, Node.js TypeScript tutorial, Express TypeScript, API REST, développement backend, JWT authentification',
    metaDescription:
      'Apprenez à créer une API REST robuste avec Node.js et TypeScript. Architecture, validation Zod, auth JWT, tests unitaires — guide complet pour développeurs.',
    content: `## Introduction

Créer une API REST robuste et maintenable est essentiel pour tout projet moderne. Dans ce guide, nous allons construire une API complète avec **Node.js**, **TypeScript**, **Express** et les meilleures pratiques de l'industrie.

## Architecture du projet

Une bonne architecture facilite la maintenance et l'évolution du code. Voici la structure recommandée :

\`\`\`
src/
├── config/          # Configuration (env, database)
├── controllers/     # Logique de requête/réponse
├── middlewares/      # Auth, validation, error handling
├── models/          # Modèles de données (Prisma/TypeORM)
├── routes/          # Définition des routes
├── services/        # Logique métier
├── utils/           # Utilitaires
├── validators/      # Schémas de validation (Zod)
└── app.ts           # Point d'entrée
\`\`\`

### Séparation des responsabilités

- **Controllers** : reçoivent les requêtes, appellent les services, retournent les réponses
- **Services** : contiennent la logique métier, indépendants du framework HTTP
- **Validators** : valident les données entrantes avec des schémas Zod

## Setup initial

### Installation des dépendances

\`\`\`bash
mkdir api-project && cd api-project
npm init -y
npm install express cors helmet dotenv
npm install -D typescript @types/express @types/node @types/cors tsx
npx tsc --init
\`\`\`

### Configuration TypeScript

\`\`\`json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "resolveJsonModule": true
  },
  "include": ["src/**/*"]
}
\`\`\`

### Point d'entrée

\`\`\`typescript
// src/app.ts
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { router } from './routes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
\`\`\`

## Validation avec Zod

**Zod** est la bibliothèque de validation de référence en TypeScript. Elle permet de définir des schémas typés qui servent à la fois de validation runtime et de types TypeScript.

\`\`\`typescript
// src/validators/userValidator.ts
import { z } from 'zod';

export const createUserSchema = z.object({
  email: z.string().email('Email invalide'),
  password: z.string().min(8, 'Minimum 8 caractères'),
  name: z.string().min(2, 'Minimum 2 caractères'),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
\`\`\`

### Middleware de validation

\`\`\`typescript
// src/middlewares/validate.ts
import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';

export function validate(schema: ZodSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        error: 'Validation échouée',
        details: result.error.flatten().fieldErrors,
      });
    }
    req.body = result.data;
    next();
  };
}
\`\`\`

## Authentification JWT

L'authentification par **JSON Web Tokens** est le standard pour les APIs REST. Voici une implémentation sécurisée :

\`\`\`typescript
// src/services/authService.ts
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const JWT_SECRET = process.env.JWT_SECRET!;
const JWT_EXPIRES_IN = '24h';

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function comparePassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export function generateToken(userId: string): string {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET);
}
\`\`\`

### Middleware d'authentification

\`\`\`typescript
// src/middlewares/auth.ts
import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../services/authService';

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token manquant' });
  }

  try {
    const token = authHeader.split(' ')[1];
    const payload = verifyToken(token);
    req.userId = (payload as { userId: string }).userId;
    next();
  } catch {
    return res.status(401).json({ error: 'Token invalide' });
  }
}
\`\`\`

## Gestion d'erreurs centralisée

Un middleware d'erreur global simplifie la gestion des erreurs dans toute l'application :

\`\`\`typescript
// src/middlewares/errorHandler.ts
import { Request, Response, NextFunction } from 'express';

class AppError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
  }
}

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  console.error('Unexpected error:', err);
  res.status(500).json({ error: 'Erreur interne du serveur' });
}

export { AppError };
\`\`\`

## Tests unitaires

Les tests sont essentiels pour garantir la fiabilité de votre API. Utilisez **Vitest** pour des tests rapides avec un excellent support TypeScript :

\`\`\`typescript
// src/services/__tests__/authService.test.ts
import { describe, it, expect } from 'vitest';
import { hashPassword, comparePassword, generateToken } from '../authService';

describe('AuthService', () => {
  it('should hash and verify password', async () => {
    const password = 'MonMotDePasse123';
    const hash = await hashPassword(password);

    expect(hash).not.toBe(password);
    expect(await comparePassword(password, hash)).toBe(true);
    expect(await comparePassword('wrong', hash)).toBe(false);
  });

  it('should generate a valid JWT token', () => {
    const token = generateToken('user-123');
    expect(token).toBeDefined();
    expect(typeof token).toBe('string');
  });
});
\`\`\`

## Conclusion

Ce guide couvre les fondamentaux d'une API REST professionnelle avec Node.js et TypeScript. Les bonnes pratiques présentées — architecture en couches, validation Zod, authentification JWT, gestion d'erreurs centralisée et tests — constituent une base solide pour n'importe quel projet backend.

En tant que développeur full-stack freelance à Paris, je conçois des APIs robustes et performantes pour mes clients. N'hésitez pas à me contacter pour vos projets.`,
  },
  {
    slug: 'architecture-react-production-patterns',
    title: 'Architecture React en production : patterns et bonnes pratiques',
    summary:
      'Les patterns et bonnes pratiques pour structurer une application React en production : organisation des dossiers, custom hooks, state management et optimisation des performances.',
    date: '2026-03-05',
    readingTime: '14 min',
    keywords:
      'architecture React, React bonnes pratiques, développeur React senior, React production, custom hooks React, state management',
    metaDescription:
      'Architecture React en production : structure de dossiers, custom hooks, state management et optimisation. Patterns utilisés par les développeurs React seniors.',
    content: `## Introduction

Passer d'un prototype React à une application en production demande une architecture réfléchie. Cet article présente les **patterns et bonnes pratiques** que j'utilise au quotidien en tant que développeur React senior.

## Structure de dossiers

La structure de dossiers est le premier élément d'architecture. Voici celle que je recommande pour les projets de taille moyenne à grande :

\`\`\`
src/
├── components/        # Composants réutilisables
│   ├── ui/           # Composants UI de base (Button, Input, Modal)
│   ├── forms/        # Composants de formulaire
│   └── layout/       # Composants de layout (Header, Footer, Sidebar)
├── features/          # Modules par fonctionnalité
│   ├── auth/         # Authentification
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── types.ts
│   └── dashboard/    # Dashboard
│       ├── components/
│       ├── hooks/
│       └── types.ts
├── hooks/             # Hooks globaux
├── contexts/          # Contexts React
├── services/          # Services API
├── utils/             # Utilitaires
├── types/             # Types globaux
└── pages/             # Pages (routes)
\`\`\`

### Pourquoi cette structure ?

- **Colocation** : les fichiers liés sont proches les uns des autres
- **Feature-based** : facilite le travail en équipe et la suppression de features
- **Scalable** : fonctionne pour les petits comme les grands projets

## Custom Hooks : la clé de la réutilisabilité

Les custom hooks sont l'outil le plus puissant de React pour la réutilisabilité et la séparation des préoccupations.

### useAsync : gérer les opérations asynchrones

\`\`\`tsx
import { useState, useCallback } from 'react';

interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useAsync<T>() {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(async (asyncFn: () => Promise<T>) => {
    setState({ data: null, loading: true, error: null });
    try {
      const data = await asyncFn();
      setState({ data, loading: false, error: null });
      return data;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Erreur inconnue';
      setState({ data: null, loading: false, error: message });
      throw err;
    }
  }, []);

  return { ...state, execute };
}
\`\`\`

### useDebounce : éviter les appels excessifs

\`\`\`tsx
import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

// Utilisation
function SearchComponent() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery) {
      searchAPI(debouncedQuery);
    }
  }, [debouncedQuery]);

  return <input value={query} onChange={(e) => setQuery(e.target.value)} />;
}
\`\`\`

## State Management

### Quand utiliser quoi ?

| Outil | Cas d'usage |
|-------|-------------|
| useState | État local simple |
| useReducer | État local complexe avec de multiples actions |
| Context + useReducer | État partagé entre quelques composants proches |
| Zustand | État global simple et performant |
| TanStack Query | État serveur (données API) |
| Redux Toolkit | État global complexe avec beaucoup de logique |

### Zustand : la simplicité avant tout

**Zustand** est devenu le choix privilégié pour le state management global grâce à sa simplicité :

\`\`\`tsx
import { create } from 'zustand';

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));

// Utilisation dans un composant
function ProfilePage() {
  const { user, logout } = useAuthStore();

  if (!user) return null;

  return (
    <div>
      <h1>{user.name}</h1>
      <button onClick={logout}>Déconnexion</button>
    </div>
  );
}
\`\`\`

### TanStack Query : l'état serveur

Pour les données provenant d'une API, **TanStack Query** (React Query) est incontournable :

\`\`\`tsx
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('/api/users').then((res) => res.json()),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newUser: CreateUserInput) =>
      fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      }).then((res) => res.json()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
}
\`\`\`

## Optimisation des performances

### React.memo : quand l'utiliser

N'utilisez \`React.memo\` que lorsqu'un composant se re-rend inutilement de manière mesurable :

\`\`\`tsx
// Bon usage : composant pur avec des props stables
const UserCard = React.memo(function UserCard({ user }: { user: User }) {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
});

// Liste virtualisée pour de grandes quantités de données
import { useVirtualizer } from '@tanstack/react-virtual';

function VirtualizedList({ items }: { items: Item[] }) {
  const parentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
  });

  return (
    <div ref={parentRef} style={{ height: '400px', overflow: 'auto' }}>
      <div style={{ height: virtualizer.getTotalSize() }}>
        {virtualizer.getVirtualItems().map((virtualItem) => (
          <div key={virtualItem.key} style={{
            position: 'absolute',
            top: virtualItem.start,
            height: virtualItem.size,
          }}>
            {items[virtualItem.index].name}
          </div>
        ))}
      </div>
    </div>
  );
}
\`\`\`

### Code Splitting avec React.lazy

Le code splitting réduit le bundle initial et améliore le temps de chargement :

\`\`\`tsx
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Suspense>
  );
}
\`\`\`

## Error Boundaries

Les Error Boundaries capturent les erreurs de rendu et affichent un fallback :

\`\`\`tsx
import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback: ReactNode;
}

class ErrorBoundary extends Component<Props, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error('ErrorBoundary caught:', error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// Utilisation
<ErrorBoundary fallback={<p>Une erreur est survenue</p>}>
  <UserProfile />
</ErrorBoundary>
\`\`\`

## Conclusion

Une bonne architecture React repose sur des principes simples : **colocation**, **séparation des préoccupations** via les custom hooks, **bon choix de state management** et **optimisations ciblées**. Ces patterns sont le résultat de mon expérience en production et s'adaptent à la majorité des projets.

Vous cherchez un développeur React senior à Paris pour architecturer votre application ? Contactez-moi pour en discuter.`,
  },
]
