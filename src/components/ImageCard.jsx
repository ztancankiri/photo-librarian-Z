import ExifCard from "./ExifCard";
import PreviewImage from "./PreviewImage";
import TagCard from "./TagCard";

const ImageCard = ({ imageSrc }) => {
  return (
    <div className="flex flex-col justify-center items-center w-3/4 mt-8">
      <h1 className="text-4xl font-bold select-none">DSC_30652.NEF</h1>
      <div className="flex mt-3">
        <div className="flex flex-col w-3/4">
          <PreviewImage src={imageSrc} />
          <TagCard />
        </div>
        <div className="flex flex-col w-1/4">
          <ExifCard />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
