const projects = [{
    imgSrc: "../src/assets/screen_groupomania.jpg",
    title: 'Groupomania',
    techList: ['React', 'NodeJS', 'Express', 'MySQL'],
    demoLink: 'https://maxencecalifano.github.io/OhMyFood/',
    githubLink: 'https://github.com/MaxenceCalifano/Groupomania',
    personalProject: false,
    text: "Groupomania est un projet de réseau social pour entreprise, on y retrouve de nombreuses fonctionnalités. L&apos;utilisateur y a la possibilité de créer un compte et de le modifier.Et de demander la réinitialisation du mot de passe si besoin. <br />Une fois connecté il est possible de créer des posts et des commentaires, de les modifier et supprimer.Sur ce projet, j'ai pu notamment, créer un backend avec nodejs et Express, gérer les données dans une base relationnelle MySQL et relié le tout à un frontend en ReactJS"
  }, {
    imgSrc: "../src/assets/Sans-titre-2.jpg",
    title: 'OhMyFood!',
    techList: ['HTML/CSS ', 'SASS ', 'Responsive/Mobile first'],
    demoLink: 'https://maxencecalifano.github.io/OhMyFood/',
    githubLink: 'https://github.com/MaxenceCalifano/OhMyFood',
    personalProject: false,
    text: "Réalisation dans le cadre de ma formation développeur web d&apos;un site web responsive pour une application de réservation de repas en ligne. On y retrouve des animations CSS avancées et j&apos;ai notamment utilisé la méthodologie BEM et le préprocesseur SASS."
  },
  {
    imgSrc: "../src/assets/screen_react_calculator.jpg",
    title: 'React Calculator',
    techList: ['HTML/CSS ', 'Javascript ', 'React'],
    demoLink: 'https://maxencecalifano.github.io/React-Calculator/',
    githubLink: 'https://github.com/MaxenceCalifano/React-Calculator',
    personalProject: true,
    text: "Une calculatrice permettant d'effectuer les opérations basiques, réalisée en Javascript et à l&apos;aide de la librairie ReactJS."
  },
  {
    imgSrc: "../src/assets/les_petits_plats.png",
    title: 'Les petits plats',
    techList: ['VanillaJS', 'POO', 'API Call', 'CSS'],
    demoLink: 'https://maxencecalifano.github.io/les_petits_plats/',
    githubLink: 'https://github.com/MaxenceCalifano/les_petits_plats',
    personalProject: false,
    text: "Une application qui permet d'afficher et de trier des recettes en fonction de certains critères. Cet exercice m'a permis de travailler avec les class en Javascript, d'utiliser le factory pattern et de développer un algorithme de recherche et de tri."
  },
  {
    imgSrc: "../src/assets/kasa.png",
    title: 'Kasa',
    techList: ['React', 'React-Router'],
    demoLink: 'https://maxencecalifano.github.io/les_petits_plats/',
    githubLink: 'https://github.com/MaxenceCalifano/kasa/tree/master',
    personalProject: false,
    text: "Front-end d'une application d'annonces immobilière, projet dans le cadre de la formation 'développeur d'application React' de Open Classrooms. <br />La gestion des routes est effectué via React-Router. L'intégration de la maquette est réalisée avec React, en veillant à créer des composants réutilisables."
  },
  {
    imgSrc: "../src/assets/screen_pomodoro_timer.jpg",
    title: 'Pomodoro Timer',
    techList: ['Redux', 'React '],
    demoLink: 'https://maxencecalifano.github.io/Pomodoro-Timer/',
    githubLink: 'https://github.com/MaxenceCalifano/Pomodoro-Timer',
    personalProject: true,
    text: "Un minuteur qui vous permet d&apos;appliquer la méthode de productivité Pomodoro. Dans ce projet j&apos;ai pu travaillé sur la gestion du temps en Javascript, gérer les états de l&apos;application avec Redux et créer des composants réutilisables avec ReactJS."
  },
  {
    imgSrc: "../src/assets/sportsee.png",
    title: 'Sportsee',
    techList: ['React', 'Recharts'],
    demoLink: 'https://sportsee.maxencecalifano.tech/',
    githubLink: 'https://github.com/MaxenceCalifano/sportsee',
    personalProject: false,
    text: "Un tableau de bord affichant des données fournies par un backend. Sur ce projet j'ai notamment pu travailler avec la librairie Rechart, et continuer à pratiquer l'utilisation de React."
  },
  {
    imgSrc: "../src/assets/vantivities.jpg",
    title: 'Vantivities',
    techList: ['React Native', 'PostgreSQL', 'Supabase', 'Expo'],
    demoLink: 'https://sportsee.maxencecalifano.tech/',
    githubLink: 'https://sportsee.maxencecalifano.tech/',
    personalProject: true,
    text: " Vantivities est projet personnel que j'ai réalisé en parallèle de ma formation. L'application permet au utilisateur de créer des activités pour se rencontrer en vrai et contient un chat. Cela m'a permis de travailler sur de nombreuses choses : <ul>< li > La gestion de compte utilisateur</li><li>Un chat</li><li>Les opérations CRUD</li><li>La gestion et la sécurité d'une base de données SQL</li><li>Le déploiement d'une application Android</li></ul > "
  },
  {
    imgSrc: "../src/assets/datepicker.png",
    title: 'Date picker package',
    techList: ['React', 'NPM', 'Date'],
    demoLink: 'https://www.npmjs.com/package/react-date-picker-mc',
    githubLink: 'https://github.com/MaxenceCalifano/react-date_picker',
    personalProject: false,
    text: "Dans le cadre de ma formation, il était demandé de transformer une application Jquery en React. Il a fallu remplacer le plugin Datepicker de Jquery. Je l'ai donc recréé de zéro en React puis packagé et rendu disponible sur NPM."
  },
  {
    imgSrc: "../src/assets/Capture-p9.jpg",
    title: "Débogage et test d'un SaaS en Javascript",
    techList: ['Javascript', 'Jest', 'Cypress'],
    githubLink: 'https://github.com/MaxenceCalifano/Billed-app-FR-Front',
    personalProject: false,
    text: "Pour ce projet, une application Javascript était fournie, elle permettait aux utilisateurs d'ajouter des notes de frais, mais elle comportait beaucoup de bug.<br /> Cela m'a permis de m'entraîner au débogage, en utilisant notamment la console du navigateur.J'ai dû ensuite écrire des tests unitaires et d'intégrations à l'aide de Jest. J'ai pu aussi expérimenter les tests end-to-end avec Cypress."
  },
  ]

  export default projects;