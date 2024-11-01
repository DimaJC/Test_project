import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// import "./styles.scss";

const routes = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/vera/contacts",
    title: "contacts",
  },
  {
    to: "/to-do-list",
    title: "to-do-list",
  },
  {
    to: "/user-filter",
    title: "user-filter",
  },
  {
    to: "/persons",
    title: "persons",
  },
  {
    to: "/filter-system",
    title: "filter-system",
  },
];
const EdgarHeader = () => {
  const renderRoutes = useMemo(
    () =>
      routes.map(({ to, title }, index) => (
        <Link key={index} to={to}>
          {title}
        </Link>
      )),
    [routes]
  );

  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header>
      {renderRoutes}
      <div>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('uk')}>Українська</button>
        <div>
          <span>{t('test_1')} </span>
          <span>{t('test_2')} </span>
          <span>{t('test_3')} </span>
        </div>
      </div>
    </header>
  );
};

export default EdgarHeader;
