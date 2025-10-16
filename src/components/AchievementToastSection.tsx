import { useState } from "react";
import { AchievementToast } from "questro/achievement-toast";
import type { Achievement } from "questro/achievement-toast";

interface SampleAchievement extends Achievement {
  id: string;
  rarity: string;
}

const SAMPLE_ACHIEVEMENTS: SampleAchievement[] = [
  {
    id: "1",
    title: "First Steps",
    description: "Complete your first action",
    icon: "🎯",
    type: "milestone",
    rarity: "common",
    reward: { points: 10 },
  },
  {
    id: "2",
    title: "Speed Demon",
    description: "Complete 10 actions in under a minute",
    icon: "⚡",
    type: "badge",
    rarity: "rare",
    reward: { points: 100, badge: "Speed Demon Badge" },
  },
  {
    id: "3",
    title: "Level Up!",
    description: "Reached Level 5",
    icon: "⭐",
    type: "level",
    rarity: "uncommon",
    reward: { points: 50 },
  },
  {
    id: "4",
    title: "Legendary Master",
    description: "Unlock all achievements in the game",
    icon: "👑",
    type: "quest",
    rarity: "legendary",
    reward: { points: 1000, badge: "Master Badge" },
  },
  {
    id: "5",
    title: "Century Club",
    description: "Earn 100 total points",
    icon: "💯",
    type: "milestone",
    rarity: "epic",
    reward: { points: 200 },
  },
];

export function AchievementToastSection() {
  const [currentAchievement, setCurrentAchievement] =
    useState<SampleAchievement | null>(null);

  const showAchievement = (achievement: SampleAchievement) => {
    setCurrentAchievement(achievement);
  };

  const handleClose = () => {
    setCurrentAchievement(null);
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "#94a3b8";
      case "uncommon":
        return "#10b981";
      case "rare":
        return "#3b82f6";
      case "epic":
        return "#8b5cf6";
      case "legendary":
        return "#f59e0b";
      default:
        return "#64748b";
    }
  };

  return (
    <div style={{ marginBottom: "32px", padding: "12px" }}>
      {/* Achievement Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "16px",
          marginBottom: "32px",
        }}
      >
        {SAMPLE_ACHIEVEMENTS.map((achievement) => (
          <div
            key={achievement.id}
            onClick={() => showAchievement(achievement)}
            style={{
              padding: "20px",
              backgroundColor: "#fff",
              border: `2px solid ${getRarityColor(achievement.rarity)}`,
              borderRadius: "12px",
              cursor: "pointer",
              transition: "all 0.3s",
              boxShadow: `0 2px 8px ${getRarityColor(achievement.rarity)}22`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = `0 8px 20px ${getRarityColor(
                achievement.rarity
              )}44`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = `0 2px 8px ${getRarityColor(
                achievement.rarity
              )}22`;
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  fontSize: "40px",
                  marginRight: "12px",
                  filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                }}
              >
                {achievement.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "4px",
                  }}
                >
                  {achievement.title}
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: getRarityColor(achievement.rarity),
                    letterSpacing: "0.5px",
                  }}
                >
                  {achievement.rarity}
                </div>
              </div>
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "#64748b",
                marginBottom: "12px",
                minHeight: "36px",
              }}
            >
              {achievement.description}
            </div>
            <div
              style={{
                padding: "8px 12px",
                backgroundColor: "#f8fafc",
                borderRadius: "8px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#6366f1",
              }}
            >
              🎁 {achievement.reward?.points || 0} points
              {achievement.reward?.badge && ` + ${achievement.reward.badge}`}
            </div>
          </div>
        ))}
      </div>

      {/* Rarity Legend */}
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8fafc",
          border: "2px solid #e2e8f0",
          borderRadius: "12px",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            fontSize: "14px",
            fontWeight: 700,
            color: "#0f172a",
            marginBottom: "12px",
          }}
        >
          🏆 Achievement Rarities
        </div>
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          {["common", "uncommon", "rare", "epic", "legendary"].map((rarity) => (
            <div
              key={rarity}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  backgroundColor: getRarityColor(rarity),
                  boxShadow: `0 0 8px ${getRarityColor(rarity)}66`,
                }}
              />
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#64748b",
                  textTransform: "capitalize",
                }}
              >
                {rarity}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div
        style={{
          padding: "20px",
          backgroundColor: "#fef3c7",
          border: "2px solid #fbbf24",
          borderRadius: "12px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "12px",
          }}
        >
          <span style={{ fontSize: "24px", marginRight: "12px" }}>💡</span>
          <div style={{ fontSize: "16px", fontWeight: 700, color: "#92400e" }}>
            Achievement Toast Features
          </div>
        </div>
        <div style={{ fontSize: "14px", color: "#92400e", lineHeight: "1.8" }}>
          <strong>🎊 Confetti Animation:</strong> 30-particle celebration effect
          <br />
          <strong>✨ Shine Effect:</strong> Animated shine across the card
          <br />
          <strong>🎨 Rarity Colors:</strong> 5 levels from common to legendary
          <br />
          <strong>🎁 Reward Display:</strong> Shows points, badges, and items
          <br />
          <strong>⏱️ Auto-Dismiss:</strong> Closes after 5 seconds
          (customizable)
          <br />
          <br />
          <em>
            Click any achievement card above to see the celebration modal!
          </em>
        </div>
      </div>

      {/* Code Example */}
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8fafc",
          border: "2px solid #e2e8f0",
          borderRadius: "12px",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            fontSize: "14px",
            fontWeight: 700,
            color: "#0f172a",
            marginBottom: "12px",
          }}
        >
          💻 Code Example
        </div>
        <pre
          style={{
            backgroundColor: "#1e293b",
            color: "#e2e8f0",
            padding: "16px",
            borderRadius: "8px",
            overflow: "auto",
            fontSize: "13px",
            lineHeight: "1.6",
            margin: 0,
            textAlign: "left",
          }}
        >
          <code>{`import { useState } from 'react';
import { AchievementToast } from 'questro/achievement-toast';
import type { Achievement } from 'questro/achievement-toast';

function GameUI() {
  const [achievement, setAchievement] = 
    useState<Achievement | null>(null);

  const unlockAchievement = () => {
    setAchievement({
      title: "Speed Demon",
      description: "Complete 10 actions in under a minute",
      icon: "⚡",
      type: "badge",
      rarity: "rare",
      reward: { 
        points: 100, 
        badge: "Speed Demon Badge" 
      }
    });
  };

  return (
    <>
      <button onClick={unlockAchievement}>
        Unlock Achievement
      </button>
      
      {achievement && (
        <AchievementToast
          achievement={achievement}
          onClose={() => setAchievement(null)}
        />
      )}
    </>
  );
}`}</code>
        </pre>
      </div>

      {/* Achievement Toast Modal */}
      {currentAchievement && (
        <AchievementToast
          achievement={currentAchievement}
          onClose={handleClose}
        />
      )}
    </div>
  );
}
