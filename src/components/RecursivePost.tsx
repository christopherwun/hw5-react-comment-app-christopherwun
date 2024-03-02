import React from 'react';
import PostBody from './PostBody';
import { CommentTreeNode } from '../app';

export default function RecursivePost({
  comment,
  setComments,
  comments,
}: {
  comment: CommentTreeNode;
  setComments: (comments: CommentTreeNode[]) => void;
  comments: CommentTreeNode[];
}) {
  if (!comment.children || comment.children.length === 0) {
    // Base case: when depth is 0 or there are no more replies
    return (
      <PostBody
        comment={comment}
        setComments={setComments}
        comments={comments}
      />
    );
  }

  return (
    <>
      <PostBody
        comment={comment}
        setComments={setComments}
        comments={comments}
      />
      <div style={{ marginLeft: '100px' }}>
        {' '}
        {/* Adjust the styling as needed */}
        {comment.children.map((child: CommentTreeNode, index: number) => (
          <RecursivePost
            key={index}
            comment={child}
            setComments={setComments}
            comments={comments}
          />
        ))}
      </div>
    </>
  );
}
