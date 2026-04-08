'use client'

import { useState } from "react";
import { FaReact, FaNodeJs, FaCheck } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiSupabase } from "react-icons/si";
import Link from "next/link";

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
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header
        className="text-white py-12 px-8"
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
      >
        <div className="max-w-[1200px] mx-auto">
          <Link href="/formations" className="text-white no-underline inline-block mb-4 opacity-90 hover:opacity-100">
            {"\u2190"} Retour
          </Link>
          <h1 className="text-[2.5rem] font-bold mb-4 flex items-center gap-4">
            <FaReact /> Developpement Web Moderne
          </h1>
          <p className="text-xl opacity-95">
            {!selectedProject
              ? 'Choisissez votre projet : E-commerce ou Assistant IA'
              : selectedProject === 'ecommerce'
                ? 'Construisez une application e-commerce complete'
                : 'Creez votre propre assistant IA'
            }
          </p>
        </div>
      </header>

      {/* Selection du projet */}
      {!selectedProject && (
        <section className="py-16 px-8 bg-white">
          <div className="max-w-[1000px] mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-[#2d3748]">{"\u{1F3AF}"} Choisissez votre Projet</h2>
            <p className="text-lg text-[#4a5568] mb-8 leading-relaxed">
              Selectionnez le projet que vous souhaitez construire. Les deux projets utilisent les memes technologies
              mais avec des cas d&apos;usage differents.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8 mt-8">
              <div
                onClick={() => { setSelectedProject('ecommerce'); setCurrentStep(1); }}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] cursor-pointer transition-all duration-300 ease-in-out border-2 border-transparent hover:-translate-y-[5px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:border-[#667eea]"
              >
                <div className="text-5xl mb-4 text-center">{"\u{1F6D2}"}</div>
                <h3 className="text-2xl font-bold text-[#2d3748] mb-4 text-center">Shop App - E-commerce</h3>
                <p className="text-[#4a5568] mb-6 text-center leading-relaxed">
                  Application e-commerce complete avec panier, paiements et admin
                </p>
                <div className="mb-6">
                  <div className="text-[#2d3748] py-2 text-[0.95rem]">{"\u2022"} Liste de produits</div>
                  <div className="text-[#2d3748] py-2 text-[0.95rem]">{"\u2022"} Panier d&apos;achat</div>
                  <div className="text-[#2d3748] py-2 text-[0.95rem]">{"\u2022"} Paiements Stripe</div>
                  <div className="text-[#2d3748] py-2 text-[0.95rem]">{"\u2022"} Dashboard admin</div>
                </div>
                <div
                  className="text-white p-4 rounded-lg text-center font-semibold transition-all duration-300 hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}
                >
                  Choisir ce projet {"\u2192"}
                </div>
              </div>

              <div
                onClick={() => { setSelectedProject('ai'); setCurrentStep(1); }}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] cursor-pointer transition-all duration-300 ease-in-out border-2 border-transparent hover:-translate-y-[5px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:border-[#667eea]"
              >
                <div className="text-5xl mb-4 text-center">{"\u{1F916}"}</div>
                <h3 className="text-2xl font-bold text-[#2d3748] mb-4 text-center">AI Assistant - ChatGPT Clone</h3>
                <p className="text-[#4a5568] mb-6 text-center leading-relaxed">
                  Assistant IA avec chat en temps reel et historique
                </p>
                <div className="mb-6">
                  <div className="text-[#2d3748] py-2 text-[0.95rem]">{"\u2022"} Chat avec IA</div>
                  <div className="text-[#2d3748] py-2 text-[0.95rem]">{"\u2022"} Historique conversations</div>
                  <div className="text-[#2d3748] py-2 text-[0.95rem]">{"\u2022"} Streaming responses</div>
                  <div className="text-[#2d3748] py-2 text-[0.95rem]">{"\u2022"} Export conversations</div>
                </div>
                <div
                  className="text-white p-4 rounded-lg text-center font-semibold transition-all duration-300 hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}
                >
                  Choisir ce projet {"\u2192"}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Intro du projet selectionne */}
      {selectedProject && (
        <section className="py-16 px-8 bg-white">
          <div className="max-w-[1000px] mx-auto">
            <button
              onClick={() => { setSelectedProject(null); setCurrentStep(1); }}
              className="bg-[#e2e8f0] text-[#2d3748] border-none py-3 px-6 rounded-lg font-semibold cursor-pointer mb-6 transition-all duration-300 hover:bg-[#cbd5e0]"
            >
              {"\u2190"} Changer de projet
            </button>
            <h2 className="text-3xl font-bold mb-8 text-[#2d3748]">
              {selectedProject === 'ecommerce' ? '\u{1F6D2} Projet : Shop App' : '\u{1F916} Projet : AI Assistant'}
            </h2>
            <p className="text-lg text-[#4a5568] mb-8 leading-relaxed">
              {selectedProject === 'ecommerce'
                ? 'Application e-commerce complete en 5 etapes progressives'
                : 'Clone de ChatGPT avec OpenAI API en 5 etapes progressives'
              }
            </p>

            {selectedProject === 'ecommerce' && (
              <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
                <div className="bg-[#f7fafc] p-4 rounded-lg font-medium text-[#2d3748]">{"\u2705"} Liste de produits</div>
                <div className="bg-[#f7fafc] p-4 rounded-lg font-medium text-[#2d3748]">{"\u2705"} Panier d&apos;achat</div>
                <div className="bg-[#f7fafc] p-4 rounded-lg font-medium text-[#2d3748]">{"\u2705"} Authentification</div>
                <div className="bg-[#f7fafc] p-4 rounded-lg font-medium text-[#2d3748]">{"\u2705"} Paiements</div>
                <div className="bg-[#f7fafc] p-4 rounded-lg font-medium text-[#2d3748]">{"\u2705"} Admin dashboard</div>
                <div className="bg-[#f7fafc] p-4 rounded-lg font-medium text-[#2d3748]">{"\u2705"} API REST</div>
              </div>
            )}

            {selectedProject === 'ai' && (
              <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
                <div className="bg-[#f7fafc] p-4 rounded-lg font-medium text-[#2d3748]">{"\u2705"} Interface de chat</div>
                <div className="bg-[#f7fafc] p-4 rounded-lg font-medium text-[#2d3748]">{"\u2705"} Integration OpenAI</div>
                <div className="bg-[#f7fafc] p-4 rounded-lg font-medium text-[#2d3748]">{"\u2705"} Streaming temps reel</div>
                <div className="bg-[#f7fafc] p-4 rounded-lg font-medium text-[#2d3748]">{"\u2705"} Historique des conversations</div>
                <div className="bg-[#f7fafc] p-4 rounded-lg font-medium text-[#2d3748]">{"\u2705"} Export en Markdown</div>
                <div className="bg-[#f7fafc] p-4 rounded-lg font-medium text-[#2d3748]">{"\u2705"} Mode vocal (optionnel)</div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Timeline des etapes */}
      <section className="py-16 px-8 bg-[#f7fafc]">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#2d3748]">{"\u{1F4DA}"} Parcours d&apos;Apprentissage</h2>
          <div className="flex justify-between gap-4 flex-wrap max-md:flex-col">
            {steps.map((step) => (
              <div
                key={step.id}
                onClick={() => setCurrentStep(step.id)}
                className={`flex-1 flex flex-col items-center gap-2 cursor-pointer p-4 rounded-xl transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] ${
                  currentStep === step.id ? 'text-white' : 'bg-[#f7fafc] text-[#2d3748]'
                }`}
                style={currentStep === step.id ? { background: 'linear-gradient(135deg, #667eea, #764ba2)' } : {}}
              >
                <div
                  className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-2xl text-white"
                  style={{ background: currentStep > step.id ? '#48bb78' : 'rgba(255, 255, 255, 0.2)' }}
                >
                  {currentStep > step.id ? <FaCheck /> : step.icon}
                </div>
                <div className="text-sm font-semibold text-center">{step.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Etape 1 : React - E-commerce */}
      {currentStep === 1 && selectedProject === 'ecommerce' && (
        <section className="py-16 px-8 bg-white">
          <div className="max-w-[1000px] mx-auto">
            <h3 className="text-[1.75rem] font-bold text-[#2d3748] mb-4">Etape 1 : React - Creer l&apos;Interface</h3>
            <div className="bg-[#ebf8ff] border-l-4 border-[#3182ce] p-4 mb-8 font-medium text-[#2c5282]">
              {"\u{1F3AF}"} Objectif : Afficher une liste de produits avec un panier fonctionnel
            </div>

            <div className="bg-[#f7fafc] p-6 rounded-lg mb-8">
              <div className="py-3 border-b border-[#e2e8f0] font-medium text-[#2d3748] last:border-b-0">{"\u{1F4DD}"} Tache 1 : Creer le composant ProductList</div>
              <div className="py-3 border-b border-[#e2e8f0] font-medium text-[#2d3748] last:border-b-0">{"\u{1F4DD}"} Tache 2 : Gerer l&apos;etat avec useState</div>
              <div className="py-3 font-medium text-[#2d3748]">{"\u{1F4DD}"} Tache 3 : Ajouter au panier</div>
            </div>

            <pre className="bg-[#1a202c] text-[#e2e8f0] p-6 rounded-lg overflow-x-auto text-sm leading-relaxed my-8">{`// src/App.tsx
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
          <p>{product.price}\u20AC</p>
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

export default App;`}</pre>

            <button
              onClick={() => setCurrentStep(2)}
              className="border-none py-4 px-8 rounded-lg text-white font-semibold cursor-pointer transition-transform duration-300 hover:-translate-y-[2px]"
              style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}
            >
              Etape suivante : TypeScript {"\u2192"}
            </button>
          </div>
        </section>
      )}

      {/* Etape 1 : React - AI Assistant */}
      {currentStep === 1 && selectedProject === 'ai' && (
        <section className="py-16 px-8 bg-white">
          <div className="max-w-[1000px] mx-auto">
            <h3 className="text-[1.75rem] font-bold text-[#2d3748] mb-4">Etape 1 : React - Interface de Chat</h3>
            <div className="bg-[#ebf8ff] border-l-4 border-[#3182ce] p-4 mb-8 font-medium text-[#2c5282]">
              {"\u{1F3AF}"} Objectif : Creer une interface de chat fonctionnelle
            </div>

            <div className="bg-[#f7fafc] p-6 rounded-lg mb-8">
              <div className="py-3 border-b border-[#e2e8f0] font-medium text-[#2d3748] last:border-b-0">{"\u{1F4DD}"} Tache 1 : Creer le composant Chat</div>
              <div className="py-3 border-b border-[#e2e8f0] font-medium text-[#2d3748] last:border-b-0">{"\u{1F4DD}"} Tache 2 : Gerer les messages avec useState</div>
              <div className="py-3 font-medium text-[#2d3748]">{"\u{1F4DD}"} Tache 3 : Afficher la conversation</div>
            </div>

            <pre className="bg-[#1a202c] text-[#e2e8f0] p-6 rounded-lg overflow-x-auto text-sm leading-relaxed my-8">{`// src/App.tsx
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

    // Simuler une reponse (sera remplace par l'API)
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

export default App;`}</pre>

            <button
              onClick={() => setCurrentStep(2)}
              className="border-none py-4 px-8 rounded-lg text-white font-semibold cursor-pointer transition-transform duration-300 hover:-translate-y-[2px]"
              style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}
            >
              Etape suivante : TypeScript {"\u2192"}
            </button>
          </div>
        </section>
      )}

      {/* Etape 2 : TypeScript - E-commerce */}
      {currentStep === 2 && selectedProject === 'ecommerce' && (
        <section className="py-16 px-8 bg-white">
          <div className="max-w-[1000px] mx-auto">
            <h3 className="text-[1.75rem] font-bold text-[#2d3748] mb-4">Etape 2 : TypeScript - Ajouter le Typage</h3>
            <div className="bg-[#ebf8ff] border-l-4 border-[#3182ce] p-4 mb-8 font-medium text-[#2c5282]">
              {"\u{1F3AF}"} Objectif : Securiser le code avec des types
            </div>

            <div className="bg-[#f7fafc] p-6 rounded-lg mb-8">
              <div className="py-3 border-b border-[#e2e8f0] font-medium text-[#2d3748]">{"\u{1F4DD}"} Tache 1 : Creer l&apos;interface Product</div>
              <div className="py-3 border-b border-[#e2e8f0] font-medium text-[#2d3748]">{"\u{1F4DD}"} Tache 2 : Typer les props et l&apos;etat</div>
              <div className="py-3 font-medium text-[#2d3748]">{"\u{1F4DD}"} Tache 3 : Utiliser les generiques</div>
            </div>

            <pre className="bg-[#1a202c] text-[#e2e8f0] p-6 rounded-lg overflow-x-auto text-sm leading-relaxed my-8">{`// src/types.ts
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
      <p>Total: {total}\u20AC</p>
      {/* Rest of the code... */}
    </div>
  );
}`}</pre>

            <div className="flex gap-4 mt-8">
              <button onClick={() => setCurrentStep(1)} className="bg-[#e2e8f0] text-[#2d3748] py-4 px-8 border-none rounded-lg font-semibold cursor-pointer transition-transform duration-300 hover:-translate-y-[2px] hover:bg-[#cbd5e0]">{"\u2190"} React</button>
              <button onClick={() => setCurrentStep(3)} className="border-none py-4 px-8 rounded-lg text-white font-semibold cursor-pointer transition-transform duration-300 hover:-translate-y-[2px]" style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}>Tailwind {"\u2192"}</button>
            </div>
          </div>
        </section>
      )}

      {/* Etape 2 : TypeScript - AI Assistant */}
      {currentStep === 2 && selectedProject === 'ai' && (
        <section className="py-16 px-8 bg-white">
          <div className="max-w-[1000px] mx-auto">
            <h3 className="text-[1.75rem] font-bold text-[#2d3748] mb-4">Etape 2 : TypeScript - Types pour l&apos;IA</h3>
            <div className="bg-[#ebf8ff] border-l-4 border-[#3182ce] p-4 mb-8 font-medium text-[#2c5282]">
              {"\u{1F3AF}"} Objectif : Creer des types pour les messages et conversations
            </div>

            <div className="bg-[#f7fafc] p-6 rounded-lg mb-8">
              <div className="py-3 border-b border-[#e2e8f0] font-medium text-[#2d3748]">{"\u{1F4DD}"} Tache 1 : Definir l&apos;interface Message</div>
              <div className="py-3 border-b border-[#e2e8f0] font-medium text-[#2d3748]">{"\u{1F4DD}"} Tache 2 : Creer le type Conversation</div>
              <div className="py-3 font-medium text-[#2d3748]">{"\u{1F4DD}"} Tache 3 : Typer les reponses de l&apos;API</div>
            </div>

            <pre className="bg-[#1a202c] text-[#e2e8f0] p-6 rounded-lg overflow-x-auto text-sm leading-relaxed my-8">{`// src/types.ts
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

    // Simuler l'API (sera remplace par OpenAI)
    setTimeout(() => {
      const botMessage: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: 'Je suis pret a vous aider!',
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

export default App;`}</pre>

            <div className="flex gap-4 mt-8">
              <button onClick={() => setCurrentStep(1)} className="bg-[#e2e8f0] text-[#2d3748] py-4 px-8 border-none rounded-lg font-semibold cursor-pointer transition-transform duration-300 hover:-translate-y-[2px] hover:bg-[#cbd5e0]">{"\u2190"} React</button>
              <button onClick={() => setCurrentStep(3)} className="border-none py-4 px-8 rounded-lg text-white font-semibold cursor-pointer transition-transform duration-300 hover:-translate-y-[2px]" style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}>Tailwind {"\u2192"}</button>
            </div>
          </div>
        </section>
      )}

      {/* Etape 3 : Tailwind - E-commerce */}
      {currentStep === 3 && selectedProject === 'ecommerce' && (
        <section className="py-16 px-8 bg-white">
          <div className="max-w-[1000px] mx-auto">
            <h3 className="text-[1.75rem] font-bold text-[#2d3748] mb-4">Etape 3 : Tailwind - Styliser l&apos;Application</h3>
            <div className="bg-[#ebf8ff] border-l-4 border-[#3182ce] p-4 mb-8 font-medium text-[#2c5282]">
              {"\u{1F3AF}"} Objectif : Creer une UI professionnelle et responsive
            </div>

            <div className="bg-[#f7fafc] p-6 rounded-lg mb-8">
              <div className="py-3 border-b border-[#e2e8f0] font-medium text-[#2d3748]">{"\u{1F4DD}"} Tache 1 : Installer Tailwind CSS</div>
              <div className="py-3 border-b border-[#e2e8f0] font-medium text-[#2d3748]">{"\u{1F4DD}"} Tache 2 : Creer une grille de produits</div>
              <div className="py-3 font-medium text-[#2d3748]">{"\u{1F4DD}"} Tache 3 : Ajouter animations et hover effects</div>
            </div>

            <pre className="bg-[#1a202c] text-[#e2e8f0] p-6 rounded-lg overflow-x-auto text-sm leading-relaxed my-8">{`// Installation
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
                  {product.price}\u20AC
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
}`}</pre>

            <div className="flex gap-4 mt-8">
              <button onClick={() => setCurrentStep(2)} className="bg-[#e2e8f0] text-[#2d3748] py-4 px-8 border-none rounded-lg font-semibold cursor-pointer transition-transform duration-300 hover:-translate-y-[2px] hover:bg-[#cbd5e0]">{"\u2190"} TypeScript</button>
              <button onClick={() => setCurrentStep(4)} className="border-none py-4 px-8 rounded-lg text-white font-semibold cursor-pointer transition-transform duration-300 hover:-translate-y-[2px]" style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}>Supabase {"\u2192"}</button>
            </div>
          </div>
        </section>
      )}

      {/* Etape 3 : Tailwind - AI Assistant */}
      {currentStep === 3 && selectedProject === 'ai' && (
        <section className="py-16 px-8 bg-white">
          <div className="max-w-[1000px] mx-auto">
            <h3 className="text-[1.75rem] font-bold text-[#2d3748] mb-4">Etape 3 : Tailwind - Interface Chat Moderne</h3>
            <div className="bg-[#ebf8ff] border-l-4 border-[#3182ce] p-4 mb-8 font-medium text-[#2c5282]">
              {"\u{1F3AF}"} Objectif : Creer une interface type ChatGPT
            </div>

            <div className="bg-[#f7fafc] p-6 rounded-lg mb-8">
              <div className="py-3 border-b border-[#e2e8f0] font-medium text-[#2d3748]">{"\u{1F4DD}"} Tache 1 : Installer Tailwind CSS</div>
              <div className="py-3 border-b border-[#e2e8f0] font-medium text-[#2d3748]">{"\u{1F4DD}"} Tache 2 : Design des bulles de chat</div>
              <div className="py-3 font-medium text-[#2d3748]">{"\u{1F4DD}"} Tache 3 : Animations et dark mode</div>
            </div>

            <pre className="bg-[#1a202c] text-[#e2e8f0] p-6 rounded-lg overflow-x-auto text-sm leading-relaxed my-8">{`// Installation
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
            Ma premiere conversation
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
}`}</pre>

            <div className="flex gap-4 mt-8">
              <button onClick={() => setCurrentStep(2)} className="bg-[#e2e8f0] text-[#2d3748] py-4 px-8 border-none rounded-lg font-semibold cursor-pointer transition-transform duration-300 hover:-translate-y-[2px] hover:bg-[#cbd5e0]">{"\u2190"} TypeScript</button>
              <button onClick={() => setCurrentStep(4)} className="border-none py-4 px-8 rounded-lg text-white font-semibold cursor-pointer transition-transform duration-300 hover:-translate-y-[2px]" style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}>OpenAI API {"\u2192"}</button>
            </div>
          </div>
        </section>
      )}

      {/* Etape 4 : Supabase - E-commerce */}
      {currentStep === 4 && selectedProject === 'ecommerce' && (
        <section className="py-16 px-8 bg-white">
          <div className="max-w-[1000px] mx-auto">
            <h3 className="text-[1.75rem] font-bold text-[#2d3748] mb-4">Etape 4 : Supabase - Base de Donnees et Auth</h3>
            <div className="bg-[#ebf8ff] border-l-4 border-[#3182ce] p-4 mb-8 font-medium text-[#2c5282]">
              {"\u{1F3AF}"} Objectif : Connecter une vraie base de donnees
            </div>

            <div className="bg-[#f7fafc] p-6 rounded-lg mb-8">
              <div className="py-3 border-b border-[#e2e8f0] font-medium text-[#2d3748]">{"\u{1F4DD}"} Tache 1 : Creer un projet Supabase</div>
              <div className="py-3 border-b border-[#e2e8f0] font-medium text-[#2d3748]">{"\u{1F4DD}"} Tache 2 : Ajouter l&apos;authentification</div>
              <div className="py-3 font-medium text-[#2d3748]">{"\u{1F4DD}"} Tache 3 : Stocker les produits en BDD</div>
            </div>

            <pre className="bg-[#1a202c] text-[#e2e8f0] p-6 rounded-lg overflow-x-auto text-sm leading-relaxed my-8">{`// Installation
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

    // Verifier l'auth
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
}`}</pre>

            <div className="flex gap-4 mt-8">
              <button onClick={() => setCurrentStep(3)} className="bg-[#e2e8f0] text-[#2d3748] py-4 px-8 border-none rounded-lg font-semibold cursor-pointer transition-transform duration-300 hover:-translate-y-[2px] hover:bg-[#cbd5e0]">{"\u2190"} Tailwind</button>
              <button onClick={() => setCurrentStep(5)} className="border-none py-4 px-8 rounded-lg text-white font-semibold cursor-pointer transition-transform duration-300 hover:-translate-y-[2px]" style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}>Node.js {"\u2192"}</button>
            </div>
          </div>
        </section>
      )}

      {/* Etape 4 : OpenAI API - AI Assistant */}
      {currentStep === 4 && selectedProject === 'ai' && (
        <section className="py-16 px-8 bg-white">
          <div className="max-w-[1000px] mx-auto">
            <h3 className="text-[1.75rem] font-bold text-[#2d3748] mb-4">Etape 4 : OpenAI API - Integration GPT</h3>
            <div className="bg-[#ebf8ff] border-l-4 border-[#3182ce] p-4 mb-8 font-medium text-[#2c5282]">
              {"\u{1F3AF}"} Objectif : Connecter l&apos;API OpenAI pour les reponses IA
            </div>

            <div className="bg-[#f7fafc] p-6 rounded-lg mb-8">
              <div className="py-3 border-b border-[#e2e8f0] font-medium text-[#2d3748]">{"\u{1F4DD}"} Tache 1 : Creer une cle API OpenAI</div>
              <div className="py-3 border-b border-[#e2e8f0] font-medium text-[#2d3748]">{"\u{1F4DD}"} Tache 2 : Configurer le serveur Node.js</div>
              <div className="py-3 font-medium text-[#2d3748]">{"\u{1F4DD}"} Tache 3 : Implementer le streaming</div>
            </div>

            <pre className="bg-[#1a202c] text-[#e2e8f0] p-6 rounded-lg overflow-x-auto text-sm leading-relaxed my-8">{`// Installation
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
});`}</pre>

            <div className="flex gap-4 mt-8">
              <button onClick={() => setCurrentStep(3)} className="bg-[#e2e8f0] text-[#2d3748] py-4 px-8 border-none rounded-lg font-semibold cursor-pointer transition-transform duration-300 hover:-translate-y-[2px] hover:bg-[#cbd5e0]">{"\u2190"} Tailwind</button>
              <button onClick={() => setCurrentStep(5)} className="border-none py-4 px-8 rounded-lg text-white font-semibold cursor-pointer transition-transform duration-300 hover:-translate-y-[2px]" style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}>Supabase {"\u2192"}</button>
            </div>
          </div>
        </section>
      )}

      {/* Etape 5 : Node.js - E-commerce */}
      {currentStep === 5 && selectedProject === 'ecommerce' && (
        <section className="py-16 px-8 bg-white">
          <div className="max-w-[1000px] mx-auto">
            <h3 className="text-[1.75rem] font-bold text-[#2d3748] mb-4">Etape 5 : Node.js - API Personnalisee</h3>
            <div className="bg-[#ebf8ff] border-l-4 border-[#3182ce] p-4 mb-8 font-medium text-[#2c5282]">
              {"\u{1F3AF}"} Objectif : Creer une API pour les paiements
            </div>

            <div className="bg-[#f7fafc] p-6 rounded-lg mb-8">
              <div className="py-3 border-b border-[#e2e8f0] font-medium text-[#2d3748]">{"\u{1F4DD}"} Tache 1 : Creer un serveur Express</div>
              <div className="py-3 border-b border-[#e2e8f0] font-medium text-[#2d3748]">{"\u{1F4DD}"} Tache 2 : Route pour les paiements Stripe</div>
              <div className="py-3 font-medium text-[#2d3748]">{"\u{1F4DD}"} Tache 3 : Webhooks pour les confirmations</div>
            </div>

            <pre className="bg-[#1a202c] text-[#e2e8f0] p-6 rounded-lg overflow-x-auto text-sm leading-relaxed my-8">{`// server/index.js
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
});`}</pre>

            <div
              className="text-white p-8 rounded-xl my-8 text-center"
              style={{ background: 'linear-gradient(135deg, #48bb78, #38a169)' }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                {"\u{1F389}"} Felicitations!
              </h3>
              <p>
                Vous avez construit une application e-commerce complete avec React, TypeScript,
                Tailwind, Supabase et Node.js!
              </p>
            </div>

            <button onClick={() => setCurrentStep(4)} className="bg-[#e2e8f0] text-[#2d3748] py-4 px-8 border-none rounded-lg font-semibold cursor-pointer transition-transform duration-300 hover:-translate-y-[2px] hover:bg-[#cbd5e0]">{"\u2190"} Supabase</button>
          </div>
        </section>
      )}

      {/* Etape 5 : Supabase - AI Assistant */}
      {currentStep === 5 && selectedProject === 'ai' && (
        <section className="py-16 px-8 bg-white">
          <div className="max-w-[1000px] mx-auto">
            <h3 className="text-[1.75rem] font-bold text-[#2d3748] mb-4">Etape 5 : Supabase - Historique des Conversations</h3>
            <div className="bg-[#ebf8ff] border-l-4 border-[#3182ce] p-4 mb-8 font-medium text-[#2c5282]">
              {"\u{1F3AF}"} Objectif : Sauvegarder l&apos;historique avec Supabase
            </div>

            <div className="bg-[#f7fafc] p-6 rounded-lg mb-8">
              <div className="py-3 border-b border-[#e2e8f0] font-medium text-[#2d3748]">{"\u{1F4DD}"} Tache 1 : Creer les tables dans Supabase</div>
              <div className="py-3 border-b border-[#e2e8f0] font-medium text-[#2d3748]">{"\u{1F4DD}"} Tache 2 : Sauvegarder les conversations</div>
              <div className="py-3 font-medium text-[#2d3748]">{"\u{1F4DD}"} Tache 3 : Charger l&apos;historique</div>
            </div>

            <pre className="bg-[#1a202c] text-[#e2e8f0] p-6 rounded-lg overflow-x-auto text-sm leading-relaxed my-8">{`// Installation
npm install @supabase/supabase-js

// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'YOUR_SUPABASE_URL',
  'YOUR_SUPABASE_KEY'
);

// Schema SQL dans Supabase
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
*/`}</pre>

            <div
              className="text-white p-8 rounded-xl my-8 text-center"
              style={{ background: 'linear-gradient(135deg, #48bb78, #38a169)' }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                {"\u{1F389}"} Felicitations!
              </h3>
              <p>
                Vous avez construit un assistant IA complet avec React, TypeScript,
                Tailwind, OpenAI API et Supabase!
              </p>
            </div>

            <button onClick={() => setCurrentStep(4)} className="bg-[#e2e8f0] text-[#2d3748] py-4 px-8 border-none rounded-lg font-semibold cursor-pointer transition-transform duration-300 hover:-translate-y-[2px] hover:bg-[#cbd5e0]">{"\u2190"} OpenAI API</button>
          </div>
        </section>
      )}

      {/* Ressources */}
      <section className="py-16 px-8 bg-[#f7fafc]">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#2d3748]">{"\u{1F4DA}"} Ressources</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
            <a href="https://react.dev" target="_blank" className="bg-white p-4 rounded-lg no-underline text-[#667eea] font-semibold text-center transition-all duration-300 shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]">React Docs</a>
            <a href="https://www.typescriptlang.org/docs/" target="_blank" className="bg-white p-4 rounded-lg no-underline text-[#667eea] font-semibold text-center transition-all duration-300 shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]">TypeScript Docs</a>
            <a href="https://tailwindcss.com/docs" target="_blank" className="bg-white p-4 rounded-lg no-underline text-[#667eea] font-semibold text-center transition-all duration-300 shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]">Tailwind Docs</a>
            <a href="https://supabase.com/docs" target="_blank" className="bg-white p-4 rounded-lg no-underline text-[#667eea] font-semibold text-center transition-all duration-300 shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]">Supabase Docs</a>
          </div>
        </div>
      </section>
    </div>
  );
}
