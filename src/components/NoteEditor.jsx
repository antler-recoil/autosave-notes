import { useState } from "react";
import { mockSaveApi } from "../api/mockApi";

export default function NoteEditor() {
  const [text, setText] = useState("");
  const [lastSavedAt, setLastSavedAt] = useState(null);

  const handleSave = async () => {
    await mockSaveApi(text);
    setLastSavedAt(new Date());
  };

  return (
    <div className="card">
      <h1 className="title">📝 My Notes</h1>

      <textarea
        className="textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing your note..."
      />

      <div className="footer">
        <span className="status">
          {lastSavedAt
            ? `Last saved at ${lastSavedAt.toLocaleTimeString()}`
            : "Not saved yet"}
        </span>
        <button className="save-btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}
