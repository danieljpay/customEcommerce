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
          price: {
            currencyCode: 'MXN',
            value: 50,
          }
        },
        name: 'Snapback trasero de malla',
        path: '/mesh-back-snapback/'
      }
    },
    {
      node: {
        images: {
          edges: [
            {
              node: {
                urlOriginal: 'https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/products/132/448/mockup-9a5bb91f__43139__73445.1611759829.png'
              }
            }
          ]
        },
        prices: {
          price: {
            value: 250,
            currencyCode: 'MXN'
          }
        },
        name: 'Camisa de manga larga',
        path: '/mens-long-sleeve-shirt/'
      }
    },
    {
      node: {
        images: {
          edges: [
            {
              node: {
                urlOriginal: 'https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/products/131/434/mockup-249c43c7__53383__22200.1611759828.png'
              }
            }
          ]
        },
        prices: {
          price: {
            value: 300,
            currencyCode: 'MXN'
          }
        },
        name: 'Forro polar con ribete de color',
        path: '/piped-fleece-jacket/'
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
