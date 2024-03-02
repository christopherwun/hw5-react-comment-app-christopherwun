import React, { useState } from 'react';

export default function Prompt({
  updateComments,
}: {
  updateComments: (name: string, body: string) => void;
}) {
  const [name, setName] = useState<string>('');
  const [body, setBody] = useState<string>('');

  return (
    <>
      <input
        className="input"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="input"
        type="text"
        placeholder="Comment"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button
        className="input"
        disabled={!name || !body}
        onClick={() => {
          updateComments(name, body);
          setName('');
          setBody('');
        }}
      >
        Post
      </button>
    </>
  );
}
