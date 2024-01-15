import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function CreateNewPost() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imgprofile = localStorage.getItem("imgProfileUser");
  const nameUser = localStorage.getItem("nameUser");

  async function onPublish(data) {
    const tagsArray = data.tags.split(",");
    console.log(tagsArray);
    const response = await fetch("http://localhost:5000/api/posts", {
      method: "POST",
      body: JSON.stringify({
        description: data.description,
        img: data.img,
        imgprofile: imgprofile,
        name: nameUser,
        title: data.title,
        comments_count: "0",
        date: "Ene 15",
        tags: tagsArray,
      }),
      headers: {
        "Content-Type": "application/json",
        bearerauth: `${token}`,
      },
    });

    const responseData = await response.json();
    console.log(responseData);
    navigate("/");
  }

  return (
    <div className="grid grid-cols-11 gap-5 m-auto p-2 max-w-[1280px]">
      <section className="col-start-2 col-span-7">
        <div>
          <div className="bg-white drop-shadow rounded-md px-9">
            <form
              onSubmit={handleSubmit(onPublish)}
              className="pt-5 flex flex-col gap-3 h-screen max-h-[600px]"
            >
              <input
                placeholder={`${
                  errors.img ? "Cover image required" : "Add a cover image *"
                }`}
                className={`border rounded-md p-1 font-semibold placeholder:text-black ${
                  errors.img
                    ? "border-red-600 placeholder:text-red-600"
                    : "border-gray-400"
                }  `}
                type="text"
                {...register("img", {
                  required: { value: true, message: "Cover image required" },
                })}
              />

              <input
                placeholder={`${
                  errors.title ? "Title required" : "New post title here..."
                }`}
                className={`rounded-md p-1 w-full font-bold text-5xl  ${
                  errors.title
                    ? "border-red-600 placeholder:text-red-600"
                    : "border-gray-400 placeholder:text-gray-600"
                }`}
                type="text"
                {...register("title", {
                  required: { value: true, message: "Title required" },
                })}
              />

              <input
                placeholder={`${
                  errors.tags
                    ? "Tags required"
                    : "Add up to 4 tags (separated by commas)..."
                }`}
                className={`rounded-md p-1 w-full text-md placeholder:text-gray-600 ${
                  errors.tags
                    ? "border-red-600 placeholder:text-red-600"
                    : "border-gray-400 placeholder:text-gray-600"
                }`}
                type="text"
                {...register("tags", {
                  required: { value: true, message: "Tags required" },
                })}
              />

              <input
                placeholder={`${
                  errors.description
                    ? "Post content required"
                    : "Write your post content here..."
                }`}
                className={`rounded-md pb-72 w-full text-md ${
                  errors.description
                    ? "border-red-600 placeholder:text-red-600"
                    : "border-gray-400 placeholder:text-gray-600"
                }`}
                type="text"
                {...register("description", {
                  required: { value: true, message: "Post content required" },
                })}
              />

              <div className="py-5">
                <input
                  type="submit"
                  value="Publish"
                  className="bg-indigo-600 text-white font-semibold p-3 rounded-md drop-shadow"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="col-span-3 pt-9">
        <div>
          <p className="font-bold pb-3 text-lg">Writing a Great Post Title</p>
          <ul className="list-disc pl-6">
            <li className="text-gray-600 pb-3">
              Think of your post title as a super short (but compelling!)
              description — like an overview of the actual post in one short
              sentence.
            </li>
            <li className="text-gray-600">
              Use keywords where appropriate to help ensure people can find your
              post by search.
            </li>
          </ul>
        </div>
        <div className="pt-20">
          <p className="font-bold pb-3 text-lg">Publishing Tips</p>
          <ul className="list-disc pl-6">
            <li className="text-gray-600 pb-3">
              Ensure your post has a cover image set to make the most of the
              home feed and social media platforms.
            </li>
            <li className="text-gray-600">
              Share your post on social media platforms or with your co-workers
              or local communities.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
