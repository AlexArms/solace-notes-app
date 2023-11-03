import NoteFeed from "@/components/Notes/NoteFeed";
import { useUserStore } from "@/stores/UserStore";

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
