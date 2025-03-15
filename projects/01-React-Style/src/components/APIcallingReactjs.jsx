import React, { useEffect, useState } from "react";

const JobStories = () => {
  const [jobStories, setJobStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobStories = async () => {
      try {
        // Fetch job story IDs
        const response = await fetch(
          "https://hacker-news.firebaseio.com/v0/jobstories.json"
        );
        const storyIds = await response.json();

        // Fetch details of the first 10 job stories
        const jobDetails = await Promise.all(
          storyIds.slice(0, 10).map(async (id) => {
            const storyResponse = await fetch(
              `https://hacker-news.firebaseio.com/v0/item/${id}.json`
            );
            return await storyResponse.json();
          })
        );

        setJobStories(jobDetails);
      } catch (error) {
        console.error("Error fetching job stories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobStories();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Hacker News Job Stories</h1>
      <ul>
        {jobStories.map((story) => (
          <li key={story.id}>
            <h2>{story.title}</h2>
            <p>{new Date(story.time * 1000).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobStories;
