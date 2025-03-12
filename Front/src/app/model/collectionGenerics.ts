import { Base } from './base';
import { Info } from './info';

export class CollectionGeneric<T> extends Base{
      info?: Info;
      results?: T [];
}