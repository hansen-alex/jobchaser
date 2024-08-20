import style from "./JobPosts.module.css";
import { JobPost } from "./JobPost";
import { JobPostData } from "../types/data";

interface JobPostsProps {
  jobPostsData: JobPostData[];
}

export const JobPosts = ({ jobPostsData }: JobPostsProps) => {
  return (
    <ul className={style.jobPosts}>
      {jobPostsData &&
        jobPostsData.map((jobPost: JobPostData) => {
          return (
            jobPost && (
              <JobPost
                key={jobPost.id + jobPost.company + jobPost.position}
                jobPostData={jobPost}
              />
            )
          );
        })}
    </ul>
  );
};
