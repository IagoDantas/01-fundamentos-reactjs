import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import {useState} from 'react'

export function Comment({content, onDeleteComment}) {

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment(){
        onDeleteComment(content)
    }
    function handleLikeComment(){
        setLikeCount((state)=>{// sempre que o estado anterior é necessário, é necessário passar uma função como parâmetro
            return state + 1
        })
    }
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/IagoDantas.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Iago Dantas</strong>
                            <time dateTime='2022-05-11 08:13:30' title="11 de Maio de 08:14h">Cerca de 1h atrás</time>
                        </div> 

                        <button onClick={handleDeleteComment} title="Deletar" className="">
                            <Trash size={24}/>
                        </button>

                    </header>



                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>    
                    </button>
                </footer>
            </div>  
        </div>
    )
}