export type BoulderingGym = {
  id: number;
  imageUrl: string;
  name: string;

  sector: {
    date: Date;
    name: string | null;
  };

  tags: string[];
};
