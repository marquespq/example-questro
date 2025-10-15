import { useState } from "react";
import { PointsSection } from "./PointsSection";
import { BadgesSection } from "./BadgesSection";
import { QuestsSection } from "./QuestsSection";
import { LeaderboardSection } from "./LeaderboardSection";
import { LevelsSection } from "./LevelsSection";
import { StreaksSection } from "./StreaksSection";
import { NotificationsSection } from "./NotificationsSection";
import { ComboSection } from "./ComboSection";
import { DailyChallengeSection } from "./DailyChallengeSection";
import { AchievementToastSection } from "./AchievementToastSection";
import { ProgressRingsSection } from "./ProgressRingsSection";

type ModuleId =
  | "points"
  | "badges"
  | "quests"
  | "leaderboard"
  | "levels"
  | "streaks"
  | "notifications"
  | "combo"
  | "daily-challenge"
  | "achievement-toast"
  | "progress-rings";

export function ModulesGrid() {
  const [expandedModule, setExpandedModule] = useState<ModuleId | null>(null);

  const modules = [
    {
      id: "points" as ModuleId,
      icon: "📊",
      title: "Points",
      description: "Track user scores, manage balances, award bonuses",
      features: [
        "Add/subtract points",
        "Transaction history",
        "Balance persistence",
      ],
    },
    {
      id: "badges" as ModuleId,
      icon: "🏆",
      title: "Badges",
      description: "Award achievements when users hit milestones",
      features: [
        "Auto-unlock on conditions",
        "Badge metadata",
        "Progress tracking",
      ],
    },
    {
      id: "quests" as ModuleId,
      icon: "🎯",
      title: "Quests",
      description: "Multi-step challenges with rewards and time limits",
      features: ["Step progression", "Time limits", "Rewards on completion"],
    },
    {
      id: "leaderboard" as ModuleId,
      icon: "🏅",
      title: "Leaderboard",
      description: "Competitive rankings based on points or custom metrics",
      features: ["Real-time rankings", "Custom metrics", "User positions"],
    },
    {
      id: "levels" as ModuleId,
      icon: "⬆️",
      title: "Levels/XP",
      description: "Level up system with experience points",
      features: ["XP tracking", "Level formulas", "Progress bars"],
    },
    {
      id: "streaks" as ModuleId,
      icon: "🔥",
      title: "Streaks",
      description: "Daily activity tracking with freeze protection",
      features: ["Daily check-ins", "Streak freezes", "Calendar view"],
    },
    {
      id: "notifications" as ModuleId,
      icon: "🔔",
      title: "Notifications",
      description: "Toast notifications for gamification events",
      features: ["Custom messages", "Auto-dismiss", "Event triggers"],
    },
    {
      id: "combo" as ModuleId,
      icon: "🔥",
      title: "Combo System",
      description: "Chain actions for multipliers and milestone rewards",
      features: [
        "Time-based combos",
        "Multiplier system",
        "Milestone celebrations",
      ],
    },
    {
      id: "daily-challenge" as ModuleId,
      icon: "📅",
      title: "Daily Challenge",
      description: "Daily challenges with streaks and auto-reset",
      features: [
        "Auto-generated tasks",
        "Streak tracking",
        "Difficulty levels",
      ],
    },
    {
      id: "achievement-toast" as ModuleId,
      icon: "🎊",
      title: "Achievement Toast",
      description: "Special toast notifications with confetti effects",
      features: ["Confetti animations", "Custom actions", "Multiple types"],
    },
    {
      id: "progress-rings" as ModuleId,
      icon: "⭕",
      title: "Progress Rings",
      description: "Apple Activity-style concentric progress rings",
      features: ["Multiple metrics", "Gradient colors", "Animated progress"],
    },
  ];

  const toggleModule = (id: ModuleId) => {
    setExpandedModule(expandedModule === id ? null : id);
  };

  const renderModuleContent = (id: ModuleId) => {
    switch (id) {
      case "points":
        return <PointsSection />;
      case "badges":
        return <BadgesSection />;
      case "quests":
        return <QuestsSection />;
      case "leaderboard":
        return <LeaderboardSection />;
      case "levels":
        return <LevelsSection />;
      case "streaks":
        return <StreaksSection />;
      case "notifications":
        return <NotificationsSection />;
      case "combo":
        return <ComboSection />;
      case "daily-challenge":
        return <DailyChallengeSection />;
      case "achievement-toast":
        return <AchievementToastSection />;
      case "progress-rings":
        return <ProgressRingsSection />;
      default:
        return null;
    }
  };

  return (
    <div className="modules-section">
      <div className="section-header">
        <h2 className="section-title">11 Powerful Modules</h2>
        <p className="section-subtitle">
          Click any module to see it in action with live examples and code
        </p>
      </div>

      {/* Se algum módulo está expandido, mostra só ele em fullscreen */}
      {expandedModule ? (
        <div className="module-fullscreen">
          {/* Card do módulo expandido */}
          <div
            className="module-card expanded"
            onClick={() => setExpandedModule(null)}
          >
            <div className="module-card-header">
              <div className="module-icon">
                {modules.find((m) => m.id === expandedModule)?.icon}
              </div>
              <div className="module-info">
                <h3 className="module-title">
                  {modules.find((m) => m.id === expandedModule)?.title}
                </h3>
                <p className="module-description">
                  {modules.find((m) => m.id === expandedModule)?.description}
                </p>
              </div>
              <div className="module-expand-icon">−</div>
            </div>
            <ul className="module-features">
              {modules
                .find((m) => m.id === expandedModule)
                ?.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
            </ul>
          </div>

          {/* Conteúdo expandido */}
          <div className="module-expanded-content">
            <div className="module-content-wrapper">
              {renderModuleContent(expandedModule)}
            </div>
            <button
              className="module-close-button"
              onClick={(e) => {
                e.stopPropagation();
                setExpandedModule(null);
              }}
            >
              ← Back to All Modules
            </button>
          </div>
        </div>
      ) : (
        /* Grid normal quando nenhum módulo está expandido */
        <div className="modules-grid">
          {modules.map((module) => (
            <div
              key={module.id}
              className="module-card"
              onClick={() => toggleModule(module.id)}
            >
              <div className="module-card-header">
                <div className="module-icon">{module.icon}</div>
                <div className="module-info">
                  <h3 className="module-title">{module.title}</h3>
                  <p className="module-description">{module.description}</p>
                </div>
                <div className="module-expand-icon">+</div>
              </div>
              <ul className="module-features">
                {module.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
