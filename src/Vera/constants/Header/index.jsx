import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/constantsRoute";

import './styles.scss'

const veraRoutes = [
    {
      to: ROUTES.VERA_CONTACTS,
      title: "contacts",
    },
    {
      to: ROUTES.VERA_FILTER,
      title: "Filter",
    },
  ];
  const dimaRoutes = [
    {
      to: ROUTES.DIMA_MAIN,
      title: "Dima Main",
    },
    {
      to: ROUTES.DIMA_PERSONS,
      title: "Dima Persons",
    },
    {
      to: ROUTES.DIMA_TO_DO_LIST,
      title: "Dima To-Do-List",
    },
  ];
  const edgarRoutes = [
    {
      to: ROUTES.EDGAR_PEAPLE_LIST,
      title: "Edgar Peaple List",
    },
  ];

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const renderRoutes = (routes) =>
    routes.map(({ to, title }) => (
      <Link className="TaskLinks" to={to} key={to}>
        <button className="TaskButtons">{title}</button>
      </Link>
    ));

  return (
    <header className="header">
      <div>
        <button className="HeaderButton" onClick={() => setActiveMenu(activeMenu === "vera" ? null : "vera")}>
          Vera
        </button>
        {activeMenu === "vera" && (
          <div className="SubNavContent SubNavContentVera">
            {renderRoutes(veraRoutes)}
          </div>
        )}
      </div>
      <div>
        <button className="HeaderButton" onClick={() => setActiveMenu(activeMenu === "dima" ? null : "dima")}>
          Dima
        </button>
        {activeMenu === "dima" && (
          <div className=" SubNavContent SubNavContentDima">
            {renderRoutes(dimaRoutes)}
          </div>
        )}
      </div>
      <div>
        <button  className="HeaderButton" onClick={() => setActiveMenu(activeMenu === "edgar" ? null : "edgar")}>
          Edgar
        </button>
        {activeMenu === "edgar" && (
          <div className=" SubNavContent SubNavContentEdgar">
            {renderRoutes(edgarRoutes)}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;