import Image from "next/image"
import PageTitle from "../components/PageTitle"
import PortfolioPiece from "../components/PortfolioPiece"

const portfolioData = [
  {
    src: "/img1.jpg",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          asperiores earum molestiae, ducimus, quia perspiciatis doloremque
          exercitationem.`,
    title: `Táskák, hátizsákok`,
    url: "https://google.com",
  },
  {
    src: "/img2.jpg",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          asperiores earum molestiae, ducimus, quia perspiciatis doloremque
          exercitationem.`,
    title: `Neszesszerek`,
    url: "https://google.com",
  },
  {
    src: "/img3.jpg",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          asperiores earum molestiae, ducimus, quia perspiciatis doloremque
          exercitationem.`,
    title: `Könyvtokok`,
    url: "https://google.com",
  },
  {
    src: "/img4.jpg",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          asperiores earum molestiae, ducimus, quia perspiciatis doloremque
          exercitationem.`,
    title: `Apróságok`,
    url: "https://google.com",
  },
]

const Portfolio = () => {
  return (
    <>
      <PageTitle title="Munkáim" />
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque numquam
        mollitia eum laudantium impedit? Et distinctio, minima quo fuga
        laudantium nulla doloribus possimus assumenda magnam dolorem, eius nisi,
        cumque fugiat debitis minus. Dolorem in expedita quam mollitia nostrum
        voluptatem.
      </p>
      <div className="grid gap-6 md:gap-12">
        {portfolioData.map((portfolio, i) => (
          <PortfolioPiece key={`portfolio-${i}`} {...portfolio} />
        ))}
      </div>
    </>
  )
}

export default Portfolio
