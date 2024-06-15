import React, { useState } from 'react';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('student'); // Default user type

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Logging in as ${userType} with Email: ${email}, Password: ${password}`);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="mt-5 p-4 bg-white rounded shadow" style={{ maxWidth: '400px',margin:'auto'}}>
     <div className="p-4" style={{ maxWidth: '400px', width: '100%', }}>
      <h2 className="text-center mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">User Type</label>
          <select
            className="form-control"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            required
          >
            <option value="student">Student</option>
            <option value="company">Company</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-100 mt-3">Login</button>
        <div className="text-center mt-3">
          <a href="/reset-password" className="text-primary">Forgot your password?</a>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Login;
