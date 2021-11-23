import "../styles/globals.css";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

import { Provider } from "react-redux";
import store from "../redux";

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

