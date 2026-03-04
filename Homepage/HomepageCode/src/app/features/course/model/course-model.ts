import { IssuerModel } from '../../issuer/model/issuer-model';
import { TechnologyModel } from '../../technology/model/technology-model';

export interface CourseModel {
  title: string;
  issuer: IssuerModel;
  technologies: TechnologyModel[];
  certificateUrl: string;
}
