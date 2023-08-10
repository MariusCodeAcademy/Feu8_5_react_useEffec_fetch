// parsiunciam failus iskarto po to kai susikuria komponentas(useEffect)
// kai parsiunciam irasom i state (useState)

import { useEffect, useState } from 'react';

const postsUrl = 'https://dummyjson.com/posts';

export default function PostsList() {
  const [postsArr, setPostsArr] = useState([]);

  useEffect(() => {
    fetch(postsUrl)
      .then((resp) => resp.json())
      .then((dataBack) => {
        console.log('dataBack.posts ===', dataBack.posts);
        // irasyti posts is dataBack i postsArr
        setPostsArr(dataBack.posts);
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }, []);

  return (
    <div>
      <h2>PostsList</h2>
      <ul>
        {postsArr.map((pObj) => (
          <li key={pObj.id}>
            <h3>{pObj.title}</h3>
            <p>body, reactions</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
