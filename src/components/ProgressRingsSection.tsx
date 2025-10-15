import { useState } from "react";
import { ProgressRings, ProgressRingsWithLabels } from "questro/progress-rings";
import type { RingData } from "questro/progress-rings";

export function ProgressRingsSection() {
  const [healthValue, setHealthValue] = useState(75);
  const [energyValue, setEnergyValue] = useState(60);
  const [focusValue, setFocusValue] = useState(45);

  const statsRings: RingData[] = [
    {
      value: healthValue,
      max: 100,
      color: "#10b981",
      label: "Health",
    },
    {
      value: energyValue,
      max: 100,
      color: "#f59e0b",
      label: "Energy",
    },
    {
      value: focusValue,
      max: 100,
      color: "#6366f1",
      label: "Focus",
    },
  ];

  const gamificationRings: RingData[] = [
    {
      value: 850,
      max: 1000,
      color: "#3b82f6",
      label: "XP",
    },
    {
      value: 12,
      max: 20,
      color: "#8b5cf6",
      label: "Quests",
    },
    {
      value: 7,
      max: 10,
      color: "#ec4899",
      label: "Badges",
    },
  ];

  const gradientRings: RingData[] = [
    {
      value: 75,
      max: 100,
      color: "#fbbf24",
      gradientColor: "#ef4444",
      label: "Streak",
    },
    {
      value: 60,
      max: 100,
      color: "#34d399",
      gradientColor: "#059669",
      label: "Progress",
    },
  ];

  return (
    <div style={{ marginBottom: "32px", padding: "12px" }}>
      {/* Live Demo - Interactive Rings */}
      <div
        style={{
          padding: "32px",
          backgroundColor: "#fff",
          border: "2px solid #e2e8f0",
          borderRadius: "12px",
          marginBottom: "32px",
        }}
      >
        <h3
          style={{
            fontSize: "18px",
            fontWeight: 700,
            color: "#0f172a",
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          Interactive Stats Demo
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "32px",
          }}
        >
          <ProgressRings
            rings={statsRings}
            size={300}
            strokeWidth={12}
            gap={16}
            centerText={`${Math.round(
              (healthValue + energyValue + focusValue) / 3
            )}%`}
            centerLabel="Overall"
          />
        </div>

        {/* Sliders */}
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div style={{ marginBottom: "20px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
              }}
            >
              <label
                style={{ fontSize: "14px", fontWeight: 600, color: "#10b981" }}
              >
                💚 Health
              </label>
              <span
                style={{ fontSize: "14px", fontWeight: 700, color: "#10b981" }}
              >
                {healthValue}%
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={healthValue}
              onChange={(e) => setHealthValue(Number(e.target.value))}
              style={{
                width: "100%",
                height: "8px",
                borderRadius: "4px",
                background: `linear-gradient(to right, #10b981 0%, #10b981 ${healthValue}%, #e2e8f0 ${healthValue}%, #e2e8f0 100%)`,
                outline: "none",
                WebkitAppearance: "none",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
              }}
            >
              <label
                style={{ fontSize: "14px", fontWeight: 600, color: "#f59e0b" }}
              >
                ⚡ Energy
              </label>
              <span
                style={{ fontSize: "14px", fontWeight: 700, color: "#f59e0b" }}
              >
                {energyValue}%
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={energyValue}
              onChange={(e) => setEnergyValue(Number(e.target.value))}
              style={{
                width: "100%",
                height: "8px",
                borderRadius: "4px",
                background: `linear-gradient(to right, #f59e0b 0%, #f59e0b ${energyValue}%, #e2e8f0 ${energyValue}%, #e2e8f0 100%)`,
                outline: "none",
                WebkitAppearance: "none",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
              }}
            >
              <label
                style={{ fontSize: "14px", fontWeight: 600, color: "#6366f1" }}
              >
                🎯 Focus
              </label>
              <span
                style={{ fontSize: "14px", fontWeight: 700, color: "#6366f1" }}
              >
                {focusValue}%
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={focusValue}
              onChange={(e) => setFocusValue(Number(e.target.value))}
              style={{
                width: "100%",
                height: "8px",
                borderRadius: "4px",
                background: `linear-gradient(to right, #6366f1 0%, #6366f1 ${focusValue}%, #e2e8f0 ${focusValue}%, #e2e8f0 100%)`,
                outline: "none",
                WebkitAppearance: "none",
              }}
            />
          </div>
        </div>
      </div>

      {/* Examples Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
          marginBottom: "32px",
        }}
      >
        {/* Gamification Metrics */}
        <div
          style={{
            padding: "24px",
            backgroundColor: "#fff",
            border: "2px solid #e2e8f0",
            borderRadius: "12px",
          }}
        >
          <h4
            style={{
              fontSize: "16px",
              fontWeight: 700,
              color: "#0f172a",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            Gamification Progress
          </h4>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ProgressRingsWithLabels
              rings={gamificationRings}
              size={200}
              strokeWidth={14}
              gap={12}
              centerText="🎮"
              centerLabel="Level 15"
            />
          </div>
        </div>

        {/* Gradient Rings */}
        <div
          style={{
            padding: "24px",
            backgroundColor: "#fff",
            border: "2px solid #e2e8f0",
            borderRadius: "12px",
          }}
        >
          <h4
            style={{
              fontSize: "16px",
              fontWeight: 700,
              color: "#0f172a",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            Gradient Effects
          </h4>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ProgressRingsWithLabels
              rings={gradientRings}
              size={200}
              strokeWidth={16}
              gap={16}
              centerText="75"
              centerLabel="Days"
            />
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div
        style={{
          padding: "24px",
          backgroundColor: "#f8fafc",
          border: "2px solid #e2e8f0",
          borderRadius: "12px",
          marginBottom: "24px",
        }}
      >
        <h4
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: "#0f172a",
            marginBottom: "16px",
          }}
        >
          Perfect For:
        </h4>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px",
          }}
        >
          <div>
            <div style={{ fontSize: "16px", marginBottom: "4px" }}>
              🎯 User Progress
            </div>
            <div style={{ fontSize: "13px", color: "#64748b" }}>
              Track profile completion, skills, achievements
            </div>
          </div>
          <div>
            <div style={{ fontSize: "16px", marginBottom: "4px" }}>
              💪 Fitness Apps
            </div>
            <div style={{ fontSize: "13px", color: "#64748b" }}>
              Steps, calories, exercise goals
            </div>
          </div>
          <div>
            <div style={{ fontSize: "16px", marginBottom: "4px" }}>
              📚 Learning
            </div>
            <div style={{ fontSize: "13px", color: "#64748b" }}>
              Course progress, lessons, mastery
            </div>
          </div>
          <div>
            <div style={{ fontSize: "16px", marginBottom: "4px" }}>
              🎮 Gaming
            </div>
            <div style={{ fontSize: "13px", color: "#64748b" }}>
              XP, quests, achievements
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div
        style={{
          padding: "20px",
          backgroundColor: "#dbeafe",
          border: "2px solid #3b82f6",
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
          <div style={{ fontSize: "16px", fontWeight: 700, color: "#1e40af" }}>
            Progress Rings Features
          </div>
        </div>
        <div style={{ fontSize: "14px", color: "#1e40af", lineHeight: "1.8" }}>
          <strong>🎨 Customizable:</strong> Colors, gradients, stroke width,
          size, gap
          <br />
          <strong>📊 Multi-Metric:</strong> Display multiple progress indicators
          at once
          <br />
          <strong>✨ Smooth Animation:</strong> Cubic ease-out transitions
          <br />
          <strong>🎯 Center Content:</strong> Add custom content in the center
          <br />
          <strong>🏷️ Labels:</strong> Optional labels with
          ProgressRingsWithLabels
          <br />
          <strong>📱 Responsive:</strong> SVG-based, scales perfectly
        </div>
      </div>
    </div>
  );
}
