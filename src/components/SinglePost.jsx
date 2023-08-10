import { useState } from 'react';

export default function SinglePost(props) {
  const [isTextFull, setIsTextFull] = useState(false);
  function toggleFullText() {
    setIsTextFull(!isTextFull);
  }

  const { title, body, reactions } = props.item;
  // body.slice(0, 45)}...
  // body
  const bodyText = isTextFull ? body : `${body.slice(0, 45)}...`;

  return (
    <li className='postCard'>
      <div>
        <h3>{title}</h3>
        <p>{bodyText}</p>

        <button onClick={toggleFullText}>
          read {isTextFull ? 'less' : 'more'}
        </button>
        <p>{reactions} people like this</p>
      </div>
    </li>
  );
}
