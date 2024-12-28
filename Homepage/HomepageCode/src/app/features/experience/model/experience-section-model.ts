import {ExperienceSectionItem} from './experience-section-item';
import {SectionModel} from '../../shared/model/section-model';

export interface ExperienceSectionModel extends SectionModel {
  items: ExperienceSectionItem[];
}
