import styles from './Comment.module.css';
import { ThumbsUp,Trash } from "phosphor-react";
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment : string) => void;
}

export function Comment( { content, onDeleteComment }: CommentProps ) {
    const  [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1);
    }    

    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false}
                src='https://media-exp1.licdn.com/dms/image/C4E03AQGGZOo3Fg4aDQ/profile-displayphoto-shrink_800_800/0/1516509752581?e=1674691200&v=beta&t=x5kKe86BjnGl2gU4okqJne-kCPxftwwoTlm1ajJj700'                
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Eduardo J. Guerra</strong>
                            <time title='11 de maio as 03:13' dateTime='2022-05-11 08:13:00'>Cerca de 1hr atrás.</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                            
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}