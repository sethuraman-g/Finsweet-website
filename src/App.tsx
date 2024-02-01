import "./App.css";
import "./components/styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Layout  from "./pages/Layout";
import  HomePage  from "./pages/HomePage/HomePage";
import  ServicePage  from "./pages/ServicePage/ServicePage";
import  CompanyPage  from "./pages/CompanyPage/CompanyPage";
import  TeamTemplatePage  from "./pages/CompanyPage/TeamTemplatePage";
import  CareerPage  from "./pages/CareerPage/CareerPage";
import  CareerPageInner  from "./pages/CareerPage/CareerPageInner";
import  BlogPage  from "./pages/BlogPage/BlogPage";
import  BlogInnerPage  from "./pages/BlogPage/BlogInnerPage";
import  ContactUs  from "./pages/ContactUsPage/ContactUs";
import  PrivacyPolicy  from "./pages/PrivacyPolicyPage/PrivacyPolicy";
import  Login  from "./components/SignIn/SignIn";
import { AuthProvider } from "./components/utils/AuthContext";


function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/sign-in" element={<Login />} />
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/service" element={<ServicePage />} />
              <Route path="/company" element={<CompanyPage />} />
              <Route path="/career" element={<CareerPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/blog/inner-blog" element={<BlogInnerPage />} />
              <Route path="/career/:title" element={<CareerPageInner />} />
              <Route path="/company/team-template-page" element={<TeamTemplatePage />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
