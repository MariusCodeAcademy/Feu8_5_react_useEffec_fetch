export default function SinglePost(props) {
  const { title, body, reactions } = props.item;
  return (
    <li className='postCard'>
      <div>
        <h3>{title}</h3>
        <p>{body.slice(0, 45)}...</p>
        <p>{reactions} people like this</p>
      </div>
    </li>
  );
}
