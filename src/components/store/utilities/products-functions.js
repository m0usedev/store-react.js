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