export interface IArticle {
  id: string;
  title: string;
  navigationRoute?: string;
  description: string;
  image: string;
  additionalContent?: {
    youtubeLink?: string;
    link?: string;
    title: string;
    isShorts?: boolean;
  }[];
  children?: IArticle[];
}
