import PageTitle from '../components/PageTitle'

const order = () => {
  return (
    <>
      <PageTitle title={'Megrendelés leadása'} />
      <div className='grid grid-cols-3 mb-12'>
        <div className='q1'>
          <p>1. Milyen típusú terméket szeretnél rendelni?*</p>
          <label htmlFor='opt1'>
            <input type='radio' name='q1' id='opt1' /> Táska vagy hátizsák
          </label>
          <label htmlFor='opt2'>
            <input type='radio' name='q1' id='opt2' /> E-book tartó vagy
            könyvtok
          </label>
          <label htmlFor='opt3'>
            <input type='radio' name='q1' id='opt3' /> Kozmetikai neszesszer
          </label>
          <label htmlFor='opt4'>
            <input type='radio' name='q1' id='opt4' /> Egyéb (egyedi
            megrendelés)
          </label>
        </div>
        <div className='q2'>
          <p>2. Megrendelő adatai</p>
          <label htmlFor='lastname'>Vezetéknév</label>
          <input type='text' id='lastname' required />
          <label htmlFor='fistname'>Keresztnév</label>
          <input type='text' id='firstname' required />
          <label htmlFor='phone'>Telefonszám</label>
          <input type='text' id='phone' />
          <label htmlFor='email'>Email cím</label>
          <input type='text' id='email' required />
        </div>
        <div className='q3'>
          <label htmlFor='note'>3. Megjegyzés (max. 500 karakter)</label>
          <textarea id='note' cols='30' rows='10' maxLength={500}></textarea>
        </div>
      </div>
      <button className='order-btn'>Rendelés elküldése</button>
    </>
  )
}

export default order
