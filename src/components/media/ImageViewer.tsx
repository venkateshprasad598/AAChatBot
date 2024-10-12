import { Image } from "antd";

export const ImageViewer = ({ imageSrc }: { imageSrc: any }) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Image src={imageSrc} alt="image" />;
    </div>
  );
};
