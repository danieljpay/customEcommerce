import Layout from '../components/common/Layout'
import HomeAllProductsGrid from '../components/common/HomeAllProductsGrid'
import { Grid, Marquee, Hero } from '../components/ui'
import { ProductCard } from '../components/product/'
import { products } from '../products.json'

export async function getStaticProps() {
  const { featured, bestSelling, categories, brands, newestProducts, pages } = products

  return {
    props: {
      featured,
      bestSelling,
      categories,
      brands,
      newestProducts,
      pages
    }
  }
}

export default function Home({
  featured,
  bestSelling,
  categories,
  brands,
  newestProducts,
}) {
  return ( 
    <div>
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
    </div>
  )
}

Home.Layout = Layout