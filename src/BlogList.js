const BlogList = ({ blogs, title }) => {
  //   const blogs = props.blogs;
  //   const title = props.title;

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {/* For every blog create a new div with its unique blog ID taken from the JSON */}
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          {/* Creating a function which deletes blogs by matching their ID */}
          {/* <button onClick={() => handleDelete(blog.id)}>Delete Blog</button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
