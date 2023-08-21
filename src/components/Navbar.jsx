import styles from '../styles/navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import { ThemeContext } from './Themes/ThemeContext';


export default function Navbar(props) {
    const skillsRef = props.skillsRef
    const projectsRef = props.projectsRef
    const aboutRef = props.aboutRef
    const contactRef = props.contactRef
    const formationRef = props.formationRef

    const [hideOnScroll, setHideOnScroll] = useState(true)

    useScrollPosition(({ prevPos, currPos }) => {
        const isShow = currPos.y > prevPos.y;
        if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    },
        [hideOnScroll],
        false,
        false,
        100)
    const { theme } = useContext(ThemeContext)
    const { changeTheme } = useContext(ThemeContext)

    return (
        <div className={`${styles.navbar} ${hideOnScroll ? styles.visible : styles.hidden}`}>

            <input id='menu_toggle' type='checkbox' className={styles.menu_toggle} />
            <label className={styles.menu_button_container}
                htmlFor='menu_toggle'>
                <div className={theme === 'dark' ? styles.menu_button : `${styles.menu_button} ${styles.menu_button_light}`}></div>
            </label>
            <ul className={theme === 'dark' ? styles.nav_links : `${styles.nav_links} ${styles.nav_links_light}`}>
                <li><span onClick={() => props.scrollTo(props.topRef)} style={{ color: theme === 'dark' ? '#454545' : '#FFFF' }}> <FontAwesomeIcon icon={faHouse} title='dark mode' className={styles.moon_icon} /></span></li>
                <li onClick={() => props.scrollTo(aboutRef)} className={styles.nav_link}>A propos</li>
                <li onClick={() => props.scrollTo(projectsRef)} className={styles.nav_link}>Projets</li>
                <li onClick={() => props.scrollTo(formationRef)} className={styles.nav_link}>Formations</li>
                <li onClick={() => props.scrollTo(skillsRef)} className={styles.nav_link}>Skills</li>
                <li onClick={() => props.scrollTo(contactRef)} className={styles.nav_link}>Contact</li>
                <li onClick={() => changeTheme(theme)}>{props.children}{theme === 'light' ?
                    <FontAwesomeIcon icon={faMoon} title='dark mode' className={styles.moon_icon} />
                    : <FontAwesomeIcon icon={faSun} title='light mode' className={styles.moon_icon} />}</li>
            </ul>
            <hr className={theme === 'dark' ? styles.hr : styles.hr_light} />
        </div>
    )
}