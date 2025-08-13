import { FaMobile, FaRocket, FaGitAlt, FaDatabase } from "react-icons/fa";

export const concepts = [
  {
    icon: FaRocket,
    title: "Démarrage avec Expo",
    description: "Installation et configuration d'un projet React Native avec Expo CLI"
  },
  {
    icon: FaMobile,
    title: "Frontend",
    description: "Navigation avec Expo Router, styling TailwindCSS et développement d'écrans avancés"
  },
  {
    icon: FaGitAlt,
    title: "Git & GitHub",
    description: "Maîtrise du versioning, collaboration et déploiement avec Git et GitHub"
  },
  {
    icon: FaDatabase,
    title: "Backend",
    description: "Intégration d'APIs REST, Clerk, Supabase, authentification et gestion des données"
  }
];

export const features = [
  "✅ 4 projets complets inclus",
  "✅ Code source disponible",
  "✅ Vidéos tutoriels HD",
  "✅ Support communauté",
  "✅ Certificat de réussite",
  "✅ Mise à jour gratuite"
];

export const formations = {
  pro: {
    id: "pro",
    title: "Formation Pro",
    price: 129,
    currency: "€",
    description: "Maîtrisez les fondamentaux du développement mobile avec React Native",
    projects: ["runSport", "socialConnect"],
    features: [
      "✅ 2 projets complets inclus",
      "✅ Code source disponible",
      "✅ Vidéos tutoriels HD",
      "✅ Support communauté",
      "✅ Certificat de réussite",
      "✅ Mise à jour gratuite"
    ],
    badge: "POPULAIRE",
    color: "#3B82F6"
  },
  mastering: {
    id: "mastering",
    title: "Formation Mastering",
    price: 149,
    currency: "€",
    description: "Devenez un expert React Native avec 4 projets complets",
    projects: ["runSport", "socialConnect", "skyBooker", "sendMoney"],
    features: [
      "✅ 4 projets complets inclus",
      "✅ Code source disponible",
      "✅ Vidéos tutoriels HD",
      "✅ Support communauté",
      "✅ Certificat de réussite",
      "✅ Mise à jour gratuite",
      "✅ Accès aux projets avancés",
      "✅ Mentoring personnalisé"
    ],
    badge: "RECOMMANDÉ",
    color: "#10B981"
  }
};

export const techStacks = {
  frontend: {
    title: "🎨 Frontend & UI",
    items: [
      "React Native",
      "Expo SDK 53",
      "TypeScript",
      "TailwindCSS",
      "Expo Router v3"
    ]
  },
  backend: {
    title: "⚙️ Backend & APIs",
    items: [
      "Supabase",
      "Clerk Auth",
      "REST APIs",
      "JWT Auth",
      "PostgreSQL"
    ]
  },
  stateStorage: {
    title: "📊 State & Storage",
    items: [
      "TanStack Query",
      "Zustand",
      "Zod",
      "AsyncStorage",
      "Expo SecureStore",
      "SQLite"
    ]
  },
  tools: {
    title: "🛠️ Tools & Deployment",
    items: [
      "Git/GitHub",
      "Sentry",
      "EAS Build",
      "Expo Application Services",
      "App Store Connect",
      "Google Play Console"
    ]
  }
};

export const modules = [
  {
    number: "01",
    title: "Mise en place du projet React Native",
    duration: "1h 30min",
    lessons: [
      "Installation d'Expo CLI",
      "Création du projet RunSport",
      "Configuration de l'environnement"
    ]
  },
  {
    number: "02",
    title: "Navigation avec Expo Router",
    duration: "2h 00min",
    lessons: [
      "Configuration d'Expo Router",
      "Navigation entre écrans",
      "Paramètres et routes dynamiques"
    ]
  },
  {
    number: "03",
    title: "Styling avec TailwindCSS",
    duration: "2h 30min",
    lessons: [
      "Installation de TailwindCSS",
      "Créer des composants stylés",
      "Responsive design mobile"
    ]
  },
  {
    number: "04",
    title: "Développement des Écrans",
    duration: "2h 00min",
    lessons: [
      "Écran d'accueil et onboarding",
      "Interface de sport et tracking",
      "Profil utilisateur et statistiques"
    ]
  },
  {
    number: "05",
    title: "Backend & Versioning",
    duration: "2h 30min",
    lessons: [
      "Git et GitHub pour développeurs mobiles",
      "Intégration d'APIs REST",
      "Supabase et base de données",
      "Authentification avec Clerk"
    ]
  }
];

export const runSportCourse = {
  sections: [
    {
      id: "setup",
      title: "Configuration du projet",
      description: "Nous allons créer notre projet RunSport avec Expo CLI et configurer l'environnement de développement.",
      videoUrl: "https://example.com/setup-video.mp4",
      duration: "15 min",
      keyPoints: [
        "Installation d'Expo CLI",
        "Création du projet TypeScript",
        "Configuration des dépendances"
      ],
      code: `// Installation d'Expo CLI
npm install -g @expo/cli

// Création du projet RunSport
npx create-expo-app RunSport --template typescript

// Navigation vers le dossier
cd RunSport

// Installation des dépendances
npm install @expo/vector-icons
npm install react-native-paper`,
      finalCode: `// Structure du projet final
RunSport/
├── app/
│   ├── _layout.tsx
│   ├── index.tsx
│   ├── products.tsx
│   └── cart.tsx
├── components/
│   ├── ProductCard.tsx
│   ├── CategoryCard.tsx
│   └── CartItem.tsx
├── store/
│   └── cartStore.ts
├── config/
│   ├── supabase.ts
│   └── clerk.ts
└── package.json

// Package.json final
{
  "name": "runsport",
  "version": "1.0.0",
  "dependencies": {
    "expo": "~53.0.0",
          "react": "18.3.1",
          "react-native": "0.75.3",
          "expo-router": "^3.5.0",
    "@expo/vector-icons": "^13.0.0",
    "react-native-paper": "^5.10.0",
    "zustand": "^4.4.0",
    "@clerk/expo": "^0.19.0",
    "@supabase/supabase-js": "^2.38.0"
  }
}`
    },
    {
      id: "navigation",
      title: "Navigation avec Expo Router",
      description: "Nous allons configurer la navigation entre les écrans avec Expo Router v3.",
      videoUrl: "https://example.com/navigation-video.mp4",
      duration: "20 min",
      keyPoints: [
        "Installation d'Expo Router v3",
        "Configuration du layout principal",
        "Création des écrans de navigation",
        "Personnalisation des headers"
      ],
      code: `// Installation d'Expo Router
npx expo install expo-router

// app/_layout.tsx
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#3b82f6',
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Accueil' }} />
      <Stack.Screen name="products" options={{ title: 'Produits' }} />
    </Stack>
  );
}`,
      finalCode: `// Configuration finale complète de la navigation

// app/_layout.tsx
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#3b82f6" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3b82f6',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="index" 
          options={{ 
            title: '🏃‍♂️ RunSport',
            headerShown: true 
          }} 
        />
        <Stack.Screen 
          name="products" 
          options={{ 
            title: '👟 Nos Produits',
            headerBackTitle: 'Retour'
          }} 
        />
        <Stack.Screen 
          name="cart" 
          options={{ 
            title: '🛒 Mon Panier',
            presentation: 'modal'
          }} 
        />
      </Stack>
    </>
  );
}

// Types pour la navigation
export type RootStackParamList = {
  index: undefined;
  products: { category?: string };
  cart: undefined;
};`
    },
    {
      id: "homescreen",
      title: "Écran d'accueil",
      description: "Créons l'écran d'accueil avec un hero section et les catégories de chaussures.",
      videoUrl: "https://example.com/homescreen-video.mp4",
      duration: "25 min",
      keyPoints: [
        "Création du hero section attractif",
        "Intégration des catégories de produits",
        "Styling avec TailwindCSS",
        "Navigation vers les écrans produits",
        "Responsive design mobile"
      ],
      code: `// app/index.tsx
import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  const categories = [
    { id: 1, name: 'Running', image: '/images/running.jpg' },
    { id: 2, name: 'Basketball', image: '/images/basketball.jpg' },
    { id: 3, name: 'Football', image: '/images/football.jpg' },
  ];

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Hero Section */}
      <View className="bg-blue-500 p-6 rounded-b-3xl">
        <Text className="text-white text-2xl font-bold mb-2">
          Bienvenue sur RunSport
        </Text>
        <Text className="text-white/80">
          Trouvez les meilleures chaussures de sport
        </Text>
      </View>

      {/* Categories */}
      <View className="p-4">
        <Text className="text-xl font-semibold mb-4">Catégories</Text>
        <View className="flex-row flex-wrap gap-3">
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              className="bg-gray-100 p-4 rounded-xl flex-1 min-w-[45%]"
              onPress={() => router.push('/products')}
            >
              <Text className="text-center font-medium">{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}`
    },
    {
      id: "products",
      title: "Liste des produits",
      description: "Créons l'écran qui affiche la liste des chaussures avec filtres et recherche.",
      code: `// app/products.tsx
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

const SHOES = [
  {
    id: 1,
    name: 'Nike Air Max 270',
    price: 150,
    image: '/images/nike-air-max.jpg',
    category: 'running'
  },
  {
    id: 2,
    name: 'Adidas Ultraboost 22',
    price: 180,
    image: '/images/adidas-ultra.jpg',
    category: 'running'
  },
];

export default function ProductsScreen() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const renderProduct = ({ item }) => (
    <TouchableOpacity className="bg-white m-2 p-4 rounded-xl shadow-sm border border-gray-100">
      <Image source={{ uri: item.image }} className="w-full h-40 rounded-lg mb-3" />
      <Text className="font-semibold text-lg mb-1">{item.name}</Text>
      <Text className="text-blue-600 font-bold text-xl">{item.price}€</Text>
      
      <TouchableOpacity className="bg-blue-500 p-3 rounded-lg mt-3">
        <Text className="text-white text-center font-medium">
          Ajouter au panier
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-gray-50">
      <FlatList
        data={SHOES}
        renderItem={renderProduct}
        numColumns={2}
        contentContainerStyle={{ padding: 8 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}`
    },
    {
      id: "cart",
      title: "Panier et checkout",
      description: "Implémentons la logique du panier avec Zustand et l'écran de checkout.",
      code: `// store/cartStore.ts
import { create } from 'zustand';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  
  addItem: (item) => {
    set((state) => {
      const existingItem = state.items.find(i => i.id === item.id);
      if (existingItem) {
        return {
          items: state.items.map(i =>
            i.id === item.id 
              ? { ...i, quantity: i.quantity + 1 }
              : i
          )
        };
      }
      return { items: [...state.items, { ...item, quantity: 1 }] };
    });
  },

  removeItem: (id) => {
    set((state) => ({
      items: state.items.filter(item => item.id !== id)
    }));
  },

  updateQuantity: (id, quantity) => {
    set((state) => ({
      items: state.items.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    }));
  },

  clearCart: () => set({ items: [] }),

  get total() {
    return get().items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
}));`
    },
    {
      id: "auth-db",
      title: "Authentification & Base de données",
      description: "Connectons notre app avec Clerk pour l'authentification et Supabase pour la base de données.",
      code: `// config/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-project.supabase.co';
const supabaseKey = 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseKey);

// config/clerk.ts
import { ClerkProvider } from '@clerk/expo';

const publishableKey = 'pk_test_your-key';

export { ClerkProvider, publishableKey };

// services/authService.ts
import { useAuth, useUser } from '@clerk/expo';
import { supabase } from '../config/supabase';

export const useAuthService = () => {
  const { signIn, signOut, signUp } = useAuth();
  const { user } = useUser();

  const signUpWithEmail = async (email: string, password: string) => {
    try {
      const result = await signUp.create({
        emailAddress: email,
        password,
      });
      return { user: result, error: null };
    } catch (error) {
      return { user: null, error: error.message };
    }
  };

  const signInWithEmail = async (email: string, password: string) => {
    try {
      const result = await signIn.create({
        identifier: email,
        password,
      });
      return { user: result, error: null };
    } catch (error) {
      return { user: null, error: error.message };
    }
  };

  const logout = async () => {
    try {
      await signOut();
      return { error: null };
    } catch (error) {
      return { error: error.message };
    }
  };

  return { signUpWithEmail, signInWithEmail, logout, user };
};

// services/databaseService.ts
import { supabase } from '../config/supabase';

export const databaseService = {
  async getProducts() {
    const { data, error } = await supabase
      .from('products')
      .select('*');
    return { data, error };
  },

  async createOrder(orderData) {
    const { data, error } = await supabase
      .from('orders')
      .insert([orderData]);
    return { data, error };
  }
};`
    }
  ]
};

export const projects = {
  runSport: {
    id: "project",
    title: "🏃‍♂️ Projet RunSport",
    description: "RunSport est une application mobile de vente de chaussures de sport adaptées, que vous développerez étape par étape. Cette app moderne inclut toutes les fonctionnalités essentielles d'une application E-commerce.",
    image: "/imagesFormations/RunSport.png",
    alt: "Écrans de l'application RunSport",
    technologies: [
      "React Native",
      "Expo SDK 53",
      "Expo Router",
      "TailwindCSS",
      "TypeScript",
      "AsyncStorage",
      "Git & GitHub",
      "REST APIs",
      "Clerk",
      "Supabase"
    ],
    isPremium: false,
    formation: "pro"
  },
  socialConnect: {
    id: "social",
    title: "📱 Projet SocialConnect",
    description: "SocialConnect est une application de réseau social moderne et complète que vous développerez de A à Z. Cette app inclut toutes les fonctionnalités essentielles d'un réseau social : feed, stories, messages privés, système de followers et interactions en temps réel.",
    image: "/imagesFormations/socialMedia.png",
    alt: "Écrans de l'application SocialConnect",
    technologies: [
      "React Native",
      "Expo Router",
      "TypeScript",
      "TailwindCSS",
      "Firebase Realtime Database",
      "Expo Image Picker",
      "Expo Camera",
      "Socket.io",
      "Zod",
      "React Native Reanimated"
    ],
    features: [
      "Feed avec posts et interactions",
      "Stories temporaires",
      "Messages privés en temps réel",
      "Système de followers/following",
      "Upload de photos et vidéos",
      "Notifications push",
      "Profils utilisateurs personnalisés",
      "Search et découverte"
    ],
    isPremium: true,
    formation: "pro"
  },
  skyBooker: {
    id: "travel",
    title: "✈️ Projet SkyBooker",
    description: "SkyBooker est une application complète de réservation de billets d'avion que vous développerez étape par étape. Cette app moderne inclut la recherche de vols, comparaison de prix, paiement sécurisé, gestion des réservations et notifications de voyage.",
    image: "/imagesFormations/skyReservation.png",
    alt: "Écrans de l'application SkyBooker",
    technologies: [
      "React Native",
      "Expo Router",
      "TypeScript",
      "TailwindCSS",
      "Amadeus Travel API",
      "Stripe Payments",
      "Expo SecureStore",
      "React Hook Form",
      "Zod",
      "Expo Notifications"
    ],
    features: [
      "Recherche de vols multi-critères",
      "Comparaison de prix et compagnies",
      "Paiement sécurisé avec Stripe",
      "Gestion des réservations",
      "Check-in mobile",
      "Notifications de vol",
      "Historique des voyages",
      "Cartes d'embarquement digitales"
    ],
    isPremium: true,
    formation: "mastering"
  },
  sendMoney: {
    id: "sendmoney",
    title: "💸 Projet SendMoney",
    description: "SendMoney est une application fintech complète de transfert d'argent et de paiements mobiles que vous développerez de A à Z. Cette app moderne inclut portefeuille digital, transferts sécurisés, paiements marchands et gestion financière personnelle avec sécurité bancaire.",
    image: "/imagesFormations/sendMoney.png",
    alt: "Écrans de l'application SendMoney",
    technologies: [
      "React Native",
      "Expo Router",
      "TypeScript",
      "TailwindCSS",
      "Stripe Connect",
      "Firebase Auth",
      "Expo LocalAuthentication",
      "Plaid API",
      "JWT + RSA Encryption",
      "React Hook Form"
    ],
    features: [
      "Portefeuille digital sécurisé",
      "Transferts d'argent instantanés",
      "Paiements par QR Code",
      "Connexion comptes bancaires",
      "Authentification biométrique",
      "Historique des transactions",
      "Cartes virtuelles",
      "Notifications push sécurisées",
      "Gestion des budgets",
      "Split de factures"
    ],
    securityFeatures: [
      "Chiffrement AES-256",
      "Authentification à deux facteurs",
      "Détection de fraude",
      "Conformité PCI DSS",
      "Tokenisation des données",
      "Audit trail complet"
    ],
    isPremium: true,
    formation: "mastering",
    isSmallImage: true
  }
};

export const tabs = [
  { id: "overview", label: "Vue d'ensemble" },
  { id: "curriculum", label: "Programme" },
  { id: "project", label: "Projet RunSport" },
  { id: "social", label: "Projet Social Media" },
  { id: "travel", label: "Projet Sky Reservation" },
  { id: "sendmoney", label: "Projet SendMoney" }
];

// Fonction utilitaire pour déterminer l'accès aux projets selon la formation
export const getProjectAccess = (projectId, userFormation = null) => {
  const project = projects[projectId];
  if (!project) return false;
  
  // Si l'utilisateur n'a pas de formation, seul RunSport est accessible
  if (!userFormation) {
    return project.id === "project";
  }
  
  // Si l'utilisateur a la formation Pro
  if (userFormation === "pro") {
    return formations.pro.projects.includes(projectId);
  }
  
  // Si l'utilisateur a la formation Mastering
  if (userFormation === "mastering") {
    return formations.mastering.projects.includes(projectId);
  }
  
  return false;
};

// Fonction pour obtenir la formation recommandée pour un projet
export const getRecommendedFormation = (projectId) => {
  const project = projects[projectId];
  if (!project) return null;
  
  if (project.formation === "pro") {
    return formations.pro;
  }
  
  if (project.formation === "mastering") {
    return formations.mastering;
  }
  
  return null;
}; 