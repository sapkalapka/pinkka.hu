import { BsShieldFillCheck, BsFacebook } from "react-icons/bs"
import { MdPayments, MdLocationPin, MdEmail, MdBackpack } from "react-icons/md"
import { AiFillInstagram } from "react-icons/ai"
import { FaTruck } from "react-icons/fa"
import Link from "next/link"
const Footer = () => {
  let handleCopy = (e) => {
    navigator.clipboard.writeText(e.target.textContent)
    alert(`Email cím kimásolva!`)
  }

  return (
    <footer>
      <p className="font-accent-2 text-center text-4xl py-2 font-bold border-dashed border-b-2 border-black my-1">
        Örömmel öltve!
      </p>
      <div className="border-t-2 border-black">
        <div className="lg:w-4/6 mx-auto grid md:grid-cols-2 px-6 md:gap-32">
          <div className="grid md:justify-end">
            <p className="font-bold mt-6 mb-1">Információk</p>
            <Link href="/warranty">
              <a className="hover:underline hover:underline-offset-2 hover:decoration-1 transition-all">
                <BsShieldFillCheck size={20} className="inline-block mr-2" />
                <span>Termékgarancia</span>
              </a>
            </Link>
            <Link href="/shipping">
              <a className="hover:underline hover:underline-offset-2 hover:decoration-1 transition-all">
                <FaTruck size={20} className="inline-block mr-2" />
                <span>Szállítási információk</span>
              </a>
            </Link>
            <Link href="/payment">
              <a className="hover:underline hover:underline-offset-2 hover:decoration-1 transition-all">
                <MdPayments size={20} className="inline-block mr-2" />
                <span>Fizetési információk</span>
              </a>
            </Link>
          </div>
          <div className="grid">
            <p className="font-bold mt-6 mb-1">Kapcsolat</p>
            <div>
              <MdLocationPin size={20} className="inline-block mr-2" />
              <span>Esztergom</span>
            </div>
            <div
              className="cursor-pointer hover:underline hover:underline-offset-2 hover:decoration-1 transition-all"
              onClick={(e) => handleCopy(e)}
            >
              <MdEmail size={20} className="inline-block mr-2" />
              <span>krisztina_karasz@yahoo.com</span>
            </div>
            <a
              target="_blank"
              className="hover:underline hover:underline-offset-2 hover:decoration-1 transition-all"
              rel="noreferrer"
              href="https://www.facebook.com/krisztina.jaszberenyinekarasz"
            >
              <BsFacebook size={20} className="inline-block mr-2" />
              <span>krisztina.jaszberenyinekarasz</span>
            </a>
            <a
              target="_blank"
              className="hover:underline hover:underline-offset-2 hover:decoration-1 transition-all"
              rel="noreferrer"
              href="https://www.instagram.com/krisztina.karasz"
            >
              <AiFillInstagram size={20} className="inline-block mr-2" />
              <span>krisztina.karasz</span>
            </a>
          </div>
        </div>

        <p className="text-center text-sm font-medium my-6">
          © 2022 - pinkka.hu - Minden jog fenntartva.
        </p>
      </div>
    </footer>
  )
}

export default Footer
