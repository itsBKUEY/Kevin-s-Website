import './Projects.css';
import projectscardGen from './ProjectCardgen';
import './Interfaces/Interfaces';



//Pop in projects here and it will generate the project cards for you,

 const projects: Project[] = [
        {
            //defualt project will be replaced with actual projects in the future
            id: 0,
            title: 'Royal Inn',
            description: 'A professional full-stack e-commerce solution for a boutique bed and breakfast. Features a dynamic booking engine and a secure administrative suite for real-time content management and site customization. Currently in active development for commercial deployment with a live client.',            imageUrl: 'src/assets/Images/4e71814f-50a3-4c1d-ae82-ea440cb19581.jpg',
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com/itsbkuey',

        },
            {
            //defualt project will be replaced with actual projects in the future
            id: 2,
            title: 'Lingo',
            description: 'A cross-platform language acquisition app developed during a Hackathon. Utilizing AI-driven activities, it provides personalized daily linguistic exercises to improve vocabulary and fluency on iOS and Android.',
            technologies: ["React Native", "Expo", "TypeScript", "Google Gemini API"],
            imageUrl: 'src/assets/Images/letter_L_PNG29.png',
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com/itsbkuey',

        },

          {
            //defualt project will be replaced with actual projects in the future
            id: 3,
            title: 'GradeChecker (AI Notation)',
            description: 'A browser extension designed to provide instant feedback on student assignments. It leverages a custom transformer model and the Gemini API to analyze submissions against historical datasets for high-quality academic notation.',
            technologies: ["JavaScript", "Google Gemini API", "Chrome Extension API", "CSS"],
            imageUrl: 'src/assets/Images/image(2).jpg',
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com/itsbkuey',

        },
       
        

     



        

    ];


    function Projects() {

    return (

        <section id="projects" className="projects">

            <h2>Current Projects</h2>

            <div className="projects-grid">

                {projectscardGen(projects)}
            </div>

        </section>

    );
};


           
export default Projects;