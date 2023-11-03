import { Inter } from "next/font/google";
import NoteSearch from "@/components/Notes/NoteSearch";
import NoteFeed from "@/components/Notes/NoteFeed";
import NotePromptButton from "@/components/Buttons/NotePromptButton";
import { useUserStore } from "@/stores/UserStore";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const userStore = useUserStore();
  return (
    <>
      {userStore.user ? (
        <>
          <NoteFeed />
        </>
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
