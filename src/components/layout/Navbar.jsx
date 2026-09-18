/** @format */

import React, {useState, useEffect} from 'react';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import {Menu, X, Send} from 'lucide-react';
import {ThemeToggle} from '../ui/ThemeToggle';

export function Navbar({theme, toggleTheme}) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home-section');
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        {name: 'Home', id: 'home-section'},
        {name: 'About', id: 'about-section'},
        {name: 'Skills', id: 'skills-section'},
        {name: 'Projects', id: 'project-section'},
        {name: 'Contact', id: 'contact-section'},
    ];

    const handleNavClick = (sectionId) => {
        setIsOpen(false);

        // If not on home page, navigate home first, then scroll
        if (location.pathname !== '/') {
            navigate('/', {state: {scrollTo: sectionId}});
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({behavior: 'smooth'});
            }
        }
    };

    // Track active section on scroll
    useEffect(() => {
        if (location.pathname !== '/') return;

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0,
        });

        navItems.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [location.pathname]);

    // Handle scrolling after redirecting to home page
    useEffect(() => {
        if (location.pathname === '/' && location.state?.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({behavior: 'smooth'});
                    window.history.replaceState({}, document.title);
                }, 100);
            }
        }
    }, [location]);

    return (
        <>
            {/* Mobile Drawer Overlay */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className='fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity duration-300 md:hidden'
                    aria-hidden='true'
                />
            )}

            {/* Floating Pill Navbar */}
            <header className='fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-7xl transition-all duration-300'>
                <nav className='relative flex items-center justify-between px-3 sm:px-5 py-2.5 sm:py-3 rounded-full border border-border/80 bg-card/60 dark:bg-card/75 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/40'>
                    {/* Logo & Brand */}
                    <Link
                        to='/'
                        onClick={() => handleNavClick('home-section')}
                        className='flex items-center gap-2.5 group cursor-pointer'>
                        <div className='relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-linear-to-tr from-accent/30 via-accent/10 to-transparent p-0.5 ring-1 ring-accent/40 shadow-inner group-hover:scale-105 transition-transform duration-200'>
                            <img
                                src='/img/20241226_195729.png'
                                alt='Olabanji Idowu'
                                className='h-full w-full rounded-full object-cover'
                            />
                        </div>
                        <span className='font-display font-bold text-sm sm:text-base tracking-tight text-foreground group-hover:text-accent transition-colors hidden xs:inline-block'>
                            OLABANJI
                        </span>
                    </Link>

                    {/* Center Navigation Links (Desktop) */}
                    <div className='hidden md:flex items-center gap-1 lg:gap-2'>
                        {navItems.map((item) => {
                            const isActive =
                                activeSection === item.id &&
                                location.pathname === '/';
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavClick(item.id)}
                                    className={`relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                                        isActive
                                            ? 'btn__shine font-semibold bg-accent/10 shadow-xs'
                                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                                    }`}>
                                    {item.name}
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Actions: Hire Me (Desktop) + Theme Toggle + Mobile Menu Trigger */}
                    <div className='flex items-center gap-2 sm:gap-3'>
                        {/* Desktop Hire Me Button */}
                        <button
                            onClick={() => handleNavClick('contact-section')}
                            className='hidden md:inline-flex group relative items-center gap-2 pl-4 pr-11 py-2 rounded-full text-sm font-semibold bg-primary text-primary-foreground hover:opacity-95 shadow-md shadow-primary/20 transition-all duration-200 cursor-pointer overflow-hidden active:scale-95'>
                            <span>Hire Me</span>
                            <span className='absolute right-1 top-1 bottom-1 flex items-center justify-center w-8 rounded-full bg-accent text-white group-hover:w-[calc(100%-8px)] transition-all duration-300 ease-out shadow-sm'>
                                <Send className='h-3.5 w-3.5 -rotate-45 transition-transform duration-300 ease-out group-hover:rotate-135' />
                            </span>
                        </button>

                        {/* Theme Toggle */}
                        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

                        {/* Mobile Hamburger Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type='button'
                            className='md:hidden inline-flex items-center justify-center p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted focus:outline-none transition-colors cursor-pointer'
                            aria-label='Toggle navigation menu'
                            aria-expanded={isOpen}>
                            {isOpen ? (
                                <X className='h-5 w-5' />
                            ) : (
                                <Menu className='h-5 w-5' />
                            )}
                        </button>
                    </div>
                </nav>

                {/* Mobile Dropdown Menu (Drops directly downward from navbar) */}
                <div
                    className={`md:hidden mt-2 overflow-hidden rounded-3xl border border-border/80 bg-card/85 dark:bg-card/90 backdrop-blur-xl shadow-xl shadow-black/10 dark:shadow-black/40 transition-all duration-300 ease-out origin-top ${
                        isOpen
                            ? 'max-h-96 opacity-100 scale-y-100 py-3 px-3'
                            : 'max-h-0 opacity-0 scale-y-95 py-0 px-3 pointer-events-none border-transparent'
                    }`}>
                    <nav className='flex flex-col gap-1'>
                        {navItems.map((item) => {
                            const isActive =
                                activeSection === item.id &&
                                location.pathname === '/';
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavClick(item.id)}
                                    className={`w-full text-left px-4 py-2.5 rounded-2xl text-sm font-medium transition-all duration-150 cursor-pointer flex items-center justify-between ${
                                        isActive
                                            ? 'bg-accent/10 text-accent font-semibold'
                                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                                    }`}>
                                    <span>{item.name}</span>
                                    {isActive && (
                                        <span className='h-1.5 w-1.5 rounded-full bg-accent' />
                                    )}
                                </button>
                            );
                        })}

                        {/* Quick action button inside dropdown */}
                        <div className='pt-2 mt-1 border-t border-border/50'>
                            <button
                                onClick={() =>
                                    handleNavClick('contact-section')
                                }
                                className='w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-accent text-white font-semibold text-xs sm:text-sm hover:opacity-90 shadow-sm cursor-pointer transition-opacity'>
                                <Send className='h-3.5 w-3.5 rotate-135 transition-transform duration-300 ease-out group-hover:rotate-135' />
                                <span>Hire Me</span>
                            </button>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}
