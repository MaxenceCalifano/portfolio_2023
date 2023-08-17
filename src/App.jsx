import styles from './styles/Home.module.css'
import projects from './projects'
import ProjectCard from './components/ProjectCard'
import SkillsCard from './components/SkillsCard'
import Navbar from './components/Navbar'
import SectionSeparator from './components/SectionSeparator'
import ContactForm from './components/ContactForm'
import Button from './components/Button'
import Footer from './components/footer'
import { ThemeContext } from './components/Themes/ThemeContext';
import { useRef, useContext, useState } from 'react'
import { FaGithub, FaLinkedinIn, FaCode, FaSass, FaJs, FaReact, FaAnglesRight, FaNodeJs, FaCodeCompare, FaDatabase, FaServer, FaRegFileCode, FaCircleCheck } from "react-icons/fa6";
export default function Home() {

  const { theme } = useContext(ThemeContext)

  const topRef = useRef();
  const projectsRef = useRef();
  const skillsRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();

  const [sortedProjets, setSortedProjects] = useState(projects)
  const [selectedFilter, setSelectedFilter] = useState(0)

  function scrollTo(target) {
    target.current.scrollIntoView({
      behavior: 'smooth',
    })
  }

  const sortProjects = (isPersonal) => {
    const sortdedProjects = projects.filter(elem => elem.personalProject === isPersonal)
    setSelectedFilter(isPersonal ? 2 : 1)
    setSortedProjects(sortdedProjects)
  }

  return (
    <div className={styles.container}>
      <header ref={topRef} className={theme === 'dark' ? styles.header : `${styles.header} ${styles.header_light}`}>
        <Navbar
          scrollTo={scrollTo}
          topRef={topRef}
          projectsRef={projectsRef}
          skillsRef={skillsRef}
          aboutRef={aboutRef}
          contactRef={contactRef}>
        </Navbar>

        <h1>Maxence,<br />Développeur Web</h1>
        <h2>Je construis des applications Web à l&apos;aide de React.JS, Node.JS, Express et MySQL</h2>
        <Button scrollTo={scrollTo} projectsRef={projectsRef}>Découvrir mes projets</Button>
        <div className={styles.socials}>
          <a href='https://github.com/MaxenceCalifano'><FaGithub /></a>
          <a href='https://www.linkedin.com/in/maxence-califano/'><FaLinkedinIn /></a>
          <hr style={theme === 'dark' ? { backgroundColor: "#454545" } : { backgroundColor: "white" }} aria-hidden="true" />
        </div>
      </header>

      <main className={theme === 'dark' ? `${styles.main}` : `${styles.main} ${styles.main_light}`}>
        <section>
          <SectionSeparator title="Mes projets" />

          <button className={selectedFilter === 0 ? styles.filterButton_selected : styles.filterButton} onClick={() => { setSortedProjects(projects); setSelectedFilter(0) }}>Tout</button>
          <button className={selectedFilter === 1 ? styles.filterButton_selected : styles.filterButton} onClick={() => sortProjects(false)}>Projets en formations</button>
          <button className={selectedFilter === 2 ? styles.filterButton_selected : styles.filterButton} onClick={() => sortProjects(true)}>Projets persos</button>

          <div ref={projectsRef} id="projects" className={styles.projects}>
            {sortedProjets.map((project, key) => <ProjectCard
              imgSrc={project.imgSrc}
              title={project.title}
              techList={project.techList}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
              reverse={key % 2 === 0 ? false : true}
              key={{ key }}>
              {project.text}
            </ProjectCard>)}
          </div>
        </section>
        <section ref={skillsRef} className={styles.skills_section}>
          <SectionSeparator title="Ma stack" />
          <div className={styles.skills} >
            <SkillsCard title='Développement frontend'>
              <li><FaCode /> HTML/CSS</li>
              <li><FaSass /> SASS</li>
              <li><FaJs /> Javascript</li>
              <li><FaReact /> React/Redux</li>
              <li><FaAnglesRight /> Next.JS</li>
            </SkillsCard>
            <SkillsCard title='Développement backend'>
              <li><FaNodeJs /> Node.JS</li>
              <li><FaCodeCompare /> Express</li>
              <li><FaDatabase /> MySQL</li>
              <li><FaServer /> API Rest</li>
              <li><FaRegFileCode /> MongoDB</li>
            </SkillsCard>
          </div>
        </section>
        <section ref={aboutRef} className={theme === 'dark' ? styles.about : `${styles.about} ${styles.about_light}`} >
          <SectionSeparator title='A propos' />
          <p>J&apos;ai découvert par hasard le développement web en créant un site pour un projet personnel, j&apos;ai tellement aimé
            que j&apos;ai décidé de me reconvertir et d&apos;en faire mon métier. <br />
            Autodidacte pendant 3 ans puis diplômé de la formation développeur Web d’OpenClassRooms, je suis aujourd’hui notamment capable de : <br />
            <ul>
              <li><FaCircleCheck /> Créer des interfaces utilisateur, en créant des composants réutilisables avec React</li>
              <li><FaCircleCheck /> Gérer les états de l’application avec Redux</li>
              <li><FaCircleCheck /> Intégrer une maquette de manière responsive en HTML/CSS/SASS</li>
              <li><FaCircleCheck /> Créer une API avec NodeJS / ExpressJS et réaliser les opérations CRUD</li>
              <li><FaCircleCheck /> Gérer un stockage de données MongoDB ou MySQL</li>
              <li><FaCircleCheck /> Versionner mon code et collaborer avec Git / Github</li>
            </ul>
            Contactez-moi pour me parler de votre projet 👋
          </p>
        </section>
        <section className={styles.contact} ref={contactRef} >
          <SectionSeparator title='Contact' />
          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  )
}
