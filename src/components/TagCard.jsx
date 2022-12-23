import Tag from "./Tag";

const tags = [
  "Kelebek",
  "Macro",
  "Zirva",
  "Zamazingo",
  "Parrot",
  "Zafer Tan Cankiri",
];

const TagCard = () => {
  return (
    <div className="flex flex-wrap px-2 pb-2 rounded-lg bg-gray-200 mt-2">
      {tags.map((item, index) => (
        <Tag key={`tag-${index}`} text={item} />
      ))}
    </div>
  );
};

export default TagCard;
