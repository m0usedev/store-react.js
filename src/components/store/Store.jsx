import { VisibilityProvider } from "../../utilities/visibility/visibility"
import { ProductsProvider } from "./hooks/useProducts"

import StoreHeader from "./StoreHeader"
import ProductList from "./ProductList"
import StorePagination from "./StorePagination"
import { PaginationProvider } from "./utilities/usePagination"

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