import { useState, useEffect } from "react";
import axios from "axios";
import { JobPostData } from "./data.ts";
import { JobPosts } from "./JobPosts.tsx";

function App() {
  useEffect(() => {
    const getJobs = async (): Promise<void> => {
      try {
        const response = await axios.get("src/assets/data/data.json");
        setJobsData(response.data.jobs);
      } catch (error) {
        // if(axios.isAxiosError(error)) {console.log(error as AxiosError)}
        console.log(error);
      }
    };
    getJobs();
  }, []);

  const [jobsData, setJobsData] = useState<JobPostData[]>([]);

  return (
    <>
      <JobPosts jobPostsData={jobsData} />
    </>
  );
}

export default App;
