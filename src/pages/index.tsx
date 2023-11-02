import { Inter } from "next/font/google";
import NoteSearch from "@/components/Notes/NoteSearch";
import NoteFeed from "@/components/Notes/NoteFeed";
import NoteModalButton from "@/components/Buttons/NoteModalButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <NoteModalButton />
      <NoteSearch />
      <NoteFeed />
    </div>
  );
}
