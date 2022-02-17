import React from 'react';
import ListItem from './list-item';

import data from '../data/data.json';

const List = () => {
  // data.map(job => {
  //   console.log("datos", job);
  // })
  
  return (
    <div className="list">


      { data.map(job => <ListItem job={job}/> )}

    </div>
  )
}

export default List;