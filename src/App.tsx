import { useState, useEffect } from "react";
import axios from "axios";
import { Loader } from "./Loader.tsx";
import { JobPostData } from "./data.ts";
import { JobPosts } from "./JobPosts.tsx";

function App() {
  useEffect(() => {
    const getJobs = async (): Promise<void> => {
      setIsLoading(true);

      await new Promise((res) => setTimeout(res, 1000)); //Manual delay to test loading

      try {
        const response = await axios.get("src/assets/data/data.json");
        setJobsData(response.data.jobs);
      } catch (error) {
        // if(axios.isAxiosError(error)) {console.log(error as AxiosError)}
        console.log(error);
      }

      setIsLoading(false);
    };

    getJobs();
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const [jobsData, setJobsData] = useState<JobPostData[]>([]);

  return (
    <>{(isLoading && <Loader />) || <JobPosts jobPostsData={jobsData} />}</>
  );
}

export default App;
