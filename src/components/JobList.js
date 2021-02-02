import React, { useEffect, useState } from "react";
import "../styles/App.css";
import { jobData } from "../data";
import Job from "./Job";
function JobList() {
  const [jobs, setJobs] = useState(jobData);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [search, setSearch] = useState(null);
  return (
    <div className="JobList">
      <div className="filters-container">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Filter Job"
        />
      </div>

      <div className="jobList-cards">
        {jobs
          .filter((data) => {
            if (search == null) return data;
            else if (
              data.position.toLowerCase().includes(search.toLowerCase()) ||
              data.role.toLowerCase().includes(search.toLowerCase()) ||
              data.languages
                .map((lang) => lang.toLowerCase())
                .includes(search.toLowerCase()) ||
              data.tools
                .map((tool) => tool.toLowerCase())
                .includes(search.toLowerCase())
            ) {
              return data;
            }
          })
          .map((data) => {
            return (
              <Job
                key={data.id}
                id={data.id}
                company={data.company}
                logo={data.logo}
                newText={data.new}
                featured={data.featured}
                position={data.position}
                role={data.role}
                level={data.level}
                postedAt={data.postedAt}
                contract={data.contract}
                location={data.location}
                languages={data.languages}
                tools={data.tools}
              />
            );
          })}
      </div>
    </div>
  );
}

export default JobList;
