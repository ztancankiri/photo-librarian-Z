const data = [
  ["Shutter", "61234"],
  ["Shutter", "123123"],
  ["Shutter", "634"],
  ["Shutter", "634"],
  ["Shutter", "634"],
  ["Shutter", "634"],
  ["Shutter", "634"],
  ["Shutter", "634"],
  ["Shutter", "634"],
  ["Shutter", "634"],
  ["Shutter", "634"],
  ["Shutter", "634"],
  ["Shutter", "634"],
  ["Shutter", "634"],
  ["Shutter", "634"],
  ["Shutter", "634"],
  ["Shutter", "634"],
];

const ExifCard = () => {
  return (
    <div className="flex justify-between px-2 rounded-lg bg-gray-200 ml-2 select-none">
      <div className="flex flex-col w-1/2">
        {data.map((item, index) => (
          <span key={`exif-key-${index}`}>{item[0]}</span>
        ))}
      </div>
      <div className="flex flex-col w-1/2">
        {data.map((item, index) => (
          <span key={`exif-value-${index}`}>{item[1]}</span>
        ))}
      </div>
    </div>
  );
};

export default ExifCard;
