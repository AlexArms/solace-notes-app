import useNotes from "@/hooks/useNotes";
import React, { useState } from "react";
import Note from "./Note";
import NotePromptButton from "../Buttons/NotePromptButton";
import NoteSearch from "./NoteSearch";

const NoteFeed = () => {
  const { notes, searchNotes } = useNotes();
  const [searching, setSearching] =
    useState<boolean>(false);

  if (!notes?.length && !searching) {
    return (
      <p
        style={{
          color: "#fff",
          height: "auto",
          fontSize: "2rem",
          textAlign: "center",
          margin: "50px auto",
        }}
      >
        Once you create some notes they will show up here
      </p>
    );
  }

  return (
    <div>
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
        <NoteSearch
          searchNotes={searchNotes}
          setSearching={setSearching}
        />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {notes?.map((note) => {
          return <Note key={note._id} note={note} />;
        })}
      </div>
    </div>
  );
};

export default NoteFeed;
