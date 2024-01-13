import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PostDetails() {
  const [post, setPost] = useState({});
  const [tags, setTags] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/posts/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setPost(json?.data);
        setTags(json?.data.tags);
        setTitle(json?.data.title);
      });
  }, []);

  return (
    <section className="bg-white rounded-md gap-3 drop-shadow">
      <div className="pb-3">
        <img src={post.img} id="entry-cover" className="rounded-t-md" />
        <div className="p-4">
          <div class="flex flex-row pb-3">
            <img
              src={post.imgprofile}
              alt=""
              id="entry-profile-pic"
              className="rounded-full max-w-12"
            />
            <div className="flex flex-col justify-center px-4">
              <h5
                id="entry-author"
                className="font-semibold p-1 rounded-md text-gray-700 hover:text-black hover:bg-gray-100"
              >
                {post.name}
              </h5>
              <p className="pl-1 text-sm text-gray-500">{post.date}</p>
            </div>
          </div>
          <div className="flex flex-col px-5">
            <h1
              id="entry-title"
              className="font-bold text-5xl hover:text-indigo-600 py-3"
            >
              {post.title}
            </h1>
            <div id="divTags" className="flex gap-3 pb-1">
              {tags.map((tag, index) => {
                return (
                  <span
                    key={`post-tag-${post._id}-${index}`}
                    className="p-1 rounded-lg border border-white hover:border hover:border-indigo-600 hover:bg-indigo-200/50 hover:text-indigo-600"
                  >
                    #{tag}
                  </span>
                );
              })}
            </div>
            <div className="flex flex-row pt-2" id="entry-content">
              {post.description}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
