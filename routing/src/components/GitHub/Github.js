import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
function Github () {
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/priyavrat0072') 
    //         .then(response=>response.json()).then(data=>{
    //             console.log(data);
    //             setData(data)
    //         })
    // },[])

    const data = useLoaderData() 

    return (
        <div className='text-center m-4 bg-gray-600 ext-white p-4 text-3xl'>
            GitHub followers: {data.followers}
            <img className='' src={data.avatar_url}  alt='Git Picture' width={300} />
        </div>
    )
}

export default Github;

export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/priyavrat0072')
    return response.json()
}
