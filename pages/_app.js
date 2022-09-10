import '../styles/globals.css'
import Layout from '../components/layout/Layout'

// This special component will act as a root component NextJS will render

function MyApp({ Component, pageProps }) {
  return( 
      <Layout>
        <Component {...pageProps} />
      </Layout>   
    );
}

export default MyApp
