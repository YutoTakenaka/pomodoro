function BackButton(props) {
  return (
    <button
      {...props}
      className="w-36 h-16 flex justify-center items-center bg-gray-400 rounded-lg py-2 cursor-pointer hover:opacity-80"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-12 h-12"
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z"
          clipRule="evenodd"
        />
      </svg>
      <p className="text-gray-200 ml-2 text-xl">Back</p>
    </button>
  );
}

export default BackButton;
