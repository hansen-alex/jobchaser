import { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { Loader } from "../components/Loader.tsx";
import { JobPostData } from "../types/data.ts";
import { JobPosts } from "../components/JobPosts.tsx";
import { Searchbar } from "../components/Searchbar.tsx";

import { AuthenticationContext } from "../context/AuthenticationContext.tsx";

export const JobsPage = () => {
  useEffect(() => {
    const getJobs = async (): Promise<void> => {
      setIsLoading(true);

      await new Promise((res) => setTimeout(res, 1000)); //Manual delay to test loading state

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

  const isAuthenticated = useContext(AuthenticationContext) !== null;
  const [isLoading, setIsLoading] = useState(false);
  const [jobsData, setJobsData] = useState<JobPostData[]>([]);
  const [searchterm, setSearchterm] = useState<string>("");

  const handleSearchbarChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchterm(event.currentTarget.value);
  };

  return (
    <main>
      {!isAuthenticated && <Navigate to={"/signin"} replace={true} />}

      <Searchbar searchTerm={searchterm} onChange={handleSearchbarChange} />
      {(isLoading && <Loader />) || (
        <JobPosts
          jobPostsData={jobsData.filter((job) => {
            //This is probably really unnecessary and bad but im tired...
            return (
              job.position.toLowerCase().includes(searchterm.toLowerCase()) ||
              job.role.toLowerCase().includes(searchterm.toLowerCase()) ||
              job.level.toLowerCase().includes(searchterm.toLowerCase()) ||
              job.company.toLowerCase().includes(searchterm.toLowerCase()) ||
              job.contract.toLowerCase().includes(searchterm.toLowerCase()) ||
              job.location.toLowerCase().includes(searchterm.toLowerCase()) ||
              job.languages.filter((language) => {
                return language
                  .toLowerCase()
                  .includes(searchterm.toLowerCase());
              }).length > 0 ||
              job.tools.filter((tool) => {
                return tool.toLowerCase().includes(searchterm.toLowerCase());
              }).length > 0
            );
          })}
        />
      )}
    </main>
  );
};
