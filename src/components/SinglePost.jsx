export default function SinglePost(props) {
  const { title, body, reactions } = props.item;
  return (
    <li>
      <div className='postCard'>
        <h3>{title}</h3>
        <p>{body.slice(0, 45)}...</p>
        <p>{reactions} people like this</p>
      </div>
    </li>
  );
}
