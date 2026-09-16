export interface Burger {
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