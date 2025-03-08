import {TechnologyModel} from '../../technology/model/technology-model';

export interface ProjectModel {
  name: string,
  description: string,
  imgUrl: string,
  sourceCodeUrl: string,
  teamMembers: number,
  technologies: TechnologyModel[]
}
