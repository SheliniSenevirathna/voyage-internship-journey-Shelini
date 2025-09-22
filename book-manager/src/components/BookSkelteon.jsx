// src/components/BookSkeleton.jsx
import React from 'react';
import '../styles/skeleton.css';

export default function BookSkeleton() {
  return (
    <div className="skeleton">
      <div className="skeleton-title" />
      <div className="skeleton-button" />
    </div>
  );
}
