import React, { useMemo } from "react";
import { Link } from "react-router-dom";

import './styles.scss'

const routes = [
    {
        to: '/',
        title: 'Home'
    },
    {
        to: '/vera/contacts',
        title: 'contacts'
    },
    {
        to: '/to-do-list',
        title: 'to-do-list'
    },
    {
        to: '/user-filter',
        title: 'user-filter'
    },
    {
        to: '/persons',
        title: 'persons'
    },
    {
        to: '/filter-system',
        title: 'filter-system'
    },
];

const Header = () => {
    const renderRoutes = useMemo(
        () => routes.map(({ to, title }) => <Link to={to}>{title}</Link>),
        [routes]
    );

    return (
        <header>
            {renderRoutes}
        </header>
    )
}

export default Header;
