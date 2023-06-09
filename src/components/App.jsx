import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

const createEntry = (element) => {
  return (
    <Entry
      key={element.id}
      emoji={element.emoji}
      name={element.name}
      description={element.meaning}
    />
  );
};

const App = () => {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
};

export default App;
