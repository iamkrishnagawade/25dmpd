import './SideNav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faChartLine, faIndustry, faNewspaper, faCog } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
    return (
        <div className="side-nav">
            <div className="side-nav__items">
                <NavLink to="/" className="disabled" exact>
                    <FontAwesomeIcon icon={ faChartPie } /> 
                    <span>Home</span>
                </NavLink>
                <NavLink to="/live" className="">
                    <FontAwesomeIcon icon={ faChartLine } />
                    <span>Live</span>
                </NavLink>
                <NavLink to="/companies" className="disabled">
                    <FontAwesomeIcon icon={ faIndustry } />
                    <span>Companies</span>
                </NavLink>
                <NavLink to="/news" className="disabled">
                    <FontAwesomeIcon icon={ faNewspaper } />
                    <span>News</span>
                </NavLink>
                <NavLink to="/settings" className="disabled">
                    <FontAwesomeIcon icon={ faCog } />
                    <span>Settings</span>
                </NavLink>
            </div>
        </div>
    )
}

export default SideNav;