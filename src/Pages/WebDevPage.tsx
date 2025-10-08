import { useState } from "react";
import styled from "styled-components";
import { FaReact, FaNodeJs, FaCheck } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiSupabase } from "react-icons/si";
import { Link } from "react-router-dom";

export default function WebDevPage() {
  const [selectedProject, setSelectedProject] = useState<'ecommerce' | 'ai' | null>(null);
  const [currentStep, setCurrentStep] = useState(1);

  const ecommerceSteps = [
    { id: 1, title: "React - Interface", icon: <FaReact color="#61DAFB" /> },
    { id: 2, title: "TypeScript - Typage", icon: <SiTypescript color="#3178C6" /> },
    { id: 3, title: "Tailwind - Styling", icon: <SiTailwindcss color="#06B6D4" /> },
    { id: 4, title: "Supabase - BDD", icon: <SiSupabase color="#3ECF8E" /> },
    { id: 5, title: "Node.js - API", icon: <FaNodeJs color="#339933" /> },
  ];

  const aiSteps = [
    { id: 1, title: "React - Chat UI", icon: <FaReact color="#61DAFB" /> },
    { id: 2, title: "TypeScript - Types", icon: <SiTypescript color="#3178C6" /> },
    { id: 3, title: "Tailwind - Design", icon: <SiTailwindcss color="#06B6D4" /> },
    { id: 4, title: "OpenAI API", icon: <FaNodeJs color="#339933" /> },
    { id: 5, title: "Supabase - Historique", icon: <SiSupabase color="#3ECF8E" /> },
  ];

  const steps = selectedProject === 'ai' ? aiSteps : ecommerceSteps;

  return (
    <PageWrapper>
      <Header>
        <HeaderContent>
          <BackButton to="/formations">← Retour</BackButton>
          <HeaderTitle><FaReact /> Développement Web Moderne</HeaderTitle>
          <HeaderSubtitle>
            {!selectedProject
              ? 'Choisissez votre projet : E-commerce ou Assistant IA'
              : selectedProject === 'ecommerce'
                ? 'Construisez une application e-commerce complète'
                : 'Créez votre propre assistant IA'
            }
          </HeaderSubtitle>
        </HeaderContent>
      </Header>

      {/* Sélection du projet */}
      {!selectedProject && (
        <Section>
          <Container>
            <SectionTitle>🎯 Choisissez votre Projet</SectionTitle>
            <Description>
              Sélectionnez le projet que vous souhaitez construire. Les deux projets utilisent les mêmes technologies
              mais avec des cas d'usage différents.
            </Description>

            <ProjectsGrid>
              <ProjectCard onClick={() => { setSelectedProject('ecommerce'); setCurrentStep(1); }}>
                <ProjectIcon>🛒</ProjectIcon>
                <ProjectCardTitle>Shop App - E-commerce</ProjectCardTitle>
                <ProjectCardDesc>
                  Application e-commerce complète avec panier, paiements et admin
                </ProjectCardDesc>
                <ProjectFeatures>
                  <ProjectFeature>• Liste de produits</ProjectFeature>
                  <ProjectFeature>• Panier d'achat</ProjectFeature>
                  <ProjectFeature>• Paiements Stripe</ProjectFeature>
                  <ProjectFeature>• Dashboard admin</ProjectFeature>
                </ProjectFeatures>
                <SelectButton>Choisir ce projet →</SelectButton>
              </ProjectCard>

              <ProjectCard onClick={() => { setSelectedProject('ai'); setCurrentStep(1); }}>
                <ProjectIcon>🤖</ProjectIcon>
                <ProjectCardTitle>AI Assistant - ChatGPT Clone</ProjectCardTitle>
                <ProjectCardDesc>
                  Assistant IA avec chat en temps réel et historique
                </ProjectCardDesc>
                <ProjectFeatures>
                  <ProjectFeature>• Chat avec IA</ProjectFeature>
                  <ProjectFeature>• Historique conversations</ProjectFeature>
                  <ProjectFeature>• Streaming responses</ProjectFeature>
                  <ProjectFeature>• Export conversations</ProjectFeature>
                </ProjectFeatures>
                <SelectButton>Choisir ce projet →</SelectButton>
              </ProjectCard>
            </ProjectsGrid>
          </Container>
        </Section>
      )}

      {/* Intro du projet sélectionné */}
      {selectedProject && (
        <Section>
          <Container>
            <BackToProjects onClick={() => { setSelectedProject(null); setCurrentStep(1); }}>
              ← Changer de projet
            </BackToProjects>
            <SectionTitle>
              {selectedProject === 'ecommerce' ? '🛒 Projet : Shop App' : '🤖 Projet : AI Assistant'}
            </SectionTitle>
            <Description>
              {selectedProject === 'ecommerce'
                ? 'Application e-commerce complète en 5 étapes progressives'
                : 'Clone de ChatGPT avec OpenAI API en 5 étapes progressives'
              }
            </Description>

            {selectedProject === 'ecommerce' && (
              <FeaturesGrid>
                <Feature>✅ Liste de produits</Feature>
                <Feature>✅ Panier d'achat</Feature>
                <Feature>✅ Authentification</Feature>
                <Feature>✅ Paiements</Feature>
                <Feature>✅ Admin dashboard</Feature>
                <Feature>✅ API REST</Feature>
              </FeaturesGrid>
            )}

            {selectedProject === 'ai' && (
              <FeaturesGrid>
                <Feature>✅ Interface de chat</Feature>
                <Feature>✅ Intégration OpenAI</Feature>
                <Feature>✅ Streaming temps réel</Feature>
                <Feature>✅ Historique des conversations</Feature>
                <Feature>✅ Export en Markdown</Feature>
                <Feature>✅ Mode vocal (optionnel)</Feature>
              </FeaturesGrid>
            )}
          </Container>
        </Section>
      )}

      {/* Timeline des étapes */}
      <Section $bgColor="#f7fafc">
        <Container>
          <SectionTitle>📚 Parcours d'Apprentissage</SectionTitle>
          <StepsTimeline>
            {steps.map((step) => (
              <TimelineStep
                key={step.id}
                $active={currentStep === step.id}
                onClick={() => setCurrentStep(step.id)}
              >
                <StepIcon $completed={currentStep > step.id}>
                  {currentStep > step.id ? <FaCheck /> : step.icon}
                </StepIcon>
                <StepText>{step.title}</StepText>
              </TimelineStep>
            ))}
          </StepsTimeline>
        </Container>
      </Section>

      {/* Étape 1 : React - E-commerce */}
      {currentStep === 1 && selectedProject === 'ecommerce' && (
        <Section>
          <Container>
            <StepTitle>Étape 1 : React - Créer l'Interface</StepTitle>
            <StepGoal>🎯 Objectif : Afficher une liste de produits avec un panier fonctionnel</StepGoal>

            <TaskList>
              <Task>📝 Tâche 1 : Créer le composant ProductList</Task>
              <Task>📝 Tâche 2 : Gérer l'état avec useState</Task>
              <Task>📝 Tâche 3 : Ajouter au panier</Task>
            </TaskList>

            <CodeBlock>{`// src/App.tsx
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Phone', price: 599 },
    { id: 3, name: 'Headphones', price: 199 }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>Shop App</h1>

      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price}€</p>
          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}

      <h2>Cart ({cart.length} items)</h2>
      {cart.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </div>
  );
}

export default App;`}</CodeBlock>

            <NextButton onClick={() => setCurrentStep(2)}>
              Étape suivante : TypeScript →
            </NextButton>
          </Container>
        </Section>
      )}

      {/* Étape 1 : React - AI Assistant */}
      {currentStep === 1 && selectedProject === 'ai' && (
        <Section>
          <Container>
            <StepTitle>Étape 1 : React - Interface de Chat</StepTitle>
            <StepGoal>🎯 Objectif : Créer une interface de chat fonctionnelle</StepGoal>

            <TaskList>
              <Task>📝 Tâche 1 : Créer le composant Chat</Task>
              <Task>📝 Tâche 2 : Gérer les messages avec useState</Task>
              <Task>📝 Tâche 3 : Afficher la conversation</Task>
            </TaskList>

            <CodeBlock>{`// src/App.tsx
import { useState } from 'react';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;

    // Ajouter le message de l'utilisateur
    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: input
    };

    setMessages([...messages, userMessage]);

    // Simuler une réponse (sera remplacé par l'API)
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: 'Bonjour! Je suis votre assistant IA.'
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInput('');
  };

  return (
    <div>
      <h1>AI Assistant</h1>

      <div style={{ height: '400px', overflow: 'auto', border: '1px solid #ccc' }}>
        {messages.map(msg => (
          <div key={msg.id} style={{ padding: '10px' }}>
            <strong>{msg.role}:</strong> {msg.content}
          </div>
        ))}
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        placeholder="Posez une question..."
      />
      <button onClick={sendMessage}>Envoyer</button>
    </div>
  );
}

export default App;`}</CodeBlock>

            <NextButton onClick={() => setCurrentStep(2)}>
              Étape suivante : TypeScript →
            </NextButton>
          </Container>
        </Section>
      )}

      {/* Étape 2 : TypeScript - E-commerce */}
      {currentStep === 2 && selectedProject === 'ecommerce' && (
        <Section>
          <Container>
            <StepTitle>Étape 2 : TypeScript - Ajouter le Typage</StepTitle>
            <StepGoal>🎯 Objectif : Sécuriser le code avec des types</StepGoal>

            <TaskList>
              <Task>📝 Tâche 1 : Créer l'interface Product</Task>
              <Task>📝 Tâche 2 : Typer les props et l'état</Task>
              <Task>📝 Tâche 3 : Utiliser les génériques</Task>
            </TaskList>

            <CodeBlock>{`// src/types.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  image?: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

// src/App.tsx
import { useState } from 'react';
import { Product, CartItem } from './types';

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const products: Product[] = [
    { id: 1, name: 'Laptop', price: 999, category: 'Electronics' },
    { id: 2, name: 'Phone', price: 599, category: 'Electronics' }
  ];

  const addToCart = (product: Product) => {
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const total = cart.reduce((sum, item) =>
    sum + (item.price * item.quantity), 0
  );

  return (
    <div>
      <h1>Shop App - TypeScript</h1>
      <p>Total: {total}€</p>
      {/* Rest of the code... */}
    </div>
  );
}`}</CodeBlock>

            <ButtonGroup>
              <BackButton2 onClick={() => setCurrentStep(1)}>← React</BackButton2>
              <NextButton onClick={() => setCurrentStep(3)}>Tailwind →</NextButton>
            </ButtonGroup>
          </Container>
        </Section>
      )}

      {/* Étape 2 : TypeScript - AI Assistant */}
      {currentStep === 2 && selectedProject === 'ai' && (
        <Section>
          <Container>
            <StepTitle>Étape 2 : TypeScript - Types pour l'IA</StepTitle>
            <StepGoal>🎯 Objectif : Créer des types pour les messages et conversations</StepGoal>

            <TaskList>
              <Task>📝 Tâche 1 : Définir l'interface Message</Task>
              <Task>📝 Tâche 2 : Créer le type Conversation</Task>
              <Task>📝 Tâche 3 : Typer les réponses de l'API</Task>
            </TaskList>

            <CodeBlock>{`// src/types.ts
export interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}

export interface Conversation {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ChatResponse {
  message: Message;
  conversationId: string;
}

// src/App.tsx
import { useState } from 'react';
import { Message, Conversation } from './types';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simuler l'API (sera remplacé par OpenAI)
    setTimeout(() => {
      const botMessage: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: 'Je suis prêt à vous aider!',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div>
      <h1>AI Assistant - TypeScript</h1>
      {messages.map((msg: Message) => (
        <div key={msg.id}>
          <strong>{msg.role}:</strong> {msg.content}
        </div>
      ))}
    </div>
  );
}

export default App;`}</CodeBlock>

            <ButtonGroup>
              <BackButton2 onClick={() => setCurrentStep(1)}>← React</BackButton2>
              <NextButton onClick={() => setCurrentStep(3)}>Tailwind →</NextButton>
            </ButtonGroup>
          </Container>
        </Section>
      )}

      {/* Étape 3 : Tailwind - E-commerce */}
      {currentStep === 3 && selectedProject === 'ecommerce' && (
        <Section>
          <Container>
            <StepTitle>Étape 3 : Tailwind - Styliser l'Application</StepTitle>
            <StepGoal>🎯 Objectif : Créer une UI professionnelle et responsive</StepGoal>

            <TaskList>
              <Task>📝 Tâche 1 : Installer Tailwind CSS</Task>
              <Task>📝 Tâche 2 : Créer une grille de produits</Task>
              <Task>📝 Tâche 3 : Ajouter animations et hover effects</Task>
            </TaskList>

            <CodeBlock>{`// Installation
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

// src/App.tsx avec Tailwind
function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Shop App
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden
                         transform transition hover:scale-105 hover:shadow-xl"
            >
              <div className="h-48 bg-gray-200" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-2xl font-bold text-green-600 mt-2">
                  {product.price}€
                </p>
                <button className="w-full mt-4 bg-blue-500 text-white py-2
                                   rounded-lg hover:bg-blue-600 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}`}</CodeBlock>

            <ButtonGroup>
              <BackButton2 onClick={() => setCurrentStep(2)}>← TypeScript</BackButton2>
              <NextButton onClick={() => setCurrentStep(4)}>Supabase →</NextButton>
            </ButtonGroup>
          </Container>
        </Section>
      )}

      {/* Étape 3 : Tailwind - AI Assistant */}
      {currentStep === 3 && selectedProject === 'ai' && (
        <Section>
          <Container>
            <StepTitle>Étape 3 : Tailwind - Interface Chat Moderne</StepTitle>
            <StepGoal>🎯 Objectif : Créer une interface type ChatGPT</StepGoal>

            <TaskList>
              <Task>📝 Tâche 1 : Installer Tailwind CSS</Task>
              <Task>📝 Tâche 2 : Design des bulles de chat</Task>
              <Task>📝 Tâche 3 : Animations et dark mode</Task>
            </TaskList>

            <CodeBlock>{`// Installation
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

// src/App.tsx avec Tailwind
function App() {
  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <div className="w-64 bg-gray-950 border-r border-gray-700 p-4">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white
                          py-3 px-4 rounded-lg font-semibold transition">
          + Nouvelle conversation
        </button>
        <div className="mt-6 space-y-2">
          <div className="p-3 hover:bg-gray-800 rounded-lg cursor-pointer
                         text-gray-300 truncate">
            Ma première conversation
          </div>
        </div>
      </div>

      {/* Chat principal */}
      <div className="flex-1 flex flex-col">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={\`flex \${msg.role === 'user' ? 'justify-end' : 'justify-start'}\`}
            >
              <div className={\`max-w-2xl px-4 py-3 rounded-2xl
                \${msg.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-100'
                }\`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-800 text-gray-100 px-4 py-3 rounded-2xl">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                       style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                       style={{ animationDelay: '0.4s' }} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="border-t border-gray-700 p-4">
          <div className="max-w-4xl mx-auto flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Posez votre question..."
              className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-lg
                        border border-gray-700 focus:border-blue-500
                        focus:outline-none"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3
                        rounded-lg font-semibold transition"
            >
              Envoyer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}`}</CodeBlock>

            <ButtonGroup>
              <BackButton2 onClick={() => setCurrentStep(2)}>← TypeScript</BackButton2>
              <NextButton onClick={() => setCurrentStep(4)}>OpenAI API →</NextButton>
            </ButtonGroup>
          </Container>
        </Section>
      )}

      {/* Étape 4 : Supabase - E-commerce */}
      {currentStep === 4 && selectedProject === 'ecommerce' && (
        <Section>
          <Container>
            <StepTitle>Étape 4 : Supabase - Base de Données et Auth</StepTitle>
            <StepGoal>🎯 Objectif : Connecter une vraie base de données</StepGoal>

            <TaskList>
              <Task>📝 Tâche 1 : Créer un projet Supabase</Task>
              <Task>📝 Tâche 2 : Ajouter l'authentification</Task>
              <Task>📝 Tâche 3 : Stocker les produits en BDD</Task>
            </TaskList>

            <CodeBlock>{`// Installation
npm install @supabase/supabase-js

// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'YOUR_SUPABASE_URL',
  'YOUR_SUPABASE_KEY'
);

// src/App.tsx
import { useEffect, useState } from 'react';
import { supabase } from './lib/supabase';

function App() {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Charger les produits
    supabase
      .from('products')
      .select('*')
      .then(({ data }) => setProducts(data));

    // Vérifier l'auth
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
  }, []);

  const signIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google'
    });
  };

  return (
    <div>
      {!user ? (
        <button onClick={signIn}>Sign In with Google</button>
      ) : (
        <div>Welcome {user.email}</div>
      )}
    </div>
  );
}`}</CodeBlock>

            <ButtonGroup>
              <BackButton2 onClick={() => setCurrentStep(3)}>← Tailwind</BackButton2>
              <NextButton onClick={() => setCurrentStep(5)}>Node.js →</NextButton>
            </ButtonGroup>
          </Container>
        </Section>
      )}

      {/* Étape 4 : OpenAI API - AI Assistant */}
      {currentStep === 4 && selectedProject === 'ai' && (
        <Section>
          <Container>
            <StepTitle>Étape 4 : OpenAI API - Intégration GPT</StepTitle>
            <StepGoal>🎯 Objectif : Connecter l'API OpenAI pour les réponses IA</StepGoal>

            <TaskList>
              <Task>📝 Tâche 1 : Créer une clé API OpenAI</Task>
              <Task>📝 Tâche 2 : Configurer le serveur Node.js</Task>
              <Task>📝 Tâche 3 : Implémenter le streaming</Task>
            </TaskList>

            <CodeBlock>{`// Installation
npm install openai

// server/index.js
import express from 'express';
import OpenAI from 'openai';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: messages,
      stream: true,
    });

    // Streaming response
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    for await (const chunk of completion) {
      const content = chunk.choices[0]?.delta?.content || '';
      if (content) {
        res.write(\`data: \${JSON.stringify({ content })}\n\n\`);
      }
    }

    res.write('data: [DONE]\n\n');
    res.end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => {
  console.log('API running on port 3001');
});

// Frontend - src/App.tsx
const sendMessage = async () => {
  if (!input.trim()) return;

  const userMessage = {
    id: crypto.randomUUID(),
    role: 'user',
    content: input,
    timestamp: new Date()
  };

  setMessages(prev => [...prev, userMessage]);
  setInput('');
  setIsLoading(true);

  const response = await fetch('http://localhost:3001/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      messages: [...messages, userMessage].map(m => ({
        role: m.role,
        content: m.content
      }))
    })
  });

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let assistantMessage = {
    id: crypto.randomUUID(),
    role: 'assistant',
    content: '',
    timestamp: new Date()
  };

  setMessages(prev => [...prev, assistantMessage]);

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    const chunk = decoder.decode(value);
    const lines = chunk.split('\n');

    for (const line of lines) {
      if (line.startsWith('data: ')) {
        const data = line.slice(6);
        if (data === '[DONE]') continue;

        try {
          const { content } = JSON.parse(data);
          assistantMessage.content += content;
          setMessages(prev =>
            prev.map(m =>
              m.id === assistantMessage.id
                ? { ...m, content: assistantMessage.content }
                : m
            )
          );
        } catch (e) {}
      }
    }
  }

  setIsLoading(false);
};`}</CodeBlock>

            <ButtonGroup>
              <BackButton2 onClick={() => setCurrentStep(3)}>← Tailwind</BackButton2>
              <NextButton onClick={() => setCurrentStep(5)}>Supabase →</NextButton>
            </ButtonGroup>
          </Container>
        </Section>
      )}

      {/* Étape 5 : Node.js - E-commerce */}
      {currentStep === 5 && selectedProject === 'ecommerce' && (
        <Section>
          <Container>
            <StepTitle>Étape 5 : Node.js - API Personnalisée</StepTitle>
            <StepGoal>🎯 Objectif : Créer une API pour les paiements</StepGoal>

            <TaskList>
              <Task>📝 Tâche 1 : Créer un serveur Express</Task>
              <Task>📝 Tâche 2 : Route pour les paiements Stripe</Task>
              <Task>📝 Tâche 3 : Webhooks pour les confirmations</Task>
            </TaskList>

            <CodeBlock>{`// server/index.js
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET);
const app = express();

app.use(express.json());

// Route de paiement
app.post('/api/checkout', async (req, res) => {
  const { amount, items } = req.body;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: items.map(item => ({
      price_data: {
        currency: 'eur',
        product_data: { name: item.name },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    })),
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
  });

  res.json({ url: session.url });
});

app.listen(3001, () => {
  console.log('API running on port 3001');
});

// Frontend - src/App.tsx
const checkout = async () => {
  const response = await fetch('http://localhost:3001/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      amount: total,
      items: cart
    })
  });

  const { url } = await response.json();
  window.location.href = url;
};`}</CodeBlock>

            <SuccessBox>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                🎉 Félicitations!
              </h3>
              <p>
                Vous avez construit une application e-commerce complète avec React, TypeScript,
                Tailwind, Supabase et Node.js!
              </p>
            </SuccessBox>

            <BackButton2 onClick={() => setCurrentStep(4)}>← Supabase</BackButton2>
          </Container>
        </Section>
      )}

      {/* Étape 5 : Supabase - AI Assistant */}
      {currentStep === 5 && selectedProject === 'ai' && (
        <Section>
          <Container>
            <StepTitle>Étape 5 : Supabase - Historique des Conversations</StepTitle>
            <StepGoal>🎯 Objectif : Sauvegarder l'historique avec Supabase</StepGoal>

            <TaskList>
              <Task>📝 Tâche 1 : Créer les tables dans Supabase</Task>
              <Task>📝 Tâche 2 : Sauvegarder les conversations</Task>
              <Task>📝 Tâche 3 : Charger l'historique</Task>
            </TaskList>

            <CodeBlock>{`// Installation
npm install @supabase/supabase-js

// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'YOUR_SUPABASE_URL',
  'YOUR_SUPABASE_KEY'
);

// Schéma SQL dans Supabase
/*
CREATE TABLE conversations (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  title TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  conversation_id UUID REFERENCES conversations(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant', 'system')),
  content TEXT NOT NULL,
  timestamp TIMESTAMP DEFAULT NOW()
);
*/

// src/App.tsx
import { useEffect, useState } from 'react';
import { supabase } from './lib/supabase';
import { Message, Conversation } from './types';

function App() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentConversation, setCurrentConversation] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Auth
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      if (data.user) loadConversations(data.user.id);
    });
  }, []);

  const loadConversations = async (userId: string) => {
    const { data } = await supabase
      .from('conversations')
      .select('*')
      .eq('user_id', userId)
      .order('updated_at', { ascending: false });

    setConversations(data || []);
  };

  const createNewConversation = async () => {
    const { data } = await supabase
      .from('conversations')
      .insert({
        user_id: user.id,
        title: 'Nouvelle conversation'
      })
      .select()
      .single();

    setCurrentConversation(data.id);
    setMessages([]);
  };

  const saveMessage = async (message: Message) => {
    await supabase.from('messages').insert({
      conversation_id: currentConversation,
      role: message.role,
      content: message.content
    });

    // Mettre à jour updated_at de la conversation
    await supabase
      .from('conversations')
      .update({ updated_at: new Date().toISOString() })
      .eq('id', currentConversation);
  };

  const loadMessages = async (conversationId: string) => {
    const { data } = await supabase
      .from('messages')
      .select('*')
      .eq('conversation_id', conversationId)
      .order('timestamp', { ascending: true });

    setMessages(data || []);
  };

  const sendMessage = async () => {
    if (!input.trim() || !currentConversation) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    // Sauvegarder dans Supabase
    await saveMessage(userMessage);
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Appeler l'API OpenAI (code de l'étape 4)
    // ...

    // Sauvegarder la réponse
    const assistantMessage: Message = {
      id: crypto.randomUUID(),
      role: 'assistant',
      content: 'Réponse de l\'IA',
      timestamp: new Date()
    };

    await saveMessage(assistantMessage);
    setMessages(prev => [...prev, assistantMessage]);
  };

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar avec historique */}
      <div className="w-64 bg-gray-950 p-4">
        <button onClick={createNewConversation}>
          + Nouvelle conversation
        </button>
        {conversations.map(conv => (
          <div
            key={conv.id}
            onClick={() => {
              setCurrentConversation(conv.id);
              loadMessages(conv.id);
            }}
          >
            {conv.title}
          </div>
        ))}
      </div>

      {/* Chat */}
      <div className="flex-1">
        {/* Messages et input */}
      </div>
    </div>
  );
}

export default App;`}</CodeBlock>

            <SuccessBox>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                🎉 Félicitations!
              </h3>
              <p>
                Vous avez construit un assistant IA complet avec React, TypeScript,
                Tailwind, OpenAI API et Supabase!
              </p>
            </SuccessBox>

            <BackButton2 onClick={() => setCurrentStep(4)}>← OpenAI API</BackButton2>
          </Container>
        </Section>
      )}

      {/* Ressources */}
      <Section $bgColor="#f7fafc">
        <Container>
          <SectionTitle>📚 Ressources</SectionTitle>
          <ResourcesList>
            <Resource href="https://react.dev" target="_blank">React Docs</Resource>
            <Resource href="https://www.typescriptlang.org/docs/" target="_blank">TypeScript Docs</Resource>
            <Resource href="https://tailwindcss.com/docs" target="_blank">Tailwind Docs</Resource>
            <Resource href="https://supabase.com/docs" target="_blank">Supabase Docs</Resource>
          </ResourcesList>
        </Container>
      </Section>
    </PageWrapper>
  );
}

// Styled Components
const PageWrapper = styled.div`
  background: white;
  min-height: 100vh;
`;

const Header = styled.header`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem 2rem;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const BackButton = styled(Link)`
  color: white;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 1rem;
  opacity: 0.9;
  &:hover { opacity: 1; }
`;

const HeaderTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const HeaderSubtitle = styled.p`
  font-size: 1.25rem;
  opacity: 0.95;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    border-color: #667eea;
  }
`;

const ProjectIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const ProjectCardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2d3748;
  margin-bottom: 1rem;
  text-align: center;
`;

const ProjectCardDesc = styled.p`
  color: #4a5568;
  margin-bottom: 1.5rem;
  text-align: center;
  line-height: 1.6;
`;

const ProjectFeatures = styled.div`
  margin-bottom: 1.5rem;
`;

const ProjectFeature = styled.div`
  color: #2d3748;
  padding: 0.5rem 0;
  font-size: 0.95rem;
`;

const SelectButton = styled.div`
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
  transition: all 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

const BackToProjects = styled.button`
  background: #e2e8f0;
  color: #2d3748;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 1.5rem;
  transition: all 0.3s;

  &:hover {
    background: #cbd5e0;
  }
`;

const Section = styled.section<{ $bgColor?: string }>`
  padding: 4rem 2rem;
  background-color: ${props => props.$bgColor || 'white'};
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #2d3748;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #4a5568;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const Feature = styled.div`
  background: #f7fafc;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 500;
  color: #2d3748;
`;

const StepsTimeline = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TimelineStep = styled.div<{ $active: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 1rem;
  border-radius: 12px;
  transition: all 0.3s;
  background: ${props => props.$active ? 'linear-gradient(135deg, #667eea, #764ba2)' : '#f7fafc'};
  color: ${props => props.$active ? 'white' : '#2d3748'};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const StepIcon = styled.div<{ $completed: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  background: ${props => props.$completed ? '#48bb78' : 'rgba(255, 255, 255, 0.2)'};
  color: white;
`;

const StepText = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
`;

const StepTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: bold;
  color: #2d3748;
  margin-bottom: 1rem;
`;

const StepGoal = styled.div`
  background: #ebf8ff;
  border-left: 4px solid #3182ce;
  padding: 1rem;
  margin-bottom: 2rem;
  font-weight: 500;
  color: #2c5282;
`;

const TaskList = styled.div`
  background: #f7fafc;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const Task = styled.div`
  padding: 0.75rem 0;
  border-bottom: 1px solid #e2e8f0;
  font-weight: 500;
  color: #2d3748;

  &:last-child {
    border-bottom: none;
  }
`;

const CodeBlock = styled.pre`
  background: #1a202c;
  color: #e2e8f0;
  padding: 1.5rem;
  border-radius: 8px;
  overflow-x: auto;
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 2rem 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const NextButton = styled.button`
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const BackButton2 = styled.button`
  background: #e2e8f0;
  color: #2d3748;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-2px);
    background: #cbd5e0;
  }
`;

const SuccessBox = styled.div`
  background: linear-gradient(135deg, #48bb78, #38a169);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  margin: 2rem 0;
  text-align: center;
`;

const ResourcesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const Resource = styled.a`
  background: white;
  padding: 1rem;
  border-radius: 8px;
  text-decoration: none;
  color: #667eea;
  font-weight: 600;
  text-align: center;
  transition: all 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;
