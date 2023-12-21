import { IArticleDevTo, IFollowDevTo } from '@provider/dev.to/devto.interface';
import BaseStorage from './base';

export class ArticleStorage extends BaseStorage<IArticleDevTo> {
  private readonly KEY_ARTICLES = 'ARTICLES';

  constructor() {
    super();
  }

  public addArticles(articles: IArticleDevTo[], timeOut = 0): void {
    const currentArticles = this.get(this.KEY_ARTICLES) || [];
    const newArticles = [...(currentArticles as IArticleDevTo[]), ...articles];
    this.set(this.KEY_ARTICLES, newArticles);

    if (timeOut > 0) {
      const timeOutId = setTimeout(() => {
        this.delete(this.KEY_ARTICLES);
        clearTimeout(timeOutId);
      }, timeOut);
    }
  }

  public addOneArticle(key: string, article: IArticleDevTo, timeOut = 0): void {
    this.set(key, article);

    if (timeOut > 0) {
      const timeOutId = setTimeout(() => {
        this.delete(this.KEY_ARTICLES);
        clearTimeout(timeOutId);
      }, timeOut);
    }
  }

  public getOneArticle(key: string): IArticleDevTo | undefined {
    return this.get(key) as IArticleDevTo | undefined;
  }

  public getArticles(): IArticleDevTo[] | undefined {
    return this.get(this.KEY_ARTICLES) as IArticleDevTo[] | undefined;
  }
}

export class FollowStorage extends BaseStorage<IFollowDevTo> {
  private readonly KEY_FOLLOWS = 'FOLLOWERS';

  constructor() {
    super();
  }

  public addFollowers(followers: IFollowDevTo[], timeOut = 0): void {
    const currentFollowers = this.get(this.KEY_FOLLOWS) || [];
    const newFollowers = [
      ...(currentFollowers as IFollowDevTo[]),
      ...followers,
    ];
    this.set(this.KEY_FOLLOWS, newFollowers);

    if (timeOut > 0) {
      const timeOutId = setTimeout(() => {
        this.delete(this.KEY_FOLLOWS);
        clearTimeout(timeOutId);
      }, timeOut);
    }
  }

  public getFollowers(): IFollowDevTo[] | undefined {
    return this.get(this.KEY_FOLLOWS) as IFollowDevTo[] | undefined;
  }
}
