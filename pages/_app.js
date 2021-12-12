import "../styles/globals.css";
import { Provider } from "react-redux";
// import store from "../redux";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }) {
  return (

    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>


  )
}


export default MyApp

