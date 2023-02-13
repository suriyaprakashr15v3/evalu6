// import App from 'next/app'
import {
    ThemeProvider,
    CSSReset
} from '@chakra-ui/core';

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <CSSReset />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}


// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp