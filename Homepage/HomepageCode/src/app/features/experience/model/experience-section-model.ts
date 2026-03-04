import {SectionModel} from '../../../core/shared/model/section-model';
import {ExperienceSectionItem} from './experience-section-item';

export interface ExperienceSectionModel extends SectionModel {
  items: ExperienceSectionItem[];
}
