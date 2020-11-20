import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const router = useRouter();

  return (
    <header className="fixed w-full z-10 font-sans bg-pink-800">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:flex-no-wrap md:p-8">
        <div className="flex items-center">
          <img src="beon.svg" className="w-10 mr-3 text-white" />
          <Link href="/">
            <a>
                <img src="beon-title.svg" className="w-24 ml-3 mr-3" />
            </a>
          </Link>
        </div>

        <button
          className="flex items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <ul
          className={`${isExpanded ? `block` : `hidden`} md:flex flex-col md:flex-row md:items-center md:justify-center text-md w-full md:w-auto` }
        >
          {[
            { title: "Home", route: "/" },
            { title: "About", route: "/about" },
            { title: "Community List", route: "/community-list" },
            { title: "Contact", route: "/contact"}
          ].map(navigationItem => (
            <li className={`${router.pathname == `${navigationItem.route}` ? `font-extrabold` : "" } mt-6 md:mt-0 md:ml-8`} key={navigationItem.title}>
              <Link href={ navigationItem.route }>
                <a className="block text-white">{ navigationItem.title }</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;