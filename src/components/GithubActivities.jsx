import React, { useEffect, useState } from "react";
import { GoPeople } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { FiExternalLink } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { VscSyncCompact } from "react-icons/vsc";
import { FaUserCircle } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

import {
  fetchGitHubData,
  fetchTopFollowers,
  fetchTopRepos,
} from "../utils/portfolioApi";

function GithubActivities() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [followers, setFollowers] = useState([]);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    Promise.all([fetchGitHubData(), fetchTopFollowers(), fetchTopRepos()])
      .then(([profile, followers, repos]) => {
        setProfileData(profile);
        setFollowers(followers);
        setRepos(repos);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load GitHub data", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="mx-auto px-4 lg:px-6 py-4">
      <h1 className="font-heading font-medium text-2xl md:text-3xl">
        GitHub Activity
      </h1>
      <div className="h-0.5 w-16 bg-(--text) mt-1"></div>
      <p className="font-sans text-(--muted)/80 text-sm md:text-base py-3 pb-8">
        My development journey
      </p>

      <div>
        <div className="w-full max-w-4xl space-y-4">
          {/* ROW 1: Profile Details */}
          <div className="bg-(--surface) border border-(--border) rounded-xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            {profileData?.avatar_url ? (
              <img
                src={profileData.avatar_url}
                alt={profileData?.name || "GitHub Profile"}
                className="w-24 h-24 rounded-full border-2 border-(--border) object-cover"
              />
            ) : (
              <FaUserCircle className="w-24 h-24 text-(--text)/60 rounded-full border-2 border-(--border) object-cover" />
            )}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-2xl font-bold font-heading text-(--text)">
                {profileData?.name || "Prince Kumar"}
              </h1>
              <p className="text-(--muted) font-heading text-sm">
                {`@${profileData?.login || "prince-kr-dev"}`}
              </p>
              <p className="text-(--text)/70 font-heading font-medium text-sm mt-1">
                {profileData?.bio || "Open to learning and collaboration"}
              </p>
              <div className="flex items-center font-heading justify-center sm:justify-start gap-4 mt-3">
                <span className="text-sm text-(--text) font-medium flex items-center justify-between w-fit gap-1.5">
                  <span>
                    <GoPeople className="text-(--text)/50 text-sm" />
                  </span>
                  {profileData?.followers || "0"}{" "}
                  <span className="text-(--text)/50 text-xs">Followers</span>
                </span>

                <span className="text-sm text-(--text) font-medium">
                  {profileData?.following || "0"}{" "}
                  <span className="text-(--text)/50 text-xs">Following</span>
                </span>
              </div>
              <div className="flex items-center flex-wrap justify-center sm:justify-start gap-4 pt-1 text-xs text-(--text)">
                <span className="flex items-center justify-between w-fit gap-1">
                  <CiLocationOn className="text-(--text)/50 text-sm" />{" "}
                  {profileData?.location || "India"}
                </span>
                <a
                  href={
                    profileData?.html_url || "https://github.com/prince-kr-dev"
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="text-(--text)/70 hover:text-(--primary) hover:underline transition-all duration-100  flex items-center gap-1"
                >
                  View Profile <FiExternalLink />
                </a>
              </div>
              <p className="flex items-center flex-wrap justify-center sm:justify-start gap-2 pt-1 text-xs text-(--text) font-medium">
                <SlCalender className="text-(--text)/50 text-sm" />
                Since: Aug 2024
              </p>
            </div>
          </div>

          {/* ROW 2: Stats & Followers Grid */}
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-2 bg-(--surface) border border-(--border) rounded-xl p-3 flex flex-col justify-between">
              <span className="text-xs font-heading font-semibold uppercase tracking-wider text-(--text)/70">
                Total Repo
              </span>
              <span className="text-3xl font-heading font-bold text-(--text)">
                {profileData?.public_repos || "00"}
              </span>
            </div>

            {/* Top 5 Followers Stack - Takes up 3 out of 5 columns */}
            <div className="col-span-3 bg-(--surface) border border-(--border) rounded-xl p-3 flex flex-col justify-between">
              <span className="text-xs font-heading font-semibold uppercase tracking-wider text-(--text)/70">
                Top Followers
              </span>

              <div className="flex items-center gap-1">
                <div className="flex -space-x-2 mt-1">
                  {Array.from({ length: 5 }).map((_, index) => {
                    const follower = followers[index];

                    return follower ? (
                      <a
                        key={follower.id}
                        href={follower.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block transition-transform hover:-translate-y-1 focus:z-10"
                      >
                        <img
                          className="inline-block h-8 w-8 sm:h-10 sm:w-10 rounded-full ring-1 ring-(--text) object-cover"
                          src={follower.avatar_url}
                          alt={follower.login}
                        />
                      </a>
                    ) : (
                      <div key={index} className="inline-block">
                        <FaUserCircle className="h-8 w-8 sm:h-10 sm:w-10 text-(--text)/60 rounded-full ring-1 ring-(--text)" />
                      </div>
                    );
                  })}
                </div>

                <span className="text-sm text-(--text)/70">+others</span>
              </div>
            </div>
          </div>

          {/* ROW 3: Top 5 Repos List */}
          <div className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider font-heading text-(--text) px-1">
              Top Repositories
            </h2>

            <div className="space-y-1">
              {loading || repos.length === 0
                ? Array.from({ length: 5 }).map((_, idx) => (
                    <div
                      key={idx}
                      className="bg-(--surface)/50 border-b-2 border-(--border) rounded-xl p-4 flex items-center justify-between animate-pulse"
                    >
                      <div className="flex items-center gap-4 min-w-0 flex-1">
                        <div className="h-10 w-10 sm:h-6 sm:w-6 rounded bg-(--border) shrink-0" />

                        <div className="flex-1 min-w-0">
                          <div className="h-4 w-40 rounded bg-(--border)" />
                          <div className="h-3 w-64 rounded bg-(--border) mt-2" />
                        </div>
                      </div>

                      <div className="h-5 w-5 rounded bg-(--border) shrink-0" />
                    </div>
                  ))
                : repos.map((repo) => (
                    <a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-(--surface)/50 border-b-2 border-(--border) rounded-xl p-4 flex items-center justify-between hover:border-(--text)/30 transition-colors"
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <FiGithub className="h-8 w-8 sm:h-6 sm:w-6 shrink-0 text-(--text)/80" />

                        <div className="min-w-0 flex-1">
                          <h3 className="text-sm sm:text-base font-heading font-semibold text-(--text) truncate">
                            {repo.name}
                          </h3>

                          <p className="text-xs text-(--text)/60 truncate mt-0.5">
                            {repo.description || "No description available"}
                          </p>
                        </div>
                      </div>

                      <FiExternalLink size={20} className="shrink-0" />
                    </a>
                  ))}

              <div className="flex items-center justify-between py-1 mt-2">
                <a
                  href={profileData?.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-1 text-(--text)/80 text-sm"
                >
                  View All Repos
                  <FiExternalLink size={20} className="shrink-0" />
                </a>

                <span className="text-xs text-(--text)/60 flex items-center gap-2">
                  <VscSyncCompact className="animate-[spin_3s_linear_infinite]" />
                  Auto-synced from GitHub
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GithubActivities;