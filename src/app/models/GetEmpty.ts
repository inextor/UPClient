import { Ecommerce } from './RestModels';

export class GetEmpty
{
	static ecommerce(): Ecommerce
	{
		return {
			id: 0,
			created: '',
			name: 'xxxx',
			color: 'white',
			font_color: 'black',
			updated: '',
			preferences_id: 1
		};
	}
}
