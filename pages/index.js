import Navbar from '../components/common/Navbar'
import Head from '../components/common/Head'
import I18nWidget from '../components/common/I18nWidget'
import HomeAllProductsGrid from '../components/common/HomeAllProductsGrid'

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
      <Navbar />
      <I18nWidget />
      <HomeAllProductsGrid 
        categories={categories}
        brands={brands}
        newestProducts={newestProducts}
      />
    </div>
  )
}
