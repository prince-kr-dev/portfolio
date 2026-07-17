const GITHUB_USERNAME = "prince-kr-dev";
const CACHE_KEY = "github_profile_data";
const CACHE_TIME = 24 * 60 * 60 * 1000; // 24 hours

const LEETCODE_USERNAME = "princek_ds";
// 1. Fetch GitHub Data Only
export const fetchGitHubData = async () => {
  try {
    const cached = localStorage.getItem(CACHE_KEY);

    if (cached) {
      const { data, timestamp } = JSON.parse(cached);

      if (Date.now() - timestamp < CACHE_TIME) {
        return data;
      }
    }

    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);

    if (!res.ok) throw new Error("GitHub API failed to load.");

    const data = await res.json();

    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({
        data,
        timestamp: Date.now(),
      })
    );

    return data;
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    throw error;
  }
};

// 2. Fetch LeetCode Data Only
export const fetchLeetCodeData = async () => {
  try {
    const res = await fetch(
      `https://leetcode-stats.tashif.codes/${LEETCODE_USERNAME}`
    );
    if (!res.ok) throw new Error("LeetCode API failed to load.");
    return await res.json();
  } catch (error) {
    console.error("Error fetching LeetCode data:", error);
    throw error;
  }
};


export const fetchTopFollowers = async () => {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/followers?per_page=5`
    );

    if (!res.ok) throw new Error("Failed to fetch followers.");

    return await res.json();
  } catch (error) {
    console.error("Error fetching followers:", error);
    throw error;
  }
};

export const fetchTopRepos = async () => {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=5`
    );

    if (!res.ok) throw new Error("Failed to fetch repositories.");

    return await res.json();
  } catch (error) {
    console.error("Error fetching repositories:", error);
    throw error;
  }
};