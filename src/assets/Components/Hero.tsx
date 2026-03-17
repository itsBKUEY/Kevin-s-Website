import "./Hero.css";
const heroImageKev = "src/assets/kev.png"

function Hero(){
    function goToProjects() {
    const projectsSection = document.getElementById("Projects");
    if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
    }
    }


  return (


<section className="hero-section">

  <div className="hero-image-container">
    
    <img 
      src = {heroImageKev} 
      alt="It's Kevin!"
      className="heroImage"
    />

  </div>



  <div className="heroGrid">    
    <div className="heroStuff">
      <div>
       
       
        <h1 className="heroText">
          Hey I'm 
          <span className="titleCard">Kev</span>
            I create stuff
        </h1>

        
        <button className="heroButton" onClick={goToProjects}>View My Work</button>
      </div>

    </div> 
  </div>

</section>

  )
}

export default Hero




