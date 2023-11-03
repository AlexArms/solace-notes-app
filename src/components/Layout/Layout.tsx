import Header from "./Header";
import Footer from "./Footer";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import NiceModal from "@ebay/nice-modal-react";
import "@/components/modals";
import { styled } from "@mui/material";

const queryClient = new QueryClient();

const StyledMain = styled("main")(() => ({
  height: "100%",
  width: "100%",
  display: "flex",
  paddingTop: "15px",
  flexDirection: "column",
}));
const StyledHr = styled("hr")(() => ({
  width: "100%",
  borderLeftStyle: "none",
  borderRightStyle: "none",
  height: "6px",
  margin: "30px auto",
}));

const Layout = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NiceModal.Provider>
        <Header />
        <StyledMain>{children}</StyledMain>
        <StyledHr />
        <Footer />
      </NiceModal.Provider>
    </QueryClientProvider>
  );
};

export default Layout;
