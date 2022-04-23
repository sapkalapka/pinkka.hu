const InputPlusLabel = ({ type, title, isRequired, placeholder, onChange }) => {
    return (
        <div className="my-4">
            <label>{title}</label>
            <input
                required={isRequired}
                placeholder={placeholder}
                type={type}
                className="border w-full shadow-sm rounded outline-cyan-700 px-1"
                onChange={onChange}
            />
        </div>
    );
};

export default InputPlusLabel;
