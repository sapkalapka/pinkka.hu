import Image from 'next/image';

const About = () => {
    return (
        <div className="flex flex-col md:flex-row gap-12 my-12">
            <div className="w-4/12 rounded-[100%] shadow-2xl m-auto border-2 border-black outline-dashed outline-2 outline-black outline-offset-4 relative">
                <Image
                    src="/about_me.png"
                    width={4}
                    height={4}
                    layout="responsive"
                    alt="me"
                ></Image>
            </div>
            <div className="md:w-8/12 xl:text-left">
                <p className="font-display italic font-bold text-5xl mb-6 text-center md:text-left">
                    Szia<span className="text-sky-400">,</span> köszöntelek itt!
                </p>
                <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus impedit deserunt sequi. Obcaecati nobis distinctio
                    magni, minima quo quam harum animi aut veniam libero velit
                    dolores. Culpa temporibus officia laudantium aut quis porro,
                    velit ipsum officiis vitae fugit voluptatum vel magni. Porro
                    cupiditate nam, labore a dicta natus?
                </p>
                <p className="font-display font-bold text-2xl mt-12 text-right">
                    Jó böngészést!
                </p>
            </div>
        </div>
    );
};

export default About;
