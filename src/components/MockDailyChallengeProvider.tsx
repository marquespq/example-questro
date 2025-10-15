import { useEffect } from "react";
import type { ReactNode } from "react";
import {
  DailyChallengeProvider,
  useDailyChallengeContext,
} from "questro/daily-challenge";

interface MockDailyChallengeProviderProps {
  children: ReactNode;
  userId: string;
}

// Componente interno que força geração de challenge
function ForceInitialChallenge() {
  const service = useDailyChallengeContext();

  useEffect(() => {
    // Se não tem challenge, força a criação manipulando o state interno
    const timer = setTimeout(() => {
      const current = service.getCurrentChallenge();

      if (!current) {
        // HACK: Acessa o state interno diretamente
        // @ts-ignore - accessing private property
        if (service.state) {
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          // @ts-ignore
          service.state.lastResetDate = yesterday.toISOString().split("T")[0];
        }

        // Agora chama checkReset que vai ver a data mudou
        service.checkReset();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [service]);

  return null;
}

export function MockDailyChallengeProvider({
  children,
  userId,
}: MockDailyChallengeProviderProps) {
  return (
    <DailyChallengeProvider
      config={{
        userId,
        templates: [
          {
            id: "easy-1",
            title: "📝 Complete 5 Tasks",
            description: "Finish 5 tasks to earn rewards",
            difficulty: "easy",
            targetValue: 50,
            reward: { points: 50, xp: 25 },
          },
          {
            id: "medium-1",
            title: "🎯 Reach 100 Points",
            description: "Accumulate 100 points today",
            difficulty: "medium",
            targetValue: 100,
            reward: { points: 100, xp: 50 },
          },
          {
            id: "hard-1",
            title: "🏆 Complete 10 Challenges",
            description: "Complete 10 challenges in one day",
            difficulty: "hard",
            targetValue: 200,
            reward: { points: 200, xp: 100 },
          },
        ],
      }}
      storageKey={`daily-challenge:${userId}`}
    >
      <ForceInitialChallenge />
      {children}
    </DailyChallengeProvider>
  );
}
