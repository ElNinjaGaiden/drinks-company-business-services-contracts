import { Drink } from 'drinks-company-models-contracts';

interface IDrinksBusinessService {
	crazyFunction: () => Promise<Drink[]>
}

export default IDrinksBusinessService;