import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { HomePage } from './pages/HomePage/HomePage';
import { ServicePage } from './pages/ServicePage/ServicePage';
import { CompanyPage } from './pages/CompanyPage/CompanyPage';
import { CareerPage } from './pages/CareerPage/CareerPage';
import { ContactUs } from './pages/ContactUsPage/ContactUs';
import { PrivacyPolicy } from './pages/PrivacyPolicyPage/PrivacyPolicy';
import { BlogPage } from './pages/BlogPage/BlogPage';
import { BlogInnerPage } from './pages/BlogPage/BlogInnerPage';
import { CareerPageInner } from './pages/CareerPage/CareerPageInner';
import { TeamTemplatePage } from './pages/CompanyPage/TeamTemplatePage';
import './components/styles/main.scss'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage/>}/>
          <Route path='/ServicePage' element={<ServicePage/>}/>
          <Route path='/CompanyPage' element={<CompanyPage/>}/>
          <Route path='/CareerPage' element={<CareerPage/>}/>
          <Route path='/BlogPage' element={<BlogPage/>}/>
          <Route path='/ContactUsPage' element={<ContactUs/>}/>
          <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}/>
          <Route path='/BlogInnerPage' element={<BlogInnerPage/>}/>
          <Route path='/CareerPageInner' element={<CareerPageInner/>}/>
          <Route path='/TeamTemplatePage' element={<TeamTemplatePage/>}/>
        </Route>  
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
