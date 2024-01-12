import PostCard from "./PostCard";

export default function MainSection() {
  return (
    <div>
      <div className="flex gap-3">
        <button className="p-2 rounded-md font-bold hover:bg-white hover:text-indigo-600 text-xl">
          Relevant
        </button>
        <button className="text-gray-600 p-2 rounded-md hover:bg-white hover:text-indigo-600 text-xl">
          Latest
        </button>
        <button className="text-gray-600 p-2 rounded-md hover:bg-white hover:text-indigo-600 text-xl">
          Top
        </button>
      </div>
      <div>
        <PostCard />
      </div>
    </div>
  );
}
