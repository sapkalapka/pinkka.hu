import PageTitle from "../components/PageTitle"
import React, { useState, useEffect } from "react"
import OrderStageOne from "../components/OrderStageOne"
import OrderStageTwo from "../components/OrderStageTwo"
import OrderStageThree from "../components/OrderStageThree"

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
    <>
      <PageTitle title={"Megrendelés leadása"} />
      <OrderStageOne />
      <OrderStageTwo />
      <OrderStageThree />
      <button
        disabled={!readyToSend}
        className="mt-4 cursor-pointer outline outline-1 outline-blue-900 shadow hover:shadow-lg transition-all py-1 px-2 rounded font-accent-2 font-bold text-3xl"
      >
        Rendelés elküldése
      </button>
    </>
  )
}

export default Order
