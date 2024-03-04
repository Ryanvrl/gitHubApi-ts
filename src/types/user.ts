export type UserProps = {
    avatar_url: string,
    login: string,
    location: string,
    followers: number,
    following: number,
}

export type UserNameUseParams = {
    user: string, 
}

export type ReposProps = {
    id: number,
    name: string,
    html_url: string,
    watchers_count: number,
    forks_count: number,
    stargazers_count: number,
    language: string, 
}