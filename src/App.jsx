import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import { routes } from "./Components/utils/routes";
import { useContext, useEffect } from "react";
import { ContextGlobal } from "./Components/utils/global.context";

function App() {
  useEffect(() => {
    localStorage.clear();
    console.log("LocalStorage limpiado al iniciar la aplicación");
  }, []);
  const { state, toggleTheme } = useContext(ContextGlobal);

  return (
    <div className={state.theme === "light" ? "light-theme" : "dark"}>
      <Navbar toggleTheme={toggleTheme} state={state}/>
      <Routes>
        <Route path={routes.home} element={<Home state={state} />} />
        <Route path="/dentista/:id" element={<Detail state={state} />} />
        <Route path={routes.contact} element={<Contact state={state} />} />
        <Route path={routes.favs} element={<Favs state={state} />} />
        <Route
          path={routes.notFound}
          element={<h1>Error 404 - Page not Found </h1>}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
