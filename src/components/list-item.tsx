import React from 'react';

export interface Job {
  id: number,
  company: string,
  logo: string,
  new: boolean
  featured: boolean,
  position: string,
  role: string,
  level: string,
  postedAt: string,
  contract: string,
  location: string,
  languages: string[],
  tools: string[]
}

export interface interJob {
  job: Job
}

const ListItem = ({job}: interJob) => {

  let tags = job.languages.concat(job.tools);
  console.log("job", job);

  return (
    <div className={`list-item ${ job.featured ? 'list-item--border' : '' }`}>

      <div className="list-item--company-info">

        <img src={job.logo} alt="logo job" className="list-item--img" />

        <div className="list-item--info">
          
          <div className="list-item--info--company-name">
            {job.company}

            <div className="list-item--info--bagdes">
              { job.new ? <div className="list-item--info--bagde-primary">NEW!</div> : null }
              { job.featured ? <div className="list-item--info--bagde-black">FEATURED</div> : null } 
            </div> 
          </div>
          
          <div className="list-item--info--job-title">
            {job.position}
          </div>
          
          <div className="list-item--info--footer">
            <div>{job.postedAt}</div>
            <li>{job.contract}</li>
            <li>{job.location}</li>
          </div>

        </div>

      </div>

      <div className="list-item--tags">

        <div className="list-item--tags--tag">{job.role}</div>
        <div className="list-item--tags--tag">{job.level}</div>
        
        {tags.map(tag => <div className="list-item--tags--tag">{tag}</div> )}

      </div>
      
    </div>
  )
}

export default ListItem;