import React from "react";
import { Route, Routes } from "react-router-dom";
import style from "./App.module.scss";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";

function App() {
  return (
    <div className={style.AppStyle}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
