export default function AsideLeft() {
  return (
    <aside className="mt-10">
      <ul>
        <li>
          <a
            href=""
            className="flex flex-row p-2 gap-2 rounded-md hover:bg-purple-400/20 hover:text-purple-900 hover:underline text-gray-600"
          >
            <img
              src="retirement-home.png"
              alt="home-icon"
              className="max-w-6"
            />
            Home
          </a>
        </li>
        <li>
          <a
            href="https://dev.to/pod"
            className="flex flex-row p-2 gap-2 rounded-md hover:bg-purple-400/20 hover:text-purple-900 hover:underline text-gray-600"
          >
            <img src="microfono.png" alt="podcast-icon" className="max-w-6" />
            Podcast
          </a>
        </li>
        <li>
          <a
            href="https://dev.to/videos"
            className="flex flex-row p-2 gap-2 rounded-md hover:bg-purple-400/20 hover:text-purple-900 hover:underline text-gray-600"
          >
            <img src="camara.png" alt="videos-icon" className="max-w-6" />
            Videos
          </a>
        </li>
        <li>
          <a
            href="https://dev.to/tags"
            className="flex flex-row p-2 gap-2 rounded-md hover:bg-purple-400/20 hover:text-purple-900 hover:underline text-gray-600"
          >
            <img src="etiquetas.png" alt="tags-icon" className="max-w-6" />
            Tags
          </a>
        </li>
        <li>
          <a
            href="https://dev.to/faq"
            className="flex flex-row p-2 gap-2 rounded-md hover:bg-purple-400/20 hover:text-purple-900 hover:underline text-gray-600"
          >
            <img src="bombilla.png" alt="faq-icon" className="max-w-6" />
            FAQ
          </a>
        </li>
        <li>
          <a
            href="https://dev.to/advertise"
            className="flex flex-row p-2 gap-2 rounded-md hover:bg-purple-400/20 hover:text-purple-900 hover:underline text-gray-600"
          >
            <img src="heart.png" alt="advertise-icon" className="max-w-6" />
            Advertise on DEV
          </a>
        </li>
        <li>
          <a
            href="https://dev.to/about"
            className="flex flex-row p-2 gap-2 rounded-md hover:bg-purple-400/20 hover:text-purple-900 hover:underline text-gray-600"
          >
            <img src="devLogo.png" alt="about-icon" className="max-w-6" />
            About
          </a>
        </li>
        <li>
          <a
            href="https://dev.to/contact"
            className="flex flex-row p-2 gap-2 rounded-md hover:bg-purple-400/20 hover:text-purple-900 hover:underline text-gray-600"
          >
            <img src="contact-us.png" alt="contact-icon" className="max-w-6" />
            Contact
          </a>
        </li>
        <li>
          <a
            href="https://dev.to/guides"
            className="flex flex-row p-2 gap-2 rounded-md hover:bg-purple-400/20 hover:text-purple-900 hover:underline text-gray-600"
          >
            <img
              src="libro-abierto.png"
              alt="guides-icon"
              className="max-w-6"
            />
            Guides
          </a>
        </li>
        <li>
          <a
            href="https://dev.to/software-comparisons"
            className="flex flex-row p-2 gap-2 rounded-md hover:bg-purple-400/20 hover:text-purple-900 hover:underline text-gray-600"
          >
            <img
              src="pensando.png"
              alt="software-comparison-icon"
              className="max-w-6"
            />
            Software comparisons
          </a>
        </li>
        <li>
          <p className="font-bold p-2">Other</p>
        </li>
        <li>
          <a
            href="https://dev.to/code-of-conduct"
            className="flex flex-row p-2 gap-2 rounded-md hover:bg-purple-400/20 hover:text-purple-900 hover:underline text-gray-600"
          >
            <img
              src="thumbUp.png"
              alt="code-of-conduct-icon"
              className="max-w-6"
            />
            Code of Conduct
          </a>
        </li>
        <li>
          <a
            href="https://dev.to/privacy"
            className="flex flex-row p-2 gap-2 rounded-md hover:bg-purple-400/20 hover:text-purple-900 hover:underline text-gray-600"
          >
            <img
              src="emoticonos_lentes.png"
              alt="privacy-policy-icon"
              className="max-w-6"
            />
            Privacy Policy
          </a>
        </li>
        <li>
          <a
            href="https://dev.to/terms"
            className="flex flex-row p-2 gap-2 rounded-md hover:bg-purple-400/20 hover:text-purple-900 hover:underline text-gray-600"
          >
            <img src="eyes.png" alt="privacy-policy-icon" className="max-w-6" />
            Terms of Use
          </a>
        </li>
      </ul>

      <div className="flex flex-row gap-1 py-4">
        <a
          href="https://twitter.com/thepracticaldev"
          className="hover:bg-purple-400/20 p-2 rounded-md"
        >
          <img src="twt.png" alt="twiter-icon" className="max-w-5" />
        </a>
        <a
          href="https://www.facebook.com/thepracticaldev"
          className="hover:bg-purple-400/20 p-2 rounded-md"
        >
          <img src="facebook.png" alt="facebook-icon" className="max-w-5" />
        </a>
        <a
          href="https://github.com/forem"
          className="hover:bg-purple-400/20 p-2 rounded-md"
        >
          <img src="github.png" alt="github-icon" className="max-w-5" />
        </a>
        <a
          href="https://www.instagram.com/thepracticaldev"
          className="hover:bg-purple-400/20 p-2 rounded-md"
        >
          <img src="instagram.png" alt="instagram-icon" className="max-w-5" />
        </a>
        <a
          href="https://www.twitch.tv/thepracticaldev"
          className="hover:bg-purple-400/20 p-2 rounded-md"
        >
          <img src="twitch.png" alt="twitch-icon" className="max-w-5" />
        </a>
        <a
          href="https://fosstodon.org/@thepracticaldev"
          className="hover:bg-purple-400/20 p-2 rounded-md"
        >
          <img src="mastodon.svg" alt="mastodon-icon" className="max-w-5" />
        </a>
      </div>

      <nav className="relative">
        <div className="sticky top-0">
          <p className="font-bold py-3">Popular Tags</p>
        </div>
        <ul>
          <a href="https://dev.to/t/webdev">
            <li className="p-2 rounded-md hover:bg-purple-400/20 hover:text-purple-900 hover:underline text-gray-600">
              #webdev
            </li>
          </a>
          <a href="https://dev.to/t/javascript">
            <li className="p-2 rounded-md hover:bg-purple-400/20 hover:text-purple-900 hover:underline text-gray-600">
              javascrip
            </li>
          </a>
          <a href="https://dev.to/t/beginners">
            <li className="p-2 rounded-md hover:bg-purple-400/20 hover:text-purple-900 hover:underline text-gray-600">
              beginners
            </li>
          </a>
          <a href="https://dev.to/t/programming">
            <li className="p-2 rounded-md hover:bg-purple-400/20 hover:text-purple-900 hover:underline text-gray-600">
              programming
            </li>
          </a>
          <a href="https://dev.to/t/tutorial">
            <li className="p-2 rounded-md hover:bg-purple-400/20 hover:text-purple-900 hover:underline text-gray-600">
              tutorial
            </li>
          </a>
          <a href="https://dev.to/t/react">
            <li className="p-2 rounded-md hover:bg-purple-400/20 hover:text-purple-900 hover:underline text-gray-600">
              react
            </li>
          </a>
          <a href="https://dev.to/t/python">
            <li className="p-2 rounded-md hover:bg-purple-400/20 hover:text-purple-900 hover:underline text-gray-600">
              python
            </li>
          </a>
          <a href="https://dev.to/t/productivity">
            <li className="p-2 rounded-md hover:bg-purple-400/20 hover:text-purple-900 hover:underline text-gray-600">
              productivity
            </li>
          </a>
          <a href="https://dev.to/t/devops">
            <li className="p-2 rounded-md hover:bg-purple-400/20 hover:text-purple-900 hover:underline text-gray-600">
              devops
            </li>
          </a>
          <a href="https://dev.to/t/aws">
            <li className="p-2 rounded-md hover:bg-purple-400/20 hover:text-purple-900 hover:underline text-gray-600">
              aws
            </li>
          </a>
        </ul>
      </nav>
    </aside>
  );
}
