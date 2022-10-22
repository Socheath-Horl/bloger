import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

interface MyAppProps extends AppProps {
  pageProps: {
    session?: any;
  }
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />;
    </SessionProvider>
  ) 
}

export default MyApp;
