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
import { useRef, useContext, useState, useEffect } from 'react'
import { FaGithub, FaLinkedinIn, FaCode, FaSass, FaJs, FaReact, FaAnglesRight, FaNodeJs, FaCodeCompare, FaDatabase, FaServer, FaRegFileCode, FaCircleCheck } from "react-icons/fa6";
import { FaRandom } from "react-icons/fa";
export default function Home() {

  const { theme } = useContext(ThemeContext)

  const topRef = useRef();
  const projectsRef = useRef();
  const skillsRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();
  const formationRef = useRef();
  const course1 = useRef();
  const course2 = useRef();

  const headerSentences = ["Je construis des applications Web et Mobile", "En reconversion et passionné", "Disponible pour vos missions freelance"]

  const [sortedProjets, setSortedProjects] = useState(projects)
  const [selectedFilter, setSelectedFilter] = useState(0)
  const [sentenceIndex, setSentenceIndex] = useState(0)

  const windowHeight = window.innerHeight;
  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  })

  const onScroll = () => {
    const elements = [course1, course2]

    for (let i = 0; i < elements.length; i++) {
      const topPos = elements[i].current.getBoundingClientRect().top
      if (topPos < windowHeight - 150) { // We want the element to be 150px above the bottom of the screen
        elements[i].current.classList.add(styles.active)
      }
    }
  }

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
          contactRef={contactRef}
          formationRef={formationRef}>
        </Navbar>

        <h1>Je suis Maxence,<br />Développeur Web</h1>
        <div className={styles.dynamicSentences}>
          <h2>{headerSentences[sentenceIndex]}</h2>
          <FaRandom onClick={() => sentenceIndex < headerSentences.length - 1 ? setSentenceIndex(sentenceIndex + 1) : setSentenceIndex(0)} />
        </div>

        <Button scrollTo={scrollTo} projectsRef={projectsRef}>Découvrir mes projets</Button>
        <div className={theme === 'dark' ? styles.socials : styles.socialsLight}>
          <a href='https://github.com/MaxenceCalifano'><FaGithub /></a>
          <a href='https://www.linkedin.com/in/maxence-califano/'><FaLinkedinIn /></a>
          <hr style={theme === 'dark' ? { backgroundColor: "#454545" } : { backgroundColor: "white" }} aria-hidden="true" />
        </div>
      </header>
      <div></div>

      <main className={theme === 'dark' ? `${styles.main}` : `${styles.main} ${styles.main_light}`}>

        {/* ----------------ABOUT------------ */}
        <section ref={aboutRef} className={theme === 'dark' ? styles.about : `${styles.about} ${styles.about_light}`} >
          <SectionSeparator title='A propos' />
          <div className={styles.aboutContent}>
            <p>J&apos;ai découvert par hasard le développement web en créant un site pour un projet personnel, j&apos;ai tellement aimé
              que j&apos;ai décidé de me reconvertir et d&apos;en faire mon métier. <br />
              Autodidacte pendant 3 ans puis diplômé de la formation développeur Web d’OpenClassRooms, je suis aujourd’hui notamment capable de :</p>
            <ul>
              <li><FaCircleCheck /> Créer des interfaces utilisateur, en créant des composants réutilisables avec React</li>
              <li><FaCircleCheck /> Gérer les états de l’application avec Redux</li>
              <li><FaCircleCheck /> Intégrer une maquette de manière responsive en HTML/CSS/SASS</li>
              <li><FaCircleCheck /> Créer une API avec NodeJS / ExpressJS et réaliser les opérations CRUD</li>
              <li><FaCircleCheck /> Gérer un stockage de données MongoDB ou MySQL</li>
              <li><FaCircleCheck /> Versionner mon code et collaborer avec Git / Github</li>
            </ul>
            <p>Contactez-moi pour me parler de votre projet 👋</p>
          </div>

        </section>

        <SectionSeparator title="Mes projets" />
        <section className={styles.projectsWrapper}>
          <div className={styles.projectsButtons}>
            <button className={selectedFilter === 0 ? styles.filterButton_selected : theme === 'dark' ? styles.filterButton : styles.filterButtonLight} onClick={() => { setSortedProjects(projects); setSelectedFilter(0) }}>Tout</button>
            <button className={selectedFilter === 1 ? styles.filterButton_selected : theme === 'dark' ? styles.filterButton : styles.filterButtonLight} onClick={() => sortProjects(false)}>Projets en formations</button>
            <button className={selectedFilter === 2 ? styles.filterButton_selected : theme === 'dark' ? styles.filterButton : styles.filterButtonLight} onClick={() => sortProjects(true)}>Projets persos</button>
          </div>


          <div ref={projectsRef} id="projects" className={styles.projects}>
            {sortedProjets.map((project, index) => <ProjectCard
              imgSrc={project.imgSrc}
              title={project.title}
              techList={project.techList}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
              reverse={index % 2 === 0 ? false : true}
              key={index}>
              {project.text}
            </ProjectCard>)}
          </div>
        </section>
        <section ref={formationRef} >
          <SectionSeparator title='Formations' />
          <div className={styles.courseWrapper} >
            <div ref={course1} className={theme === 'dark' ? `${styles.courseSection} ${styles.courseSectionLeft}` : `${styles.courseSectionLight} ${styles.courseSectionLeft}`}>
              <div className={theme === 'dark' ? styles.course : styles.courseLight} >
                <span className={styles.courseTitle}>DEVELOPPEUR D&apos;APPLICATION Javascript React titre RNCP niveau 6 (bac +3/4) - OpenClassRooms</span>
                <hr className={theme === 'dark' ? styles.courseHr : styles.courseHrLight} />
                <p>Formation très complémentaire à la formation développpeur web. En 12 mois et sur 14 projets, j&apos;ai pu appronfondir mes connaissances sur Javascript, CSS, React/Redux, les tests et l&apos;accéssiblité</p>
              </div>
              <hr />
              <div className={theme === 'dark' ? styles.course : styles.courseLight}>
                <span className={styles.courseTitle}>DEVELOPPEUR WEB titre RNCP niveau 5 (bac +2) - OpenClassRooms</span>
                <hr className={theme === 'dark' ? styles.courseHr : styles.courseHrLight} />
                <p>Formation en 6 mois. Elle m&apos;a permis de consolider mon socle de connaissances sur le développement web en partant de projets de sites statique en HTML/CSS, puis avec des projets Javascript frontend et backend, pour finir par un projet fullstack React, nodeJS et MySQL.</p>
              </div>
            </div>
            <div ref={course2} className={theme === 'dark' ? `${styles.courseSection} ${styles.courseSectionRight}` : `${styles.courseSectionLight} ${styles.courseSectionRight}`}>
              <div className={theme === 'dark' ? styles.course : styles.courseLight}>
                <span className={styles.courseTitle}>Front End Development Libraries - freeCodeCamp</span>
                <hr className={theme === 'dark' ? styles.courseHr : styles.courseHrLight} />
                <p>Certification en approximativement 300 heures qui m&apos;initié au travers d&apos;exercices et de projets, à l&apos;utilisation de librairies front-end comme React, Redux et Bootstrap</p>
              </div>
              <hr />
              <div className={theme === 'dark' ? styles.course : styles.courseLight}>
                <span className={styles.courseTitle}>JavaScript Algorithms and Data Structures - freeCodeCamp</span>
                <hr className={theme === 'dark' ? styles.courseHr : styles.courseHrLight} />
                <p>Certification via laquelle j&apos;ai pu apprendre les fondamentaux de Javascript, manipuler les différents type de données et écrire mes premiers algorithmes.</p>
              </div>
            </div>

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
              <li><FaRegFileCode /> MongoDB</li>/
            </SkillsCard>
          </div>
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
