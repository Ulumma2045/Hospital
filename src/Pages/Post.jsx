import React, {useState} from 'react'
import axios from 'axios'
import { Button, Typography} from '@mui/material'
//import { cliploader} form "react-spinner";
import {Link } from 'react-router-dom'

const Post = () => {
    const[getInfo, setGetInfo] =React.useState([]);
    const[loading, setLoading] =React.useState(true);
    const[error, setError] = useState(true);

    React.useEffect(() => {
        const getpost = async () => {
            let url =
            'https://jonsonplaceholder.typicode.com/post'
            try{
                setLoading(true);
                const res = await axios.get(url);
                console.log(res.data);
                setGetInfo(res.data);

                setLoading(false);
                setError(null);
            } catch(err) {
                setError(err.message);
            } finally{
                setLoading(false);
            }
        };
        getPost();

    }, [] )
    if (loading)
  return (
    <div>
      Loading
    </div>
  );



  
if (error) return <h1 style={{ color: 'red'}}>
    ERROR: {error}</h1>;
    return (
        <div>
            {getInfo.map((Info, index) =>(
                <o1 key={index}>
            <li style={{ textAlig: 'center'}}>
                user unique id:{info.userId}</li>

<Typography variant='h5' style={{ color:'red'}}>
    Title:{Info.title} 
    </Typography> 
    <Typography variant='h6'>{Info.body}</Typography> 
                <Link to={'/posts/${info.id}'}>
                     {''} 
                     <Button >Click Here</Button>{''} 
                     </Link>
                     </o1> 
            ))}
        </div> 
        );       
    };
export default Post
