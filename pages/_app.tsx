import 'tailwindcss/tailwind.css'
import '../styles/core.css'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
