import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Card from "./pages/Envelope/Card";
import Formulir from "./pages/Formulir";
// const GeneratePage = React.lazy(() => import('./pages/generate'));
// const ViewPage = React.lazy(() => import('./pages/view'));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/card" element={<Card />} />
          <Route path="/generate" element={<Formulir />} />
          {/* <Route path="/generate" element={<GeneratePage />} /> */}
          {/* <Route path="/view" element={<ViewPage />} /> */}
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
