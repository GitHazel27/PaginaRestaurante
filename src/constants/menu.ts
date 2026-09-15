export interface Dish {
  id: number;
  name: string;
  ingredients: string[];
  price: number;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  dishes: Dish[];
}

export interface CartItem {
  dish: Dish;
  quantity: number;
}

export const menuCategories: Category[] = [
  {
    id: 'comida',
    name: 'Comidas y Platos Fuertes',
    dishes: [
      {
        id: 101,
        name: 'Hamburguesa Clásica Artesanal',
        ingredients: ['Carne de res 200g', 'Queso cheddar', 'Lechuga', 'Tomate', 'Pan brioche'],
        price: 145.0,
        description: 'Acompañada con papas gajo sazonadas.'
      },
      {
        id: 102,
        name: 'Tacos de Cochinita Pibil (Orden 3)',
        ingredients: ['Carne de cerdo marinada en achiote', 'Cebolla morada encurtida', 'Tortillas de maíz hechas a mano'],
        price: 120.0,
        description: 'Receta tradicional yucateca con salsa de habanero aparte.'
      },
      {
        id: 103,
        name: 'Pizza Margherita Personal',
        ingredients: ['Masa madre', 'Salsa de tomate casera', 'Mozzarella fresca', 'Albahaca'],
        price: 135.0,
        description: 'Horneada a la piedra con un toque de aceite de oliva virgen extra.'
      }
    ]
  },
  {
    id: 'postres',
    name: 'Postres y Dulces',
    dishes: [
      {
        id: 201,
        name: 'Marquesita Tradicional',
        ingredients: ['Masa crujiente tipo barquillo', 'Queso de bola holandés', 'Nutella'],
        price: 65.0,
        description: 'El postre callejero por excelencia, recién preparado.'
      },
      {
        id: 202,
        name: 'Cheesecake de Frutos Rojos',
        ingredients: ['Queso crema', 'Base de galleta de mantequilla', 'Compota artesanal de moras'],
        price: 85.0,
        description: 'Textura suave y cremosa con toque ácido natural.'
      }
    ]
  },
  {
    id: 'bebidas',
    name: 'Bebidas y Coctelería',
    dishes: [
      {
        id: 301,
        name: 'Agua Fresca de Chaya con Limón (1L)',
        ingredients: ['Hojas de chaya fresca', 'Jugo de limón natural', 'Azúcar de caña', 'Hielo'],
        price: 45.0,
        description: 'Bebida fresca y revitalizante típica regional.'
      },
      {
        id: 302,
        name: 'Cold Brew con Vainilla',
        ingredients: ['Café de especialidad extraído en frío (18h)', 'Leche deslactosada/almendra', 'Vainilla natural'],
        price: 60.0,
        description: 'Refrescante, balanceado y aromático.'
      }
    ]
  }
];