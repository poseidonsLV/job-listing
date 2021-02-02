import React from "react";

function Job({
  id,
  company,
  logo,
  newText,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}) {
  return (
    <div key={id} style={{ margin: "10px 0", width: "100%" }} className="Job">
      <div className="jobList-card">
        <div className="left-side">
          <div className="job-logo">
            <img src={logo} alt="company-logo" />
          </div>
          <div className="job-header">
            <div className="job-header-row-1">
              <div className="job-company">
                <p>{company}</p>
              </div>
              {newText && (
                <div className="job-new">
                  <p>NEW!</p>
                </div>
              )}
              {featured && (
                <div className="job-featured">
                  <p>FEATURED</p>
                </div>
              )}
            </div>
            <div className="job-header-row-2">
              <div className="job-position">
                <p>{position}</p>
              </div>
            </div>
            <div className="job-header-row-3">
              <div className="job-posted">
                <p>{postedAt}</p>
              </div>
              <div className="job-contract">
                <p>{contract}</p>
              </div>
              <div className="job-location">
                <p>{location}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="job-tags">
            <p>{role}</p>
            <p>{level}</p>
            {languages.map((lang) => (
              <p>{lang}</p>
            ))}
            {tools.map((tool) => (
              <p>{tool}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Job;
