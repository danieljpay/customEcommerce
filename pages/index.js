import Head from '../components/common/Head'
import Layout from '../components/common/Layout'
import HomeAllProductsGrid from '../components/common/HomeAllProductsGrid'
import { ManagedUIContext } from '../components/ui/context'

export async function getStaticProps() {
  const bestSelling = [
    {
      node: {
        images: {
          edges: [
            {
              node: {
                urlOriginal: 'https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/products/112/395/Men-Jacket-Front-Black__15466__46409.1611759826.png'
              }
            }
          ]
        },
        name: 'Chaqueta de invierno',
        path: '/matte-black-magic-mug/',
        prices: {
          price: {
            currencyCode: 'MXN',
            value: 450
          }
        }
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
        name: 'Camiseta de manga corta unisex',
        path: '/short-sleeve-unisex-t-shirt/',
        prices: {
          price: {
            currencyCode: 'MXN',
            value: 130
          }
        }
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
        name: 'Camiseta manga larga unisex',
        path: '/unisex-long-sleeve-tee/',
        prices: {
          price: {
            currencyCode: 'MXN',
            value: 160
          }
        }
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
        name: 'Camiseta reciclada unisex',
        path: '/unisex-recycled-t-shirt/',
        prices: {
          price: {
            currencyCode: 'MXN',
            value: 90
          }
        }
      }
    },
  ]
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
        name: 'Snapback trasero de malla',
        path: '/mesh-back-snapback/',
        prices: {
          price: {
            currencyCode: 'MXN',
            value: 60,
          }
        }
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
        name: 'Camisa de manga larga',
        path: '/mens-long-sleeve-shirt/',
        prices: {
          price: {
            value: 150,
            currencyCode: 'MXN'
          }
        }
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
        name: 'Forro polar con ribete de color',
        path: '/piped-fleece-jacket/',
        prices: {
          price: {
            value: 210,
            currencyCode: 'MXN'
          }
        }
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
        name: 'Camiseta de manga corta unisex',
        path: '/short-sleeve-unisex-t-shirt/',
        prices: {
          price: {
            value: 120,
            currencyCode: 'MXN'
          }
        }
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
        name: 'Camiseta manga larga unisex',
        path: '/unisex-long-sleeve-tee/',
        prices: {
          price: {
            value: 180,
            currencyCode: 'MXN'
          }
        },
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
        name: 'Camiseta reciclada unisex',
        path: '/unisex-recycled-t-shirt/',
        prices: {
          price: {
            value: 90,
            currencyCode: 'MXN'
          }
        }
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
        name: 'Sudadera con capucha de felpa unisex',
        path: '/unisex-fleece-hoodie/',
        prices: {
          price: {
            value: 90,
            currencyCode: 'MXN'
          }
        }
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
        name: 'Vestido camiseta de algodón orgánico',
        path: '/organic-cotton-t-shirt-dress/',
        prices: {
          price: {
            value: 160,
            currencyCode: 'MXN'
          }
        }
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
        name: 'Pantalón deportivo unisex tipo jogger',
        path: '/unisex-joggers/',
        prices: {
          price: {
            value: 220,
            currencyCode: 'MXN'
          }
        }
      }
    },
    {
      node: {
        images: {
          edges: [
            {
              node: {
                urlOriginal: 'https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/products/123/418/mockup-d4159f04__53247__43252.1611759827.png'
              }
            }
          ]
        },
        name: 'Joggers de Next.js',
        path: '/womens-joggers/',
        prices: {
          price: {
            value: 220,
            currencyCode: 'MXN'
          }
        }
      }
    },
    {
      node: {
        images: {
          edges: [
            {
              node: {
                urlOriginal: 'https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/products/122/415/mockup-9c5e3634__60853__54408.1611759827.png'
              }
            }
          ]
        },
        name: 'Pantalón de chándal ajustado unisex',
        path: '/unisex-skinny-joggers/',
        prices: {
          price: {
            value: 220,
            currencyCode: 'MXN'
          }
        }
      }
    },
    {
      node: {
        images: {
          edges: [
            {
              node: {
                urlOriginal: 'https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/products/121/400/mockup-a0dc2330__62146__63216.1611759826.png'
              }
            }
          ]
        },
        name: 'Camiseta de manga corta unisex',
        path: '/next-js-short-sleeve-unisex-t-shirt/',
        prices: {
          price: {
            value: 220,
            currencyCode: 'MXN'
          }
        }
      }
    },
  ]
  return {
    props: {
      bestSelling,
      categories,
      brands,
      newestProducts
    }
  }
}

export default function Home({
  bestSelling,
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
