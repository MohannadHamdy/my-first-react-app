import Post from "./Post";
import { Container } from "@material-ui/core";

const Posts = (props) => {
  return (
    <Container maxWidth="md">
      {props.posts.map((post) => (
        <Post
          key={post.id}
          date={post.date}
          title={post.title}
          text={post.text}
          author={post.author}
        />
      ))}
    </Container>
  );
};

export default Posts;
