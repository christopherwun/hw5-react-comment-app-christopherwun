import React from 'react';
import { useState } from 'react';

export default function VoteIcons() {
  const [upvotes, setUpvotes] = useState<number>(0);
  return (
    <div className="vote-icons">
      <button
        id="upvoteButton"
        // className="input"
        onClick={() => {
            setUpvotes(upvotes + 1);
        }}
      >
        +
      </button>
        <p>{upvotes}</p>
      <button
        id="downvoteButton"
        // className="input"
        onClick={() => {
            setUpvotes(upvotes - 1);
        }}
      >
        -
      </button>
    </div>
  );
}
