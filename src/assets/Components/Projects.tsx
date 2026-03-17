import './Projects.css';
import projectscardGen from './ProjectCardgen';
import type { Project } from './Interfaces/Interfaces';



//Pop in projects here and it will generate the project cards for you,

 const projects: Project[] = [
        {
            //defualt project will be replaced with actual projects in the future
            id: 0,
            title: 'Royal Inn',
            description: 'Mock ecommerce Site for a bed and breakfast, built with HTML, CSS, and JavaScript, with a focus on responsive design and user experience. Key features include a dynamic booking form.',
            technologies: ["SQL-Lite", "AWS S3" ,"JavaScript", "HTML", "CSS", ],
            imageUrl: 'src/assets/kev.png',
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com/itsbkuey',

        },
          {
            //defualt project will be replaced with actual projects in the future
            id: 0,
            title: 'GradeChecker(AI Notation) ',
            description: 'A etension for grade checking and feedback on assignments, using the gemmini api to run a custom transformer model trained on a dataset of assignments and feedback.',
            technologies: ["Google Gemmini Api","JavaScript", "HTML", "CSS", ],
            imageUrl: 'src/assets/kev.png',
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com/itsbkuey',

        }



        

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