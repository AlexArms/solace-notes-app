import useNotes from "@/hooks/useNotes";
import React from "react";
import Note from "./Note";

const NoteFeed = () => {
  const { notes } = useNotes();

  if (!notes?.length) {
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
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {notes?.map((note) => {
          return <Note key={note._id} note={note} />;
        })}
      </div>
    </div>
  );
};

export default NoteFeed;
