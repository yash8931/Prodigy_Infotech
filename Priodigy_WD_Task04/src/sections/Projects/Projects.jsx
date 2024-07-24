import styles from './ProjectsStyles.module.css';
import toDesktop from '../../assets/toDesktop.png';
import tictactoe from '../../assets/tictactoe.png'
import rockPaper from '../../assets/rockPaper.png';
import bgChanger from '../../assets/bgChanger.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={toDesktop}
          link="https://66863ee26821217b3ab92203--whimsical-halva-7c3e19.netlify.app/"
          h3="toDesktop"
          p="Clone Landing Page"
        />
        <ProjectCard
          src={tictactoe}
          link="https://tangerine-genie-5dec05.netlify.app/"
          h3="Tic-Tac-Toe"
          p="JavaScript Game"
        />
        <ProjectCard
          src={rockPaper}
          link="https://6686687c714ca4b3b2e1a18c--velvety-sable-02f373.netlify.app/"
          h3="Rock Paper Scissor"
          p="JavaScript Game"
        />
        <ProjectCard
          src={bgChanger}
          link="https://66869d8356d0aeef41440c35--wonderful-cactus-bbe839.netlify.app/"
          h3="Background Changer"
          p="Changing Background"
        />
      </div>
    </section>
  );
}

export default Projects;
