import { JobPost } from "./JobPost";
import { JobPostData } from "./data";

interface JobPostsProps {
  jobPosts: JobPostData[];
}

export const JobPosts = ({ jobPosts }: JobPostsProps) => {
  console.log(jobPosts);

  return (
    <ul>
      {jobPosts &&
        jobPosts.map((jobPost: JobPostData) => {
          return (
            jobPost && (
              <JobPost
                key={jobPost.id + jobPost.company + jobPost.position}
                jobPost={jobPost}
              />
            )
          );
        })}
    </ul>
  );
};
