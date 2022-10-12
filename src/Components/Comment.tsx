
import styles from './Comment.module.css';
import { ThumbsUp, Trash} from 'phosphor-react';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
    content:string;
    deletarComentario: (comment: string) => void;
}

export function Comment({content, deletarComentario}:CommentProps){

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        deletarComentario(content);
    }

    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1;
        });
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/njeronimo1.png" alt=''/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Nicolas Jerônimo</strong>
                            <time title='11 de maio às 08:13:00' dateTime="2022-05-11 08:13:30">Cerca de 1 atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}> <ThumbsUp /> 
                    Aplaudir <span>{likeCount}</span></button>
                </footer>
            </div>
        </div>
    )
}