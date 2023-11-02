import React, { useState } from "react";

const NoteSearch = () => {
  const [searchTerm, setSearchTerm] = useState();
  // todo: create search field input and functionality for searching notes
  // only filter if search term is >= 2 chars - filtering on 1 seems redundant
  // search based on contents - maybe add based on date or title as a bonus
  const updateSearchTerm = (event: any) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div
      className="
      bg-gradient-to-b from-green-600 to-transparent
      w-full
      text-center"
    >
      <input
        className="
        text-black
        rounded
        bg-slate-200
        border-2
        border-solid
        border-black
        w-1/4
        h-8
        text-xl"
        type="text"
        placeholder="Search notes..."
        onChange={updateSearchTerm}
      />
    </div>
  );
};

export default NoteSearch;
