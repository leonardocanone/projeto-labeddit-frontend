import { CardFooter, CommentCardContainer, CommentEditingContainer } from "./CommentCardStyled"
import VectorUpIcon from "../../assets/vector_up.png"
import VectorDownIcon from "../../assets/vector_down.png"
import EditIcon from "../../assets/edit-icon.png"
import DeleteIcon from "../../assets/delete-icon.png"
import axios from "axios"
import { BASE_URL, TOKEN_NAME } from "../../constants/constants"
import { useState } from "react"
import { Loading } from "../Loading/Loading"
import { Loading2 } from "../Loading/Loading2"

export default function CommentCard(props) {

    const { comment, fetchComments, fetchPost } = props
  
    const {
      id,
      postId,
      creator,
      content,
      likesCount
    } = comment
  
    const [editedContent, setEditedContent] = useState(content)
    const [isEditing, setIsEditing] = useState(false)
    const [loading, setLoading] = useState(false)
    const [loadingLikes, setLoadingLikes] = useState(false)
    const [loadingDelete, setLoadingDelete] = useState(false)

    const likeOrDislikeComment = (e, like) => {
      e.stopPropagation()
      setLoadingLikes(true)
  
      const body = {
        commentId: id,
        like: like
      }
  
      const axiosConfig = {
        headers: {
          Authorization: window.localStorage.getItem(TOKEN_NAME)
        }
      }
  
      axios.put(`${BASE_URL}/posts/${postId}/comments/${id}/like`, body, axiosConfig)
        .then(res => {
          fetchComments()
        })
        .catch((err) => {
          alert(err.response.data.message || "Erro inesperado, tente novamente!")
        })
        .finally(() => { setLoadingLikes(false) })
    }

    const handleEditClick = (e) => {
      setIsEditing(true)
    }

    const editComment = (e) => {   
      e.preventDefault()
      setLoading(true)

      const body = {
        commentId: id,
        content: editedContent
      }
  
      const axiosConfig = {
        headers: {
          Authorization: window.localStorage.getItem(TOKEN_NAME)
        }
      }
  
      axios.put(`${BASE_URL}/posts/comments/${id}`, body, axiosConfig)
        .then(res => {
          fetchComments()
          setIsEditing(false)
        })
        .catch((err) => {
          alert(err.response.data || "Erro inesperado, tente novamente!")
        })
        .finally(() => { setLoading(false) })
    }


    const deleteComment = (e) => {
      setLoadingDelete(true)
      
      const axiosConfig = {
        headers: {
          Authorization: window.localStorage.getItem(TOKEN_NAME)
        }
      }
  
      axios.delete(`${BASE_URL}/posts/comments/${id}`, axiosConfig)
        .then(res => {
          fetchComments()
          fetchPost()
          alert("Comentário deletado com sucesso!")
        })
        .catch((err) => {
          alert(err.response.data || "Erro inesperado, tente novamente!")
        })
        .finally(() => { setLoadingDelete(false) })
    }
  
    return (
      <>
      {isEditing ? (
          <>
          <CommentEditingContainer>
          <p>Editado por: {creator.nickname}</p>
            <form onSubmit={editComment}>
              <textarea 
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)} />
              <button type="submit">
                { loading
                    ?
                  <Loading size="30px" />
                    :
                  "Salvar edição"
                }
              </button>
              <button onClick={() => setIsEditing(!isEditing)}>Fechar sem salvar</button>
            </form>
          </CommentEditingContainer>
          </>
          ) : (
          <>
      <CommentCardContainer>
        <p>Enviado por: {creator.nickname}</p>
  
        <h1>{content}</h1>
  
        <CardFooter>
          <section className="like-info">
            <button onClick={(e) => likeOrDislikeComment(e, true)}>
              <img className="like-icon" src={VectorUpIcon} alt="Like up" />
            </button>
  
            <span>
                {
              loadingLikes
                ?
              <Loading2 size="18px" />
                :  
              likesCount
                }
            </span>
  
            <button onClick={(e) => likeOrDislikeComment(e, false)}>
              <img className="like-icon" src={VectorDownIcon} alt="Dislike down" />
            </button>
          </section>

          <section className="edit-comment">
            <button onClick={handleEditClick}>
              <img className="edit-icon" src={EditIcon} alt="Ícone de edição de post" />
            </button>
          </section>

          <section className="delete-comment">
          {loadingDelete && <Loading2 size="18px" />}
            <button onClick={deleteComment}>
              <img className="delete-icon" src={DeleteIcon} alt="Ícone de deleção de post" />
            </button>
          </section>
        </CardFooter>
      </CommentCardContainer>
      </>
      )}
      </>
    );
  }