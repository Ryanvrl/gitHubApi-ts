import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { ReposProps, UserNameUseParams } from "../types/user";
import classes from '../components/Repos.module.css'

const InfoProfiles = () => {
    const [error, setError] = useState(null)
    const [repos, setRepos] = useState([])
    const data = useParams<UserNameUseParams>()

    useEffect(() => {
        getRepos(data.user)
    }, [])

    const getRepos = async (userName: string | undefined) => {
        const response = await fetch(`https://api.github.com/users/${userName}/repos?per_page=10`)
            .then(res => {
                if (res.ok == false) {
                    throw Error('Erro no fetch')
                }
                return res.json()
            })
            .catch(e => {
                setError(e.message)
            })


        setRepos(response)
    }

    console.log(repos);

    return (
        <div className={classes.container}>
            {repos
                .map((repo: ReposProps) => <a href={repo.html_url} target="_blank" key={repo.id}>{repo.name}
                    <div className={classes.stats}>
                        <span>👀{repo.watchers_count}</span>
                        <span>🍴{repo.forks_count}</span>
                        <span>⭐{repo.stargazers_count}</span>
                        <span>📖{repo.language}</span>
                    </div>
                </a>)
            }
        </div>
    )
}

export default InfoProfiles