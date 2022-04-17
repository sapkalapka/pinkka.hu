const OrderStageTwo = () => {
  return (
    <div>
      <p className="font-bold">
        2. Megrendelő adatai<span className="text-red-500">*</span>
      </p>
      <label htmlFor="lastname">Vezetéknév</label>
      <input
        className="mb-2 shadow p-1 rounded"
        type="text"
        id="lastname"
        required
      />
      <label htmlFor="fistname">Keresztnév</label>
      <input
        className="mb-2 shadow p-1 rounded"
        type="text"
        id="firstname"
        required
      />
      <label htmlFor="phone">Telefonszám</label>
      <input className="mb-2 shadow p-1 rounded" type="text" id="phone" />
      <label htmlFor="email">Email cím</label>
      <input className="shadow p-1 rounded" type="text" id="email" required />
    </div>
  )
}

export default OrderStageTwo
