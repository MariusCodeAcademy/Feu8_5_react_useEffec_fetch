// parsiunciam failus iskarto po to kai susikuria komponentas(useEffect)
// kai parsiunciam irasom i state (useState)

import { useEffect, useState } from 'react';
import SinglePost from './SinglePost';

const sortOptions = ['id', 'title', 'reactions'];

const postsUrl = 'https://dummyjson.com/posts';

export default function PostsList() {
  const [postsArr, setPostsArr] = useState([]);
  const [selectValue, setSelectValue] = useState('title');

  function selectInput(event) {
    console.log('select happened', event.target.value);
    setSelectValue(event.target.value);
    // sortBySelectedValue();
  }

  function sortBySelectedValue() {
    // pasidartyti state kopija
    const postsArrCopy = [...postsArr];
    // sort by selectValue
    postsArrCopy.sort((aObj, bObj) =>
      bObj[selectValue].toString().localeCompare(aObj[selectValue].toString())
    );
    // switch (selectValue) {
    //   case 'reactions':
    //     postsArrCopy.sort((aObj, bObj) =>
    //       bObj.reactions.toString().localeCompare(aObj.reactions.toString())
    //     );
    //     break;
    //   case 'id':
    //     postsArrCopy.sort((aObj, bObj) =>
    //       bObj.id.toString().localeCompare(aObj.id.toString())
    //     );
    //     break;
    //   case 'title':
    //     postsArrCopy.sort((aObj, bObj) =>
    //       bObj.title.toString().localeCompare(aObj.title.toString())
    //     );
    //     break;
    //   default:
    //     console.warn('selected value not found');
    //     break;
    // }
    setPostsArr(postsArrCopy);
  }

  useEffect(() => {
    fetch(postsUrl)
      .then((resp) => resp.json())
      .then((dataBack) => {
        console.log('dataBack.posts ===', dataBack.posts);
        // irasyti posts is dataBack i postsArr
        setPostsArr(dataBack.posts.slice(0, 5));
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }, []);

  const howManyPosts = postsArr.length;

  function sortByReactions() {
    console.log('sortByReactions ===');
    // pasidartyti state kopija
    const postsArrCopy = [...postsArr];
    // isrikiuoti kopija
    postsArrCopy.sort((aObj, bObj) => bObj.reactions - aObj.reactions);
    // atnaujinti state su kopija
    console.table(postsArrCopy);
    setPostsArr(postsArrCopy);
  }

  return (
    <div>
      <h2>PostsList</h2>
      <p>Kiek viso: {howManyPosts}</p>
      <button onClick={sortByReactions}>sort by reactions</button>
      <p>sort by: {selectValue}</p>
      <select onChange={selectInput} value={selectValue}>
        <option disabled value=''>
          --select sort option--
        </option>
        {sortOptions.map((optValue) => (
          <option key={optValue} value={optValue}>
            {optValue}
          </option>
        ))}
      </select>
      <button onClick={sortBySelectedValue}>Sort</button>
      <ul className='unlisted grid'>
        {postsArr.map((pObj) => (
          <SinglePost key={pObj.id} item={pObj} />
        ))}
      </ul>
    </div>
  );
}
