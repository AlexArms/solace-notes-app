import Layout from "@/components/Layout/Layout";
import { useUserStore } from "@/stores/UserStore";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({
  Component,
  pageProps,
}: AppProps) {
  const userStore = useUserStore();

  useEffect(() => {
    const user = localStorage.getItem("solace-notes-user");
    if (user) {
      userStore.setUser(user);
    }
    userStore.setCheckingUser(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
