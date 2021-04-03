// import type {
//   GetStaticPathsContext,
//   GetStaticPropsContext,
//   InferGetStaticPropsType,
// } from 'next'
import { useRouter } from 'next/router'
import { Layout } from '../../components/common'
import { ProductView } from '../../components/product'
import { products } from '../../products.json'

const { bestSelling } = products

// // Data

// import { getConfig } from '../../framework/bigcommerce/api'
// import getProduct from '../../framework/bigcommerce/api/operations/get-product'
// import getAllPages from '../../framework/bigcommerce/api/operations/get-all-pages'
// import getAllProductPaths from '../../framework/bigcommerce/api/operations/get-all-product-paths'

// export async function getStaticProps({
//   params,
//   locale,
//   preview,
// }: GetStaticPropsContext<{ slug: string }>) {
//   const config = getConfig({ locale })

//   const { pages } = await getAllPages({ config, preview })
//   const { product } = await getProduct({
//     variables: { slug: params!.slug },
//     config,
//     preview,
//   })

//   if (!product) {
//     throw new Error(`Product with slug '${params!.slug}' not found`)
//   }

//   return {
//     props: { pages, product },
//     revalidate: 200,
//   }
// }

// export async function getStaticPaths({ locales }: GetStaticPathsContext) {
//   const { products } = await getAllProductPaths() //aqui se deben harcodear los productos

//   return {
//     paths: locales
//       ? locales.reduce<string[]>((arr, locale) => {
//           // Add a product path for every locale
//           products.forEach((product) => {
//             arr.push(`/${locale}/product${product.node.path}`)
//           })
//           return arr
//         }, [])
//       : products.map((product) => `/product${product.node.path}`),
//     fallback: 'blocking',
//   }
// }

export default function Slug() {
  const router = useRouter()
  //**************para visualizar el slug *********/
  // console.log('Este es el slug mandado:')
  // console.log(router.query.slug)

  //aqui va un for para comprobar el product.path y que agarre los datos del producto que se clickeo
  let product
  products.featured.forEach(element => {
    let pathSize = element.node.path.length
    let pathProduct = element.node.path.slice(1, pathSize-1)
    console.log('Este es el pathProduct')
    console.log(pathProduct)
    if(pathProduct === router.query.slug ) {
      console.log('este es el producto que entró a la condición')
      product = element
    }
  });

  // let product = bestSelling[0]  //hardcodeando el primer elemento de los productos

  return router.isFallback ? (
    <h1>Loading...</h1> // TODO (BC) Add Skeleton Views
  ) : (
    <ProductView product={product} />
  )
  
}

Slug.Layout = Layout
