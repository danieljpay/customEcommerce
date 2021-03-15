import Head from '../components/common/Head'
import Layout from '../components/common/Layout'
import HomeAllProductsGrid from '../components/common/HomeAllProductsGrid'
import { ManagedUIContext } from '../components/ui/context'
import { Grid, Marquee, Hero } from '../components/ui'
import { ProductCard } from '../components/product/'

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
        },
        //las variantes son necesarias para que el componente wishlist funcione correctamente
        variants: {
          edges: [
            {
              node: {
                defaultImage: null,
                entityId: 145
              }
            }
          ]
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
        },
        variants: {
          edges: [
            {
              node: {
                defaultImage: null,
                entityId: 188
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 193
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 200
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 205
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 209
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 212
              }
            }
          ]
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
        },
        variants: {
          edges: [
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/102_source_1611759829.png"
                },
                entityId: 197
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/118_source_1611759829.png"
                },
                entityId: 214
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/119_source_1611759829.png"
                },
                entityId: 215
              }
            },
            {
              node: {
                defaultImage: { 
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/122_source_1611759829.png"
                },
                entityId: 218
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/123_source_1611759829.png"
                },
                entityId: 219
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/125_source_1611759829.png"
                },
                entityId: 221
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/127_source_1611759829.png"
                },
                entityId: 223
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/128_source_1611759829.png"
                },
                entityId: 224
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/130_source_1611759830.png"
                },
                entityId: 226
              }
            }
          ]
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
        },
        variants: {
          edges: [
            {
              node: {
                defaultImage: null,
                identityId: 195
              }
            },
            {
              node: {
                defaultImage: null,
                identityId: 199
              }
            },
            {
              node: {
                defaultImage: null,
                identityId: 203
              }
            },
            {
              node: {
                defaultImage: null,
                identityId: 206
              }
            },
            {
              node: {
                defaultImage: null,
                identityId: 210
              }
            }
          ]
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
            currencyCode: 'MXN',
            value: 260
          }
        },
        variants: {
          edges: [
            {
              node: {
                defaultImage: null,
                entityId: 150
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 158
              }
            },
            {
              node: {
                defaultImage: null,
                identityId: 165
              }
            },
            {
              node: {
                defaultImage: null,
                identityId: 171
              }
            },
            {
              node: {
                defaultImage: null,
                identityId: 175
              }
            },
            {
              node: {
                defaultImage: null,
                identityId: 180
              }
            }
          ]
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
            currencyCode: 'MXN',
            value: 130
          }
        },
        variants: {
          edges: [
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/72_source_1611759828.png"
                },
                entityId: 163
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/82_source_1611759828.png"
                },
                entityId: 173
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/88_source_1611759828.png"
                },
                entityId: 179
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/90_source_1611759828.png"
                },
                entityId: 181
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/92_source_1611759828.png"
                },
                entityId: 184
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/94_source_1611759828.png"
                },
                entityId: 187
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/101_source_1611759829.png"
                },
                entityId: 196
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/106_source_1611759829.png"
                },
                entityId: 201
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/112_source_1611759829.png"
                },
                entityId: 208
              }
            }
          ]
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

  const featured = [
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
            value: 220,
          }
        },
        variants: {
          edges: [
            {
              node: {
                defaultImage: null,
                entityId: 145
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 151
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 157
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 161
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 166
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 169
              }
            }
          ]
        }
      }
    },
    {
      node: {
        images: {
          edges: [
            {
              node: {
                urlOriginal: 'https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/products/116/396/Men-TShirt-Black-Front__70046__04554.1611759826.png'
              }
            }
          ]
        },
        name: 'Camiseta',
        path: '/jacket/',
        prices: {
          price: {
            currencyCode: 'MXN',
            value: 130,
          }
        },
        variants: {
          edges: [
            {
              node: {
                defaultImage: null,
                entityId: 101
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 105
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 108
              }
            },
            {
              node: {
                defaultImage: null, 
                entityId: 112
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 118
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 124
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 126
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 127
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 129
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 131
              }
            }
          ]
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
            currencyCode: 'MXN',
            value: 260,
          }
        },
        variants: {
          edges: [
            {
              node: {
                defautlImage: null,
                entityId: 186
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 191
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 194
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 198
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 202
              }
            }
          ]
        }
      }
    }, 
    {
      node: {
        images: {
          edges: [
            {
              node: {
                urlOriginal: 'https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/products/132/446/mockup-ae9a83b0__49881__31256.1611759829.png'
              }
            }
          ]
        },
        name: 'Camisa de manga larga',
        path: '/mens-long-sleeve-shirt/',
        prices: {
          price: {
            currencyCode: 'MXN',
            value: 170,
          }
        },
        variants: {
          edges: [
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/132_source_1611759830.png"
                },
                entityId: 229
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/134_source_1611759830.png"
                },
                entityId: 231
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/136_source_1611759830.png"
                },
                entityId: 234
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/138_source_1611759830.png"
                },
                entityId: 236
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/140_source_1611759830.png"
                },
                entityId: 238
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/141_source_1611759830.png"
                },
                entityId: 239
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/143_source_1611759830.png"
                },
                entityId: 241
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/144_source_1611759830.png"
                },
                entityId: 242
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/146_source_1611759830.png"
                },
                entityId: 244
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/147_source_1611759830.png"
                },
                entityId: 245
              }
            }
          ]
        }
      }
    }, 
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
        },
        variants: {
          edges: [
            {
              node: {
                defaultImage: null,
                entityId: 233
              }
            }
          ]
        }
      }
    },
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
        },
        variants: {
          edges: [
            {
              node: {
                defaultImage: null,
                entityId: 233
              }
            }
          ]
        }
      }
    },
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
        },
        variants: {
          edges: [
            {
              node: {
                defaultImage: null,
                entityId: 233
              }
            }
          ]
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
        }, 
        variants: {
          edges: [
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/132_source_1611759830.png"
                },
                entityId: 229
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/134_source_1611759830.png"
                },
                entityId: 231
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/136_source_1611759830.png"
                },
                entityId: 234
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/138_source_1611759830.png"
                },
                entityId: 236
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/140_source_1611759830.png"
                },
                entityId: 238
              },
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/141_source_1611759830.png"
                },
                entityId: 239
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/143_source_1611759830.png"
                },
                entityId: 241
              } 
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/144_source_1611759830.png"
                },
                entityId: 242
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/146_source_1611759830.png"
                },
                entityId: 244
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/147_source_1611759830.png"
                },
                entityId: 245
              }
            }
          ]
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
        },
        variants: {
          edges: [
            {
              node: {
                defaultImage: null,
                entityId: 186
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 191
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 194
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 198
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 202
              }
            }
          ]
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
        },
        variants: {
          edges: [
            {
              node: {
                defaultImage: null,
                entityId: 188
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 193
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 200
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 205
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 209
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 212
              }
            }
          ]
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
        variants: {
          edges: [
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/102_source_1611759829.png"
                },
                entityId: 197
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/118_source_1611759829.png"
                },
                entityId: 214
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/119_source_1611759829.png"
                },
                entityId: 215
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/122_source_1611759829.png"
                },
                entityId: 218
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/123_source_1611759829.png"
                },
                entityId: 219
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/125_source_1611759829.png"
                },
                entityId: 221
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/127_source_1611759829.png"
                },
                entityId: 223
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/128_source_1611759829.png"
                },
                entityId: 224
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/130_source_1611759830.png"
                },
                entityId: 226
              }
            }
          ]
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
            value: 90,
            currencyCode: 'MXN'
          }
        },
        variants: {
          edges: [
            {
              node: {
                defaultImage: null,
                entityId: 195
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 199
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 203
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 206
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 210
              }
            }
          ]
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
        },
        variants: {
          edges: [
            {
              node: {
                defaultImage: null,
                entityId: 150
              }
            },
            {
              node: {
                defaultImage: null, 
                entityId: 158
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 165
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 171
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 175
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 180
              }
            }
          ]
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
        },
        variants: {
          edges: [
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/72_source_1611759828.png"
                },
                entityId: 163
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/82_source_1611759828.png" 
                },
                entityId: 173
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/88_source_1611759828.png"
                },
                entityId: 179
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/90_source_1611759828.png"
                },
                entityId: 181
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/92_source_1611759828.png"
                },
                entityId: 184
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/94_source_1611759828.png"
                },
                entityId: 187
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/101_source_1611759829.png"
                },
                entityId: 196
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/106_source_1611759829.png" 
                },
                entityId: 201
              }
            }, {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/112_source_1611759829.png"
                },
                entityId: 208
              }
            }
          ]
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
        },
        variants: {
          edges: [
            {
              node: {
                defaultImage: null,
                identityId: 142
              }
            },
            {
              node: {
                defaultImage: null,
                identityId: 148
              }
            },
            {
              node: {
                defaultImage: null,
                identityId: 153
              }
            },
            {
              node: {
                defaultImage: null,
                identityId: 159
              }
            },
            {
              node: {
                defaultImage: null,
                identityId: 168
              }
            }
          ]
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
        },
        variants: {
          edges: [
            {
              node: {
                defaultImage: null,
                identityId: 143
              }
            },
            {
              node: {
                defaultImage: null,
                identityId: 146
              }
            },
            {
              node: {
                defaultImage: null,
                identityId: 149
              }
            },
            {
              node: {
                defaultImage: null,
                identityId: 155
              }
            },
            {
              node: {
                defaultImage: null,
                identityId: 160
              }
            },
            {
              node: {
                defaultImage: null,
                identityId: 167
              }
            },
            {
              node: {
                defaultImage: null,
                identityId: 172
              }
            }
          ]
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
        },
        variants: {
          edges: [
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/52_source_1611759828.png"
                },
                entityId: 140
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/56_source_1611759828.png"
                },
                identityId: 147
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/64_source_1611759828.png"
                },
                entityId: 154
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/73_source_1611759828.png"
                },
                entityId: 164
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 170
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 174
              }
            },
            {
              node: {
                defaultImage: null, 
                entityId: 176
              }
            },
            {
              node: {
                defaultImage: null,
                entityId: 178
              }
            }
          ]
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
        },
        variants: {
          edges: [
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/18_source_1611759827.png"
                },
                entityId: 102
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/26_source_1611759827.png"
                },
                entityId: 110
              }
            },
            {
              node: {
                defaultImage:{
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/30_source_1611759827.png"
                },
                entityId: 114
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/34_source_1611759827.png"
                },
                entityId: 119
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/38_source_1611759827.png"
                },
                entityId: 122
              }
            },
            {
              node: {
                defaultImage: {
                  altText: "",
                  isDefault: true,
                  urlOriginal: "https://cdn11.bigcommerce.com/s-kn0kdiekio/images/stencil/original/attribute_rule_images/40_source_1611759827.png"
                },
                entityId: 125
              }
            }
          ]
        }
      }
    },
  ]
  return {
    props: {
      featured,
      bestSelling,
      categories,
      brands,
      newestProducts
    }
  }
}

export default function Home({
  featured,
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
          <Grid>
            {featured.slice(0, 3).map(({ node }, i) => (
              <ProductCard
                key={node.path}
                product={node}
                imgWidth={i === 0 ? 1080 : 540}
                imgHeight={i === 0 ? 1080 : 540}
                imgPriority
                imgLoading="eager"
              />
            ))}
          </Grid>
          <Marquee variant="secondary">
            {bestSelling.slice(3, 6).map(({ node }) => (
              <ProductCard
                key={node.path}
                product={node}
                variant="slim"
                imgWidth={320}
                imgHeight={320}
                imgLayout="fixed"
              />
            ))}
          </Marquee>
          <Hero
            headline="Release Details: The Yeezy BOOST 350 V2 ‘Natural'"
            description="
            The Yeezy BOOST 350 V2 lineup continues to grow. We recently had the
            ‘Carbon’ iteration, and now release details have been locked in for
            this ‘Natural’ joint. Revealed by Yeezy Mafia earlier this year, the
            shoe was originally called ‘Abez’, which translated to ‘Tin’ in
            Hebrew. It’s now undergone a name change, and will be referred to as
            ‘Natural’."
          />
          <Grid layout="B">
            {featured.slice(3, 6).map(({ node }, i) => (
              <ProductCard
                key={node.path}
                product={node}
                imgWidth={i === 1 ? 1080 : 540}
                imgHeight={i === 1 ? 1080 : 540}
              />
            ))}
          </Grid>
          <Marquee>
            {bestSelling.slice(0, 3).map(({ node }) => (
              <ProductCard
                key={node.path}
                product={node}
                variant="slim"
                imgWidth={320}
                imgHeight={320}
                imgLayout="fixed"
              />
            ))}
          </Marquee>
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
