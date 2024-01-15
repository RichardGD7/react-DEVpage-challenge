import CreateNewPost from "../components/CreateNewPost";
import CreatePostNavbar from "../components/CreatePostNavbar";

export default function NewPost() {
  return (
    <main className="min-h-screen bg-gray-100 h-fit">
      <CreatePostNavbar />
      <CreateNewPost />
    </main>
  );
}
