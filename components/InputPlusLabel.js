const InputPlusLabel = ({ type, title, isRequired, placeholder, setParentState }) => {
  return (
    <>
      <p className='mt-4'>{title}</p>
      <input
        required={isRequired}
        placeholder={placeholder}
        type={type}
        className='border w-full shadow-sm rounded outline-sky-400 px-1'
        onChange={(e) => setParentState(e.target.value)}
      />
    </>
  );
};

export default InputPlusLabel;
