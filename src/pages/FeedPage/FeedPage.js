import { useNavigate } from "react-router-dom"
import { Header } from "../../components/Header/Header"
import HorizontalLine from "../../components/HorizontalLine"
import PostCard from "../../components/PostCard/PostCard"
import { FeedPageContainer, PostForm, PostsSection } from "./FeedPageStyled"
import FooterBar from "../../assets/footer-bar.svg"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL, TOKEN_NAME } from "../../constants/constants"
import { goToLoginPage } from "../../routes/coordinator"
import { Loading } from "../../components/Loading/Loading"
import { Loading2 } from "../../components/Loading/Loading2"

export const FeedPage = () => {

  const navigate = useNavigate()
  const [posts, setPosts] = useState([])
  const [content, setContent] = useState("")
  const [loadingButton, setLoadingButton] = useState(false)
  const [loadingPosts, setLoadingPosts] = useState(false)

  useEffect(() => {
    const token = window.localStorage.getItem(TOKEN_NAME)
    if (!token) {
      goToLoginPage(navigate)
    } else {
      searchPosts()
    }
  }, [])

  const searchPosts = () => {
    setLoadingPosts(true)
    const axiosConfig = {
      headers: {
        Authorization: window.localStorage.getItem(TOKEN_NAME)
      }
    }

    axios.get(`${BASE_URL}/posts`, axiosConfig)
      .then(res => {
        setPosts(res.data)
        setContent("")
      })
      .catch((err) => {
        alert(err.response.data.message || "Erro inesperado!")
      })
      .finally(() => { setLoadingPosts(false) })
  }

  const createPost = (e) => {
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

    axios.post(`${BASE_URL}/posts`, body, axiosConfig)
      .then(res => {
        searchPosts()
      })
      .catch((err) => {
        alert(err.response.data.message || "Erro inesperado, tente novamente!")
      })
      .finally(() => { setLoadingButton(false) })
  }

    return (
      <FeedPageContainer>
        <Header />

        <PostForm>
          <form onSubmit={createPost}>
            <textarea
              placeholder="Escreva seu post..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
            <button className="postar" type="submit">
              {
                loadingButton
                  ?
                <Loading size="40px" />
                  :
                "Postar"
              }
            </button>
          </form>
        </PostForm>

        {
          loadingPosts
            ?
          <Loading2 size="33px" />
            :
          <HorizontalLine />
        }

        <PostsSection>
          {posts.map((post) => (
            <PostCard 
              post={post} 
              fetchUpdate={searchPosts} 
              key={post.id} 
            />
          ))}
        </PostsSection>
        
        <img id="footer-bar" src={FooterBar} alt="Barra horizontal de rodapé IPhone" />
      </FeedPageContainer>
    );
    
}