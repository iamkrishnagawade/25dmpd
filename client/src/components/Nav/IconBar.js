import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import './IconBar.scss';

const IconBar = () => {
    return (
        <div className="icon-bar">
            <div className="icon-bar__items">
                <NavLink to="/live-market">
                    <FontAwesomeIcon icon={ faChartLine } />
                    <span>Market</span>
                </NavLink>
                <NavLink to="/companies">
                    <FontAwesomeIcon icon={ faBuilding } />
                    <span>Companies</span>
                </NavLink>
            </div>
        </div>
    )
}

export default IconBar;