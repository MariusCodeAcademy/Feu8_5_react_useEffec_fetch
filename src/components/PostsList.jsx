// parsiunciam failus iskarto po to kai susikuria komponentas(useEffect)
// kai parsiunciam irasom i state (useState)

import { useEffect, useState } from 'react';
import SinglePost from './SinglePost';

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
      <p>Kiek viso</p>
      <ul className='unlisted grid'>
        {postsArr.map((pObj) => (
          <SinglePost key={pObj.id} item={pObj} />
        ))}
      </ul>
    </div>
  );
}
