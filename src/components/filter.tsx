import React, { useContext } from 'react';
import TagsContext from './context';

const Filter = () => {

  const { tags, setTags } = useContext(TagsContext);

  const clickRemoveTag = (tagLabel: string) => {
    let newTags = tags.filter(tag => tag !== tagLabel);
    setTags(newTags);
  }

  const clickRemoveAllTags = () => {
    setTags([]);
  } 

  return (
    <div className="filter">

      <div className="filter--bar" style={{ display: tags.length >= 1 ? "flex" : "none" }}>

        <div className="filter--tags">

          { tags.map((tag, key) => 
            <div key={key} className="filter--tags--boxtag">
              <div className="filter--tags--tag">{tag}</div> 
              <div className="filter--tags--remove" onClick={() => clickRemoveTag(tag)} >X</div>
            </div>
          ) }

        </div>

        <div className="filter--clear">

          <div className="filter--link-clear" onClick={() => clickRemoveAllTags()} >Clear</div>

        </div>

      </div>

    </div>
  )
}

export default Filter;