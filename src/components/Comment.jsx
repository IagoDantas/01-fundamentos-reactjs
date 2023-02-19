import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/RafaelMMuniz.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rafael Marcondes</strong>
                            <time dateTime='2022-05-11 08:13:30' title="11 de Maio de 08:14h">Cerca de 1h atrás</time>
                        </div> 

                        <button title="Deletar" className="">
                            <Trash size={24}/>
                        </button>

                    </header>



                    <p>Muito bom Devon, parabéns 👏🏽👏🏽</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>    
                    </button>
                </footer>
            </div>  
        </div>
    )
}