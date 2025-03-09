import SkillsGrid from "./SkillsGrid";
import { useState, useRef, useEffect } from "react";
import useMeasure from "react-use-measure";

export default function Home() {
  // Speed settings
  const FAST_SPEED = 1;
  const SLOW_SPEED = 0.3;
  const [speed, setSpeed] = useState(FAST_SPEED);

  // DOM measurements
  const [ref, { width }] = useMeasure();
  const containerRef = useRef(null);
  const animationIdRef = useRef(null);
  const positionRef = useRef(0);
  const gridLengthRef = useRef(0); // Store the total length of the grid

  // Track distance traveled based on elapsed time and speed
  const distanceTraveledRef = useRef(0);

  // Create a self-contained animation loop with requestAnimationFrame
  useEffect(() => {
    if (!width || width === 0) return;

    // Measure the total length of the grid (combining the widths of all items)
    const measureGridLength = () => {
      if (containerRef.current) {
        gridLengthRef.current = containerRef.current.scrollWidth; // This gives the full length of the inner content
      }
    };

    measureGridLength();

    let lastTimestamp = null;

    const animate = (timestamp) => {
      if (!lastTimestamp) {
        lastTimestamp = timestamp;
      }

      // Calculate how much to move based on elapsed time and current speed
      const elapsed = timestamp - lastTimestamp;
      const pixelsPerMs = speed * 0.05; // Adjust this multiplier to control base speed
      const moveAmount = elapsed * pixelsPerMs;

      // Update position and distance traveled
      positionRef.current -= moveAmount;
      distanceTraveledRef.current += moveAmount;

      // Reset position and distance when the total distance traveled equals or exceeds the grid length
      if (distanceTraveledRef.current >= gridLengthRef.current) {
        positionRef.current = 0;
        distanceTraveledRef.current = 0; // Reset distance
      }

      // Apply the transform
      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(${positionRef.current}px)`;
      }

      lastTimestamp = timestamp;
      animationIdRef.current = requestAnimationFrame(animate);
    };

    // Start the animation
    animationIdRef.current = requestAnimationFrame(animate);

    // Clean up
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [width, speed]);

  return (
    <main className="py-8">
      <div className="relative">
        <div
          className="overflow-visible"
          onMouseEnter={() => setSpeed(SLOW_SPEED)}
          onMouseLeave={() => setSpeed(FAST_SPEED)}
        >
          <div ref={containerRef} className="flex gap-8">
            {/* First set of items */}
            {[...Array(4)].map((_, idx) => (
              <div
                key={`first-${idx}`}
                className="flex-shrink-0"
                ref={idx === 0 ? ref : null}
                style={{ height: "fit-content" }}
              >
                <SkillsGrid />
              </div>
            ))}

            {/* Second set of identical items for looping */}
            {[...Array(4)].map((_, idx) => (
              <div key={`second-${idx}`} className="flex-shrink-0">
                <SkillsGrid />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
