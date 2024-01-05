import { Outlet } from "react-router-dom"
import { FooterComponent } from "../components/footer/FooterComponent"
import { HeaderComponent } from "../components/header/HeaderComponent"


export const Layout = () => {
  return (
    <div>
        <HeaderComponent/>
        <Outlet/>
        <FooterComponent/>
    </div>
  )
}
