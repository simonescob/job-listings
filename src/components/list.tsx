import React, { useContext, useEffect, useState } from 'react';
import ListItem from './list-item';
import data from '../data/data.json';
import TagsContext from './context';

const List = () => {

  const [ jobs, setJobs ] = useState(data);
  const { tags } = useContext(TagsContext);

  useEffect(() => {
    if(tags.length > 0){

      let jobsFiltered = data.filter((job) => {
        let jobTags = job.tools.concat(job.role, job.level, job.languages);

        let jobFiltered = jobTags.filter( jobLabel => tags.some(tag => tag === jobLabel ));
        if(jobFiltered.length === tags.length){
          return job;
        }

        return null;
      });

      setJobs(jobsFiltered);

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