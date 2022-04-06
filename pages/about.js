import Image from 'next/image'

const about = () => {
  return (
    <div className='grid lg:grid-cols-2 content-center gap-4 p-4'>
      <div
        id='about__img'
        className='w-3/6 xl:w-4/6 rounded-[100%] bg-black shadow-2xl m-auto border-2 border-black outline-dashed outline-2 outline-black outline-offset-4'>
        <img src='about_me.png' alt='' />
      </div>
      <div id='about__text' className='md:text-left'>
        <p className='font-accent-1 font-bold text-5xl mb-6 text-center lg:text-left'>
          Szia, köszöntelek az oldalamon!
        </p>
        <p className='text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus impedit
          deserunt sequi. Obcaecati nobis distinctio magni, minima quo quam
          harum animi aut veniam libero velit dolores. Culpa temporibus officia
          laudantium aut quis porro, velit ipsum officiis vitae fugit voluptatum
          vel magni. Porro cupiditate nam, labore a dicta natus? Dolores impedit
          labore at repellat dolor, blanditiis beatae corrupti fugiat quidem
          omnis necessitatibus vero magni eius ullam a veniam reiciendis aperiam
          tempore temporibus! Minima quos ad ducimus id, corporis repellendus
          libero quia aspernatur corrupti facilis doloremque error, et
          inventore. Molestiae similique molestias asperiores voluptates facere
          quibusdam aspernatur aliquid, sapiente soluta, culpa expedita?
        </p>
        <p className='font-accent-1 font-bold text-4xl mt-6 text-right'>
          Jó böngészést!
        </p>
      </div>
    </div>
  )
}

export default about
