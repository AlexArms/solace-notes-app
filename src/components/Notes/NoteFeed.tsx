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
    <>
      <div className="text-center">
        {notes?.map((note) => {
          return <Note key={note.title} note={note} />;
        })}
        {notes?.map((note) => {
          return <Note key={note.title} note={note} />;
        })}
        {notes?.map((note) => {
          return <Note key={note.title} note={note} />;
        })}
      </div>
      <div className="text-center">
        {notes?.map((note) => {
          return <Note key={note.title} note={note} />;
        })}
        {notes?.map((note) => {
          return <Note key={note.title} note={note} />;
        })}
        {notes?.map((note) => {
          return <Note key={note.title} note={note} />;
        })}
      </div>
    </>
  );
};

export default NoteFeed;
