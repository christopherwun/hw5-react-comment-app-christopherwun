import { useState } from 'react';
import './app.css';

import React from 'react';
import RecursivePost from './components/RecursivePost';
import Prompt from './components/Prompt';

export type CommentTreeNode = {
  parent: CommentTreeNode | null;
  id: number;
  name: string;
  body: string;
  children: CommentTreeNode[];
};

function App() {
  const [comments, setComments] = useState<CommentTreeNode[]>([]);
  const [id, setId] = useState(0);

  function updateComments(name: string, body: string) {
    const newComment: CommentTreeNode = {
      parent: null,
      id: id,
      name: name,
      body: body,
      children: [],
    };
    setId(id + 100);
    setComments([...comments, newComment]);
  }

  return (
    <>
      <h1 className="pagetitle">Chris Comment App</h1>
      {/* Prompt */}
      <Prompt updateComments={updateComments} />

      {/* RecursivePost */}
      <h2>Comments</h2>
      {comments.map((comment, index) => (
        // <>
        // </>
        <RecursivePost
          key={index}
          comment={comment}
          setComments={setComments}
          comments={comments}
        />
      ))}
    </>
  );
}

export default App;
