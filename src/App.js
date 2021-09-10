import logo from "./logo.svg";
import "./App.scss";
import { Button } from "@material-ui/core";
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState(false);

  const toggleForm = () => {
    setForm(!form);
  };

  //toggleForm
  /*
  const posts = [
    {
      id: 1,
      date: "today",
      title: "first post",
      text: "text here lorem ipsum",
      author: "mr Moe",
    },
    {
      id: 2,
      date: "today",
      title: "second post",
      text: "text here lorem ipsum",
      author: "mr Moe",
    },
    {
      id: 3,
      date: "today",
      title: "third post",
      text: "text here lorem ipsum",
      author: "mr Moe",
    },
  ];
*/
  const data = (pDate, pTitle, pText, pAuthor) => {
    setPosts((prevPosts) => {
      return [
        ...prevPosts,
        {
          date: pDate,
          title: pTitle,
          text: pText,
          author: pAuthor,
          id: Math.floor(Math.random() * 1000),
        },
      ];
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <main>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className="add_post_btn"
          onClick={toggleForm}
        >
          {form ? "Close" : "Add Post"}
        </Button>
        {form && <AddPost onAddPost={data} />}
        <Posts posts={posts} />
      </main>
    </div>
  );
}

export default App;
