import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // Initial list of blogs
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  // Props are used to pass data from parent component into a child component
  // <ChildComponent variable = {value}></ChildComponent>

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="Home">
      {/* THIS CONTAINS A TWO PROPS - BLOGS AND TITLE */}
      <BlogList
        blogs={blogs}
        title={"All Blogs!"}
        handleDelete={handleDelete}
      ></BlogList>

      {/* DUPLICATING THE ABOVE LINE AND FILTERING THE BLOGS */}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title={"Mario's Blogs"}
        handleDelete={handleDelete}
      ></BlogList> */}
    </div>
  );
};

export default Home;
