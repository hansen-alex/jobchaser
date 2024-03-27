import style from "./JobPosts.module.css";
import { JobPost } from "./JobPost";
import { JobPostData } from "./data";

interface JobPostsProps {
  jobPostsData: JobPostData[];
}

export const JobPosts = ({ jobPostsData }: JobPostsProps) => {
  console.log(jobPostsData);

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
