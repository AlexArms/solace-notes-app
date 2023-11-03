import { Inter } from "next/font/google";
import NoteFeed from "@/components/Notes/NoteFeed";
import { useUserStore } from "@/stores/UserStore";
import { GetServerSideProps } from "next";

const inter = Inter({ subsets: ["latin"] });

type ConnectionStatus = {
  isConnected: boolean;
};

export const getServerSideProps: GetServerSideProps<
  ConnectionStatus
> = async () => {
  try {
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};

export default function Home() {
  const userStore = useUserStore();
  return (
    <>
      {userStore.user ? (
        <NoteFeed />
      ) : (
        <div
          style={{
            width: "100%",
            height: "70vh",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            fontSize: "1.5rem",
          }}
        >
          {userStore.checkingUser
            ? "Loading..."
            : "Please log in to use this app!"}
        </div>
      )}
    </>
  );
}
