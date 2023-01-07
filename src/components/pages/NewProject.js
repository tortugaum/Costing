import { useNavigate } from 'react-router-dom';
import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css';

function NewProject() {
  const history = useNavigate();

  const createPost = (project) => {
    //initializa cost and services
    project.cost = 0;
    project.services = [];

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .then((data) => {
        history('/projects', {
          state: { message: 'Projeto criado com sucesso' },
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto e adicione os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText='Criar projeto' />
    </div>
  );
}

export default NewProject;
