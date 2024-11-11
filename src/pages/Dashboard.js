import React, { useState } from "react";

const Dashboard = () => {
  const [video, setVideo] = useState(null);
  const [result, setResult] = useState("");

  const handleVideoUpload = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleAnalyze = () => {
    // Simulate sending video to backend for analysis
    console.log("Analyzing:", video);
    // Dummy result
    setResult("Fake or Real (based on analysis result)");
  };

  return (
    <div className="dashboard">
      <h2>Video Analysis Dashboard</h2>
      <input
        type="file"
        accept="video/*"
        onChange={handleVideoUpload}
      />
      <button onClick={handleAnalyze} disabled={!video}>
        Analyze Video
      </button>
      {result && <div className="result">Result: {result}</div>}
    </div>
  );
};

export default Dashboard;
