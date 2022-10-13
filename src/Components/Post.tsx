import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

interface Author{
    name:string;
    role:string;
    avatarUrl:string;
}

interface Content{
    type: string;
    content: string;
}

interface Post{
    author: Author;
    
    publishedAt: Date;
    content: Content[];
}

export function Post({ author, content, publishedAt} : Post){

    const [comments, setComments] = useState([
        'Comentário muito bom em...'
    ])

    const [newCommentText, setNewCommentText] = useState("");

    const publishedDateFormat = format(publishedAt, "d 'de' LLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix:true
    })  

    function handleCreateNewComment(event: FormEvent){
        event.preventDefault()

        // const newCommentText = event.target.comment.value;
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function deleteComment(comment:string){
        const commentWithoutDeletedOne = comments.filter(c => c != comment);
        // console.log(commentWithoutDeletedOne);
        setComments(commentWithoutDeletedOne);
    }

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder={true} src={ author.avatarUrl } alt=''/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
                {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line =>{
                    if(line.type ==='paragraph'){
                        return <p>{line.content}</p>
                    }else if(line.type === 'link'){
                        return <p><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                name='comment'
                placeholder='Deixe um comentário'
                value={newCommentText}
                onChange={handleNewCommentChange}
                onInvalid={handleNewCommentInvalid}
                required
                />

                <footer>
                    <button  disabled={newCommentText.length === 0}
                    type="submit">Publicar</button>
                </footer>
                
            </form>

            <div className={styles.commentList}>
                {comments.map(comentario => {
                    return <Comment key={comentario} content={comentario} deletarComentario={deleteComment} />
                })}
            </div>
        </article>
    )
}