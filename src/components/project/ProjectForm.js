import { useEffect, useState } from 'react';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import styles from './ProjectForm.module.css';

function ProjectForm({ btnText, handleSubmit, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  };

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSelect = (e) => {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  };

  return (
    <form onSubmit={submit} className={styles.form}>
      <div>
        <Input
          text='Nome do Projeto'
          type='text'
          name='name'
          handleOnChange={handleChange}
          placeholder='Insira o nome do projeto'
          value={project.name ? project.name : ''}
        />
      </div>
      <div>
        <Input
          text='Orçamento'
          type='Number'
          name='budget'
          handleOnChange={handleChange}
          placeholder='Insira o orçamento do projeto'
          value={project.budget ? project.budget : ''}
        />
      </div>
      <div>
        <Select
          name='category_id'
          text='Seleciona a categoria'
          handleOnChange={handleSelect}
          options={categories}
          value={project.category ? project.category.id : ''}
        />
      </div>
      <div>
        <SubmitButton text={btnText} />
      </div>
    </form>
  );
}

export default ProjectForm;
