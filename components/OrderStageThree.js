const OrderStageThree = () => {
  return (
    <div>
      <div className="md:col-span-2">
        <div className="q3">
          <label htmlFor="note" className="font-bold">
            3. Megjegyzés (max. 500 karakter)
          </label>
          <textarea
            className="mt-4 w-full shadow p-1 rounded"
            id="note"
            rows={10}
            maxLength={500}
          ></textarea>
        </div>
      </div>
    </div>
  )
}

export default OrderStageThree
