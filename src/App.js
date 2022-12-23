import ImageCard from "./components/ImageCard";
import Wallpaper1 from "./wallpapers/1.jpg";
import { ReactComponent as LeftArrow } from "./icons/LeftArrow.svg";
import { ReactComponent as RightArrow } from "./icons/RightArrow.svg";

export default function App() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-12 text-blue-500 mr-5 cursor-pointer">
        <LeftArrow />
      </div>
      <ImageCard imageSrc={Wallpaper1} />
      <div className="w-12 text-blue-500 ml-5 cursor-pointer">
        <RightArrow />
      </div>
    </div>
  );
}
