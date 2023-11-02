import { Inter } from "next/font/google";
import NoteSearch from "@/components/Notes/NoteSearch";
import NoteFeed from "@/components/Notes/NoteFeed";
import NotePromptButton from "@/components/Buttons/NotePromptButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
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
  );
}
