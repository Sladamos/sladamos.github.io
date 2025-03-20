import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {HobbyItemModel} from './hobby-item-model';

export interface HobbyModel {
  name: string,
  items: HobbyItemModel[],
  faIcon?: IconProp,
  customIcon?: string
}
