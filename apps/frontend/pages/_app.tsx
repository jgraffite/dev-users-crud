import type { AppProps } from 'next/app'
import AppReactQueryContext from '../app/hocs'
import '../app/globals.css'
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return <AppReactQueryContext>
    <Component {...pageProps} />
  </AppReactQueryContext>
}