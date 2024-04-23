export const BASE_URL = 'https://api.escuelajs.co/api/v1/products'

function refactorArray (array) {
  return array.map( (element) => {
    return {
      id          : element.id,
      title       : element.title,
      price       : element.price,
      description : element.description,
      images      : element.images,
      creationAt  : element.creationAt,
      updatedAt   : element.updatedAt,
      category    : {
        id         : element.category.id,
        name       : element.category.name,
        image      : element.category.image,
        creationAt : element.category.creationAt,
        updatedAt  : element.category.updatedAt
      }
    }
  })
}

export async function porductsApi () {
  return fetch( BASE_URL )
    .then( (response) => { return response.json() } )
    .then( (data) => { return  refactorArray(data) }  )
}

// export async function categoriesApi () {
//   return fetch( CATEGORIES_URL )
//     .then( (response) => { return response.json() } )
//     .then( (data) => { return data.map( (element) => {
//         return {
//           id   : element.id,
//           name : element.name
//         }
//       })  
//     })
// }

// export async function prepareFilter () {
//   let array = await porductsApi ()

//   let precioMinimo = Infinity;
//   let precioMaximo = -Infinity;

//   array.forEach(producto => {
//     if (producto.price < precioMinimo) {
//       precioMinimo = producto.price;
//     }
//     if (producto.price > precioMaximo) {
//       precioMaximo = producto.price;
//     }
//   });

//   return {
//    priceRange : {
//      min: precioMinimo,
//      max: precioMaximo
//    },
//    category : [null],
//    currency : 'USD'
//  }
// }