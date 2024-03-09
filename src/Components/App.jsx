import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((CreateNode) => (
        <Note
          key={CreateNode.key}
          title={CreateNode.title}
          content={CreateNode.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
