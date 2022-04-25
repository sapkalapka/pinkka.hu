const InputPlusLabel = ({ type, title, isRequired, placeholder, onChange }) => {
    return (
        <div className="my-4">
            <label>{title}</label>
            <input
                required={isRequired}
                placeholder={placeholder}
                type={type}
                className="border w-full  rounded outline-cyan-600 px-1"
                onChange={onChange}
            />
        </div>
    );
};

export default InputPlusLabel;
