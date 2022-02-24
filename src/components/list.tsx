import React, { useContext, useEffect, useState } from 'react';
import ListItem from './list-item';
import data from '../data/data.json';
import TagsContext from './context';

const List = () => {

  const [ jobs, setJobs ] = useState(data);
  const { tags } = useContext(TagsContext);

  useEffect(() => {
    if(tags.length >= 1){
      // console.log("jobs filtered", jobs.filter(job => {
      //   let jobTags = job.tools.concat(job.role, job.level, job.languages);
      //   console.log("tags", tags.find(tag => jobTags.includes(tag)));
      //   return tags.find(tag => jobTags.includes(tag));
      // }));
      setJobs((prevJobs) => prevJobs.filter(job => {
        let jobTags = job.tools.concat(job.role, job.level, job.languages);
        console.log("tags", tags.find(tag => jobTags.includes(tag)));
        return tags.find(tag => jobTags.includes(tag));
      }));
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