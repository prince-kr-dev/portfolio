import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchGFGData } from "../utils/portfolioApi";

function GFGActivities() {
  const [gfgData, setGfgData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGFGData()
      .then((data) => {
        setGfgData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load GFG data", err);
        setLoading(false);
      });
  }, []);

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
      y: 30,
      scale: 0.98,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 18,
      },
    },
  };

  return (
    <section className="mx-auto px-4 lg:px-6 py-6 pt-18">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="font-heading text-2xl md:text-3xl font-semibold"
      >
        GeeksForGeeks Stats
      </motion.h1>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 70 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-2 h-0.5 rounded-full bg-(--text)"
      />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="py-4 pb-8 text-sm md:text-base text-(--muted)"
      >
        A snapshot of my GFG problem-solving
      </motion.p>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-3 gap-4"
      >
        {/* Total Solved */}
        <motion.div
          variants={item}
          whileHover={{ y: -5 }}
          className="col-span-3 rounded-2xl border border-(--border) bg-(--surface) p-4 shadow-sm transition-all duration-300 hover:border-(--text)/30"
        >
          <p className="text-xs uppercase font-bold font-heading tracking-[0.25em] text-(--muted)">
            Total Solved
          </p>

          {loading ? (
            <div className="mt-4 h-12 w-32 animate-pulse rounded-lg bg-(--border)" />
          ) : (
            <>
              <h2 className="mt-2 font-bold font-heading text-5xl md:text-6xl text-(--text)">
                {gfgData?.data?.totalSolved ?? 0}
              </h2>
            </>
          )}
        </motion.div>

        {[
          {
            title: "Easy",
            value: gfgData?.data?.byDifficulty?.easy ?? 0,
          },
          {
            title: "Medium",
            value: gfgData?.data?.byDifficulty?.medium ?? 0,
          },
          {
            title: "Hard",
            value:  gfgData?.data?.byDifficulty?.hard ?? 0,
          },
        ].map((card) => (
          <motion.div
            key={card.title}
            variants={item}
            whileHover={{ y: -5 }}
            className="rounded-2xl border border-(--border) bg-(--surface) p-3 shadow-sm transition-all duration-300 hover:border-(--text)/30"
          >
            <p className="text-xs font-bold font-heading sm:text-xs uppercase tracking-wider text-(--muted)">
              {card.title}
            </p>

            {loading ? (
              <div className="mt-3 h-8 w-12 animate-pulse rounded bg-(--border)" />
            ) : (
              <h3 className="mt-2 font-heading text-3xl sm:text-4xl font-bold text-(--text)">
                {card.value}
              </h3>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default GFGActivities;