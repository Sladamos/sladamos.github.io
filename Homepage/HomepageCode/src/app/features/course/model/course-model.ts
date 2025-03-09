import {TechnologyModel} from '../../technology/model/technology-model';

export interface CourseModel {
  title: string,
  issuerIconUrl?: string,
  issuerName: string,
  technologies: TechnologyModel[],
  certificateUrl: string
}
