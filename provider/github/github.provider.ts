import config from '@config'
import Base from '@provider/base'
import { IGitHubProfileResponse, IGitHubRepositoriesAPIResponse, IGithubContributionResponse } from './github.interface'

const { github } = config

class GithubProvider extends Base {
	private readonly PER_PAGE_DEFAULT: number = 1000

	constructor() {
		super(
			github.api,
			new Headers({
				Authorization: `token ${github.key}`,
			})
		)
	}

	public async getProfile(): Promise<IGitHubProfileResponse> {
		return this.get(`/users/${github.username}`)
	}

	public async getRepositories(perPage = this.PER_PAGE_DEFAULT): Promise<IGitHubRepositoriesAPIResponse[]> {
		return this.get(`/users/${github.username}/repos?per_page=${perPage}`)
	}

	public async getContributions(from: Date, to: Date): Promise<IGithubContributionResponse> {
		const q = {
			query: `
                      query userInfo($LOGIN: String!, $FROM: DateTime!, $TO: DateTime!) {
                        user(login: $LOGIN) {
                          name
                          contributionsCollection(from: $FROM, to: $TO) {
                            contributionCalendar {
                              weeks {
                                contributionDays {
                                  contributionCount
                                  date
                                }
                              }
                            }
                          }
                        }
                      }
                    `,
			variables: {
				LOGIN: github.username,
				FROM: from.toISOString(),
				TO: to.toISOString(),
			},
		}

		return this.post('/graphql', q)
	}
}

const githubProvider = new GithubProvider()

export default githubProvider
