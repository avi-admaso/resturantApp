import NavBarRoute from "./Components/NavBarRoute";
import TheFooter from "./Components/TheFooter";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Orders from "./Components/Orders";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function AppRouter() {
  return (
    <section className="allPAge">
      {/* <h1>navbar</h1> */}
      <BrowserRouter>
        <NavBarRoute />
        <Header />
        <div className="main">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Menu" element={<Menu />} />
            <Route exact path="/Orders" element={<Orders />} />
          </Routes>
        </div>
        <TheFooter />
      </BrowserRouter>
    </section>
  );
}
export default AppRouter;
