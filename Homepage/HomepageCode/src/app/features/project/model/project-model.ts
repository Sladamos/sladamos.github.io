import {ProjectTechnology} from './project-technology';

export interface ProjectModel {
  name: string,
  description: string,
  imgUrl: string,
  sourceCodeUrl: string,
  technologies: ProjectTechnology[]
}
