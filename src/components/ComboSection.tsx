import { useState } from "react";
import { useCombo } from "questro/combo";
import { ComboMeter, ComboDisplay, ComboPopup } from "questro/combo";
import { useNotifications } from "questro/notifications";

export function ComboSection() {
  const {
    combo,
    maxCombo,
    multiplier,
    isActive,
    timeRemaining,
    addAction,
    reset,
  } = useCombo();
  const { show } = useNotifications();
  const [showPopup, setShowPopup] = useState(false);

  const handleAction = () => {
    addAction("user-action");

    if (multiplier > 1) {
      show({
        title: `${combo}x Combo!`,
        message: `🔥 Multiplier: ${multiplier.toFixed(1)}x`,
        type: "success",
      });
    }

    // Show popup on milestones
    if (combo % 5 === 0 && combo > 0) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  const handleReset = () => {
    reset();
    show({
      title: "Combo Reset",
      message: "Starting fresh!",
      type: "info",
    });
  };

  return (
    <>
      <div style={{ width: "100%", padding: "12px" }}>
        {/* Stats Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
            gap: "0.75rem",
            marginBottom: "1.5rem",
          }}
        >
          <div
            style={{
              padding: "1rem",
              backgroundColor: "#fff",
              border: "2px solid #e2e8f0",
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "0.65rem",
                color: "#64748b",
                marginBottom: "0.4rem",
                textTransform: "uppercase",
                fontWeight: 600,
                letterSpacing: "0.5px",
              }}
            >
              Current Combo
            </div>
            <div
              style={{
                fontSize: "1.75rem",
                fontWeight: 700,
                color: combo > 0 ? "#f59e0b" : "#94a3b8",
              }}
            >
              {combo}x
            </div>
          </div>

          <div
            style={{
              padding: "1rem",
              backgroundColor: "#fff",
              border: "2px solid #e2e8f0",
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "0.65rem",
                color: "#64748b",
                marginBottom: "0.4rem",
                textTransform: "uppercase",
                fontWeight: 600,
                letterSpacing: "0.5px",
              }}
            >
              Multiplier
            </div>
            <div
              style={{
                fontSize: "1.75rem",
                fontWeight: 700,
                background: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {multiplier.toFixed(1)}x
            </div>
          </div>

          <div
            style={{
              padding: "1rem",
              backgroundColor: "#fff",
              border: "2px solid #e2e8f0",
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "0.65rem",
                color: "#64748b",
                marginBottom: "0.4rem",
                textTransform: "uppercase",
                fontWeight: 600,
                letterSpacing: "0.5px",
              }}
            >
              Max Combo
            </div>
            <div
              style={{
                fontSize: "1.75rem",
                fontWeight: 700,
                color: "#6366f1",
              }}
            >
              {maxCombo}
            </div>
          </div>
        </div>

        {/* Combo Meter Visual */}
        <div style={{ marginBottom: "1.5rem" }}>
          <ComboMeter
            combo={combo}
            multiplier={multiplier}
            isActive={isActive}
            style={{
              padding: "1rem",
              backgroundColor: "#fff",
              border: "2px solid #e2e8f0",
              borderRadius: "12px",
              width: "100%",
              boxSizing: "border-box",
            }}
            timeRemaining={timeRemaining}
          />
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            marginBottom: "1.5rem",
          }}
        >
          <button
            onClick={handleAction}
            style={{
              width: "100%",
              padding: "0.8em 1.5em",
              fontSize: "1em",
              fontWeight: 600,
              background: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(245,158,11,0.4)",
              transition: "all 0.25s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = "scale(0.98)";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <span style={{ fontSize: "1.25em" }}>🔥</span>
            <span>Perform Action</span>
          </button>
          <button
            onClick={handleReset}
            style={{
              width: "100%",
              padding: "0.8em 1.5em",
              fontSize: "1em",
              fontWeight: 500,
              backgroundColor: "#fff",
              color: "#64748b",
              border: "2px solid #e2e8f0",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "all 0.25s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#f8fafc";
              e.currentTarget.style.borderColor = "#cbd5e1";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#fff";
              e.currentTarget.style.borderColor = "#e2e8f0";
            }}
          >
            Reset Combo
          </button>
        </div>

        {/* Combo Display Component */}
        <div style={{ marginBottom: "1.5rem" }}>
          <ComboDisplay
            combo={combo}
            multiplier={multiplier}
            maxCombo={maxCombo}
          />
        </div>

        {/* Info Section */}
        <div
          style={{
            padding: "1rem",
            backgroundColor: "#fef3c7",
            border: "2px solid #fbbf24",
            borderRadius: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "0.75rem",
            }}
          >
            <span style={{ fontSize: "1.5rem", marginRight: "0.75rem" }}>
              💡
            </span>
            <div
              style={{ fontSize: "1rem", fontWeight: 700, color: "#92400e" }}
            >
              How Combos Work
            </div>
          </div>
          <div
            style={{
              fontSize: "0.875rem",
              color: "#92400e",
              lineHeight: "1.6",
            }}
          >
            <strong>🎯 Timing:</strong> Perform actions within 5 seconds to
            maintain the combo
            <br />
            <strong>⚡ Multiplier:</strong> +0.1x per combo (max 5x)
            <br />
            <strong>🏆 Milestones:</strong> Celebrate at 5, 10, 25, 50, and 100
            combos
            <br />
            <strong>⏱️ Timeout:</strong> Combo breaks after 5 seconds of
            inactivity
          </div>
        </div>
      </div>

      {/* Milestone Popup */}
      {showPopup && (
        <ComboPopup combo={combo} multiplier={multiplier} show={showPopup} />
      )}
    </>
  );
}
