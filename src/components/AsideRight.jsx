export default function AsideRight() {
  return (
    <aside className="pt-4">
      <div className="bg-white rounded-md p-5 mb-3 drop-shadow">
        <ul>
          <li>
            <p className="font-bold text-gray-700 text-xl hover:text-indigo-600">
              #discuss
            </p>
            <p className="text-xs">
              Discussion threads targeting the whole community
            </p>
          </li>
          <li className="py-3">
            <a href="https://dev.to/devteam/sloans-inbox-how-do-improve-focus-4i51">
              <p className="text-gray-700 hover:text-indigo-600">
                Sloan's Inbox: How do improve focus?
              </p>
              <p className="text-sm">3 comments</p>
            </a>
          </li>
          <li className="py-3">
            <a href="https://dev.to/devteam/mentor-matching-monthly-3iae">
              <p className="text-gray-700 hover:text-indigo-600">
                Mentor Matching Monthly
              </p>
              <p className="text-sm">4 comments</p>
            </a>
          </li>
          <li className="py-3">
            <a href="https://dev.to/devteam/growth-habits-essentials-for-2024-49pk">
              <p className="text-gray-700 hover:text-indigo-600">
                Growth Habits: Essentials for 2024?
              </p>
              <p className="text-sm">5 comments</p>
            </a>
          </li>
          <li className="py-3">
            <a href="https://dev.to/jdgamble555/2024-web-development-wish-list-dak">
              <p className="text-gray-700 hover:text-indigo-600">
                2024 Web Development Wish List
              </p>
              <p className="text-sm">1 cooment</p>
            </a>
          </li>
          <li className="py-3">
            <a href="https://dev.to/sophiasemga/learning-isnt-linear-d12">
              <p className="text-gray-700 hover:text-indigo-600">
                Learning isn't Linear!
              </p>
              <p className="text-sm">1 comment</p>
            </a>
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-md p-5 drop-shadow">
        <ul>
          <li>
            <p className="font-bold text-gray-700 text-xl hover:text-indigo-600">
              #devresolutions2024
            </p>
            <p className="text-xs">
              Tag your posts with #DEVResolutions2024 to share your goals, track
              your progress, and inspire the DEV community with your
              achievements for the coming year
            </p>
          </li>
          <li className="py-3">
            <a href="https://dev.to/t/devresolutions2024">
              <p className="text-gray-700 hover:text-indigo-600">
                #DEVResolutions2024
              </p>
              <p className="text-sm">14 comments</p>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
