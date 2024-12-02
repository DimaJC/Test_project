import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./img/Logo.png";
import "./style.scss";

const peopleRoutes = {
  "Dima": [
    {
        name: 'Dima',
        to: '/Dima',
        title: 'Home',
    },
    {
      name: 'Dima',
      to: '/dima/to-do-list',
      title: 'ToDoList',
    }
  ],
  "Vera": [
    {
      name: 'Vera',
      to: '/Vera',
      title: 'Home'
    }
  ],
  "Edgar": [
    {
      name: 'Edgar',
      to: '/Edgar',
      title: 'Home'
    },
    {
      name: 'Edgar',
      to: '/filter-system',
      title: 'FilterSystem'
    },
    {
      name: 'Edgar',
      to: '/Edgaras/Templates',
      title: 'LightFolio'
    },
    {
      name: 'Edgar',
      to: '/Edgaras/Rezume',
      title: 'Rezume'
    },
  ],
};

const Header = () => {
  const [Class, setNewClass] = useState(null);

  const handleClick = (name) => () => {
    setNewClass((prevClass) => (prevClass === name ? null : name));
  };

  const renderLink = useMemo(() => {
    if (!Class || !peopleRoutes[Class]) return null;

    return peopleRoutes[Class].map(route => (
      <Link key={route.to} to={route.to}>
        {route.title}
      </Link>
    ));
  }, [Class]);

  const renderSubNav = () => {
    return (
      <div className="SubNav">
        <button className="mini-but" onClick={handleClick("Dima")}>Dima</button>
        <button className="mini-but" onClick={handleClick("Vera")}>Vera</button>
        <button className="mini-but" onClick={handleClick("Edgar")}>Edgar</button>

        {Class && (<div className={`SubNavContent ${Class}`}>
                    {renderLink}
                  </div>
        )}
      </div>
      )}

  const RenderHeadElements = () => {
    return (
      <div className="Container">
        <div className="imgContainer">
          <img src={Logo} alt="" />
        </div>
        <div className="nav">
          {renderSubNav()}
        </div>
        <div className="Refresh">
          <button>Refresh Page</button>
        </div>
      </div>
    );
  };

  return <header>{RenderHeadElements()}</header>;
};

export default Header;
