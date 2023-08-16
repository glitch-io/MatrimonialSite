import React from 'react';

function BlogPage() {
  return (
    <div className="blog-page">
      <h1>Blog</h1>
      {/* Display blog articles */}
      <div className="blog-list">
        <div className="blog-item">
          <h2>Article Title 1</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English..</p>
        </div>
        <div className="blog-item">
          <h2>Article Title 2</h2>
          <p>Article content goes here...</p>
        </div>
        <div className="blog-item">
          <h2>Article Title 2</h2>
          <p>Article content goes here...</p>
        </div>
        <div className="blog-item">
          <h2>Article Title 2</h2>
          <p>Article content goes here...</p>
        </div>
        <div className="blog-item">
          <h2>Article Title 2</h2>
          <p>Article content goes here...</p>
        </div>
        <div className="blog-item">
          <h2>Article Title 2</h2>
          <p>Article content goes here...</p>
        </div>
        <div className="blog-item">
          <h2>Article Title 2</h2>
          <p>Article content goes here...</p>
        </div>
        <div className="blog-item">
          <h2>Article Title 2</h2>
          <p>Article content goes here...</p>
        </div>
        {/* Add more blog items */}
      </div>
    </div>
  );
}

export default BlogPage;
