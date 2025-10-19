import { useState, useEffect, useCallback } from "react";

/**
 * Hook personnalisé pour gérer le countdown jusqu'à la prochaine session de Live Coding
 * @returns {string} Le countdown formaté en "Xd HH:MM:SS"
 */
export const useCountdown = () => {
  const [countdown, setCountdown] = useState("");

  const updateCountdown = useCallback(() => {
    const now = new Date();
    let nextSession = new Date();

    const day = now.getDay();
    const hour = now.getHours();
    const minutes = now.getMinutes();

    // Calculer le nombre de jours jusqu'au vendredi suivant
    const daysUntilFriday = (5 - day + 7) % 7 || 7;
    nextSession.setDate(now.getDate() + daysUntilFriday);
    nextSession.setHours(21, 0, 0, 0);

    // Si c'est vendredi avant 21h, la session est aujourd'hui
    if (day === 5 && (hour < 21 || (hour === 21 && minutes === 0))) {
      nextSession = new Date();
      nextSession.setHours(21, 0, 0, 0);
    }

    // Si la session est déjà passée, passer à la semaine suivante
    if (now >= nextSession) {
      nextSession.setDate(nextSession.getDate() + 7);
    }

    const diff = nextSession.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    setCountdown(
      `${days}d ${hours.toString().padStart(2, "0")}:${mins
        .toString()
        .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
    );
  }, []);

  useEffect(() => {
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [updateCountdown]);

  return countdown;
}; 