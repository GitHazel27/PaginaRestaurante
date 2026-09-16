export interface Burger {
  id: number;
  name: string;
  price: string;
  calories: string;
  image?: string;
}

export interface Snack {
  id: number;
  name: string;
  price: string;
  calories: string;
  image?: string;
}

export const menuHamburguesas: Burger[] = [{
  id: 1,
  name: 'King Pollo BBQ',
  price: '$114.00',
  calories: '758-1,930 Cal',
  image: 'https://cdn.sanity.io/images/czqk28jt/prod_bk_mx/e2eea77d4ae6e3fdddaf9e4072f28f68fc17b61a-1333x1333.png?w=750&q=40&fit=max&auto=format'
},
{
  id: 2,
  name: 'Honey Chipotle',
  price: '$139.00',
  calories: '970-2,146 Cal',
  image: 'https://cdn.sanity.io/images/czqk28jt/prod_bk_mx/7295227311b417d93b19e2dee24d80bf8d3aa813-1333x1333.png?w=750&q=40&fit=max&auto=format'
},
{
  id: 3,
  name: 'Whopper',
  price: '$124.00',
  calories: '1,000-2,176 Cal',
  image: 'https://cdn.sanity.io/images/czqk28jt/prod_bk_mx/de658526970ace491c161532dd6923e47ad8cd1d-1333x1333.png?w=750&q=40&fit=max&auto=format'
},
{
  id: 4,
  name: 'Rodeo Burger',
  price: '$184.00',
  calories: '670-1,846 Cal',
  image: 'https://cdn.sanity.io/images/czqk28jt/prod_bk_mx/b2b5edf7c66418bf1799ccc93515921ce5fa6652-1333x1333.png?w=750&q=40&fit=max&auto=format'
}
]

export const menuSnacks: Snack[]= [{
  id: 101,
  name: 'Snackbox',
  price: '$114.00',
  calories: '0-839 Cal',
  image: 'https://cdn.sanity.io/images/czqk28jt/prod_bk_mx/f8fe0ee3ca60d94e6d31346adc6536a1d4f476e4-1333x1333.png?w=750&q=40&fit=max&auto=format'
},
{
  id: 102,
  name: 'Papas',
  price: '$44.00',
  calories: '220-289 Cal',
  image: 'https://cdn.sanity.io/images/czqk28jt/prod_bk_mx/6c8278c04e4b7fbe50c95236f8aa0e25c772aca4-1333x1333.png?w=750&q=40&fit=max&auto=format'
},
{
  id: 103,
  name: 'Boneless BBQ',
  price: '$139.00',
  calories: '767-1,943 Cal',
  image: 'https://cdn.sanity.io/images/czqk28jt/prod_bk_mx/12447b66e984166e8eb7d19139a2a7f6762b6777-1333x1333.png?w=750&q=40&fit=max&auto=format'
},
{
  id: 104,
  name: 'Boneless Buffalo',
  price: '$139.00',
  calories: '700-1,876 Cal',
  image: 'https://cdn.sanity.io/images/czqk28jt/prod_bk_mx/6a4a3b204f81d05eb55b7beb2f7f4b5cd3ed8dea-1333x1333.png?w=750&q=40&fit=max&auto=format'
}]