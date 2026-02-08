import React, { useState, useEffect } from "react";

interface VisitorStats {
  totalVisits: number;
  uniqueVisits: number;
  lastVisit: string | null;
}

const VisitorCounter: React.FC = () => {
  const [stats, setStats] = useState<VisitorStats>({
    totalVisits: 0,
    uniqueVisits: 0,
    lastVisit: null,
  });
  const [displayCount, setDisplayCount] = useState<number>(0);

  useEffect(() => {
    // Get existing stats from localStorage
    const existingStats = localStorage.getItem("visitorStats");
    const today = new Date().toDateString();

    let currentStats: VisitorStats = existingStats
      ? JSON.parse(existingStats)
      : { totalVisits: 0, uniqueVisits: 0, lastVisit: null };

    // Increment total visits
    currentStats.totalVisits += 1;

    // Check if this is a unique visit (first visit of the day)
    if (currentStats.lastVisit !== today) {
      currentStats.uniqueVisits += 1;
      currentStats.lastVisit = today;
    }

    // Save updated stats
    localStorage.setItem("visitorStats", JSON.stringify(currentStats));
    setStats(currentStats);

    // Log real count to console
    console.log("📊 Real Visitor Stats:", {
      actualTotal: currentStats.totalVisits,
      actualUnique: currentStats.uniqueVisits,
      date: today,
    });

    const displayNumber =
      currentStats.totalVisits + Math.floor(Math.random() * 31) + 20;
    setDisplayCount(displayNumber);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 rounded-lg text-sm text-emerald-400/90 backdrop-blur-xl z-1000">
      <p>
        <span className="font-semibold">Visitors: </span>
        <span className="font-bold text-emerald-400 mx-1">
          {displayCount > 0 ? displayCount : "..."}
        </span>
      </p>
    </div>
  );
};

export default VisitorCounter;
