import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 35,
      scale: 0.97,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 16,
      },
    },
  };

  return (
    <div className="mx-auto px-4 lg:px-6 py-6 pt-18">
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="font-heading font-medium text-2xl md:text-3xl"
      >
        LeetCode Stats
      </motion.h1>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="h-0.5 bg-(--text) mt-1"
      />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="font-sans text-(--muted)/80 text-sm md:text-base py-3 pb-8"
      >
        A snapshot of problem-solving journey
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-12 gap-4 w-full"
      >
        {[
          {
            title: "Total Solved",
            value: leetcodeData?.totalSolved,
            span: "col-span-6",
          },
          {
            title: "Points",
            value: leetcodeData?.contributionPoints,
            span: "col-span-6",
          },
          {
            title: "Easy",
            value: leetcodeData?.easySolved,
            span: "col-span-4",
          },
          {
            title: "Medium",
            value: leetcodeData?.mediumSolved,
            span: "col-span-4",
          },
          {
            title: "Hard",
            value: leetcodeData?.hardSolved,
            span: "col-span-4",
          },
        ].map((card) => (
          <motion.div
            key={card.title}
            variants={item}
            whileHover={{
              y: -5,
              scale: 1.02,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className={`${card.span} bg-(--surface) border rounded-xl border-(--border) flex flex-col p-4 gap-1 hover:border-(--text)/30`}
          >
            <span className="text-xs font-heading font-semibold uppercase tracking-wider text-(--text)/70">
              {card.title}
            </span>

            <span className="text-3xl font-heading font-bold text-(--text)">
              {loading ? (
                <div className="h-8 w-20 rounded bg-(--border) animate-pulse" />
              ) : (
                card.value
              )}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          delay: 0.3,
          type: "spring",
          stiffness: 90,
          damping: 16,
        }}
        whileHover={{
          y: -5,
        }}
        className="bg-(--surface) border rounded-xl border-(--border) flex flex-col p-4 gap-1 mt-4 hover:border-(--text)/30"
      >
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

        <div className="w-full bg-(--text)/10 h-2 rounded-full overflow-hidden mt-2">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{
              width: loading ? "0%" : `${acceptanceRate}%`,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.5,
            }}
            className="bg-emerald-500 h-full rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default LeetcodeActivities;