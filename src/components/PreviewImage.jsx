const Tag = ({ src }) => {
  return (
    <div className="flex rounded-lg p-3 bg-gray-200 select-none">
      <img src={src} alt="" />
    </div>
  );
};

export default Tag;
