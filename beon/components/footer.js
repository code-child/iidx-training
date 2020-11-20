import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
      <footer className="bg-pink-700 overflow-hidden">
        <div className="container mx-auto px-6 my-20">
          <div className="flex flex-wrap justify-between items-center text-sm text-white">
            <div className="w-2/3">
              <div className="font-extrabold hover:underline mr-6">
                {" "}
                <Link href="https://beon.now.sh" target="_blank">
                  BEMANI ÆON Team, 2020 All Rights Reserved
                </Link>
              </div>
              <div className="font-extrabold hover:underline mt-6">
                <Link href="https://p.eagate.573.jp/game/2dx/28/" target="_blank">
                    beatmania IIDX is copyrighted by KONAMI
                </Link>
              </div>
            </div>
            <div className="w-1/3 flex justify-end cursor-pointer">
              <Link href="https://discord.gg/fYzJ2WG" target="_blank"> 
                <FontAwesomeIcon icon={ faDiscord } size="2x" className="mr-3 sm:mr-6" />
              </Link>
              <Link href="https://github.com/jojobudiman" target="_blank"> 
                <FontAwesomeIcon icon={ faGithub } size="2x" />
              </Link> 
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;