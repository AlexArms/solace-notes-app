import useNotes from "@/hooks/useNotes";
import React from "react";
import Note from "./Note";

const NoteFeed = () => {
  const { notes } = useNotes();

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
