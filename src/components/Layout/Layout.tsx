import Header from "./Header";
import Footer from "./Footer";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import NiceModal from "@ebay/nice-modal-react";
import "@/components/modals";

const queryClient = new QueryClient();

const Layout = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NiceModal.Provider>
        <Header />
        <main
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {children}
        </main>
        <Footer />
      </NiceModal.Provider>
    </QueryClientProvider>
  );
};

export default Layout;
