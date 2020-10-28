import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
      <footer className="bg-pink-700">
        <ul className="flex items-center justify-between max-w-4xl p-4 mx-auto text-sm text-white md:p-8">
          <li>
            {" "}
            <Link href="https://beon.now.sh" target="_blank" className="font-extrabold">
              BEMANI AEON Team, 2020 All Rights Reserved
            </Link>
          </li>
  
          <li>
            <Link href="https://github.com/jojobudiman" target="_blank"> 
              <FontAwesomeIcon icon={ faGithub } size="2x" />
            </Link>
          </li>

          <li>
            <Link href="https://p.eagate.573.jp/game/2dx/28/" target="_blank" className="font-extrabold">
                beatmania IIDX is copyrighted by KONAMI
            </Link>
          </li>
        </ul>
      </footer>
    );
  }
  
  export default Footer;