export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  review: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    review: 'Too big, 7.8 out of 10'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    review: 'Too small, 0.1 out of 8.7... wait...'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'A normal phone. What did ya expect?',
    review: "Painfully average"
  },
  {
    id: 4,
    name: 'Big Android',
    price: 29999,
    description: 'A giant robot to use for your needs',
    review: "Does the cooking and cleaning!"
  },
  {
    id: 5,
    name: 'Little Android',
    price: 19999,
    description: 'A small android for your small needs',
    review: "Pretty good for getting the dirt under the fridge"
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/