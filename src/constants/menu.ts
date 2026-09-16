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

export interface Postre {
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

export const menuPostres: Postre[]= [{
  id: 201,
  name: 'Cono Chocolate',
  price: '$18.00',
  calories: '75-213 Cal',
  image: 'https://cdn.sanity.io/images/czqk28jt/prod_bk_mx/e545165ff8400fb64f7784ab9689b3b34eba013b-1333x1333.png?w=750&q=40&fit=max&auto=format'
},
{
  id: 202,
  name: 'Cono Vainilla',
  price: '$18.00',
  calories: '75-213 Cal',
  image: 'https://cdn.sanity.io/images/czqk28jt/prod_bk_mx/30f59a18edde6c0256b9ccebb84b5ee5ddb6a32a-1333x1333.png?w=750&q=40&fit=max&auto=format'
},
{
  id: 203,
  name: 'Sundae Fresa',
  price: '$32.00',
  calories: '610 Cal',
  image: 'https://cdn.sanity.io/images/czqk28jt/prod_bk_mx/d1ad808a49eba5443ae4b01aca88b4c91f272d57-1333x1333.png?w=750&q=40&fit=max&auto=format'
},
{
  id: 204,
  name: 'Sundae Chocolate',
  price: '$32.00',
  calories: '610 Cal',
  image: 'https://cdn.sanity.io/images/czqk28jt/prod_bk_mx/5cf5fde5c845e74a61611d6026ef75941e01292b-1333x1333.png?w=750&q=40&fit=max&auto=format'
}]