import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

const Layout = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        {children}
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default Layout;
