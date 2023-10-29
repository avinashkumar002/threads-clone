// import React from 'react'
import { useContext , useEffect  } from 'react';
import { FeedContext } from '../Contexts/FeedContext';

export default function Profile() {
    let {posts} = useContext(FeedContext);
    const getData = async () => {
      console.log(await posts);
    }
    useEffect(() => {
      getData()
    }, [posts]);
  return (
    <div><h1> Profile </h1></div>
  )
}
