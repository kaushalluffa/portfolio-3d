import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Image`.
 */
export type ImageProps = SliceComponentProps<Content.ImageSlice>;

/**
 * Component for "Image" Slices.
 */
const Image = ({ slice }: ImageProps): JSX.Element => {
  return (
    <PrismicNextImage
      field={slice.primary.image}
      className="not-prose my-10 h-full w-full  rounded-md md:my-14 lg:my-16"
      alt=""
    />
  );
};

export default Image;
