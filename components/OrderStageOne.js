const OrderStageOne = () => {
  return (
    <>
      <p className="font-bold">
        1. Milyen típusú terméket szeretnél rendelni?
        <span className="text-red-500">*</span>
      </p>
      <label htmlFor="opt1">
        <input type="radio" name="q1" id="opt1" /> Táska vagy hátizsák
      </label>
      <label htmlFor="opt2">
        <input type="radio" name="q1" id="opt2" /> E-book tartó vagy könyvtok
      </label>
      <label htmlFor="opt3">
        <input type="radio" name="q1" id="opt3" /> Kozmetikai neszesszer
      </label>
      <label htmlFor="opt4">
        <input type="radio" name="q1" id="opt4" /> Apróságok
      </label>
      <label htmlFor="opt5">
        <input type="radio" name="q1" id="opt5" /> Egyéb (egyedi megrendelés)
      </label>
    </>
  )
}

export default OrderStageOne
