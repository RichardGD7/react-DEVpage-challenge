import NavBar from "../components/NavBar";
import AsideRight from "../components/AsideRight";
import PostDetails from "../components/PostDetails";

export default function Post() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="fixed top-0 z-50 w-full">
        <NavBar />
      </header>
      <div className="grid grid-cols-11 gap-5 m-auto p-2 max-w-[1280px] relative pt-20">
        <section className="col-span-1 flex justify-end p-2">
          <ul className="pt-10 fixed flex flex-col gap-4">
            <li className="p-2 hover:bg-red-100/50 hover:text-red-600 rounded-md border border-gray-100 hover:border-red-400">
              <img
                src="../../heart-post.png"
                alt="heart-post"
                className="max-w-7"
              />
              <p className="pl-1">54</p>
            </li>
            <li className="p-2 hover:bg-yellow-100/50 hover:text-yellow-600 rounded-md border border-gray-100 hover:border-yellow-400">
              <img
                src="../../smiley-comment.png"
                alt="comment-post"
                className="max-w-7"
              />
              <p className="pl-1">12</p>
            </li>
            <li className="p-2 hover:bg-indigo-100/50 hover:text-indigo-600 rounded-md border border-gray-100 hover:border-indigo-400">
              <img
                src="../../bookmark.png"
                alt="bookmark-post"
                className="max-w-7"
              />
              <p className="pl-1 hover:text-indigo-600">45</p>
            </li>
            {/* <li className="pl-1">45</li> */}
          </ul>
        </section>
        <section className="col-span-7 pt-4">
          <PostDetails />
        </section>
        <section className="col-span-3">
          <AsideRight />
        </section>
      </div>
    </div>
  );
}
