import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // Initial list of blogs
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // const [name, setName] = useState("Mario");
  // Props are used to pass data from parent component into a child component
  // <ChildComponent variable = {value}></ChildComponent>

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  // useEffect - will run only when name changes
  // It can be used to fetch data from the JSON server.
  useEffect(() => {
    // Get response from the URL, then convert it into JSON, then get data from JSON
    // console.log(name);
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        // console.log(res);
        // Custom error message
        if (!res.ok) {
          throw Error("Could not fetch the data!");
        }
        return res.json();
      })
      .then((data) => {
        setError(null);
        setBlogs(data);
        setIsPending(false);
      })
      // Catching network error
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, []);

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
