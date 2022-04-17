import Image from "next/image"
const PortfolioPiece = ({ src, title, text, url }) => {
  return (
    <div className="group grid md:grid-cols-2 gap-6 md:gap-12">
      {/* portfolio text */}
      <div className="md:group-even:order-2 md:group-even:text-left grid gap-4 content-center text-center md:text-right">
        <p className="font-accent-2 font-bold text-6xl">{title}</p>
        <p className="text-sm">{text}</p>
        <a
          href={url}
          className="mt-2 font-medium max-w-fit md:group-even:mr-auto md:group-odd:ml-auto text-blue-900 underline underline-offset-2 hover:decoration-2"
        >
          Részletek
        </a>
      </div>
      {/* portfolio img */}
      <img src={src} className="w-full drop-shadow-lg rounded" />
    </div>
  )
}

export default PortfolioPiece
