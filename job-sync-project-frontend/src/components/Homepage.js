import React from "react";

const Homepage = () => {
  return (
    <div className="main-heading">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="mb-2">
              JOB SYNC <span>SOLUTION</span>
            </h1>
            <strong>
            "Empowering Careers Through Seamless Synchronization."
            </strong>
            <p>
            The <b>Job Sync Portal</b> transforms job search and hiring processes by providing a seamless
            platform for professionals and employers to connect. With intuitive features for posting
            and managing job listings, as well as tools for tracking applications and profiles,
            our portal simplifies every step from job discovery to hiring. Real-time updates,
            advanced search filters, and secure data management ensure a streamlined and efficient
            experience for both job seekers and recruiters. Whether you're looking to advance your
            career or fill a position quickly, the Job Sync Portal is your gateway to success in
            the job market.
            </p>
          </div>
          <div className="col-md-6 mg-img">
            <img src={require("../images/5239.jpg")} alt="Employee portal" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
