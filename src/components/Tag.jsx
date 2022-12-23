const Tag = ({ text }) => {
  return (
    <button
      className="flex bg-blue-500 rounded-full h-7 px-3 mt-2 cursor-default mr-2 justify-start items-center"
      onClick={(e) => e.preventDefault}
    >
      <span className="whitespace-pre text-white select-none">#{text}</span>
    </button>
  );
};

export default Tag;
