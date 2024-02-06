import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar';
import { Comment } from './Comments';
import styles from './post.module.css';
import { useState } from 'react';

export function Post ({ author, publishedAt, content }) {

/*Comentário inicial*/
  const [comments, setComments] = useState ([
    'Post muito bacana!',
  ])
/*Formatando a data de publicação para ptBR*/
  const publishedDateFormatted = format (publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBr,
  })
/*Formatando há quanto tempo o post foi feito*/
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  })
/*Criando novo estado para armazenar o valor da textarea*/
  const [newCommentText,setNewCommentText] = useState('')

/*Acrescenta o comentário*/
  function handleCreateNewComment() {
    event.preventDefault()/*Evitando redirecionamento padrão do HTML*/
    setComments([...comments,newCommentText]);
    setNewCommentText('')

  }
/*Armazena o valor da textarea*/
  function handleNewCommentChange () {
    setNewCommentText(event.target.value)

  }

  return (
    <article className= {styles.post}>
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
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p><a href="">{line.content}</a></p>;
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>
        <textarea name='comment'
        onChange={handleNewCommentChange}
        value={newCommentText}
        placeholder='Deixe um comentário'
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment content={comment}/>
        })}
      </div>

    </article>
  );
}
