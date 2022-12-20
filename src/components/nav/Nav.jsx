import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {AiFillFolderOpen} from 'react-icons/ai'
import {BiMessageSquareAdd} from 'react-icons/bi'

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#portfolio"><AiFillFolderOpen/></a>
      <a href="#contact"><BiMessageSquareAdd/></a>
    </nav>
  )
}

export default Nav