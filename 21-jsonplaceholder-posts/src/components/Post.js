import './Post.css'
function Post(props) {
 const  {userId, id, title, body} = props;
    return <div className="post">
      <h1>{title}</h1>
      <small>Id: {id}</small>
      <p>{body}</p>
      <h4>User Id: {userId}</h4>
    </div>;
  }
  
  export default Post;