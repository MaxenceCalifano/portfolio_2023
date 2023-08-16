import styles from '../styles/projectCard.module.css'
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "./Themes/ThemeContext";

export default function ProjectCard(props) {
    const height = props.height;
    const width = props.width;

    const { theme } = useContext(ThemeContext)
    return (
        <>
            {props.reverse ?

                <div className={theme === 'dark' ? `${styles.card} ${styles.reverseCard}` : `${styles.card} ${styles.card_light} ${styles.reverseCard}`}>

                    <a className={styles.image_container} href={props.demoLink}>
                        <img
                            src={props.imgSrc}
                            width={width}
                            height={height}
                            alt={`capture d'écran du projet ${props.title}`}
                            className={styles.project_image}
                        >
                        </img>
                        <span className={styles.overlay}></span>
                    </a>

                    <div className={styles.content}>
                        <h4 className={styles.project_title}>{props.title}<hr /></h4>
                        <div className={`${styles.project_description} ${styles[props.projectNumber]} ${styles.project_descriptionReverse} `}>
                            <p>{props.children}</p>
                        </div>
                        <ul className={styles.project_tech_list}>
                            {props.techList.map(i => <li key={i}>{i} </li>)}
                        </ul>
                        <div className={styles.project_links}>
                            {props.githubLink ? <a href={props.githubLink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} title="lien vers le repo Github du projet" /></a> : null}
                            {props.demoLink ? <a href={props.demoLink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faArrowUpRightFromSquare} title="lien vers la demo du projet" /></a> : null}
                        </div>
                    </div>
                </div>

                : <div className={theme === 'dark' ? `${styles.card}` : `${styles.card} ${styles.card_light} `}>


                    <a className={styles.image_container} /* className={styles.image}  */ href={props.demoLink}>
                        <img
                            src={props.imgSrc}
                            className={styles.project_image}
                            alt={`capture d'écran du projet ${props.title}`}
                        >
                        </img>
                        <span className={styles.overlay}></span>
                    </a>

                    <div className={styles.content}>
                        <h4 className={styles.project_title}>{props.title}<hr /></h4>
                        <div className={`${styles.project_description} ${styles[props.projectNumber]}`}>
                            <p>{props.children}</p>
                        </div>
                        <ul className={styles.project_tech_list}>
                            {props.techList.map(i => <li key={i}>{i} </li>)}
                        </ul>
                        <div className={styles.project_links}>
                            {props.githubLink ? <a href={props.githubLink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} title="lien vers le repo Github du projet" /></a> : null}
                            {props.demoLink ? <a href={props.demoLink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faArrowUpRightFromSquare} title="lien vers la demo du projet" /></a> : null}
                        </div>
                    </div>
                </div>}
        </>
    )
}