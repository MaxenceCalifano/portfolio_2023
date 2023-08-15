import styles from './styles/Home.module.css'
import ProjectCard from './components/ProjectCard'
import SkillsCard from './components/SkillsCard'
import Navbar from './components/Navbar'
import SectionSeparator from './components/SectionSeparator'
import ContactForm from './components/ContactForm'
import Button from './components/Button'
import Footer from './components/footer'
import { ThemeContext } from './components/Themes/ThemeContext';
import { useRef, useContext } from 'react'
import { FaGithub, FaLinkedinIn, FaCode, FaSass, FaJs, FaReact, FaAnglesRight, FaNodeJs, FaCodeCompare, FaDatabase, FaServer, FaRegFileCode, FaCircleCheck } from "react-icons/fa6";
export default function Home() {

  const { theme } = useContext(ThemeContext)

  const topRef = useRef();
  const projectsRef = useRef();
  const skillsRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();

  function scrollTo(target) {
    target.current.scrollIntoView({
      behavior: 'smooth',
    })
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
          <div ref={projectsRef} id="projects" className={styles.projects}>
            <ProjectCard width={752}
              height={850}
              imgSrc="../src/assets/screen_groupomania.jpg"
              title='Groupomania'
              tech_list={['React', 'NodeJS', 'Express', 'MySQL']}
              githubLink='https://github.com/MaxenceCalifano/Groupomania'
              demoLink='https://maxencecalifano.github.io/OhMyFood/'
              projectNumber="project4">
              Groupomania est un projet de réseau social pour entreprise, on y retrouve de nombreuses fonctionnalités. L&apos;utilisateur y a la possibilité de créer un compte et de le modifier.
              Et de demander la réinitialisation du mot de passe si besoin. <br />Une fois connecté il est possible de créer des posts et des commentaires, de les modifier et supprimer.
              Sur ce projet, j'ai pu notamment, créer un backend avec nodejs et Express, gérer les données dans une base relationnelle MySQL et relié le tout à un frontend en ReactJS
            </ProjectCard>
            <ProjectCard width={724}
              height={827}
              imgSrc="../src/assets/Sans-titre-2.jpg"
              title='OhMyFood!'
              tech_list={['HTML/CSS ', 'SASS ', 'Responsive/Mobile first']}
              githubLink='https://github.com/MaxenceCalifano/OhMyFood'
              demoLink='https://maxencecalifano.github.io/OhMyFood/'
              projectNumber="project1"
              reverse>
              Réalisation dans le cadre de ma formation développeur web d&apos;un site web responsive pour une application
              de réservation de repas en ligne. On y retrouve des animations CSS avancées et j&apos;ai notamment utilisé la méthodologie BEM et le préprocesseur SASS.
            </ProjectCard>

            <ProjectCard width={724}
              height={827}
              imgSrc="../src/assets/screen_react_calculator.jpg"
              title='React Calculator'
              tech_list={['HTML/CSS ', 'Javascript ', 'React']}
              githubLink='https://github.com/MaxenceCalifano/React-Calculator'
              demoLink='https://maxencecalifano.github.io/React-Calculator/'
              projectNumber="project2">
              Une calculatrice permettant d&apos;effectuer les opérations basiques, réalisée en Javascript et à l&apos;aide de la librairie ReactJS.

            </ProjectCard>

            <ProjectCard width={724}
              height={827}
              imgSrc="../src/assets/les_petits_plats.png"
              title='Les petits plats'
              tech_list={['VanillaJS', 'POO', 'API Call', 'CSS']}
              githubLink='https://github.com/MaxenceCalifano/les_petits_plats'
              demoLink='https://maxencecalifano.github.io/les_petits_plats/'
              projectNumber="project3"
              reverse>
              Une application qui permet d'afficher et de trier des recettes en fonction de certains critères. Cet exercice m'a permis de travailler avec les class en Javascript, d'utiliser le factory pattern et de développer un algorithme de recherche et de tri.
            </ProjectCard>

            <ProjectCard width={724}
              height={827}
              imgSrc="../src/assets/kasa.png"
              title='Kasa'
              tech_list={['React', 'React-Router']}
              githubLink='https://github.com/MaxenceCalifano/kasa/tree/master'
              demoLink='https://maxencecalifano.github.io/les_petits_plats/'
              projectNumber="project3"
            >
              Front-end d'une application d'annonces immobilière, projet dans le cadre de la formation "développeur d'application React" de Open Classrooms. <br />
              La gestion des routes est effectué via React-Router. L'intégration de la maquette est réalisée avec React, en veillant à créer des composants réutilisables.
            </ProjectCard>

            <ProjectCard width={724}
              height={827}
              imgSrc="../src/assets/screen_pomodoro_timer.jpg"
              title='Pomodoro Timer'
              tech_list={['Redux', 'React ']}
              githubLink='https://github.com/MaxenceCalifano/Pomodoro-Timer'
              demoLink='https://maxencecalifano.github.io/Pomodoro-Timer/'
              projectNumber="project3"
              reverse>
              Un minuteur qui vous permet d&apos;appliquer la méthode de productivité Pomodoro. Dans ce projet j&apos;ai pu travaillé sur la gestion du temps
              en Javascript, gérer les états de l&apos;application avec Redux et créer des composants réutilisables avec ReactJS.
            </ProjectCard>
            <ProjectCard
              imgSrc="../src/assets/sportsee.png"
              title='Sportsee'
              tech_list={['React', 'Recharts']}
              githubLink='https://github.com/MaxenceCalifano/sportsee'
              demoLink='https://sportsee.maxencecalifano.tech/'
              projectNumber="project7"
            >
              Un tableau de bord affichant des données fournies par un backend. Sur ce projet j'ai notamment pu travailler avec la librairie Rechart, et continuer à pratiquer l'utilisation de React.
            </ProjectCard>
            <ProjectCard
              imgSrc="../src/assets/vantivities.jpg"
              title='Vantivities'
              tech_list={['React Native', 'PostgreSQL', 'Supabase', 'Expo']}
              demoLink='https://sportsee.maxencecalifano.tech/'
              projectNumber="project7"
              reverse
            >
              Vantivities est projet personnel que j'ai réalisé en parallèle de ma formation. L'application permet au utilisateur de créer des activités pour se rencontrer en vrai et contient un chat. Cela m'a permis de travailler sur de nombreuses choses : <ul>
                <li>La gestion de compte utilisateur</li>
                <li>Un chat</li>
                <li>Les opérations CRUD</li>
                <li>La gestion et la sécurité d'une base de données SQL</li>
                <li>Le déploiement d'une application Android</li>
              </ul>
            </ProjectCard>
            <ProjectCard
              imgSrc="../src/assets/datepicker.png"
              title='Date picker package'
              tech_list={['React', 'NPM', 'Date']}
              githubLink='https://github.com/MaxenceCalifano/react-date_picker'
              demoLink='https://www.npmjs.com/package/react-date-picker-mc'
              projectNumber="project7"
            >
              Dans le cadre de ma formation, il était demandé de transformer une application Jquery en React. Il a fallu remplacer le plugin Datepicker de Jquery. Je l'ai donc recréé de zéro en React et l'ai packagé et rendu disponible sur NPM.
            </ProjectCard>

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
