const Button = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="sm:group-even:ml-auto bg-sky-400 rounded shadow
			 hover:shadow-lg hover:bg-sky-500 active:scale-95 transition-all max-w-fit px-8 py-2"
        >
            {text}
        </button>
    );
};

export default Button;
