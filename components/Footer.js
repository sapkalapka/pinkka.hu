import { BsShieldFillCheck, BsFacebook } from 'react-icons/bs';
import { MdPayments, MdLocationPin, MdEmail, MdBackpack } from 'react-icons/md';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTruck } from 'react-icons/fa';
import Link from 'next/link';
const Footer = () => {
    let handleCopy = (e) => {
        navigator.clipboard.writeText(e.target.textContent);
        alert(`Email cím kimásolva!`);
    };

    return (
        <footer className="flex gap-16 bg-cyan-700 text-white p-16 relative max-h-72">
            <ul className="grid gap-2">
                <li>
                    <h2 className="mb-4 font-medium">Információk</h2>
                </li>
                <li>
                    <BsShieldFillCheck
                        size={20}
                        className="inline-block mr-2"
                    />
                    <Link href="/warranty">
                        <a className="hover:underline hover:underline-offset-2 hover:decoration-1 transition-all">
                            Termékgarancia
                        </a>
                    </Link>
                </li>
                <li>
                    <FaTruck size={20} className="inline-block mr-2" />
                    <Link href="/shipping">
                        <a className="hover:underline hover:underline-offset-2 hover:decoration-1 transition-all">
                            Szállítási információk
                        </a>
                    </Link>
                </li>
                <li>
                    <MdPayments size={20} className="inline-block mr-2" />
                    <Link href="/payment">
                        <a className="hover:underline hover:underline-offset-2 hover:decoration-1 transition-all">
                            Fizetési információk
                        </a>
                    </Link>
                </li>
            </ul>
            <ul className="grid gap-2">
                <li>
                    <h2 className="font-medium mb-4">Kapcsolat</h2>
                </li>
                <li>
                    <MdEmail size={20} className="inline-block mr-2" />
                    <span
                        className="cursor-pointer hover:underline hover:underline-offset-2 hover:decoration-1 transition-all"
                        onClick={(e) => handleCopy(e)}
                    >
                        krisztina_karasz@yahoo.com
                    </span>
                </li>
                <li>
                    <BsFacebook size={20} className="inline-block mr-2" />
                    <a
                        target="_blank"
                        className="hover:underline hover:underline-offset-2 hover:decoration-1 transition-all"
                        rel="noreferrer"
                        href="https://www.facebook.com/karasz.kriszta"
                    >
                        karasz.kriszta
                    </a>
                </li>
                <li>
                    <AiFillInstagram size={20} className="inline-block mr-2" />
                    <a
                        target="_blank"
                        className="hover:underline hover:underline-offset-2 hover:decoration-1 transition-all"
                        rel="noreferrer"
                        href="https://www.instagram.com/krisztina.karasz"
                    >
                        krisztina.karasz
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
