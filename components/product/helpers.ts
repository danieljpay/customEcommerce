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
  console.log('Esto recibe helpers:')
  console.log(product)
  // console.log('Esto es product.node:')
  // console.log(product.node)
  // console.log('Esto es product.node.__typename')
  // console.log(product.node.__typename)
  // console.log('Esto debería ser el __typename:')
  // console.log(product.node.productOptions.edges[0].node.__typename)
  const options = product.node.productOptions.edges?.reduce(
    (arr, edge) => {
      // console.log('este es el arr:')
      // console.log(arr)
      // console.log('este es el edge:')
      // console.log(edge)
      if (edge?.__typename === 'MultipleChoiceOption') {
        arr.push({
          displayName: edge.displayName.toLowerCase(),
          values: edge.values.edges?.map((edge) => edge?.node),
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
  const variant = /*product.node.variants.edges?.find((edge) => {*/ []
  //   const { node } = edge ?? {}

  //   console.log('Este es el node dentro de getCurrentVariant:')
  //   console.log(node)
  //   console.log('esto es lo que hay en product.node.variants.edges[x].node.productOptions.edges')

  //   return Object.entries(opts).every(([key, value]) => node?.productOptions.edges?.find((edge) => {
  //       console.log('este es el key:')
  //       console.log(key)
  //       console.log('este es el value:')
  //       console.log(value)
  //       if (
  //         edge?.node.__typename === 'MultipleChoiceOption' &&
  //         edge.node.displayName.toLowerCase() === key
  //       ) {
  //         return edge.node.values.edges?.find(
  //           (valueEdge) => valueEdge?.node.label === value
  //         )
  //       }
  //     })
  //   )
  // })

  return variant
}
