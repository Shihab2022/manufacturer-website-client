import React, { useState } from "react";

const Blog = () => {
  const name = [
    "shihab",
    "shiraj",
    "kafi",
    "thorul",
    "mamun",
    "faruk",
    "shamsujjaman",
  ];
  const [value, setValue] = useState("");

  const handleValue = (data) => {
    const go = name.filter((n) => n.includes(data));
    setValue(go);
  };
  return (
    <>
      <div className="lg:px-24 lg:py-10 p-5">
        <div className="my-3">
          <h1 className="text-2xl font-semibold my-2">
            1. How will you improve the performance of a React Application?
          </h1>

          <div className="ml-5">
            <p className="text-sm">
              {" "}
              <span className="text-xl text-amber-500">
                PureComponents :{" "}
              </span>{" "}
              Which internally uses the implementation of the
              shouldComponentUpdate function to reduce rendering time. This
              small but clever practice can greatly improve parent component
              load times.{" "}
            </p>
            <p className="text-sm my-2">
              {" "}
              <span className="text-xl text-amber-500">
                Immutable Data Structures :{" "}
              </span>{" "}
              Avoid directly modifying objects by making copies of the objects
              with the desired data changes.{" "}
            </p>
            <p className="text-sm">
              {" "}
              <span className="text-xl text-amber-500">Compression : </span> To
              load the client-side JavaScript load faster, compress the
              JavaScript code using Gzip or Brotli on the application server.
              This will allow faster fetching and serving, resulting in faster
              component loading and rendering times.{" "}
            </p>
          </div>
        </div>
        <div className="my-3">
          <h1 className="text-2xl font-semibold my-2">
            2. What are the different ways to manage a state in a React
            application?
          </h1>

          <div className="ml-5">
            <p className="text-sm">
              {" "}
              <span className="text-xl text-amber-500">useReducer : </span>{" "}
              useReducer is an different ways to manage a state in a React
              application . Example :{" "}
              <span className="text-sm text-amber-500">
                const [state, dispatch] = useReducer(reducer, initialState);{" "}
              </span>{" "}
            </p>
            <p className="text-sm">
              {" "}
              <span className="text-xl text-amber-500">useStore : </span>If i
              use useStore firstly install{" "}
              <span className="text-sm text-amber-500">
                npm install zustand{" "}
              </span>{" "}
              . After that, make a dedicated store file or folder and create
              your store . Example :{" "}
              <span className="text-sm text-amber-500">
                'const [votes,upvote,downvote ] = useStore();'{" "}
              </span>{" "}
            </p>
          </div>
        </div>
        <div className="my-3">
          <h1 className="text-2xl font-semibold my-2">
            3. How does prototypical inheritance work?
          </h1>

          <div className="ml-5">
            <p className="text-sm">
              {" "}
              The prototype is only used for reading properties.Write/delete
              operations work directly with the object.{" "}
            </p>
            <p className="text-sm my-2">
              The main purpose is to allow multiple instances of an object to
              share common properties, hence, the Singleton Pattern .
            </p>
            <p className="text-sm">
              {" "}
              JavaScript prototypes are different from other inheritance
              methodologies in that they allow for objects to inherit directly
              from other objects.{" "}
            </p>
          </div>
        </div>
        <div className="my-3">
          <h1 className="text-2xl font-semibold my-2">
            4. You have an array of products. Each product has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </h1>

          <div className="ml-5">
            <p className="text-sm"> {value}</p>

            <input
              onChange={(e) => handleValue(e.target.value)}
              onBlur={() => setValue("")}
              type="text"
              placeholder="Search Hare"
              class="input input-bordered input-primary w-full max-w-xs"
            />
          </div>
        </div>

        <div className='my-3'>
                <h1 className='text-2xl font-semibold my-2'>5.What is a unit test? Why should write unit tests?</h1>

          <div className='ml-5'>
              <p className="uppercase text-red-400">  unit test :</p>
          <p className='text-sm'>Unit tests are simple scripts that check whether a given unit—class, function, module, etc.—is working as expected.They contribute to the long-term success of a project because of the reasons I discuss below. </p>
              <p className="uppercase text-red-400">  write unit tests :</p>
          <p className='text-sm'>Writing unit tests makes me think about edge cases—all the situations that are rare, unexpected, or wrong. When you write the logic, it’s normal to focus on the happy path, or what’s normal and expected to happen. When you write tests, you can set up checks for the edge cases and define what should happen in each of them. This makes your code more resilient in cases of unexpected inputs. </p>
             
          </div>
            </div>
      </div>
    </>
  );
};

export default Blog;
