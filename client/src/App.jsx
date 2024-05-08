import { Route, Routes } from "react-router-dom";

import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<IndexPage />} />
        <Route />
      </Routes>
    </>
  );
}

export default App;
