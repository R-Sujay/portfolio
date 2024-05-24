import { Image } from "sanity";

interface HeroType {
  _id: string;
  status: string;
  name: string;
  profile: {
    _type: string; // likely a string representing the image type (e.g., "image")
    asset: {
      _ref: string; // احتمالا یک رشته معرف کننده مرجع دارایی (probably a string representing the asset reference)
      _type: string; // likely a string representing the asset type (e.g., "reference")
    };
    alt: string; // likely a string representing the alternative text for the image
  };
  location: string;
  desc: string[];
}

type SkillType = {
  _id: string;
  width: number;
  light: {
    _type: string;
    asset: {
      _type: string;
      _ref: string;
    };
  };
  dark: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
}[];
