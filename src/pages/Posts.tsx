import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Post from '../components/Post';
import { posts } from '../data';
import { PostType } from '../types';
import '../styles/Posts.css';

export default function Posts() {
  const { id } = useParams<{ id: string }>();

  // Verifica se o id é definido e filtra os posts
  const userPosts: PostType[] = id ? posts
    .filter((post) => post.userId === parseInt(id, 10)) : [];

  return (
    <div data-testid="posts-page">
      <Header />
      <h1>Posts</h1>
      <div className="posts-list">
        {userPosts.map((post) => (
          <Post key={ post.id } postData={ post } />
        ))}
      </div>
    </div>
  );
}
