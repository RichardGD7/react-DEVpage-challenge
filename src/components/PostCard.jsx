import { useState, useEffect } from "react";

export default function PostCard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((response) => response.json())
      .then((json) => {
        setPosts(json.data);
        console.log(json.data);
      });
  }, []);

  return (
    <section>
      {posts.map((post) => {
        return (
          <article
            id="userCol"
            key={`post-${post._id}`}
            className="py-3 drop-shadow"
          >
            <div
              id="userCard"
              className="flex flex-col justify-center bg-white rounded-md"
            >
              <img
                src={post.img}
                alt=""
                id="upImage"
                className="object-fill rounded-t-md max-h-64"
              />
              <div id="cardBody" className="p-3">
                <div id="imageProfile">
                  <div
                    id="imageProfileCol"
                    className="flex flex-row gap-3 items-center"
                  >
                    <img
                      src={post.imgprofile}
                      alt=""
                      id="userImage"
                      className="max-w-12 rounded-full"
                    />
                    <div id="dateTitle">
                      <h5
                        id="cardUserName"
                        className="font-semibold p-1 rounded-md text-sm text-gray-700 hover:text-black hover:bg-gray-100"
                      >
                        {post.name}
                      </h5>
                      <p id="cardDate" className="pl-1 text-xs text-gray-500">
                        {post.date}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pl-[68px]">
                  <a href={`/posts/${post._id}`}>
                    <p
                      id="cardTitle"
                      className="font-bold text-2xl hover:text-indigo-600 pb-3"
                    >
                      {post.title}
                    </p>
                  </a>
                  <div id="divTags" className="flex gap-3 pb-1">
                    {post.tags.map((tag, index) => {
                      return (
                        <span
                          key={`tag-${post._id}-${index}`}
                          className="p-1 rounded-lg border border-white hover:border hover:border-indigo-600 hover:bg-indigo-200/50 hover:text-indigo-600"
                        >
                          #{tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
