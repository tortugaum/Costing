import { useEffect, useState } from 'react';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import styles from './ProjectForm.module.css';

function ProjectForm({ btnText }) {
  const [categories, setCategories] = useState([]);

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

  return (
    <form className={styles.form}>
      <div>
        <Input
          text='Nome do Projeto'
          type='text'
          name='name'
          placeholder='Insira o nome do projeto'
        />
      </div>
      <div>
        <Input
          text='Orçamento'
          type='Number'
          name='budget'
          placeholder='Insira o orçamento do projeto'
        />
      </div>
      <div>
        <Select
          name='category_id'
          text='Seleciona a categoria'
          options={categories}
        />
      </div>
      <div>
        <SubmitButton text={btnText} />
      </div>
    </form>
  );
}

export default ProjectForm;
