import React from 'react';
import { useState } from 'react';
import { CommentTreeNode } from '../app';
import Prompt from './Prompt';
import VoteIcons from './VoteIcons';

export default function PostBody({
  comment,
  setComments,
  comments,
}: {
  comment: CommentTreeNode;
  setComments: (comments: CommentTreeNode[]) => void;
  comments: CommentTreeNode[];
}) {
  const [reply, setReply] = useState<boolean>(false);

  function checkDepth(comment: CommentTreeNode) {
    if (comment.parent && comment.parent.parent) {
      return true;
    }
    return false;
  }
  function updateReply() {
    // Check if 3 levels deep
    if (checkDepth(comment)) {
      return;
    }
    setReply(!reply);
    }


  function updateComments(name: string, body: string) {
    const newComment: CommentTreeNode = {
      parent: comment,
      id: comment.id + 1,
      name: name,
      body: body,
      children: [],
    };
    comment.children.push(newComment);
    setComments([...comments]);
  }

  return (
    <div>
      <div className="comment">
        <div>
          <h3 className="text">{comment.name}</h3>
          <p className="text">{comment.body}</p>
        </div>
        <div className="vote-icons">
          {/* VoteIcons component goes here */}
          <VoteIcons />
        </div>
      </div>
      {/* only show reply btn if checkdepth false */}
        {checkDepth(comment) ? null : (
            <div>
            {/* Reply Button */}
            <button
                className="input"
                onClick={() => {
                updateReply();
                }}
            >
                Reply
            </button>
            </div>
        )}

      {/* Prompt if reply */}
      {reply ? <Prompt updateComments={updateComments} /> : null}
    </div>
  );
}
