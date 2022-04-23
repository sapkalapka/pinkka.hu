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
        <footer>
            <p className="font-display text-center text-2xl font-bold border-dashed border-b-2 border-black my-1">
                Örömmel öltve
            </p>
            <div className="border-t-2 border-black">
                <div className="lg:w-4/6 mx-auto grid md:grid-cols-2 p-2 md:gap-32 my-1">
                    <div className="grid md:justify-end gap-1">
                        <p className="font-bold">Információk</p>
                        <Link href="/warranty">
                            <a className="hover:underline hover:underline-offset-2 hover:decoration-1 transition-all">
                                <BsShieldFillCheck
                                    size={20}
                                    className="inline-block mr-2"
                                />
                                <span>Termékgarancia</span>
                            </a>
                        </Link>
                        <Link href="/shipping">
                            <a className="hover:underline hover:underline-offset-2 hover:decoration-1 transition-all">
                                <FaTruck
                                    size={20}
                                    className="inline-block mr-2"
                                />
                                <span>Szállítási információk</span>
                            </a>
                        </Link>
                        <Link href="/payment">
                            <a className="hover:underline hover:underline-offset-2 hover:decoration-1 transition-all">
                                <MdPayments
                                    size={20}
                                    className="inline-block mr-2"
                                />
                                <span>Fizetési információk</span>
                            </a>
                        </Link>
                    </div>
                    <div className="grid gap-1">
                        <p className="font-bold">Kapcsolat</p>
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
                            href="https://www.facebook.com/karasz.kriszta"
                        >
                            <BsFacebook
                                size={20}
                                className="inline-block mr-2"
                            />
                            <span>karasz.kriszta</span>
                        </a>
                        <a
                            target="_blank"
                            className="hover:underline hover:underline-offset-2 hover:decoration-1 transition-all"
                            rel="noreferrer"
                            href="https://www.instagram.com/krisztina.karasz"
                        >
                            <AiFillInstagram
                                size={20}
                                className="inline-block mr-2"
                            />
                            <span>krisztina.karasz</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
