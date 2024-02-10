import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar';
import headerData from '../../data/headerData';

export const Main = () => {

    useEffect(() => {
        document.title = `${headerData.name} - Portfolio`;
    },[]);

  return (
    <div>
        <Navbar />
    </div>
  )
}

export default Main;
