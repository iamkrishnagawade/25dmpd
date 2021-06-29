import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faNewspaper, faIndustry, faCog } from '@fortawesome/free-solid-svg-icons';
import './TopNav.scss';

const TopNav = () => {
    return (
        <div className="top-nav d-flex justify-content-between">
            <div className="items-left">
                <NavLink to="/" exact>
                    <FontAwesomeIcon icon={ faChartLine } />
                </NavLink>
                <NavLink to="/news-feeds">
                    <FontAwesomeIcon icon={ faNewspaper } />
                </NavLink>
                <NavLink to="/se-companies">
                    <FontAwesomeIcon icon={ faIndustry } />
                </NavLink>
            </div>
            <div className="items-right">
                <NavLink to="/settings">
                    <FontAwesomeIcon icon={ faCog } />
                </NavLink>
            </div>
        </div>
    )
}

export default TopNav;