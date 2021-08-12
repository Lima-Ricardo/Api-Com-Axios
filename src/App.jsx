import React from "react";
import Layout from "./components/Layout";
import GlobalStyles from "./styles/GlobalStyles";
import {FormModalProvider} from "./components/context/FormModalContext";
import EditingVideoProvider from "./components/context/EditingVideoContext";
import Home from "./components/Home";



export default function App() {
  return (
    <>
      <Home />
      <EditingVideoProvider>
        <FormModalProvider>
          <Layout />
        </FormModalProvider>
      </EditingVideoProvider>
      <GlobalStyles />
    </>
  );
}
