import { Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./UserContext";

import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Layout from "./Layout";
import axios from "axios";
import AccountPage from "./pages/AccountPage";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="/user/login" element={<LoginPage />} />
            <Route path="/user/register" element={<RegisterPage />} />
            <Route path="/user/account/:subpage?" element={<AccountPage />} />
            <Route
              path="/user/account/:subpage/:action"
              element={<AccountPage />}
            />
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
