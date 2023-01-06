import styles from './Home.module.css';
import savings from '../../img/savings.svg';
import LinkButton from '../layout/LinkButton';
function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem vindo ao <span>Costing</span>
      </h1>
      <p>Gerencie os seus projetos agora!</p>
      <LinkButton to='/NewProject' text='Criar Projeto' />
      <img src={savings} alt='costings' />
    </section>
  );
}

export default Home;
