import PropTypes from "prop-types";
import { User } from "./User.jsx";
import { Link } from "react-router-dom";
import slug from "slug";
export function Post({
  title,
  contents,
  author,
  image,
  id,
  likes,
  fullPost = false,
}) {
  return (
    <article>
      {fullPost ? (
        <div>
          <img src={image} height="100" width="100" alt={title} />
          <hr />
          <span>
            <button>&#10084; Likes: {likes}</button>{" "}
          </span>
          <h3>{title}</h3>
        </div>
      ) : (
        <Link to={`/posts/${id}/${slug(title)}`}>
          <img src={image} height="100" width="100" alt={title} />
          <h3>{title}</h3>
          <span>&#10084; Likes: {likes}</span>
          <br />
        </Link>
      )}
      {fullPost && <div>{contents}</div>}
      {author && (
        <em>
          {fullPost && <br />}
          <span>
            {" "}
            Written by <User {...author} />
          </span>
        </em>
      )}
    </article>
  );
}
Post.propTypes = {
  title: PropTypes.string.isRequired,
  contents: PropTypes.string,
  author: PropTypes.shape(User.propTypes),
  image: PropTypes.string,
  id: PropTypes.string.isRequired,
  likes: PropTypes.number,
  fullPost: PropTypes.bool,
};
