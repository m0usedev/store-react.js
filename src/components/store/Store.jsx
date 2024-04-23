import { VisibilityProvider } from "../../utilities/visibility/visibility"
import { ProductsProvider } from "./hooks/useProducts"
import { PaginationProvider } from "./utilities/usePagination"

import StoreHeader from "./StoreHeader"
import ProductList from "./ProductList"
import StorePagination from "./StorePagination"

export default function Store () {
  return (
    <div className="Store">

      <ProductsProvider>
        <PaginationProvider>

          <StoreHeader />

          <VisibilityProvider>
            <ProductList />
          </VisibilityProvider>

          <StorePagination />
          
        </PaginationProvider>
      </ProductsProvider>
    </div>
  )
}