import "../styles/globals.css";
<<<<<<< HEAD

// 1. import `ChakraProvider` component


import { Provider } from "react-redux";
import store from "../redux";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>


  )
}


export default MyApp

