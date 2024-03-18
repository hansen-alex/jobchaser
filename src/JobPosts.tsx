import "./JobPosts.css";
import { JobPost } from "./JobPost";
import { JobPostData } from "./data";

interface JobPostsProps {
  jobPosts: JobPostData[];
}

export const JobPosts = ({ jobPosts }: JobPostsProps) => {
  console.log(jobPosts);

  return (
    <ul className="job-posts">
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
