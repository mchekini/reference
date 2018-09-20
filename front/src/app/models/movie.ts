export class Movie {
  category: string;
  subCategory: string;
  title: string;
  link: string;

  constructor(category: string, subCategory: string, title: string, link: string) {
    this.category = category;
    this.subCategory = subCategory;
    this.title = title;
    this.link = link;
  }
}
