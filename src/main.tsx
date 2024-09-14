import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store, { persistor } from "./Redux/Store.ts";
import { PersistGate } from "redux-persist/es/integration/react";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ChakraProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </ChakraProvider>
    </PersistGate>
  </Provider>
);
