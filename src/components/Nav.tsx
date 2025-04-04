import { NavLink } from 'react-router';

function Nav() {
    return (
        <nav>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
                Home
            </NavLink>
            <NavLink to='/vegan-cuisine' className={({ isActive }) => (isActive ? 'active' : '')}>
                Веганская кухня
            </NavLink>
            <NavLink to='/juiciest' className={({ isActive }) => (isActive ? 'active' : '')}>
                Самое сочное
            </NavLink>
        </nav>
    );
}

export default Nav;
