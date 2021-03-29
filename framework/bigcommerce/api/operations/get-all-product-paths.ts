import type {
  GetAllProductPathsQuery,
  GetAllProductPathsQueryVariables,
} from '../../schema'
import type { RecursivePartial, RecursiveRequired } from '../utils/types'
import filterEdges from '../utils/filter-edges'
import { BigcommerceConfig, getConfig } from '..'

export const getAllProductPathsQuery = /* GraphQL */ `
  query getAllProductPaths($first: Int = 100) {
    site {
      products(first: $first) {
        edges {
          node {
            path
          }
        }
      }
    }
  }
`

export type ProductPath = NonNullable<
  NonNullable<GetAllProductPathsQuery['site']['products']['edges']>[0]
>

export type ProductPaths = ProductPath[]

export type { GetAllProductPathsQueryVariables }

export type GetAllProductPathsResult<
  T extends { products: any[] } = { products: ProductPaths }
> = T

async function getAllProductPaths<
  T extends { products: any[] },
  V = any
>(opts: {
  query: string
  variables?: V
  config?: BigcommerceConfig
}): Promise<GetAllProductPathsResult<T>>

async function getAllProductPaths(){
  return {
    paths: [
      'product/',
      { params: { slug: 'matte-black-magic-mug/'} }
    ],
    fallback: true,
  }
}

export default getAllProductPaths
