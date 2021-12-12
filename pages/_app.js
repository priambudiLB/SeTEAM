import "../styles/globals.css";
<<<<<<< HEAD



import { Provider } from "react-redux";
import store from "../redux";
=======
import { Provider } from "react-redux";
// import store from "../redux";
>>>>>>> 970db7f98d6d8ff7182672b06a31e45cf73230b3
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

