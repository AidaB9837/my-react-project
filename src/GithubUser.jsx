import { useEffect, useState } from "react"


/*useEffect 03: Create a GithubUser component that fetches the data of the username passed as a prop, 
and renders some of the data within a div tag. 
The API to query is https://api.github.com/users/${username}.*/


export function GithubUser({username}){
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setData(json)})
    }, [username])

        return <div>
                    <h1>Github User:</h1>
                    {data && <img src={data.avatar_url} alt="avatar"></img>}
                    {data && <h1>{data.name} - {data.bio}</h1>}
                    {data && <p>{data.location}</p>}
             </div>

}
