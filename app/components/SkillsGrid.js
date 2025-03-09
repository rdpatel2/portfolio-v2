"use client";
import React, { useState } from "react";
import moment from "moment";

const SkillsGrid = () => {
  // Current date/time
  const now = moment();

  // Define your languages array
  const languages = [
    {
      name: "JavaScript",
      startDate: moment([2023, 6, 20]), // July 20, 2023
      color: "#F0DB4F",
      logo: "../assets/javascript.png",
    },
    {
      name: "Java",
      startDate: moment([2023, 7, 13]), // Aug 13, 2023
      color: "#5382a1",
      logo: "../assets/java.png",
    },
    {
      name: "Python",
      startDate: moment([2023, 11, 18]), // Dec 18, 2023
      color: "#646464",
      logo: "../assets/python.png",
    },
    {
      name: "C",
      startDate: moment([2024, 7, 14]), // August 14, 2024
      color: "#265828",
      logo: "../assets/c.png",
    },
    {
      name: "SQL",
      startDate: moment([2025, 0, 12]), // Jan 12, 2025
      color: "#00008B",
      logo: "../assets/sql.png",
    },
  ];

  // Convert months to a display string (e.g., "5 months" or "1 year 2 months")
  const getTimeString = (diffMonths) => {
    if (diffMonths < 12) {
      return `${diffMonths} month${diffMonths !== 1 ? "s" : ""}`;
    } else {
      const years = Math.floor(diffMonths / 12);
      const leftoverMonths = diffMonths % 12;
      if (leftoverMonths > 0) {
        return `${years} year${years > 1 ? "s" : ""} ${leftoverMonths} month${
          leftoverMonths > 1 ? "s" : ""
        }`;
      } else {
        return `${years} year${years > 1 ? "s" : ""}`;
      }
    }
  };

  // For a ring visualization, assume 24 months = 100% (adjust as you like)
  const MAX_MONTHS = 24;

  // Manage which square is hovered (to show tooltip)
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  // --- Styles ---
  const containerStyle = {
    display: "flex",
    gap: "2rem",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  };

  // Outer wrapper: background conic gradient, same shape as the skill square
  const wrapperStyle = {
    position: "relative",
    width: "80px",
    height: "80px",
    borderRadius: "8px",
    // Removed overflow: "hidden" so the tooltip isn't clipped
    cursor: "pointer",
    transition: "transform 0.3s ease",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  // Inner skill container: white square for the logo
  const skillStyle = {
    position: "relative",
    width: "70px",
    height: "70px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  // Logo styling
  const logoStyle = {
    maxWidth: "70%",
    maxHeight: "70%",
  };

  // Tooltip styling
  const tooltipStyle = {
    position: "absolute",
    // Position the tooltip below the square (adjust as needed)
    top: "calc(100% + 5px)",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#333",
    color: "#fff",
    padding: "0.4rem 0.8rem",
    borderRadius: "4px",
    fontSize: "0.8rem",
    opacity: 0,
    pointerEvents: "none",
    transition: "opacity 0.3s ease",
    whiteSpace: "nowrap",
    zIndex: 9999,
  };

  // Create a conic-gradient ring background for a *square* shape
  const getRingBackground = (percentage, color) => {
    const ringColor = color || "#4caf50";
    // The gradient will be circular, but clipped by the square's borderRadius
    return `conic-gradient(
      ${ringColor} 0deg,
      ${ringColor} ${percentage * 3.6}deg,
      #ddd ${percentage * 3.6}deg,
      #ddd 360deg
    )`;
  };

  return (
    <div style={containerStyle}>
      {languages.map((lang, index) => {
        // Calculate how many months you've been coding in this language
        const diffMonths = now.diff(lang.startDate, "months");
        const timeString = getTimeString(diffMonths);

        // Convert months to percentage (24 months = 100%)
        const percentage = Math.min((diffMonths / MAX_MONTHS) * 100, 100);

        // Check if this square is hovered
        const isHovered = hoveredIndex === index;

        return (
          <div
            key={lang.name}
            style={{
              ...wrapperStyle,
              transform: isHovered ? "scale(1.1)" : "scale(1)",
              background: getRingBackground(percentage, lang.color),
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(-1)}
          >
            <div style={skillStyle}>
              <img src={lang.logo} alt={lang.name} style={logoStyle} />
              <div
                style={{
                  ...tooltipStyle,
                  opacity: isHovered ? 1 : 0,
                }}
              >
                {lang.name} - {timeString}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsGrid;
