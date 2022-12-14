import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { useRouter } from "next/router";

// This special component will act as a root component NextJS will render

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
