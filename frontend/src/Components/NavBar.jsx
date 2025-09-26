import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import './styles/NavBar.css';


const navLinks = [
    { name: 'Home', href: '#home', isActive: true },
    { name: 'Bikes', href: '#bikes' },
    { name: 'Scooters', href: '#scooters' },
    { name: 'EVs', href: '#evs' },
    { name: 'Tools', href: '#tools' },
    { name: 'Upcoming', href: '#upcoming' },
    { name: 'Sell Your Bike', href: '#sell' },
    { name: 'Showrooms', href: '#showrooms' },
];

const NavItem = ({ name, href, isActive }) => {
    const classes = isActive ? 'nav-item nav-item-active' : 'nav-item';
    return (
        <a href={href} className={classes}>
            {name}
        </a>
    );
};

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const mobileMenuClass = `mobile-menu ${isMenuOpen ? 'open' : ''}`;

    return (
        <header className="header">
            <div className="header-container">
                <div className="nav-content">
                    <div className="nav-group-left">
                        <div className="logo-container">
                            <a href="/" className="logo">
                                <span className="logo-cyan">Bike</span>
                                <span className="logo-white">Hub</span>
                            </a>
                        </div>
                        <nav className="nav-desktop">
                            {navLinks.map((link) => (
                                <NavItem key={link.name} {...link} />
                            ))}
                        </nav>
                    </div>
                    <div className="nav-group-right">
                        <div className="search-bar-desktop">
                            <div className="search-relative">
                                <input
                                    type="text"
                                    placeholder="Search bikes, scooters..."
                                    className="search-input"
                                />
                                <Search className="search-icon" strokeWidth={2} />
                            </div>
                        </div>
                        <div className="menu-button-mobile">
                            <button
                                onClick={toggleMenu}
                                className="menu-button"
                                aria-expanded={isMenuOpen}
                                aria-label={isMenuOpen ? 'Close main menu' : 'Open main menu'}
                            >
                                {isMenuOpen ? (
                                    <X className="menu-icon" aria-hidden="true" />
                                ) : (
                                    <Menu className="menu-icon" aria-hidden="true" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={mobileMenuClass}>
                <div className="mobile-menu-inner">
                    <div className="search-bar-mobile">
                        <div className="search-relative">
                            <input
                                type="text"
                                placeholder="Search bikes, scooters..."
                                className="search-input-mobile"
                            />
                            <Search className="search-icon" strokeWidth={2} />
                        </div>
                    </div>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={link.isActive ? 'nav-item-mobile nav-item-mobile-active' : 'nav-item-mobile'}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default NavBar;
