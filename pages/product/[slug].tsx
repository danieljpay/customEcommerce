import type { GetStaticPathsContext } from 'next'
import { useRouter } from 'next/router'
import { Layout } from '../../components/common'
import { ProductView } from '../../components/product'
import { products } from '../../products.json'

export async function getStaticProps() {
  const { pages } = products

  return {
    props: { pages },
    revalidate: 200,
  }
}

export async function getStaticPaths({ locales }: GetStaticPathsContext) {
  const products = []
  for(let section in products) {
    //la propiedad cursor es distintiva entre los productos:
    if(products[section][0].hasOwnProperty('cursor')){ 
      products[section].forEach(element => {
        products.concat(element)
      })
    }
  }

  return {
    paths: locales
      ? locales.reduce<string[]>((arr, locale) => {
          // Add a product path for every locale
          products.forEach((product) => {
            arr.push(`/${locale}/product${product.node.path}`)
          })
          return arr
        }, [])
      : products.map((product) => `/product${product.node.path}`),
    fallback: 'blocking'
  }
}

export default function Slug() {
  const router = useRouter()

  let product
  for(let section in products) {
    //la propiedad cursor es distintiva entre los productos:
    if(products[section][0].hasOwnProperty('cursor')){ 
      products[section].forEach(element => {
        let pathSize = element.node.path.length
        let pathProduct = element.node.path.slice(1, pathSize-1)
        if(pathProduct === router.query.slug ) {
          product = element
        }
      })
    }
  }

  return router.isFallback ? (
    <h1>Loading...</h1> // TODO (BC) Add Skeleton Views
  ) : (
    <ProductView product={product} />
  )
  
}

Slug.Layout = Layout
