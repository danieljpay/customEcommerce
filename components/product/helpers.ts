import type { ProductNode } from '../../framework/bigcommerce/api/operations/get-product'

export type SelectedOptions = {
  size: string | null
  color: string | null
}

export type ProductOption = {
  displayName: string
  values: any
}

// Returns the available options of a product
export function getProductOptions(product) {
  const options = product.node.productOptions.edges?.reduce(
    (arr, edge) => {
      if (edge?.node.__typename === 'MultipleChoiceOption') {
        arr.push({
          displayName: edge.node.displayName.toLowerCase(),
          values: edge.node.values.edges?.map((edge) => edge?.node),
        })
      }
      return arr
    },
    []
  )
  return options
}


// Finds a variant in the product that matches the selected options
export function getCurrentVariant(product, opts: SelectedOptions) {
  const variant = product.node.variants.edges?.find((edge) => {
    
    return Object.entries(opts).every(([key, value]) =>
      product.node?.productOptions.edges?.find((edge) => {
        if (
          edge?.node.__typename === 'MultipleChoiceOption' &&
          edge.node.displayName.toLowerCase() === key
        ) {
          return edge.node.values.edges?.find(
            (valueEdge) => valueEdge?.node.label === value
          )
        }
      })
    )
    
  })

  return variant
}