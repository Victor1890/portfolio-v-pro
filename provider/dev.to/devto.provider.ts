import config from '@config'
import Base from '@provider/base'
import { IArticleDevTo, IFollowDevTo } from './devto.interface'
import { ArticleStorage, FollowStorage } from '@utils/memory/devto.memory';

const { devTo } = config;

class DevToProvider extends Base {

    private readonly PER_PAGE_DEFAULT: number = 1000;
    private readonly ONE_DAY_MILLISECONDS = 24 * 60 * 60 * 1000;
    private readonly articleStorage: ArticleStorage;
    private readonly followStorage: FollowStorage;

    constructor() {
        super(devTo.api, { api_key: devTo.apiKey })
        this.articleStorage = new ArticleStorage()
        this.followStorage = new FollowStorage()
    }

    public async getPageOfPosts(page = 1, perPage = this.PER_PAGE_DEFAULT): Promise<IArticleDevTo[]> {

        const articles = this.articleStorage.getArticles()
        if (articles) {
            const start = (page - 1) * perPage;
            const end = start + perPage;

            return articles.slice(start, end)
        }

        const data = await this.get<IArticleDevTo[]>(`/articles/me?per_page=${perPage}&page=${page}`)

        this.articleStorage.addArticles(data, this.ONE_DAY_MILLISECONDS)

        return data
    }

    public async getArticleById(articleId: number | string): Promise<IArticleDevTo> {

        const article = this.articleStorage.getOneArticle(articleId as string)
        if (article) return article

        const data = await this.get<IArticleDevTo>(`/articles/${articleId}`)

        this.articleStorage.addOneArticle(articleId as string, data, this.ONE_DAY_MILLISECONDS)

        return data
    }

    public async getArticleBySlug(slug: string): Promise<IArticleDevTo> {

        const article = this.articleStorage.getOneArticle(slug)
        if (article) return article

        const data = await this.get<IArticleDevTo>(`/articles/${devTo.username}/${slug}`)

        this.articleStorage.addOneArticle(slug, data, this.ONE_DAY_MILLISECONDS * 36000)

        return data
    }

    public async getAllFollowers(page = 1, perPage = this.PER_PAGE_DEFAULT): Promise<IFollowDevTo[]> {

        const followers = this.followStorage.getFollowers()
        if (followers) {
            const start = (page - 1) * perPage;
            const end = start + perPage;

            return followers.slice(start, end)
        }

        const data = await this.get<IFollowDevTo[]>(`/followers/users?per_page=${perPage}&page=${page}`)

        this.followStorage.addFollowers(data, this.ONE_DAY_MILLISECONDS)

        return data
    }
}

const devToProvider = new DevToProvider()

export default devToProvider