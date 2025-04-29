import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation(){
    const favoritesCtx = useContext(FavoritesContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    return(
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <button className={classes.menuButton} onClick={toggleMenu}>
                {isMenuOpen ? '✕' : '☰'}
            </button>
            <nav className={isMenuOpen ? classes.open : ''}>
                <ul>
                    <li><Link to='/' onClick={() => setIsMenuOpen(false)}>All Meetups</Link></li>
                    <li><Link to='/new-meetup' onClick={() => setIsMenuOpen(false)}>Add New Meetup</Link></li>
                    <li><Link to='/favorites' onClick={() => setIsMenuOpen(false)}>My Favorites<span className={classes.badge}>{favoritesCtx.totalFavorites}</span></Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;