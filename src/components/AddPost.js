import { Button } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { useState } from "react";

const AddPost = (props) => {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  const dateHandler = (e) => {
    setDate(e.target.value);
  };
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const textHandler = (e) => {
    setText(e.target.value);
  };
  const authorHandler = (e) => {
    setAuthor(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();

    if (!date || !title || !text || !author) {
      alert("Please fill in the blanks!");
      return;
    }

    props.onAddPost(date, title, text, author);

    setDate("");
    setTitle("");
    setText("");
    setAuthor("");
  };

  return (
    <Container maxWidth="md" className="form_addpost">
      <Card>
        <form onSubmit={formHandler}>
          <TextField
            id="date"
            label="Date"
            fullWidth
            margin="normal"
            variant="outlined"
            onChange={dateHandler}
            value={date}
          />
          <TextField
            id="title"
            label="Title"
            fullWidth
            margin="normal"
            variant="outlined"
            onChange={titleHandler}
            value={title}
          />
          <TextField
            id="text"
            label="Post Content"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            variant="outlined"
            onChange={textHandler}
            value={text}
          />
          <TextField
            id="author"
            label="Author"
            fullWidth
            margin="normal"
            variant="outlined"
            onChange={authorHandler}
            value={author}
          />
          <Button
            variant="contained"
            type="submit"
            size="large"
            color="primary"
          >
            Submit
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default AddPost;
