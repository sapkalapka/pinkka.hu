import Image from "next/image"

const About = () => {
  return (
    <div className="grid md:grid-cols-[15rem,1fr] content-center gap-8">
      <div className="hidden md:block w-full rounded-[100%] bg-black shadow-2xl m-auto border-2 border-black outline-dashed outline-2 outline-black outline-offset-4 relative">
        <Image src="/about_me.png" width="100%" height="100%" layout="responsive" alt="me"></Image>
      </div>
      <div id="about__text" className="md:text-left">
        <p className="font-accent-1 font-bold text-5xl mb-6 text-center lg:text-left">
          Szia, köszöntelek az oldalamon!
        </p>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus impedit deserunt sequi. Obcaecati nobis
          distinctio magni, minima quo quam harum animi aut veniam libero velit dolores. Culpa temporibus officia
          laudantium aut quis porro, velit ipsum officiis vitae fugit voluptatum vel magni. Porro cupiditate nam, labore
          a dicta natus?
        </p>
        <p className="font-accent-1 font-bold text-4xl mt-6 text-right">Jó böngészést!</p>
      </div>
    </div>
  )
}

export default About
