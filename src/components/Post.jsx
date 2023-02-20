
import {format,formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Comment } from './Comment';
import styles from './Post.module.css'
import { Avatar } from './Avatar';



export function Post({author, content, publishedAt}){

    const publishedDateFormatted =  format(publishedAt,"d 'de' LLLL 'às' HH:mm'h'",{
        locale: ptBR
    })


    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { 
        locale: ptBR,
        addSuffix: true 
    })

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>


                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
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

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Deixe seu comentário" />

                <footer>
                    <button type='submit'>Publicar</button>

                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    );
}