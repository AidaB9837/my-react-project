import { useEffect, useState } from "react"

/*Custom Hooks 03: Extract the logic to fetch a Github user's data from the GithubUser component from useEffect 03
into a custom hook called useGithubUser. */

/*Custom Hooks 04: Modify the useGithubUser hook to return the function to fetch the data of a Github user, 
along with the data of the user and the error and loading states. */

export function useGithubUser(username) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function fetchGithubUser(username){
        setLoading(true)
        setError(null)

        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const json = await response.json()

            if (response.status !== 200) {
                setError(new Error())
            }
            
            setData(json)
        } catch(error) {
            setError(error)
            setData(null)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchGithubUser(username)
    }, [username])

    return {data, loading, error}
}
