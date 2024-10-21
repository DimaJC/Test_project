import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./img/Logo.png";
import "./style.scss";

const peopleRoutes = {
  "Dima": [
    {
        name: 'Dima',
        to: '/Dima',
        title: 'Home'
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
      to: '/LightFolio',
      title: 'LightFolio'
    }
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
        <button onClick={handleClick("Dima")}>Dima</button>
        <button onClick={handleClick("Vera")}>Vera</button>
        <button onClick={handleClick("Edgar")}>Edgar</button>

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
