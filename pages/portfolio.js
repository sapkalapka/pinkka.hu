import Image from "next/image"
import PortfolioPiece from "../components/PortfolioPiece"

const Portfolio = () => {
  return (
    <>
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque numquam mollitia eum laudantium impedit? Et
        distinctio, minima quo fuga laudantium nulla doloribus possimus assumenda magnam dolorem, eius nisi, cumque
        fugiat debitis minus. Dolorem in expedita quam mollitia nostrum voluptatem.
      </p>
      <PortfolioPiece
        src={"/img1.jpg"}
        text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          asperiores earum molestiae, ducimus, quia perspiciatis doloremque
          exercitationem, minima nihil quo ex numquam dolore ab ipsum.
          Perspiciatis recusandae animi possimus amet.`}
        title={`Táskák, hátizsákok`}
        url={"https://google.com"}
      />
      <PortfolioPiece
        src={"/img2.jpg"}
        text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          asperiores earum molestiae, ducimus, quia perspiciatis doloremque
          exercitationem, minima nihil quo ex numquam dolore ab ipsum.
          Perspiciatis recusandae animi possimus amet.`}
        title={`Kozmetikai neszesszerek`}
        url={"https://google.com"}
      />
      <PortfolioPiece
        src={"/img3.jpg"}
        text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          asperiores earum molestiae, ducimus, quia perspiciatis doloremque
          exercitationem, minima nihil quo ex numquam dolore ab ipsum.
          Perspiciatis recusandae animi possimus amet.`}
        title={`Könyvtokok`}
        url={"https://google.com"}
      />
      <PortfolioPiece
        src={"/img4.jpg"}
        text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          asperiores earum molestiae, ducimus, quia perspiciatis doloremque
          exercitationem, minima nihil quo ex numquam dolore ab ipsum.
          Perspiciatis recusandae animi possimus amet.`}
        title={`Apróságok`}
        url={"https://google.com"}
      />
    </>
  )
}

export default Portfolio
