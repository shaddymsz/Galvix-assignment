import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Design = React.lazy(() => import("pages/Design"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Design />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
