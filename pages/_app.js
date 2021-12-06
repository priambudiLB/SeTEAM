import "../styles/globals.css";
<<<<<<< HEAD



import { Provider } from "react-redux";
import store from "../redux";
=======
>>>>>>> 6d75f4b4d7c0f3be9dfa502f6ff7df5cf57b2d7a
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

<<<<<<< HEAD

export default MyApp

=======
export default MyApp;
>>>>>>> 6d75f4b4d7c0f3be9dfa502f6ff7df5cf57b2d7a
