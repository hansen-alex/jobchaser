import style from "./JobPost.module.css";
import { JobPostData } from "../types/data";

interface JobPostProps {
  jobPostData: JobPostData;
}

export const JobPost = ({ jobPostData }: JobPostProps) => {
  return (
    <li className={style.jobPost}>
      <div className={style.companyPostInfo}>
        <div className={style.companyInfo}>
          {jobPostData.logo && (
            <img src={jobPostData.logo} alt={`${jobPostData.company} logo`} />
          )}
          {jobPostData.company && <p>{jobPostData.company}</p>}
        </div>
        <div className={style.locationPostedAt}>
          {jobPostData.location && <p>{jobPostData.location}</p>}
          {jobPostData.postedAt && <p>{jobPostData.postedAt}</p>}
        </div>
      </div>
      <div className={style.jobInfo}>
        <div className={style.positionInfo}>
          <h3>Position</h3>
          {jobPostData.position && <p>{jobPostData.position}</p>}
          {jobPostData.level && <p>{jobPostData.level}</p>}
          {jobPostData.role && <p>{jobPostData.role}</p>}
          {jobPostData.contract && <p>{jobPostData.contract}</p>}
        </div>
        <div className={style.requirements}>
          {((jobPostData.languages && jobPostData.languages.length > 0) ||
            (jobPostData.tools && jobPostData.tools.length > 0)) && (
            <h3>Requirements</h3>
          )}
          {jobPostData.languages && jobPostData.languages.length > 0 && (
            <ul>
              {jobPostData.languages.map((language) => (
                <li
                  key={
                    jobPostData.id +
                    jobPostData.company +
                    jobPostData.position +
                    language
                  }
                >
                  {language}
                </li>
              ))}
            </ul>
          )}
          {jobPostData.tools && jobPostData.tools.length > 0 && (
            <ul>
              {jobPostData.tools.map((tool) => (
                <li
                  key={
                    jobPostData.id +
                    jobPostData.company +
                    jobPostData.position +
                    tool
                  }
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
