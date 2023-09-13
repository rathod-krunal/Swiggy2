import { useEffect, useState } from 'react'
import { MENU_LIST } from './Constance';

const useRestroMenu = (resId) => {
    const [resInfo,setResInfo] = useState(null)
    console.log(resId)

    useEffect(()=>{
        fetchDate();
    },[])

    const fetchDate = async ()=>{
        const data = await fetch(MENU_LIST + resId )
        const json = await data.json();
        console.log(resInfo)
        setResInfo(json)
        
    }
  return resInfo
}

export default useRestroMenu
