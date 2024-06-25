import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { HiArrowLongLeft } from "react-icons/hi2";

function Github() {

  // const [data,setData] = useState([]);

  // useEffect( ()=>{
  //   fetch("https://api.github.com/users/aryanverma24").then(res=>res.json()).then(data => {console.log(data)
  //   setData(data);
  // });
  // },[])

  const data = useLoaderData(); // use to call the api before visit the page..

  return (
    <div className='text-white bg-gray-700 text-center m-4 p-4 text-xl'>Github Followers : {data.followers}
        <img className='mt-2 mb-2 rounded-full border-2 border-gray-300 hover:border-blue-500 hover:shadow-xl'
         style={
          {
          position:'relative',
          marginInline:'auto',
        }
        } 
         src={data.avatar_url} alt="github Profile Image" width={300} />
        <h2>{data.name}</h2>
        <p className='text-sm font-small text-gray-400'>{data.bio}</p>
        <p className='text-sm font-small text-gray-400'>{data.location}</p>
        <div className='flex justify-center items-space-between'>
        <h3 className='text-sm font-sm text-gray-400'>
          <Link
          to="https://github.com/Aryanverma24?tab=repositories"
          className='mx-2 hover:underline hover:text-blue-400'
          >Repositries : {data.public_repos}</Link></h3>
          <span  className='mx-1 text-white'><HiArrowLongLeft /></span>
          <p className='text-sm font-sm text-orange-400'> click here to visit repos...</p>
        </div>
        

     </div>
  )
}

export default Github

export const loadInfo = async () =>{
  const response = await fetch("https://api.github.com/users/aryanverma24");
  return response.json();
}