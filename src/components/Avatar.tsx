import React from 'react'
import {FaGithubAlt} from 'react-icons/fa'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'


export default function Avatar({size}: {size: string}) {
    const {user} = useContext(UserContext);
  return (
    <>
        {user ? <img alt="" src={user.avatar_url}></img> : 
            <FaGithubAlt className={size}/>}
    </>
  )
}