import { JobPostData } from "./data";

interface JobPostProps {
  jobPost: JobPostData;
}

export const JobPost = ({ jobPost }: JobPostProps) => {
  return (
    <li>
      {jobPost.logo && (
        <img src={jobPost.logo} alt={`${jobPost.company} logo`} />
      )}
      {jobPost.company && jobPost.company}
      {jobPost.position && jobPost.position}
      {jobPost.role && jobPost.role}
      {jobPost.level && jobPost.level}
      {jobPost.postedAt && jobPost.postedAt}
      {jobPost.contract && jobPost.contract}
      {jobPost.location && jobPost.location}
      {jobPost.languages && jobPost.languages}
      {jobPost.tools && jobPost.tools}
    </li>
  );
};
