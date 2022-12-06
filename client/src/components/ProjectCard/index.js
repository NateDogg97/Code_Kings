import React from 'react';

import { useQuery } from '@apollo/client';

import CardList from '../CardList';

import { QUERY_PROJECTS } from "../../utils/queries";

const ProjectCard = () => {
  const { loading, data } = useQuery(QUERY_PROJECTS);
  const projects = data?.projects || [];

return(
  <div className = "renderedCard">
    {loading ? (
          <div>Loading...</div>
        ) : (
          <CardList
            projects={projects}
          />
        )}
  </div>
)
  };
export default ProjectCard;