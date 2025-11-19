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

export const tiktokCourse = {
  sections: [
    {
      id: "setup",
      title: "Configuration du projet TikTok",
      description: "Nous allons créer notre projet TikTok Clone avec Expo CLI et configurer toutes les dépendances nécessaires pour gérer les vidéos.",
      videoUrl: "https://example.com/tiktok-setup-video.mp4",
      duration: "20 min",
      keyPoints: [
        "Installation d'Expo CLI",
        "Création du projet TypeScript",
        "Installation des dépendances vidéo (Expo AV)",
        "Configuration de Firebase Storage",
        "Setup de React Native Reanimated"
      ],
      code: `// Installation d'Expo CLI
npm install -g @expo/cli

// Création du projet TikTok
npx create-expo-app TikTokClone --template typescript

// Navigation vers le dossier
cd TikTokClone

// Installation des dépendances essentielles
npx expo install expo-av
npx expo install expo-camera
npx expo install expo-media-library
npx expo install react-native-reanimated
npx expo install react-native-gesture-handler

// Installation de Firebase pour le stockage vidéo
npm install firebase
npm install @react-native-firebase/app
npm install @react-native-firebase/storage`,
      finalCode: `// Structure du projet final
TikTokClone/
├── app/
│   ├── _layout.tsx
│   ├── index.tsx (Feed principal)
│   ├── upload.tsx (Upload vidéo)
│   ├── profile/[id].tsx (Profil utilisateur)
│   └── video/[id].tsx (Détails vidéo)
├── components/
│   ├── VideoPlayer.tsx
│   ├── VideoCard.tsx
│   ├── ActionButtons.tsx
│   ├── CommentSheet.tsx
│   └── ProfileHeader.tsx
├── store/
│   ├── videoStore.ts
│   └── userStore.ts
├── config/
│   └── firebase.ts
├── hooks/
│   ├── useVideoPlayer.ts
│   └── useGestures.ts
└── package.json

// Package.json final
{
  "name": "tiktok-clone",
  "version": "1.0.0",
  "dependencies": {
    "expo": "~53.0.0",
    "react": "18.3.1",
    "react-native": "0.75.3",
    "expo-router": "^3.5.0",
    "expo-av": "~15.0.0",
    "expo-camera": "~16.0.0",
    "expo-media-library": "~17.0.0",
    "react-native-reanimated": "~3.16.1",
    "react-native-gesture-handler": "~2.20.2",
    "firebase": "^10.7.0",
    "zustand": "^4.4.0",
    "@expo/vector-icons": "^14.0.0"
  }
}`
    },
    {
      id: "video-player",
      title: "Création du lecteur vidéo vertical",
      description: "Développons le composant central de TikTok : le lecteur vidéo vertical avec auto-play et swipe.",
      videoUrl: "https://example.com/tiktok-player-video.mp4",
      duration: "30 min",
      keyPoints: [
        "Configuration d'Expo AV Video",
        "Système de swipe vertical avec Gesture Handler",
        "Auto-play et mise en pause",
        "Gestion de la mémoire vidéo",
        "Transitions fluides entre vidéos"
      ],
      code: `// components/VideoPlayer.tsx
import React, { useRef, useEffect, useState } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS
} from 'react-native-reanimated';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

interface VideoPlayerProps {
  videoUri: string;
  isActive: boolean;
  onSwipeUp: () => void;
  onSwipeDown: () => void;
}

export default function VideoPlayer({
  videoUri,
  isActive,
  onSwipeUp,
  onSwipeDown
}: VideoPlayerProps) {
  const videoRef = useRef<Video>(null);
  const [status, setStatus] = useState({});
  const translateY = useSharedValue(0);

  useEffect(() => {
    if (isActive) {
      videoRef.current?.playAsync();
    } else {
      videoRef.current?.pauseAsync();
    }
  }, [isActive]);

  const gesture = Gesture.Pan()
    .onUpdate((event) => {
      translateY.value = event.translationY;
    })
    .onEnd((event) => {
      if (event.translationY < -50) {
        runOnJS(onSwipeUp)();
      } else if (event.translationY > 50) {
        runOnJS(onSwipeDown)();
      }
      translateY.value = withSpring(0);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }]
  }));

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <Video
          ref={videoRef}
          source={{ uri: videoUri }}
          style={styles.video}
          resizeMode={ResizeMode.COVER}
          isLooping
          shouldPlay={isActive}
          onPlaybackStatusUpdate={setStatus}
        />
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    width: '100%',
    backgroundColor: 'black'
  },
  video: {
    flex: 1
  }
});`,
      finalCode: `// Hook personnalisé pour gérer le lecteur vidéo
// hooks/useVideoPlayer.ts
import { useRef, useEffect } from 'react';
import { Video } from 'expo-av';

export const useVideoPlayer = (isActive: boolean) => {
  const videoRef = useRef<Video>(null);

  useEffect(() => {
    if (isActive) {
      videoRef.current?.playAsync();
    } else {
      videoRef.current?.pauseAsync();
    }
  }, [isActive]);

  const togglePlayPause = async () => {
    const status = await videoRef.current?.getStatusAsync();
    if (status?.isPlaying) {
      await videoRef.current?.pauseAsync();
    } else {
      await videoRef.current?.playAsync();
    }
  };

  return { videoRef, togglePlayPause };
};`
    },
    {
      id: "feed",
      title: "Création du Feed vertical",
      description: "Construisons le feed principal avec défilement vertical infini et préchargement des vidéos.",
      videoUrl: "https://example.com/tiktok-feed-video.mp4",
      duration: "25 min",
      keyPoints: [
        "FlatList vertical avec pagination",
        "Système de préchargement",
        "Détection de la vidéo visible",
        "Optimisation des performances",
        "Infinite scroll"
      ],
      code: `// app/index.tsx
import React, { useState, useRef } from 'react';
import { FlatList, View, Dimensions, ViewToken } from 'react-native';
import VideoPlayer from '../components/VideoPlayer';
import ActionButtons from '../components/ActionButtons';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const MOCK_VIDEOS = [
  {
    id: '1',
    videoUrl: 'https://example.com/video1.mp4',
    username: '@user1',
    description: 'Ma première vidéo TikTok ! 🎵',
    likes: 1234,
    comments: 56,
    shares: 12
  },
  // ... plus de vidéos
];

export default function FeedScreen() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onViewableItemsChanged = useRef(({ viewableItems }: {
    viewableItems: ViewToken[]
  }) => {
    if (viewableItems.length > 0) {
      setActiveVideoIndex(viewableItems[0].index || 0);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 80
  }).current;

  const handleSwipeUp = () => {
    if (activeVideoIndex < MOCK_VIDEOS.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: activeVideoIndex + 1,
        animated: true
      });
    }
  };

  const handleSwipeDown = () => {
    if (activeVideoIndex > 0) {
      flatListRef.current?.scrollToIndex({
        index: activeVideoIndex - 1,
        animated: true
      });
    }
  };

  const renderItem = ({ item, index }: { item: any; index: number }) => (
    <View style={{ height: SCREEN_HEIGHT }}>
      <VideoPlayer
        videoUri={item.videoUrl}
        isActive={index === activeVideoIndex}
        onSwipeUp={handleSwipeUp}
        onSwipeDown={handleSwipeDown}
      />
      <ActionButtons
        likes={item.likes}
        comments={item.comments}
        shares={item.shares}
        username={item.username}
        description={item.description}
      />
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <FlatList
        ref={flatListRef}
        data={MOCK_VIDEOS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToInterval={SCREEN_HEIGHT}
        snapToAlignment="start"
        decelerationRate="fast"
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        removeClippedSubviews
        maxToRenderPerBatch={2}
        windowSize={3}
      />
    </View>
  );
}`
    },
    {
      id: "action-buttons",
      title: "Boutons d'action (Like, Comment, Share)",
      description: "Créons les boutons d'action latéraux avec animations, similaires à TikTok.",
      videoUrl: "https://example.com/tiktok-actions-video.mp4",
      duration: "20 min",
      keyPoints: [
        "Création des boutons animés",
        "Système de likes avec animation",
        "Modal de commentaires",
        "Partage de vidéos",
        "Profil utilisateur miniature"
      ],
      code: `// components/ActionButtons.tsx
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withSequence
} from 'react-native-reanimated';

interface ActionButtonsProps {
  likes: number;
  comments: number;
  shares: number;
  username: string;
  description: string;
}

export default function ActionButtons({
  likes,
  comments,
  shares,
  username,
  description
}: ActionButtonsProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }]
  }));

  const handleLike = () => {
    scale.value = withSequence(
      withSpring(1.3, { damping: 2 }),
      withSpring(1)
    );

    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <View style={styles.container}>
      {/* Description */}
      <View style={styles.bottomSection}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>

      {/* Boutons d'action */}
      <View style={styles.actionsContainer}>
        {/* Profil */}
        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={24} color="white" />
          </View>
        </TouchableOpacity>

        {/* Like */}
        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleLike}
        >
          <Animated.View style={animatedStyle}>
            <Ionicons
              name={isLiked ? "heart" : "heart-outline"}
              size={35}
              color={isLiked ? "#FF0050" : "white"}
            />
          </Animated.View>
          <Text style={styles.actionText}>
            {likeCount >= 1000 ? \`\${(likeCount / 1000).toFixed(1)}K\` : likeCount}
          </Text>
        </TouchableOpacity>

        {/* Comments */}
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbubble-outline" size={32} color="white" />
          <Text style={styles.actionText}>{comments}</Text>
        </TouchableOpacity>

        {/* Share */}
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="arrow-redo-outline" size={32} color="white" />
          <Text style={styles.actionText}>{shares}</Text>
        </TouchableOpacity>

        {/* Music */}
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="musical-notes" size={32} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingBottom: 20
  },
  bottomSection: {
    marginBottom: 100
  },
  username: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4
  },
  description: {
    color: 'white',
    fontSize: 14
  },
  actionsContainer: {
    position: 'absolute',
    right: 16,
    bottom: 100
  },
  actionButton: {
    alignItems: 'center',
    marginBottom: 24
  },
  actionText: {
    color: 'white',
    fontSize: 12,
    marginTop: 4,
    fontWeight: '600'
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white'
  }
});`
    },
    {
      id: "camera-upload",
      title: "Caméra et Upload de vidéos",
      description: "Implémentons la fonctionnalité d'enregistrement vidéo et d'upload avec Expo Camera et Firebase Storage.",
      videoUrl: "https://example.com/tiktok-camera-video.mp4",
      duration: "35 min",
      keyPoints: [
        "Configuration d'Expo Camera",
        "Enregistrement vidéo",
        "Prévisualisation avant upload",
        "Upload vers Firebase Storage",
        "Progress bar et gestion d'erreurs"
      ],
      code: `// app/upload.tsx
import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';

export default function UploadScreen() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [isRecording, setIsRecording] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          Nous avons besoin de votre autorisation pour utiliser la caméra
        </Text>
        <TouchableOpacity onPress={requestPermission} style={styles.button}>
          <Text style={styles.buttonText}>Autoriser la caméra</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  const startRecording = async () => {
    if (!cameraRef.current || isRecording) return;

    setIsRecording(true);
    try {
      const video = await cameraRef.current.recordAsync({
        maxDuration: 60, // 60 secondes max
        quality: '1080p'
      });

      if (video) {
        await MediaLibrary.saveToLibraryAsync(video.uri);
        console.log('Vidéo enregistrée:', video.uri);
        // Ici, vous pouvez naviguer vers l'écran de prévisualisation
      }
    } catch (error) {
      console.error('Erreur enregistrement:', error);
    } finally {
      setIsRecording(false);
    }
  };

  const stopRecording = () => {
    if (cameraRef.current && isRecording) {
      cameraRef.current.stopRecording();
      setIsRecording(false);
    }
  };

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={facing}
        ref={cameraRef}
        mode="video"
      >
        <View style={styles.topControls}>
          <TouchableOpacity
            style={styles.flipButton}
            onPress={toggleCameraFacing}
          >
            <Ionicons name="camera-reverse" size={32} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.bottomControls}>
          <TouchableOpacity
            style={[
              styles.recordButton,
              isRecording && styles.recordingButton
            ]}
            onPressIn={startRecording}
            onPressOut={stopRecording}
          >
            <View style={styles.recordInner} />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  camera: {
    flex: 1
  },
  topControls: {
    position: 'absolute',
    top: 50,
    right: 20
  },
  flipButton: {
    padding: 10
  },
  bottomControls: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: 'center'
  },
  recordButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'white'
  },
  recordingButton: {
    borderColor: '#FF0050'
  },
  recordInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FF0050'
  },
  message: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#FF0050',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});`,
      finalCode: `// services/uploadService.ts
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../config/firebase';

export const uploadVideoToFirebase = async (
  videoUri: string,
  onProgress?: (progress: number) => void
): Promise<string> => {
  try {
    // Convertir le fichier en blob
    const response = await fetch(videoUri);
    const blob = await response.blob();

    // Créer une référence unique
    const filename = \`videos/\${Date.now()}_\${Math.random()}.mp4\`;
    const storageRef = ref(storage, filename);

    // Upload avec suivi de progression
    const uploadTask = uploadBytesResumable(storageRef, blob);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          onProgress?.(progress);
        },
        (error) => {
          reject(error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadURL);
        }
      );
    });
  } catch (error) {
    throw new Error(\`Erreur lors de l'upload: \${error}\`);
  }
};`
    },
    {
      id: "comments",
      title: "Système de commentaires",
      description: "Créons le système de commentaires avec bottom sheet et réponses imbriquées.",
      videoUrl: "https://example.com/tiktok-comments-video.mp4",
      duration: "25 min",
      keyPoints: [
        "Bottom Sheet pour les commentaires",
        "Liste de commentaires avec avatars",
        "Système de réponses",
        "Input de commentaire",
        "Likes sur les commentaires"
      ],
      code: `// components/CommentSheet.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Modal
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Comment {
  id: string;
  username: string;
  text: string;
  likes: number;
  timestamp: string;
}

interface CommentSheetProps {
  visible: boolean;
  onClose: () => void;
  comments: Comment[];
}

export default function CommentSheet({
  visible,
  onClose,
  comments
}: CommentSheetProps) {
  const [newComment, setNewComment] = useState('');
  const [commentList, setCommentList] = useState(comments);

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now().toString(),
        username: '@moi',
        text: newComment,
        likes: 0,
        timestamp: 'À l\'instant'
      };
      setCommentList([comment, ...commentList]);
      setNewComment('');
    }
  };

  const renderComment = ({ item }: { item: Comment }) => (
    <View style={styles.commentItem}>
      <View style={styles.avatar}>
        <Ionicons name="person" size={20} color="white" />
      </View>

      <View style={styles.commentContent}>
        <View style={styles.commentHeader}>
          <Text style={styles.username}>{item.username}</Text>
          <Text style={styles.timestamp}>{item.timestamp}</Text>
        </View>
        <Text style={styles.commentText}>{item.text}</Text>

        <View style={styles.commentActions}>
          <TouchableOpacity style={styles.replyButton}>
            <Text style={styles.replyText}>Répondre</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.likeButton}>
        <Ionicons name="heart-outline" size={16} color="#666" />
        <Text style={styles.likeCount}>{item.likes}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.sheetContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {commentList.length} commentaires
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
          </View>

          <FlatList
            data={commentList}
            renderItem={renderComment}
            keyExtractor={(item) => item.id}
            style={styles.commentsList}
            showsVerticalScrollIndicator={false}
          />

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Ajouter un commentaire..."
              placeholderTextColor="#999"
              value={newComment}
              onChangeText={setNewComment}
              multiline
            />
            <TouchableOpacity
              style={styles.sendButton}
              onPress={handleAddComment}
            >
              <Ionicons name="send" size={24} color="#FF0050" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end'
  },
  sheetContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '80%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  commentsList: {
    flex: 1,
    padding: 16
  },
  commentItem: {
    flexDirection: 'row',
    marginBottom: 20
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12
  },
  commentContent: {
    flex: 1
  },
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4
  },
  username: {
    fontWeight: 'bold',
    marginRight: 8
  },
  timestamp: {
    color: '#999',
    fontSize: 12
  },
  commentText: {
    lineHeight: 20
  },
  commentActions: {
    marginTop: 8
  },
  replyButton: {
    marginRight: 16
  },
  replyText: {
    color: '#666',
    fontSize: 12,
    fontWeight: '600'
  },
  likeButton: {
    alignItems: 'center'
  },
  likeCount: {
    fontSize: 12,
    color: '#666',
    marginTop: 2
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 12,
    maxHeight: 100
  },
  sendButton: {
    padding: 8
  }
});`
    },
    {
      id: "profile",
      title: "Page profil utilisateur",
      description: "Créons la page de profil avec grille de vidéos, followers et statistiques.",
      videoUrl: "https://example.com/tiktok-profile-video.mp4",
      duration: "20 min",
      keyPoints: [
        "En-tête de profil",
        "Statistiques (followers, likes)",
        "Grille de vidéos",
        "Onglets (Vidéos, Likes)",
        "Bouton Follow/Following"
      ],
      code: `// app/profile/[id].tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions
} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const VIDEO_SIZE = (width - 6) / 3;

const MOCK_PROFILE = {
  id: '1',
  username: '@username',
  name: 'John Doe',
  bio: 'Créateur de contenu 🎥\nPassionné de tech 💻',
  followers: 125000,
  following: 432,
  likes: 1500000,
  videos: [
    { id: '1', thumbnail: 'https://via.placeholder.com/200', views: 12000 },
    { id: '2', thumbnail: 'https://via.placeholder.com/200', views: 45000 },
    // ... plus de vidéos
  ]
};

export default function ProfileScreen() {
  const { id } = useLocalSearchParams();
  const [isFollowing, setIsFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState('videos');

  const formatNumber = (num: number) => {
    if (num >= 1000000) return \`\${(num / 1000000).toFixed(1)}M\`;
    if (num >= 1000) return \`\${(num / 1000).toFixed(1)}K\`;
    return num.toString();
  };

  const renderVideoItem = ({ item }: any) => (
    <TouchableOpacity style={styles.videoItem}>
      <Image
        source={{ uri: item.thumbnail }}
        style={styles.videoThumbnail}
      />
      <View style={styles.videoViews}>
        <Ionicons name="play" size={12} color="white" />
        <Text style={styles.viewsText}>
          {formatNumber(item.views)}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={50} color="white" />
          </View>
        </View>

        <Text style={styles.name}>{MOCK_PROFILE.name}</Text>
        <Text style={styles.username}>{MOCK_PROFILE.username}</Text>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>
              {formatNumber(MOCK_PROFILE.following)}
            </Text>
            <Text style={styles.statLabel}>Abonnements</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>
              {formatNumber(MOCK_PROFILE.followers)}
            </Text>
            <Text style={styles.statLabel}>Abonnés</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>
              {formatNumber(MOCK_PROFILE.likes)}
            </Text>
            <Text style={styles.statLabel}>J'aime</Text>
          </View>
        </View>

        {/* Follow Button */}
        <TouchableOpacity
          style={[
            styles.followButton,
            isFollowing && styles.followingButton
          ]}
          onPress={() => setIsFollowing(!isFollowing)}
        >
          <Text style={styles.followButtonText}>
            {isFollowing ? 'Abonné' : 'S\'abonner'}
          </Text>
        </TouchableOpacity>

        {/* Bio */}
        <Text style={styles.bio}>{MOCK_PROFILE.bio}</Text>

        {/* Tabs */}
        <View style={styles.tabs}>
          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === 'videos' && styles.activeTab
            ]}
            onPress={() => setActiveTab('videos')}
          >
            <Ionicons name="grid" size={20} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === 'likes' && styles.activeTab
            ]}
            onPress={() => setActiveTab('likes')}
          >
            <Ionicons name="heart" size={20} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Videos Grid */}
      <FlatList
        data={MOCK_PROFILE.videos}
        renderItem={renderVideoItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        columnWrapperStyle={styles.videoRow}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    padding: 20,
    alignItems: 'center'
  },
  avatarContainer: {
    marginBottom: 12
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4
  },
  username: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  statItem: {
    alignItems: 'center',
    paddingHorizontal: 20
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  statLabel: {
    fontSize: 12,
    color: '#666'
  },
  statDivider: {
    width: 1,
    height: 20,
    backgroundColor: '#ddd'
  },
  followButton: {
    backgroundColor: '#FF0050',
    paddingHorizontal: 60,
    paddingVertical: 12,
    borderRadius: 4,
    marginBottom: 12
  },
  followingButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd'
  },
  followButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  bio: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
    lineHeight: 20
  },
  tabs: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    width: '100%',
    marginTop: 10
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent'
  },
  activeTab: {
    borderBottomColor: '#333'
  },
  videoRow: {
    gap: 2
  },
  videoItem: {
    width: VIDEO_SIZE,
    height: VIDEO_SIZE * 1.5,
    marginBottom: 2,
    backgroundColor: '#f0f0f0'
  },
  videoThumbnail: {
    width: '100%',
    height: '100%'
  },
  videoViews: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  viewsText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold'
  }
});`
    }
  ]
};

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
  tiktok: {
    id: "tiktok",
    title: "Projet TikTok Clone",
    icon: "tiktok",
    description: "Apprenez à développer un clone de TikTok avec toutes les fonctionnalités principales : vidéos courtes, likes, commentaires, partages, profils utilisateurs et feed personnalisé. Ce projet GRATUIT vous permettra de maîtriser les bases du développement d'applications vidéo.",
    image: "/Formationsimages/tiktok.jpeg",
    alt: "Écrans de l'application TikTok Clone",
    screenshots: [
      {
        url: "/imagesFormations/tiktok/feed.svg",
        title: "Feed de vidéos",
        description: "Défilement vertical infini avec vidéos en autoplay"
      },
      {
        url: "/imagesFormations/tiktok/camera.svg",
        title: "Caméra d'enregistrement",
        description: "Interface de capture vidéo avec effets et filtres"
      },
      {
        url: "/imagesFormations/tiktok/profile.svg",
        title: "Profil utilisateur",
        description: "Page profil avec grille de vidéos et statistiques"
      },
      {
        url: "/imagesFormations/tiktok/comments.svg",
        title: "Système de commentaires",
        description: "Bottom sheet avec commentaires et réponses"
      }
    ],
    technologies: [
      "React Native",
      "Expo SDK 53",
      "Expo Router",
      "Expo AV",
      "TypeScript",
      "TailwindCSS",
      "Firebase Storage",
      "Expo Camera",
      "React Native Reanimated",
      "Gesture Handler"
    ],
    features: [
      "Feed de vidéos verticales",
      "Système de likes et commentaires",
      "Profils utilisateurs",
      "Upload de vidéos",
      "Enregistrement vidéo in-app",
      "Partage de contenu",
      "Following/Followers",
      "Page For You personnalisée"
    ],
    isPremium: false,
    isFree: true,
    formation: "free",
    youtubeChannel: "https://www.youtube.com/@tardindavy"
  },
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
  { id: "tiktok", label: "Projet TikTok (GRATUIT)" },
  { id: "project", label: "Projet RunSport" },
  { id: "social", label: "Projet Social Media" },
  { id: "travel", label: "Projet Sky Reservation" },
  { id: "sendmoney", label: "Projet SendMoney" }
];

// Fonction utilitaire pour déterminer l'accès aux projets selon la formation
export const getProjectAccess = (projectId: string, userFormation: string | null = null) => {
  const project = (projects as any)[projectId];
  if (!project) return false;

  // Le projet TikTok est GRATUIT et accessible à tous
  if (projectId === "tiktok" || project.isFree) {
    return true;
  }

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
export const getRecommendedFormation = (projectId: string) => {
  const project = (projects as any)[projectId];
  if (!project) return null;
  
  if (project.formation === "pro") {
    return formations.pro;
  }
  
  if (project.formation === "mastering") {
    return formations.mastering;
  }
  
  return null;
}; 