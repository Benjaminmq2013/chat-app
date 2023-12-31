
import "../css/main.scss"
import "../css/gamepad.scss"
import "../css/global.scss"

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
