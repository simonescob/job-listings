import React, { useContext, useEffect, useState } from 'react';
import ListItem from './list-item';
import data from '../data/data.json';
import TagsContext from './context';

const List = () => {

  const [ jobs, setJobs ] = useState(data);
  const { tags } = useContext(TagsContext);

  useEffect(() => {
    if(tags.length >= 1){
      let newJobs = jobs.filter(job => tags.find(tag => job.role === tag || job.level === tag ));
      setJobs(newJobs);
    }else{
      setJobs(data);
    }
  }, [tags])
  
  return (
    <div className="list">

      { jobs.map((job, key) => <ListItem key={key} job={job}/> )}

    </div>
  )
}

export default List;