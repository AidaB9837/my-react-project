import { useGithubUser } from "./customHook/useGithubUser"


/*useEffect 03: Create a GithubUser component that fetches the data of the username passed as a prop, 
and renders some of the data within a div tag. 
The API to query is https://api.github.com/users/${username}.*/


export function GithubUser({username}){
    const {data, error, isLoading} = useGithubUser(username)

        return <div>
                    <h1>Github User:</h1>
                    {isLoading && <h3>Loading...</h3>}
                    {error && <h3>An error has occured</h3>}
                    {data && <h2>{data.name}</h2>}
                    {data && <img src={data.avatar_url} alt="User Avatar"></img>}                   
                    {data && <h3>{data.bio}</h3>}
                    {data && <p>{data.location}</p>}
             </div>

}
