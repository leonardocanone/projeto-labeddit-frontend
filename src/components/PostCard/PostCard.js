import { useNavigate } from "react-router-dom"
import { CardFooter, PostCardContainer, PostEditingContainer } from "./PostCardStyled"
import { goToCommentsPage } from "../../routes/coordinator"
import VectorUpIcon from "../../assets/vector_up.png"
import VectorDownIcon from "../../assets/vector_down.png"
import CommentIcon from "../../assets/comment_icon.png"
import EditIcon from "../../assets/edit-icon.png"
import DeleteIcon from "../../assets/delete-icon.png"
import axios from "axios"
import { BASE_URL, TOKEN_NAME } from "../../constants/constants"
import { useState } from "react"
import { Loading } from "../Loading/Loading"
import { Loading2 } from "../Loading/Loading2"

export default function PostCard(props) {
  
    const navigate = useNavigate()
  
    const { post, fetchUpdate } = props
  
    const {
      id,
      creator,
      content,
      likesCount,
      commentsCount
    } = post

    const [editedContent, setEditedContent] = useState(content)
    const [isEditing, setIsEditing] = useState(false)
    const [loading, setLoading] = useState(false)
    const [loadingLikes, setLoadingLikes] = useState(false)
    const [loadingDelete, setLoadingDelete] = useState(false)

    const likeOrDislikePost = (e, like) => {
      e.stopPropagation()
      setLoadingLikes(true)
      
      const body = {
        postId: id,
        like: like
      }
  
      const axiosConfig = {
        headers: {
          Authorization: window.localStorage.getItem(TOKEN_NAME)
        }
      }
  
      axios.put(`${BASE_URL}/posts/${id}/like`, body, axiosConfig)
        .then(res => {
          fetchUpdate()
        })
        .catch((err) => {
          alert(err.response.data.message || "Erro inesperado, tente novamente!")
        })
        .finally(() => { setLoadingLikes(false) })
    }

    const handleEditClick = (e) => {
      e.stopPropagation()
      setIsEditing(true)
    }

    const editPost = (e) => {
      e.preventDefault()
      setLoading(true)

      const body = {
        postId: id,
        content: editedContent
      }
  
      const axiosConfig = {
        headers: {
          Authorization: window.localStorage.getItem(TOKEN_NAME)
        }
      }
  
      axios.put(`${BASE_URL}/posts/${id}`, body, axiosConfig)
        .then(res => {
          fetchUpdate()
          setIsEditing(false)
        })
        .catch((err) => {
          alert(err.response.data || "Erro inesperado, tente novamente!");
        })
        .finally(() => { setLoading(false) })
    }

    const deletePost = (e) => {
      e.stopPropagation()
      setLoadingDelete(true)
      
      const axiosConfig = {
        headers: {
          Authorization: window.localStorage.getItem(TOKEN_NAME)
        }
      }
  
      axios.delete(`${BASE_URL}/posts/${id}`, axiosConfig)
        .then(res => {
          fetchUpdate()
          alert("Postagem deletada com sucesso!")
        })
        .catch((err) => {
          alert(err.response.data || "Erro inesperado, tente novamente!");
        })
        .finally(() => { setLoadingDelete(false) })
    }
  
    return (
      <>
        {isEditing ? (
          <>
          <PostEditingContainer>
          <p>Editado por: {creator.nickname}</p>
            <form onSubmit={editPost}>
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
          </PostEditingContainer>
          </>
          ) : (
          <>
        <PostCardContainer onClick={() => goToCommentsPage(navigate, id)}>  
        <p>Enviado por: {creator.nickname}</p>
  
        <h1>{content}</h1>
  
        <CardFooter>
          <section className="like-info">
            <button onClick={(e) => likeOrDislikePost(e, true)}>
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
  
            <button onClick={(e) => likeOrDislikePost(e, false)}>
              <img className="like-icon" src={VectorDownIcon} alt="Dislike down" />
            </button>
          </section>
  
          <section className="comment-info">
            <img className="comment-icon" src={CommentIcon} alt="Ícone de comentários" />
            <span>{commentsCount}</span>
          </section>

          <section className="edit-post">
            <button onClick={handleEditClick}>
              <img className="edit-icon" src={EditIcon} alt="Ícone de edição de post" />
            </button>
          </section>

          <section className="delete-post">
          {loadingDelete && <Loading2 size="18px" />}
            <button onClick={deletePost}>
              <img className="delete-icon" src={DeleteIcon} alt="Ícone de deleção de post" />
            </button>
          </section>
        </CardFooter>
        </PostCardContainer>
        </>
        )}
      </>
    );
  }