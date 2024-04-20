import StoreHeader from "./StoreHeader"
import ProductList from "./ProductList"

export default function Store () {
  return (
    <div className="Store">
      <StoreHeader />
      <ProductList />
    </div>
  )
}