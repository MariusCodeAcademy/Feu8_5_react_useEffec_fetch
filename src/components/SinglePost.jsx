import { useState } from 'react';

export default function SinglePost(props) {
  const [isTextFull, setIsTextFull] = useState(false);
  function toggleFullText() {
    setIsTextFull(!isTextFull);
  }

  const { title, body, reactions } = props.item;
  return (
    <li className='postCard'>
      <div>
        <h3>{title}</h3>
        {!isTextFull && <p>{body.slice(0, 45)}...</p>}
        {isTextFull && <p>{body}</p>}
        <button onClick={toggleFullText}>read more</button>
        <p>{reactions} people like this</p>
      </div>
    </li>
  );
}
