import PropTypes from "prop-types";
import { User } from "./User.jsx";
export function Post({ title, contents, author, image }) {
  return (
    <article>
      <h3>{title}</h3>
      <img src={image} height="100" width="100" alt={title} />
      <div>{contents}</div>
      {author && (
        <em>
          <br />
          Written by <User id={author} />
        </em>
      )}
    </article>
  );
}
Post.propTypes = {
  title: PropTypes.string.isRequired,
  contents: PropTypes.string,
  author: PropTypes.string,
  image: PropTypes.string,
};
