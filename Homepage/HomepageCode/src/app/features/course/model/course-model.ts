import {TechnologyModel} from '../../technology/model/technology-model';
import {IssuerModel} from '../../issuer/model/issuer-model';

export interface CourseModel {
  title: string,
  issuer: IssuerModel,
  technologies: TechnologyModel[],
  certificateUrl: string
}
