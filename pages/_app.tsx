import '../assets/main.css'
import 'keen-slider/keen-slider.min.css'
import '../assets/chrome-bug.css'

import { FC, useEffect } from 'react'

import { ManagedUIContext } from '../components/ui/context'
import { Head } from '../components/common'

const Noop = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }) {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <Head />
      <ManagedUIContext>
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
      </ManagedUIContext>
    </>
  )
}

