import { Inter } from "next/font/google";
import NoteSearch from "@/components/Notes/NoteSearch";
import NoteFeed from "@/components/Notes/NoteFeed";
import NotePromptButton from "@/components/Buttons/NotePromptButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NotePromptButton noteAction="create" />
      <NoteSearch />
      <NoteFeed />
    </>
  );
}
