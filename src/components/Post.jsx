import styles from './post.module.css';

export function Post () {
  return (
    <article className= {styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar}src="https:github.com/gui-cordeiro22.png"/>
          <div className={styles.authorInfo}>
            <strong>Guilherme Cordeiro</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="01 de Fevereiro de 2024 às 09:32" dateTime="2024-02-01 09:32:00">Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><a href="">👉 jane.design/doctorcare</a></p>

        <p><a href="">#novoprojeto</a> <a href="">#nlw</a> <a href="">#rocketseat</a></p>
      </div>
    </article>
  );
}
