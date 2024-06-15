import React from 'react';


const About = () => {


  const sectionStyle = {
    backgroundColor: '#f9f9f9',
    padding: '50px',
    borderRadius: '8px',
    marginBottom: '40px',
  };

  const paragraphStyle = {
    color: '#555',
    fontSize: '18px',
    lineHeight: '1.6',
  };

  return (
    <div className="container" >
      <h1 className="text-center" >About Us</h1>
      <div>
      <div className="d-flex align-items-center justify-content-between" style={sectionStyle}>
      <img src={require("../images/about1.jpeg")} alt="about1" />
        <p className="w-50 ml-4" style={paragraphStyle}>
          Welcome to Jobs Sync Solution, a web-based platform designed to connect job seekers, particularly international students, with potential employers. Our platform allows employers to publish job openings and efficiently manage the hiring process for both part-time and full-time roles.
        </p>
      </div>
      <div className="d-flex align-items-center justify-content-between flex-row-reverse" style={sectionStyle}>
      <img src={require("../images/about2.jpeg")} alt="about2" style={{width:'500px',height:'300px' }} />
        <p className="w-50 mr-4" style={paragraphStyle}>
          Our mission is to create a seamless experience for job seekers, companies, and administrators. Each user group has its own dedicated login and registration pages, along with features tailored to their specific responsibilities. Whether you're looking for your next job opportunity or the perfect candidate, Jobs Sync Solution is here to help.
        </p>
      </div>
      <div className="d-flex align-items-center justify-content-between" style={sectionStyle}>
      <img src={require("../images/about3.jpeg")} alt="about3" style={{width:'500px',height:'300px' }} />
        <p className="w-50 ml-4" style={paragraphStyle}>
          At Jobs Sync Solution, we are committed to innovation and continuous improvement. We regularly update our platform with the latest technologies to ensure a smooth and efficient user experience. Our dedicated support team is always ready to assist users, making sure that both job seekers and employers achieve their goals effectively and efficiently.
        </p>
      </div>
      </div>
    </div>
  );
};

export default About;
