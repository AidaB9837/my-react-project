import useSWR from "swr"

/*SWR 01: Modify the useGithubUser custom hook from Custom Hooks 03 to use the useSWR hook to fetch the data of a Github user. */

const fetcher = url => fetch(url).then((response) => response.json())


export function useGithubUser(username) {
    const {data, error} = useSWR(username !== null ? `https://api.github.com/users/${username}` : null, fetcher)

    return {
        data: data,
        error: error
    }
} 