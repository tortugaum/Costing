import { useLocation } from 'react-router-dom';
import Message from '../layout/Message';
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';
import styles from './Projects.module.css';
import ProjectCard from '../project/ProjectCard';
import Loading from '../layout/Loading';
import { useEffect, useState } from 'react';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [projectMessage, setProjectMessage] = useState('');

  const location = useLocation();
  let message = '';
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:5000/projects', {
        method: 'GET',
        header: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setProjects(data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }, 1000);
  }, []);

  function removeProjects(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      header: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(() => {
        setProjects(projects.filter((p) => p.id !== id));
        setProjectMessage('Projeto removido com sucesso');
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to='/NewProject' text='Criar Projeto' />
      </div>
      {message && <Message msg={message} type='success' />}
      {projectMessage && <Message msg={projectMessage} type='success' />}
      <Container customClass='start'>
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
              handlerRemove={removeProjects}
            />
          ))}
        {isLoading && <Loading />}
        {!isLoading && projects.length <= 0 && (
          <p>Não há projetos cadastrados!</p>
        )}
      </Container>
    </div>
  );
}

export default Projects;
