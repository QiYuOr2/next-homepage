import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
