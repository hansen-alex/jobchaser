import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../store/store.ts";
import { Loader } from "../components/Loader.tsx";
import { JobPostData } from "../types/data.ts";
import { JobPosts } from "../components/JobPosts.tsx";
import { Searchbar } from "../components/Searchbar.tsx";
import { Filters } from "../components/Filters.tsx";

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

  const [isLoading, setIsLoading] = useState(false);
  const [jobsData, setJobsData] = useState<JobPostData[]>([]);
  const [searchterm, setSearchterm] = useState<string>("");
  const filters = useSelector((state: RootState) => state.filters.filters);

  const handleSearchbarChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchterm(event.currentTarget.value);
  };

  return (
    <main>
      <Searchbar searchTerm={searchterm} onChange={handleSearchbarChange} />
      <Filters />
      {(isLoading && <Loader />) || (
        <JobPosts
          //This is probably really unnecessary and bad but im tired...
          //Yep still tired :/

          //Most sense in searching to be applied on whats left after filters are applied
          jobPostsData={jobsData
            //Filters filter pass (only run if one or more filters are applied)
            .filter((job) => {
              if (filters.positions.length > 0) {
                if (
                  filters.positions.filter(
                    (filter) =>
                      filter.toLowerCase() == job.position.toLowerCase()
                  ).length < 1
                )
                  return false;
              }

              if (filters.roles.length > 0) {
                if (
                  filters.roles.filter(
                    (filter) => filter.toLowerCase() == job.role.toLowerCase()
                  ).length < 1
                )
                  return false;
              }

              if (filters.levels.length > 0) {
                if (
                  filters.levels.filter(
                    (filter) => filter.toLowerCase() == job.level.toLowerCase()
                  ).length < 1
                )
                  return false;
              }

              if (filters.companies.length > 0) {
                if (
                  filters.companies.filter(
                    (filter) =>
                      filter.toLowerCase() == job.company.toLowerCase()
                  ).length < 1
                )
                  return false;
              }

              if (filters.contracts.length > 0) {
                if (
                  filters.contracts.filter(
                    (filter) =>
                      filter.toLowerCase() == job.contract.toLowerCase()
                  ).length < 1
                )
                  return false;
              }

              if (filters.locations.length > 0) {
                if (
                  filters.locations.filter(
                    (filter) =>
                      filter.toLowerCase() == job.location.toLowerCase()
                  ).length < 1
                )
                  return false;
              }

              return true;
            })
            //Searchbar filter pass
            .filter((job) => {
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
