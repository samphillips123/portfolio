import React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from '../utils/useMediaQuery';
import { Link } from 'react-scroll';

// framer varients
// nav container varient
const navMotion = {
    // initial state - hidden
    hidden: {
        y: '100%', // x or y or rotate to specify the position (this is currently at the bottom of the page off screen)
        opacity: 0,
        transitions: {
            duration: 0.5,
            staggerChildren: 0.15,
            ease: 'easeInOut',
        },
    },
    // active state - visible
    visible: {
        y: 0, // this brings it up to the 0 position.
        opacity: 1,
        transition: {
            duration: 0.5,
            when: 'beforeChildren',
            staggerChildren: 0.15,
            ease: 'easeInOut',
        },
    },
    // exit state - hidden
    exit: {
        y: '100%',
        opacity: 0,
        transition: {
            duration: 0.5,
            when: 'afterChildren',
            staggerChildren: 0.15,
            staggerDirection: -1,
            ease: 'easeInOut',
        },
    },
}

// nav item variant
const navItemMotion = {
    // initial state - hidden
    hidden: {
        opacity: 0,
        y: 100, // when not as a % this is relation to pixels
        transition: {
            duration: 0.5,
            ease: 'easeInOut',
        },
    },
    // active state - visible
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeInOut',
        },
    },
    // exit state - exit
    exit: {
        opacity: 0,
        y: 50,
        transition: {
            duration: 0.5,
            ease: 'easeInOut',
        },
    },
};

const Nav = () => {
    // media query hook
    const isDesktop = useMediaQuery('(min-width: 1024px)');
    // hamburger menu toggle state
    const [toggled, setToggled] = useState(false);
    // state for background change on scroll
    const [scrollBackground, setScrollBackground] = useState(false);

    // change background function
    const changeBackground = () => {
        if (window.scrollY > 50) {
            setScrollBackground(true)
        } else {
            setScrollBackground(false)
        }
    }

    // event listener
    window.addEventListener('scroll', changeBackground)

    // useEffect to precent scroll when nav is toggled
    useEffect(() => {
        if (toggled) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [toggled])

    return (
        <nav className={
            scrollBackground
                ? 'bg-white h-14 w-[calc(100%-2rem)] fixed top-0 left-4 z-10 flex items-center justify-between p-8 font-medium my-2 transition ease-in-out duration-200 shadow-custom shadow-primary-green'
                : 'bg-white h-14 w-[calc(100%-2rem)] fixed top-0 left-4 z-10 flex items-center justify-between p-8 font-medium my-2 transition ease-in-out duration-200'
        }
        >
            {/* navbar if desktop */}
            {
                isDesktop && (
                    // the fragments are necessary
                    <>
                        <Link to='home' duration={0} smooth={true} className='cursor-pointer' >
                            <div className='flex items-center justify-center' >
                                {/* <img src={NSLogo} alt='NeuroSynth Logo' className='w-12' /> */}
                                <div className='flex flex-col justify-center -mx-2 leading-4'>
                                    <h1 className='font-black text-primary-green'>Samuel</h1>
                                    <h1 className='font-normal'>Phillips</h1>
                                </div>
                            </div>
                        </Link>
                        <div className='flex items-center gap-4 text-sm'>
                            <Link
                                to='about'
                                duration={0}
                                smooth={true}
                                className='cursor-pointer text-base hover:text-primary-green transition duration-200'
                            >
                                About
                            </Link>
                            <Link
                                to='projects'
                                duration={0}
                                smooth={true}
                                className='cursor-pointer text-base hover:text-primary-green transition duration-200'
                            >
                                Projects
                            </Link>
                            <Link
                                to='resume'
                                duration={0}
                                smooth={true}
                                className='cursor-pointer text-base hover:text-primary-green transition duration-200'
                            >
                                Resume
                            </Link>
                            <Link
                                to='Contact'
                                duration={0}
                                smooth={true}
                                className='cursor-pointer text-base hover:text-primary-green transition duration-200'
                            >
                                Contact
                            </Link>
                        </div>
                    </>
                )
            }
            {/* navbar for tablet and smaller */}
            {/* hamburger icon */}
            {
                !isDesktop && (
                    <div className='flex items-center justify-between w-full'>
                        <Link
                            to='home'
                            duration={0}
                            smooth={true}
                            className='cursor-pointer'
                            onClick={() => setToggled(false)} // this onClick closes the nav if the home link is clicked"
                        >
                            <div className='flex items-center justify-center' >
                                {/* <img src={NSLogo} alt='NeuroSynth Logo' className='w-12' /> */}
                                <div className='flex flex-col justify-center -mx-2 leading-4'>
                                    <h1 className='font-black text-primary-green'>Samuel</h1>
                                    <h1 className='font-normal'>Phillips</h1>
                                </div>
                            </div>
                        </Link>
                        <div
                            onClick={() => setToggled((prevToggled) => !prevToggled)}
                            className='space-y-1.5 cursor-pointer z-50'
                        >
                            <motion.span
                                animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
                                className='block h-0.5 w-8 bg-black'
                            ></motion.span>
                            <motion.span
                                animate={{ scale: toggled ? 0 : 1 }}
                                className='block h-0.5 w-8 bg-black'
                            ></motion.span>
                            <motion.span
                                animate={{
                                    rotateZ: toggled ? -45 : 0,
                                    y: toggled ? -8 : 0,
                                }}
                                className='block h-0.5 w-8 bg-black'
                            ></motion.span>
                        </div>
                    </div>
                )
            }
            <AnimatePresence>
                {/* toggled and tablet/mobile */}
                {toggled && !isDesktop && (
                    <motion.div
                        variants={navMotion}
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                        className='fixed top-[80px] left-4  w-[calc(100%-2rem)] h-screen flex items-center justify-center z-10 shadow-custom shadow-primary-green bg-white'
                    >
                        {/* nav links container */}
                        <div className='flex flex-col items-center justify-center gap-12 h-full' >
                            <motion.div variants={navItemMotion} >
                                <Link
                                    to='about'
                                    smooth={true}
                                    className='cursor-pointer text-2xl sm:text-4xl'
                                    onClick={() => setToggled(false)}
                                >
                                    About
                                </Link>
                            </motion.div>
                            <motion.div variants={navItemMotion} >
                                <Link
                                    to='projects'
                                    smooth={true}
                                    className='cursor-pointer text-2xl sm:text-4xl'
                                    onClick={() => setToggled(false)}
                                >
                                    Projects
                                </Link>
                            </motion.div>
                            <motion.div variants={navItemMotion} >
                                <Link
                                    to='resume'
                                    smooth={true}
                                    className='cursor-pointer text-2xl sm:text-4xl'
                                    onClick={() => setToggled(false)}
                                >
                                    Resume
                                </Link>
                            </motion.div>
                            <motion.div variants={navItemMotion} >
                                <Link
                                    to='contact'
                                    smooth={true}
                                    className='cursor-pointer text-2xl sm:text-4xl'
                                    onClick={() => setToggled(false)}
                                >
                                    Contact
                                </Link>
                            </motion.div>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
};

export default Nav;
