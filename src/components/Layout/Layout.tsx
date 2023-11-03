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
  height: "fit-content",
  minHeight: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  gap: "25px",
  paddingTop: "15px",
  flexDirection: "column",
}));

const Layout = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NiceModal.Provider>
        <Header />
        <StyledMain>{children}</StyledMain>
        <Footer />
      </NiceModal.Provider>
    </QueryClientProvider>
  );
};

export default Layout;
