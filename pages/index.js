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
            value: 60,
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
            value: 150,
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
            value: 210,
            currencyCode: 'MXN'
          }
        },
        name: 'Forro polar con ribete de color',
        path: '/piped-fleece-jacket/'
      }
    },
    {
      node: {
        images: {
          edges: [
            {
              node: {
                urlOriginal: 'https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/products/130/437/15_T-Shirt_Mockup_1__98355.1603747312.1280.1280__55650.1611759828.png'
              }
            }
          ]
        },
        prices: {
          price: {
            value: 120,
            currencyCode: 'MXN'
          }
        },
        name: 'Camiseta de manga corta unisex',
        path: '/short-sleeve-unisex-t-shirt/'
      }
    },
    {
      node: {
        images: {
          edges: [
            {
              node: {
                urlOriginal: 'https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/products/129/435/mockup-5197eac5__60260__14012.1611759828.png'
              }
            }
          ]
        },
        prices: {
          price: {
            value: 180,
            currencyCode: 'MXN'
          }
        },
        name: 'Camiseta manga larga unisex',
        path: '/unisex-long-sleeve-tee/'
      }
    },
    {
      node: {
        images: {
          edges: [
            {
              node: {
                urlOriginal: 'https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/products/127/433/mockup-5dd35f7a__97377__40936.1611759828.png'
              }
            }
          ]
        },
        prices: {
          price: {
            value: 90,
            currencyCode: 'MXN'
          }
        },
        name: 'Camiseta reciclada unisex',
        path: '/unisex-recycled-t-shirt/'
      }
    },
    {
      node: {
        images: {
          edges: [
            {
              node: {
                urlOriginal: 'https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/products/126/422/mockup-8ee910d1__57199__59375.1611759828.png'
              }
            }
          ]
        },
        prices: {
          price: {
            value: 90,
            currencyCode: 'MXN'
          }
        },
        name: 'Sudadera con capucha de felpa unisex',
        path: '/unisex-fleece-hoodie/'
      }
    },
    {
      node: {
        images: {
          edges: [
            {
              node: {
                urlOriginal: 'https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/products/125/420/mockup-6de419a0__16020__13044.1611759827.png'
              }
            }
          ]
        },
        prices: {
          price: {
            value: 160,
            currencyCode: 'MXN'
          }
        },
        name: 'Vestido camiseta de algodón orgánico',
        path: '/organic-cotton-t-shirt-dress/'
      }
    },
    {
      node: {
        images: {
          edges: [
            {
              node: {
                urlOriginal: 'https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/products/124/416/mockup-9fc4c1cf__88683__37613.1611759827.png'
              }
            }
          ]
        },
        prices: {
          price: {
            value: 160,
            currencyCode: 'MXN'
          }
        },
        name: 'Pantalón deportivo unisex tipo jogger',
        path: '/unisex-joggers/'
      }
    },
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
