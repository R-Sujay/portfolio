type Hero = {
  _id: string;
  status: string;
  name: string;
  profile: {
    _type: string;
    alt: string;
    asset: ObjectConstructor[];
  };
  location: string;
  desc: string[];
};

type Data = Hero[];
