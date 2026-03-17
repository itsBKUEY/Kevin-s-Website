import './Projects.css';
import type { Project } from './Interfaces/Interfaces';


// Thids will be used to generate project cards for the projects section 
//including all the details and links
//This was created to never be touched again lol, 
//just pop projects to the projects array in Projects.tsx 
// and it will generate the project cards for you,
// I know this is not the most efficient way to do this but im new to this not true to this




    //for loop for Each project to be rendered in the projects grid
    function projectscardGen(projects: Project[]){

    let projectCardDisplay = []

for(let i = 0; i < projects.length; i++){
const currProject = projects[i];
    
const projectElement = (

        <div key={currProject.id} className="projectCard">
            <h3>{currProject.title}</h3>

            <h4>Technologies Used:</h4>

                <ul>    
                {technologiesList(currProject.technologies)}
                </ul>

            <img src={currProject.imageUrl} alt={currProject.title} className="projectImage" />
            <p>{currProject.description}</p>
            
            <div className="projectLinks">
                {currProject.liveUrl && <a href = {currProject.liveUrl}> Live Demo </a>}
                {currProject.githubUrl && <a href = {currProject.githubUrl} >GitHub Repository</a>}
            </div>

        </div>
    )

    projectCardDisplay.push(projectElement)
}

return projectCardDisplay
    }

function technologiesList(technologies: string[]){
   let technologiesList = []

       for(let i = 0; i < technologies.length; i++){
                    technologiesList.push(<li>{technologies[i]}</li>)
                }

            return technologiesList
            }
        
        

export default projectscardGen;

    

