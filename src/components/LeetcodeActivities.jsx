import React, { useEffect, useState } from "react";
import { fetchLeetCodeData } from "../utils/portfolioApi";

function LeetcodeActivities() {
  const [leetcodeData, setLeetcodeData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeetCodeData()
      .then((data) => {
        setLeetcodeData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load LeetCode data", err);
        setLoading(false);
      });
  }, []);

  const acceptanceRate = leetcodeData.acceptanceRate || 0;

  return (
    <div className="mx-auto px-4 lg:px-6 py-6 pt-18">
      <h1 className="font-heading font-medium text-2xl md:text-3xl">
        LeetCode Stats
      </h1>
      <div className="h-0.5 w-16 bg-(--text) mt-1"></div>
      <p className="font-sans text-(--muted)/80 text-sm md:text-base py-3 pb-8">
        A snapshot of problem-solving journey
      </p>

      <div className="grid grid-cols-12 gap-4 w-full">
        <div className="col-span-6 hover:border-(--text)/30 transition-all duration-200 bg-(--surface) border rounded-xl border-(--border) flex flex-col p-4 gap-1">
          <span className="text-xs font-heading font-semibold uppercase tracking-wider text-(--text)/70">
            Total Solved
          </span>
          <span className="text-3xl font-heading font-bold text-(--text)">
            {loading ? (
              <div className="h-8 w-20 rounded bg-(--border) animate-pulse" />
            ) : (
              leetcodeData?.totalSolved
            )}
          </span>
        </div>

        <div className="col-span-6 hover:border-(--text)/30 transition-all duration-200 bg-(--surface) border rounded-xl border-(--border) flex flex-col p-4 gap-1">
          <span className="text-xs font-heading font-semibold uppercase tracking-wider text-(--text)/70">
            Points
          </span>
          <span className="text-3xl font-heading font-bold text-(--text)">
            {loading ? (
              <div className="h-8 w-20 rounded bg-(--border) animate-pulse" />
            ) : (
              leetcodeData?.contributionPoints
            )}
          </span>
        </div>

        <div className="col-span-4 hover:border-(--text)/30 transition-all duration-200 bg-(--surface) border rounded-xl border-(--border) flex flex-col p-4 gap-1">
          <span className="text-xs font-heading font-semibold uppercase tracking-wider text-(--text)/70">
            Easy
          </span>
          <span className="text-3xl font-heading font-bold text-(--text)">
            {loading ? (
              <div className="h-8 w-16 rounded bg-(--border) animate-pulse" />
            ) : (
              leetcodeData?.easySolved
            )}
          </span>
        </div>

        <div className="col-span-4 hover:border-(--text)/30 transition-all duration-200 bg-(--surface) border rounded-xl border-(--border) flex flex-col p-4 gap-1">
          <span className="text-xs font-heading font-semibold uppercase tracking-wider text-(--text)/70">
            Medium
          </span>
          <span className="text-3xl font-heading font-bold text-(--text)">
            {loading ? (
              <div className="h-8 w-16 rounded bg-(--border) animate-pulse" />
            ) : (
              leetcodeData?.mediumSolved
            )}
          </span>
        </div>

        <div className="col-span-4 hover:border-(--text)/30 transition-all duration-200 bg-(--surface) border rounded-xl border-(--border) flex flex-col p-4 gap-1">
          <span className="text-xs font-heading font-semibold uppercase tracking-wider text-(--text)/70">
            Hard
          </span>
          <span className="text-3xl font-heading font-bold text-(--text)">
            {loading ? (
              <div className="h-8 w-16 rounded bg-(--border) animate-pulse" />
            ) : (
              leetcodeData?.hardSolved
            )}
          </span>
        </div>
      </div>

      <div className="hover:border-(--text)/30 transition-all duration-200 bg-(--surface) border rounded-xl border-(--border) flex flex-col p-4 gap-1 mt-4">
        <span className="text-xs font-heading font-semibold uppercase tracking-wider text-(--text)/70">
          Acceptance Rate
        </span>

        <span className="text-3xl font-heading font-bold text-(--text)">
          {loading ? (
            <div className="h-8 w-20 rounded bg-(--border) animate-pulse" />
          ) : (
            `${acceptanceRate}%`
          )}
        </span>

        <div className="w-full bg-(--text)/10 h-2 rounded overflow-hidden">
          <div
            className="bg-emerald-500 h-full rounded transition-all duration-500"
            style={{ width: loading ? "0%" : `${acceptanceRate}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default LeetcodeActivities;