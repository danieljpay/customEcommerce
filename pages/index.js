import Head from '../components/common/Head'
import Layout from '../components/common/Layout'
import HomeAllProductsGrid from '../components/common/HomeAllProductsGrid'
import { ManagedUIContext } from '../components/ui/context'

export async function getStaticProps() {
  const categories = [
    {
      path: '/path',
      name: 'Daniel ' 
    },
    {
      path: '/otroPath',
      name: 'Billy'
    },
    {
      path: '/tercerPath',
      name: 'Tommy'
    }
  ]
  const brands = [
    {
      node: {
        path: '/path',
        name: 'DanielBrand'
      }
    },
    {
      node: {
        path: '/otroPath',
        name: 'BillyBrand'
      }
    },
    {
      node: {
        path: '/tercerPath',
        name: 'TommyBrand'
      }
    }
  ]
  const newestProducts = [
    {
      node: {
        images: {
          edges: [
            {
              node: {
                urlOriginal: 'https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/products/133/447/Hat-front-black__34181__31769.1611759829.png'
              }
            }
          ]
        },
        prices: {
          retailPrice: {
            value: '50 baros'
          },
          price: {
            value: 10,
            currencyCode: 'MXN'
          }
        },
        path: '/pathNewestProducts'
      }
    }
  ]
  return {
    props: {
      categories,
      brands,
      newestProducts
    }
  }
}

export default function Home({
  categories,
  brands,
  newestProducts
}) {
  return (
    <div>
      <Head />
      <ManagedUIContext>
        <Layout>
        <HomeAllProductsGrid 
          categories={categories}
          brands={brands}
          newestProducts={newestProducts}
        />
        </Layout>
      </ManagedUIContext>
    </div>
  )
}
