export interface IArticle {
  id: string;
  title: string;
  navigationRoute: string;
  description: string;
  image: string;
  subArticle: IArticle;
}
