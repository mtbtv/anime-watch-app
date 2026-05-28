import axios from 'axios'

const ANILIST_API = 'https://graphql.anilist.co'

const queries = {
  trending: `
    query {
      Page(perPage: 10) {
        media(sort: TRENDING_DESC, type: ANIME) {
          id
          title {
            english
            romaji
          }
          coverImage {
            large
            medium
          }
          averageScore
          episodes
          status
          description
        }
      }
    }
  `,
  popular: `
    query {
      Page(perPage: 10) {
        media(sort: POPULARITY_DESC, type: ANIME) {
          id
          title {
            english
            romaji
          }
          coverImage {
            large
            medium
          }
          averageScore
          episodes
          status
          description
        }
      }
    }
  `,
  topRated: `
    query {
      Page(perPage: 10) {
        media(sort: SCORE_DESC, type: ANIME) {
          id
          title {
            english
            romaji
          }
          coverImage {
            large
            medium
          }
          averageScore
          episodes
          status
          description
        }
      }
    }
  `,
  mostWatched: `
    query {
      Page(perPage: 10) {
        media(sort: POPULARITY_DESC, type: ANIME, onList: true) {
          id
          title {
            english
            romaji
          }
          coverImage {
            large
            medium
          }
          averageScore
          episodes
          status
          description
        }
      }
    }
  `
}

export async function fetchAnimeData() {
  try {
    const [trendingRes, popularRes, topRatedRes, mostWatchedRes] = await Promise.all([
      axios.post(ANILIST_API, { query: queries.trending }),
      axios.post(ANILIST_API, { query: queries.popular }),
      axios.post(ANILIST_API, { query: queries.topRated }),
      axios.post(ANILIST_API, { query: queries.mostWatched })
    ])

    return {
      trending: trendingRes.data.data.Page.media,
      popular: popularRes.data.data.Page.media,
      topRated: topRatedRes.data.data.Page.media,
      mostWatched: mostWatchedRes.data.data.Page.media
    }
  } catch (error) {
    console.error('Error fetching from AniList API:', error)
    throw error
  }
}

export async function searchAnime(query) {
  try {
    const response = await axios.post(ANILIST_API, {
      query: `
        query($search: String) {
          Page(perPage: 20) {
            media(search: $search, type: ANIME) {
              id
              title {
                english
                romaji
              }
              coverImage {
                large
                medium
              }
              averageScore
              episodes
              status
              description
            }
          }
        }
      `,
      variables: { search: query }
    })

    return response.data.data.Page.media
  } catch (error) {
    console.error('Error searching anime:', error)
    throw error
  }
}
