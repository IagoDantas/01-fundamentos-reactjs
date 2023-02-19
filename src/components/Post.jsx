import styles from './Post.module.css'


export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/IagoDantas.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Iago Dantas</strong>
                        <span>Web Developer</span>
                    </div>
                </div>


                <time title="11 de Maio as 08:13" dateTime='2022-05-11 08:13:00'>
                    Publicado há 1h
                </time>
                
            </header>
            <div className={styles.content}>
                <p>Falaa galera 👋🏽👋🏽</p>


                <p>Acabei de subir mais um projeto no meu portifa, É um projeto que fiz no NLW Return, evento da Rocketseat</p>

                <p>👉🏽{' '}<a href="#">iago.design/doctorcare</a></p>

                <p>
                    <a href="">#novoprojeto </a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>{' '}
                </p>
            </div>
        </article>
    );
}