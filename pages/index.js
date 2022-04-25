import Image from 'next/image';

const About = () => {
    return (
        <div className="my-12">
            <p className="font-display italic font-bold text-5xl mb-6 text-center md:text-left">
                Szia<span className="text-cyan-600">,</span> köszöntelek itt!
            </p>
            <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                impedit deserunt sequi. Obcaecati nobis distinctio magni, minima
                quo quam harum animi aut veniam libero velit dolores. Culpa
                temporibus officia laudantium aut quis porro, velit ipsum
                officiis vitae fugit voluptatum vel magni. Porro cupiditate nam,
                labore a dicta natus?
            </p>
            <p className="font-display font-bold text-2xl mt-12 text-right">
                Jó böngészést!
            </p>
        </div>
    );
};

export default About;
