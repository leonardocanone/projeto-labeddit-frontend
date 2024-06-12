import { useNavigate, useParams } from "react-router-dom"
import { Header } from "../../components/Header/Header"
import HorizontalLine from "../../components/HorizontalLine"
import PostCard from "../../components/PostCard/PostCard"
import { CommentForm, CommentsPageContainer, CommentsSection, PostSection } from "./CommentsPageStyled"
import FooterBar from "../../assets/footer-bar.svg"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL, TOKEN_NAME } from "../../constants/constants"
import { goToLoginPage } from "../../routes/coordinator"
import CommentCard from "../../components/CommentCard/CommentCard"
import { Loading } from "../../components/Loading/Loading"
import { Loading2 } from "../../components/Loading/Loading2"

export const CommentsPage = () => {

    const navigate = useNavigate()
    const params = useParams()
  
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState([])
    const [content, setContent] = useState("")
    const [loadingButton, setLoadingButton] = useState(false)
    const [loadingPost, setLoadingPost] = useState(false)
    const [loadingComments, setLoadingComments] = useState(false)
  
    useEffect(() => {
      const token = window.localStorage.getItem(TOKEN_NAME)
      if (!token) {
        goToLoginPage(navigate)
      } else {
        searchPost()
        searchComments()
      }
    }, [])
  
    const searchPost = () => {
      setLoadingPost(true)
      const axiosConfig = {
        headers: {
          Authorization: window.localStorage.getItem(TOKEN_NAME)
        }
      }
  
      axios.get(`${BASE_URL}/posts/${params.id}`, axiosConfig)
        .then(res => {
          setPost(res.data)
        })
        .catch((err) => {
          alert(err.response.data.message || "Erro inesperado!")
        })
        .finally(() => { setLoadingPost(false) })
    }
  
    const searchComments = () => {
      setLoadingComments(true)
      const axiosConfig = {
        headers: {
          Authorization: window.localStorage.getItem(TOKEN_NAME)
        }
      }
  
      axios.get(`${BASE_URL}/posts/${params.id}/comments`, axiosConfig)
        .then(res => {
          setComments(res.data)
        })
        .catch((err) => {
          alert(err.response.data.message || "Erro inesperado!")
        })
        .finally(() => { setLoadingComments(false) })
    }
  
    const createComment = (e) => {
      e.preventDefault()
      setLoadingButton(true)

      const body = {
        content: content
      }
  
      const axiosConfig = {
        headers: {
          Authorization: window.localStorage.getItem(TOKEN_NAME)
        }
      }
  
      axios.post(`${BASE_URL}/posts/${params.id}/comments`, body, axiosConfig)
        .then(res => {
          searchPost()
          searchComments()
          setContent("")
        })
        .catch((err) => {
          alert(err.response.data.message || "Erro inesperado, tente novamente!")
        })
        .finally(() => { setLoadingButton(false) })
    }

    return (
        <CommentsPageContainer>
      <Header />

      { loadingPost
            ?
            <Loading2 size="35px" />
            :
      <PostSection>
        {post && <PostCard post={post} fetchUpdate={searchPost} />}
      </PostSection>
      }

      <CommentForm>
        <form onSubmit={createComment}>
          <textarea
            placeholder="Adicionar comentário"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />

          <button
            className="comentar" type="submit"
          >
            {
              loadingButton
                ?
              <Loading size="40px" />
                :
              "Responder"
              }
          </button>
        </form>
      </CommentForm>

      {
        loadingComments
          ?
        <Loading2 size="33px" />
          :
        <HorizontalLine />
      }

      <CommentsSection>
        {comments.map(comment => (
          <CommentCard
            comment={comment}
            fetchComments={searchComments}
            fetchPost={searchPost}
            key={comment.id}
          />
        ))}
      </CommentsSection>
      
      <img id="footer-bar" src={FooterBar} alt="Barra horizontal de rodapé IPhone" />
    </CommentsPageContainer>
    )
}