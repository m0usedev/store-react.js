import { VisibilityProvider } from "../../utilities/visibility/visibility"
import { ProductsProvider } from "./hooks/useProducts"
import { PaginationProvider } from "./utilities/usePagination"
import { FilterProvider } from "./hooks/useFilter"
import { CurrencyProvider } from "./hooks/useCurrency"

import ProductList from "./ProductList"
import StorePagination from "./StorePagination"
import StoreFilter from "./StoreFilter"

import './css/Store.css'

export default function Store () {
  return (
    <div className="Store">
      <ProductsProvider>
        <PaginationProvider>
          <CurrencyProvider>

            <div className="content">
              <div className="content-1">
                <FilterProvider>
                  <StoreFilter />
                </FilterProvider>
              </div>
              <div className="content-2">
                <VisibilityProvider>
                  <ProductList />
                </VisibilityProvider>

                <StorePagination />
              </div>
              <div className="content-3"></div>
            </div>

          </CurrencyProvider>
        </PaginationProvider>
      </ProductsProvider>
    </div>
  )
}