import "./JobPost.css";
import { JobPostData } from "./data";

interface JobPostProps {
  jobPost: JobPostData;
}

export const JobPost = ({ jobPost }: JobPostProps) => {
  return (
    <li className="job-post">
      <div className="company-post-info">
        <div className="company-info">
          {jobPost.logo && (
            <img src={jobPost.logo} alt={`${jobPost.company} logo`} />
          )}
          {jobPost.company && <p>{jobPost.company}</p>}
        </div>
        <div className="location-posted-at">
          {jobPost.location && <p>{jobPost.location}</p>}
          {jobPost.postedAt && <p>{jobPost.postedAt}</p>}
        </div>
      </div>
      <div className="job-info">
        <div className="position-info">
          <h3>Position</h3>
          {jobPost.position && <p>{jobPost.position}</p>}
          {jobPost.level && <p>{jobPost.level}</p>}
          {jobPost.role && <p>{jobPost.role}</p>}
          {jobPost.contract && <p>{jobPost.contract}</p>}
        </div>
        <div className="requirements">
          {((jobPost.languages && jobPost.languages.length > 0) ||
            (jobPost.tools && jobPost.tools.length > 0)) && (
            <h3>Requirements</h3>
          )}
          {jobPost.languages && jobPost.languages.length > 0 && (
            <ul>
              {jobPost.languages.map((language) => (
                <li
                  key={
                    jobPost.id + jobPost.company + jobPost.position + language
                  }
                >
                  {language}
                </li>
              ))}
            </ul>
          )}
          {jobPost.tools && jobPost.tools.length > 0 && (
            <ul>
              {jobPost.tools.map((tool) => (
                <li
                  key={jobPost.id + jobPost.company + jobPost.position + tool}
                >
                  {tool}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </li>
  );
};
