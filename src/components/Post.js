import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const Post = (props) => {
  return (
    <Card align="left" className="card">
      <CardContent>
        <Typography
          variant="caption"
          color="textSecondary"
          size="sm"
          gutterBottom
        >
          {props.date}
        </Typography>
        <Typography variant="h4" color="textPrimary">
          {props.title}
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          {props.text}
        </Typography>
        <Typography variant="caption" color="textSecondary" size="sm">
          {props.author}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
