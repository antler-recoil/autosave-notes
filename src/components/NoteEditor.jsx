import { useState, useEffect } from "react";
import { mockSaveApi } from "../api/mockApi";
import useDebounce from "../hooks/useDebounce";

export default function NoteEditor() {
  const [text, setText] = useState("");
  const [lastSavedAt, setLastSavedAt] = useState(null);

  const debouncedText = useDebounce(text, 1000);

  useEffect(() => {
    if (!debouncedText) return;

    mockSaveApi(debouncedText).then(() => setLastSavedAt(new Date()))
  }, [debouncedText])

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
        
      </div>
    </div>
  );
}
