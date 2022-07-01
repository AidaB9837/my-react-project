import useSWR from "swr"

/*SWR 01: Modify the useGithubUser custom hook from Custom Hooks 03 to use the useSWR hook to fetch the data of a Github user. */
/*SWR 02: Modify the useGithubUser hook so that, if the username is null, no request is made. */
/*SWR 03: Modify the useGithubUser hook so that it returns a function to manually refetch the data when invoked.*/

const fetcher = url => fetch(url).then((response) => response.json())


export function useGithubUser(username) {
    const {data, error, mutate } = useSWR(username !== null ? `https://api.github.com/users/${username}` : null, fetcher)

    function fetchGithubUser(){
        mutate()
    }

    return {
        data: data,
        error: error,
        isLoading: !data && !error,
        onFetchUser: fetchGithubUser
    }
} 