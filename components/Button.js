const Button = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="sm:group-even:ml-auto text-white bg-cyan-600 rounded shadow
			 hover:shadow-lg hover:bg-cyan-600 active:scale-95 transition-all max-w-fit px-8 py-2"
        >
            {text}
        </button>
    );
};

export default Button;
