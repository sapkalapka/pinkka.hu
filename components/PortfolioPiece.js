const PortfolioPiece = ({ src, title, text, url }) => {
  return (
    <div className='portfolio__element grid lg:grid-cols-2 gap-4 lg:gap-20 my-6'>
      {/* portfolio text */}
      <div className='portfolio__text grid gap-4 content-center text-center lg:text-right'>
        <p className='font-accent-2 font-bold text-6xl text-accent-1'>
          {title}
        </p>
        <p>{text}</p>
        <a
          href={url}
          className='mt-2 text-background underline underline-offset-4 hover:decoration-2'>
          Bővebben
        </a>
      </div>
      {/* portfolio img */}
      <div className='portfolio__img'>
        <img src={src} width='100%' className='rounded shadow' />
      </div>
    </div>
  )
}

export default PortfolioPiece
