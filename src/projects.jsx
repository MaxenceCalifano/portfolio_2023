const projects = [{
  imgSrc: "../src/assets/screen_groupomania.jpg",
  title: 'Groupomania',
  techList: ['React', 'NodeJS', 'Express', 'MySQL'],
  githubLink: 'https://github.com/MaxenceCalifano/Groupomania',
  personalProject: false,
  text: <div>Groupomania est un projet de réseau social pour entreprise, on y retrouve de nombreuses fonctionnalités. L&apos;utilisateur y a la possibilité de créer un compte et de le modifier. Et de demander la réinitialisation du mot de passe si besoin. <br />Une fois connecté, il est possible de créer des posts et des commentaires, de les modifier et supprimer.Sur ce projet, j&apos;ai pu notamment, créer un backend avec nodejs et Express, gérer les données dans une base relationnelle MySQL et relié le tout à un frontend en ReactJS</div>
},
{
  imgSrc: "../src/assets/vantivities.jpg",
  title: 'Vantivities',
  techList: ['React Native', 'PostgreSQL', 'Supabase', 'Expo'],
  githubLink: 'https://github.com/MaxenceCalifano/WhosUp',
  personalProject: true,
  text: < div > Vantivities est un projet personnel que j&apos;ai réalisé en parallèle de ma dernière formation. Cette application Android permet aux utilisateurs de créer des activités pour se rencontrer en vrai et contient un chat. Cela m&apos;a permis de travailler sur de nombreuses choses : <ul>< li > La gestion de compte utilisateur</li><li>Un chat</li><li>Les opérations CRUD</li><li>La gestion et la sécurité d&apos;une base de données SQL</li> <li>Le déploiement d&apos;une application Android</li></ul ></div >,
},
{
  imgSrc: "../src/assets/Sans-titre-2.jpg",
  title: 'OhMyFood!',
  techList: ['HTML/CSS ', 'SASS ', 'Responsive/Mobile first'],
  demoLink: 'https://maxencecalifano.github.io/OhMyFood/',
  githubLink: 'https://github.com/MaxenceCalifano/OhMyFood',
  personalProject: false,
  text: <div>Réalisation dans le cadre de ma formation développeur web d&apos;un site web responsive pour une application de réservation de repas en ligne. On y retrouve des animations CSS avancées et j&apos;ai notamment utilisé la méthodologie BEM et le préprocesseur SASS.</div>
},
{
  imgSrc: "../src/assets/screen_react_calculator.jpg",
  title: 'React Calculator',
  techList: ['HTML/CSS ', 'Javascript ', 'React'],
  demoLink: 'https://maxencecalifano.github.io/React-Calculator/',
  githubLink: 'https://github.com/MaxenceCalifano/React-Calculator',
  personalProject: true,
  text: <div>Une calculatrice permettant d&apos;effectuer les opérations basiques, réalisée en Javascript et à l&apos;aide de la librairie ReactJS.</div>
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
  githubLink: 'https://github.com/MaxenceCalifano/kasa/tree/master',
  personalProject: false,
  text: <div>Front-end d&apos;une application d&apos;annonces immobilière, projet dans le cadre de la formation &lsquo;&lsquo;développeur d&apos;application React&lsquo;&lsquo; de Open Classrooms. <br />La gestion des routes est effectué via React-Router. L&apos;intégration de la maquette est réalisée avec React, en veillant à créer des composants réutilisables.</div>
},
{
  imgSrc: "../src/assets/screen_pomodoro_timer.jpg",
  title: 'Pomodoro Timer',
  techList: ['Redux', 'React '],
  demoLink: 'https://maxencecalifano.github.io/Pomodoro-Timer/',
  githubLink: 'https://github.com/MaxenceCalifano/Pomodoro-Timer',
  personalProject: true,
  text: <div>Un minuteur qui vous permet d&apos;appliquer la méthode de productivité Pomodoro. Dans ce projet j&apos;ai pu travaillé sur la gestion du temps en Javascript, gérer les états de l&apos;application avec Redux et créer des composants réutilisables avec ReactJS.</div>
},
{
  imgSrc: "../src/assets/sportsee.png",
  title: 'Sportsee',
  techList: ['React', 'Recharts'],
  demoLink: 'https://sportsee.maxencecalifano.tech/',
  githubLink: 'https://github.com/MaxenceCalifano/sportsee',
  personalProject: false,
  text: <p>Un tableau de bord affichant des données fournies par un backend. Sur ce projet j&apos;ai notamment pu travailler avec la librairie Rechart, faire des appels API et afficher les données reçues, et continuer à pratiquer l&apos;utilisation de React.</p>
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
  imgSrc: "../src/assets/table.png",
  title: 'React Table package',
  techList: ['React', 'NPM'],
  demoLink: 'https://www.npmjs.com/package/react-table-mc',
  githubLink: 'https://github.com/MaxenceCalifano/react-table',
  personalProject: false,
  text: "Clone du plug-in Date Picker de Jquery en version React. Il reprend toutes les fonctionnalités de la version d'origine, comme, le tri des données, la pagination et la recherche. Le package est disponible sur NPM, et documenté, l'utilisateur peut l'utiliser pour afficher ses propres données facilement."
},
{
  imgSrc: "../src/assets/Capture-p9.jpg",
  title: "Débogage et test d'un SaaS en Javascript",
  techList: ['Javascript', 'Jest', 'Cypress'],
  githubLink: 'https://github.com/MaxenceCalifano/Billed-app-FR-Front',
  personalProject: false,
  text: <div>Pour ce projet, une application Javascript était fournie, elle permettait aux utilisateurs d&apos;ajouter des notes de frais, mais elle comportait beaucoup de bug.<br /> Cela m&apos;a permis de m&apos;entraîner au débogage, en utilisant notamment la console du navigateur. <br />J&apos;ai dû ensuite écrire des tests unitaires et d&apos;intégrations à l&apos;aide de Jest. J&apos;ai pu aussi expérimenter les tests end-to-end avec Cypress.</div>
},
{
  imgSrc: "../src/assets/fish-eye.png",
  title: "Fish-eye",
  techList: ['Javascript', 'POO', 'CSS'],
  githubLink: 'https://github.com/MaxenceCalifano/Front-End-Fisheye/tree/master',
  demoLink: "https://maxencecalifano.github.io/Front-End-Fisheye/",
  personalProject: false,
  text: <div>Application front-end en pur Javascript. J&apos;ai fait de la programmation orienté object en créant des composant sous forme de classes. Le projet comporte notament une lightbox. L&apos;accent est mis sur les bonnes pratiques en termes d&apos;accéssibilité. </div>
}
]

export default projects