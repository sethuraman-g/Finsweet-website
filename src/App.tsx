import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { HomePage } from "./pages/HomePage/HomePage";
import { ServicePage } from "./pages/ServicePage/ServicePage";
import { CompanyPage } from "./pages/CompanyPage/CompanyPage";
import { TeamTemplatePage } from "./pages/CompanyPage/TeamTemplatePage";
import { CareerPage } from "./pages/CareerPage/CareerPage";
import { CareerPageInner } from "./pages/CareerPage/CareerPageInner";
import { BlogPage } from "./pages/BlogPage/BlogPage";
import { BlogInnerPage } from "./pages/BlogPage/BlogInnerPage";
import { ContactUs } from "./pages/ContactUsPage/ContactUs";
import { PrivacyPolicy } from "./pages/PrivacyPolicyPage/PrivacyPolicy";
import "./components/styles/main.scss";
import { AuthProvider } from "./components/utils/AuthContext";
import { Login } from "./components/SignIn/SignIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/sign-in" element={<Login />} />
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/Service" element={<ServicePage />} />
              <Route path="/Company" element={<CompanyPage />} />
              <Route path="/Career" element={<CareerPage />} />
              <Route path="/Blog" element={<BlogPage />} />
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
              <Route path="/BlogInnerPage" element={<BlogInnerPage />} />
              <Route path="/Career/:title" element={<CareerPageInner />} />
              <Route path="/TeamTemplatePage" element={<TeamTemplatePage />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
