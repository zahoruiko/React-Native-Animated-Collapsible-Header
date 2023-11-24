const listItemImage = 'https://unsplash.it/30/30';

export type TListData = {
  id: number;
  image: string;
  title: string;
};

export const listData: TListData[] = Array(30)
  .fill(null)
  .map((_, idx) => ({
    id: idx,
    image: listItemImage,
    title: `Item title #${idx}`
  }));
