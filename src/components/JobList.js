import React, { useState, useMemo } from "react";
import "../styles/App.css";
import { jobData } from "../data";
import Job from "./Job";
function JobList() {
  const [search, setSearch] = useState(null);

  const filteredData = useMemo(() => {
    if (!search) {
      return jobData;
    }

    const lowerCasedSearch = search.toLowerCase();

    return jobData.filter((data) => {
      const matchesPosition = data.position
        .toLowerCase()
        .includes(lowerCasedSearch);
      const matchesRole = data.role.toLowerCase().includes(lowerCasedSearch);

      if (matchesPosition || matchesRole) {
        return true;
      }

      const matchesLanguage = data.languages.some((lang) =>
        lang.toLowerCase().includes(lowerCasedSearch)
      );

      if (matchesLanguage) {
        return true;
      }

      const matchesTool =
        data.tool !== undefined &&
        data.tool.some((tool) => tool.toLowerCase().includes(lowerCasedSearch));
      return matchesTool;
    });
  }, [search]);

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
        {filteredData.map((dataset) => (
          <Job key={dataset.id} {...dataset} />
        ))}
      </div>
    </div>
  );
}

export default JobList;
