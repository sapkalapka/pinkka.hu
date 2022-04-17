import PageTitle from "../components/PageTitle"
import React, { useState, useEffect } from "react"

const Order = () => {
  const [stage, setStage] = useState({
    one: true,
    two: true,
    three: true,
  })

  const [readyToSend, setReadyToSend] = useState(false)

  useEffect(() => {
    if (stage.one && stage.two && stage.three) setReadyToSend(true)
  }, [stage])

  return (
    <div className="bg-indigo-100 rounded shadow p-4">
      <PageTitle title={"Megrendelés leadása"} />

      <div className="grid md:grid-cols-2 gap-12">
        {stage.one && (
          <div className="grid">
            <p className="font-bold">
              1. Milyen típusú terméket szeretnél rendelni?
              <span className="text-red-500">*</span>
            </p>
            <label htmlFor="opt1">
              <input type="radio" name="q1" id="opt1" /> Táska vagy hátizsák
            </label>
            <label htmlFor="opt2">
              <input type="radio" name="q1" id="opt2" /> E-book tartó vagy
              könyvtok
            </label>
            <label htmlFor="opt3">
              <input type="radio" name="q1" id="opt3" /> Kozmetikai neszesszer
            </label>
            <label htmlFor="opt4">
              <input type="radio" name="q1" id="opt4" /> Apróságok
            </label>
            <label htmlFor="opt5">
              <input type="radio" name="q1" id="opt5" /> Egyéb (egyedi
              megrendelés)
            </label>
          </div>
        )}
        {stage.two && (
          <div className="grid">
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
            <input
              className="shadow p-1 rounded"
              type="text"
              id="email"
              required
            />
          </div>
        )}
        {stage.three && (
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
        )}
      </div>

      <button
        disabled={!readyToSend}
        className="mt-4 cursor-pointer outline outline-1 outline-blue-900 shadow hover:shadow-lg transition-all py-1 px-2 rounded font-accent-2 font-bold text-3xl"
      >
        Rendelés elküldése
      </button>
    </div>
  )
}

export default Order
