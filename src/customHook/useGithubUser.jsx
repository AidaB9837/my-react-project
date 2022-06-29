import { useEffect, useState } from "react"

/*Custom Hooks 03: Extract the logic to fetch a Github user's data from the GithubUser component from useEffect 03
into a custom hook called useGithubUser. */

export function useGithubUser(username) {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setData(json)})
    }, [username])

    return {
        data: data
    }
}