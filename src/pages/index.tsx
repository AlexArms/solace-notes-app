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
          <div
            style={{
              width: "100%",
              margin: "50px auto 50px auto",
              display: "flex",
              height: "fit-content",
              justifyContent: "center",
              gap: "50px",
            }}
          >
            <NotePromptButton noteAction="create" />
            <NoteSearch />
          </div>
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
          Please log in to use this app!
        </div>
      )}
    </>
  );
}
