// import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  /*// const [name, setName] = useState("Mario");
  // Props are used to pass data from parent component into a child component
  // <ChildComponent variable = {value}></ChildComponent>

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  // useEffect - will run only when name changes
  // It can be used to fetch data from the JSON server.*/

  return (
    <div className="Home">
      {/* THIS CONTAINS THREE PROPS - BLOGS, TITLE, AND handleDelete Function */}

      {/* Conditional templating. If not blogs, don't bother. If blogs, then 
      render BlogList */}
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title={"All Blogs!"}></BlogList>}

      {/* <p>{name}</p>
      <button onClick={() => setName("Luigi")}>Change Name</button> */}

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
