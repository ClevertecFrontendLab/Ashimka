import { Outlet } from 'react-router';

import Header from './Header/Header';
import Nav from './Nav';

export default function Layout() {
    return (
        <>
            <Header />
            <Nav />
            <Outlet />
        </>
    );
}
