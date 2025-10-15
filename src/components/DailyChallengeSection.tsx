import { useEffect } from "react";
import { useDailyChallenge } from "questro/daily-challenge";
import {
  DailyChallengeCard,
  ChallengeStreakDisplay,
  ChallengeTimer,
} from "questro/daily-challenge";
import { useNotifications } from "questro/notifications";
import { usePoints } from "questro/points";

export function DailyChallengeSection() {
  const {
    challenge,
    streak,
    totalCompleted,
    completedToday,
    timeUntilReset,
    progress,
    addProgress,
    complete,
  } = useDailyChallenge();

  const { show } = useNotifications();
  const { addPoints } = usePoints();

  const isCompleted = challenge?.status === "completed";

  // Debug
  useEffect(() => {
    console.log("🔍 Hook challenge:", challenge);
    console.log(
      "📦 LocalStorage:",
      JSON.parse(localStorage.getItem("daily-challenge:demo-user") || "null")
    );
  }, [challenge]);

  // Handler para adicionar progresso
  const handleAddProgress = () => {
    if (!challenge || isCompleted) return;

    const result = addProgress(10); // Adiciona 10 de progresso

    if (result) {
      show({
        title: "⚡ Progress Made!",
        message: `${result.currentValue}/${result.targetValue} completed`,
        type: "success",
      });
    }
  };

  // Handler para completar o desafio
  const handleComplete = () => {
    if (!challenge || isCompleted) return;

    const result = complete();

    if (result && result.reward.points) {
      // Adiciona os pontos da recompensa
      addPoints(result.reward.points, {
        action: "daily-challenge",
        description: `Completed: ${result.title}`,
      });

      show({
        title: "🎉 Challenge Complete!",
        message: `+${result.reward.points} points! Streak: ${streak + 1} days!`,
        type: "success",
      });
    }
  };

  return (
    <div style={{ marginBottom: "32px", padding: "12px" }}>
      {/* Stats Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        {/* Current Streak */}
        <div
          style={{
            padding: "20px",
            backgroundColor: "#fff",
            border: "2px solid #e2e8f0",
            borderRadius: "12px",
          }}
        >
          <div
            style={{ fontSize: "12px", color: "#64748b", marginBottom: "4px" }}
          >
            Current Streak
          </div>
          <div
            style={{
              fontSize: "32px",
              fontWeight: 700,
              background: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {streak}
            <span style={{ fontSize: "18px", marginLeft: "4px" }}>🔥</span>
          </div>
        </div>

        {/* Total Completed */}
        <div
          style={{
            padding: "20px",
            backgroundColor: "#fff",
            border: "2px solid #e2e8f0",
            borderRadius: "12px",
          }}
        >
          <div
            style={{ fontSize: "12px", color: "#64748b", marginBottom: "4px" }}
          >
            Total Completed
          </div>
          <div
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#6366f1",
            }}
          >
            {totalCompleted}
          </div>
        </div>

        {/* Today's Status */}
        <div
          style={{
            padding: "20px",
            backgroundColor: "#fff",
            border: "2px solid #e2e8f0",
            borderRadius: "12px",
          }}
        >
          <div
            style={{ fontSize: "12px", color: "#64748b", marginBottom: "4px" }}
          >
            Today&apos;s Status
          </div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: completedToday ? "#10b981" : "#6366f1",
            }}
          >
            {completedToday ? "✅ Complete" : "🎯 In Progress"}
          </div>
        </div>
      </div>

      {/* Challenge Card Component */}
      {challenge ? (
        <div style={{ marginBottom: "24px" }}>
          <DailyChallengeCard
            challenge={challenge}
            progress={progress}
            timeUntilReset={timeUntilReset}
            onAction={handleComplete}
            style={{
              padding: "24px",
              backgroundColor: "#fff",
              border: "2px solid #e2e8f0",
              borderRadius: "12px",
            }}
          />
        </div>
      ) : (
        <div
          style={{
            marginBottom: "24px",
            padding: "40px",
            backgroundColor: "#dbeafe",
            border: "2px solid #3b82f6",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "48px", marginBottom: "16px" }}>⏳</div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#1e40af",
              marginBottom: "8px",
            }}
          >
            Loading Challenge...
          </div>
          <div
            style={{
              fontSize: "14px",
              color: "#1e40af",
            }}
          >
            The Daily Challenge system is initializing. Refresh if it takes too
            long.
          </div>
        </div>
      )}

      {/* Streak Display Component */}
      <div style={{ marginBottom: "24px" }}>
        <ChallengeStreakDisplay
          streak={streak}
          totalCompleted={totalCompleted}
          style={{
            padding: "20px",
            backgroundColor: "#fff",
            border: "2px solid #e2e8f0",
            borderRadius: "12px",
          }}
        />
      </div>

      {/* Timer Component */}
      <div style={{ marginBottom: "24px" }}>
        <ChallengeTimer
          timeUntilReset={timeUntilReset}
          style={{
            padding: "20px",
            backgroundColor: "#fff",
            border: "2px solid #e2e8f0",
            borderRadius: "12px",
            textAlign: "center",
          }}
        />
      </div>

      {/* Demo Controls */}
      {challenge && (
        <div
          style={{
            padding: "20px",
            backgroundColor: "#fef3c7",
            border: "2px solid #f59e0b",
            borderRadius: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <span style={{ fontSize: "24px", marginRight: "12px" }}>🎮</span>
            <div
              style={{ fontSize: "16px", fontWeight: 700, color: "#92400e" }}
            >
              Interactive Demo
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "12px",
            }}
          >
            <button
              onClick={handleAddProgress}
              disabled={isCompleted}
              style={{
                padding: "16px 24px",
                fontSize: "15px",
                fontWeight: 600,
                background: isCompleted
                  ? "#e2e8f0"
                  : "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                color: isCompleted ? "#94a3b8" : "#fff",
                border: "none",
                borderRadius: "10px",
                cursor: isCompleted ? "not-allowed" : "pointer",
                boxShadow: isCompleted
                  ? "none"
                  : "0 4px 12px rgba(99,102,241,0.4)",
                transition: "all 0.2s",
              }}
            >
              <span style={{ fontSize: "20px", marginRight: "8px" }}>⚡</span>
              Add Progress ({Math.round(progress)}%)
            </button>

            <button
              onClick={handleComplete}
              disabled={isCompleted}
              style={{
                padding: "16px 24px",
                fontSize: "15px",
                fontWeight: 600,
                background: isCompleted
                  ? "#e2e8f0"
                  : "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                color: isCompleted ? "#94a3b8" : "#fff",
                border: "none",
                borderRadius: "10px",
                cursor: isCompleted ? "not-allowed" : "pointer",
                boxShadow: isCompleted
                  ? "none"
                  : "0 4px 12px rgba(16,185,129,0.4)",
                transition: "all 0.2s",
              }}
            >
              <span style={{ fontSize: "20px", marginRight: "8px" }}>✅</span>
              Complete Challenge
            </button>
          </div>

          <div
            style={{
              marginTop: "16px",
              padding: "12px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              fontSize: "13px",
              color: "#92400e",
              lineHeight: "1.6",
            }}
          >
            <strong>💡 How it works:</strong> The <code>useDailyChallenge</code>{" "}
            hook provides <code>addProgress()</code> and <code>complete()</code>{" "}
            methods. All 3 visual components (<code>DailyChallengeCard</code>,{" "}
            <code>ChallengeStreakDisplay</code>, <code>ChallengeTimer</code>)
            are included from the library!
          </div>
        </div>
      )}

      {/* Info Section */}
      <div
        style={{
          padding: "20px",
          backgroundColor: "#dbeafe",
          border: "2px solid #3b82f6",
          borderRadius: "12px",
          marginTop: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "12px",
          }}
        >
          <span style={{ fontSize: "24px", marginRight: "12px" }}>📚</span>
          <div style={{ fontSize: "16px", fontWeight: 700, color: "#1e40af" }}>
            Daily Challenge System
          </div>
        </div>
        <div style={{ fontSize: "14px", color: "#1e40af", lineHeight: "1.8" }}>
          <strong>🎯 Hook:</strong> <code>useDailyChallenge()</code> →{" "}
          {`{ challenge, streak, totalCompleted, completedToday, timeUntilReset, progress, addProgress, complete }`}
          <br />
          <strong>🎨 Components:</strong> <code>DailyChallengeCard</code>,{" "}
          <code>ChallengeStreakDisplay</code>, <code>ChallengeTimer</code>
          <br />
          <strong>🌅 Auto Reset:</strong> New challenge every 24 hours at
          midnight
          <br />
          <strong>🔥 Streak Tracking:</strong> Maintain your streak by
          completing daily
        </div>
      </div>
    </div>
  );
}
