import { Ecommerce } from './RestModels';

export class GetEmpty {
  static ecommerce(): Ecommerce {
    return {
      id: 0,
      created: '',
      name: '',
      color: '',
      updated: '',
      preferences_id: 1
    };
  }
}
