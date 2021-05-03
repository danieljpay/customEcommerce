import type { GetStaticPropsContext } from 'next'
import { getConfig } from '../framework/bigcommerce/api'
import getAllPages from '../framework/bigcommerce/api/operations/get-all-pages'
import useWishlist from '../framework/bigcommerce/wishlist/use-wishlist'
import { Layout } from '../components/common'
import { Heart } from '../components/icons'
import { Text, Container } from '../components/ui'
import { WishlistCard } from '../components/wishlist'
import { defaultPageProps } from '../lib/defaults'
import { products } from '../products.json'

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  const config = getConfig({ locale })
  const { pages } = products
  return {
    props: { ...defaultPageProps, pages },
  }
}

export default function Wishlist() {
  const { isEmpty } = useWishlist({ includeProducts: true })
  const data = products.bestSelling

  return (
    <Container>
      <div className="mt-3 mb-20">
        <Text variant="pageHeading">My Wishlist</Text>
        <div className="group flex flex-col">
          {false ? ( // {isEmpty ? (
            <div className="flex-1 px-12 py-24 flex flex-col justify-center items-center ">
              <span className="border border-dashed border-secondary flex items-center justify-center w-16 h-16 bg-primary p-12 rounded-lg text-primary">
                <Heart className="absolute" />
              </span>
              <h2 className="pt-6 text-2xl font-bold tracking-wide text-center">
                Your wishlist is empty
              </h2>
              <p className="text-accents-6 px-10 text-center pt-2">
                Biscuit oat cake wafer icing ice cream tiramisu pudding cupcake.
              </p>
            </div>
          ) : (
            data &&
            data.map((item) => (
              <WishlistCard key={item.node.name} item={item} />
            ))
          )}
        </div>
      </div>
    </Container>
  )
}

Wishlist.Layout = Layout
