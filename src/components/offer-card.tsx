import { getUploadCareUrl } from "@/lib/uploadcare";

export const OfferCard = ({
  title,
  description,
  imageSrc,
}: {
  title: string;
  description: string;
  imageSrc: string;
}) => {
  const image = getUploadCareUrl({ src: imageSrc });

  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="relative bg-primary-main min-h-[300px] bg-cover bg-center before:content-[''] before:absolute before:h-full before:w-full before:opacity-30 before:bg-black lg:min-h-[436px]"
    >
      <div className="relative p-5 h-full flex flex-col justify-end">
        <h3 className="text-3xl text-white">{title}</h3>
        <p className="text-base mt-1 text-white">{description}</p>
      </div>
    </div>
  );
};
