import PORUCTS_JSON from '../../../JSON/products.json' //https://react-shop-backend.liara.run/products

export const BASE_URL = 'https://api.escuelajs.co/api/v1/products'

export const CATEGORIES_URL = 'https://api.escuelajs.co/api/v1/categories'

import { convertCurrency } from './currency-fuctions'

const BASE_RATE = 1

function refactorArray (array) {
  return array.map( (element) => {
    return {
      id          : element._id,
      title       : element.title,
      price       : element.price,
      description : element.description,
      images      : element.images,
      category    : {
        id         : element.category.id,
        name       : element.category.name,
      }
    }
  })
}

export function porductsApi () {
  return refactorArray(PORUCTS_JSON)
}

export function findPriceMinMax(productos) {
  if(productos) {
    let precioMinimo = Infinity;
    let precioMaximo = -Infinity;
  
    productos.forEach(producto => {
      if (producto.price < precioMinimo) {
        precioMinimo = producto.price;
      }
      if (producto.price > precioMaximo) {
        precioMaximo = producto.price;
      }
    })
    return {min: precioMinimo, max: precioMaximo}
  }
}

export function findCategories() {
  let products = refactorArray(PORUCTS_JSON)
  let categorys = []

  products.forEach(element => {
    const encontrarCategoria = (array, element) => 
      array.some(item =>
        item.id === element.id && item.name === element.name
      )
    if(categorys.length==0){
      categorys.push(element.category)
    }else if(!encontrarCategoria(categorys,element.category)) {
      categorys.push(element.category)
    }
  })

  return categorys
}

export function filter (productos, filtro) {
  // {
  //   id          : element._id,
  //   title       : element.title,
  //   price       : element.price,
  //   description : element.description,
  //   images      : element.images,
  //   category    : {
  //     id         : element.category.id,
  //     name       : element.category.name,
  //   }
  // }
  // {
  //   search : ''
  //   priceRange: {
  //     min: information.data.priceRange.min,
  //     max: information.data.priceRange.max
  //   },
  //   category : 'All',
  //   rate: 1
  // }
  try {
    let newArray1
    if(filtro.rate != BASE_RATE) {
      newArray1 = filtreRate (productos, filtro.rate)
    }else {
      newArray1 = productos
    }
    let newArray2 = newArray1.filter((elemento) => {
    if(elemento.price >= filtro.priceRange.min &&
      elemento.price <= filtro.priceRange.max) {
        if(filtro.category == 'All') {
          if(filtro.search.length > 0){
            if(elemento.title.toLowerCase().includes(filtro.search.toLowerCase())) return true
          }else {
            return true
          }
        }
        if(elemento.category.name == filtro.category) {
          if(filtro.search.length > 0){
            if(elemento.title.toLowerCase().includes(filtro.search.toLowerCase())) return true
          }else {
            return true
          }
        }
      }
      return false
    })
    return {
      type : true,
      products : newArray2

    }
  }catch (error) {
    return {
      type : false
    }
  }
}

export function filtreRate (productos, rate) {
  return productos.map((elemento) => {
    return {
      ...elemento,
      price:  convertCurrency(elemento.price, rate)
    }
  })
}