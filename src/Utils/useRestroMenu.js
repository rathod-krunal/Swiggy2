import { useEffect, useState } from 'react'
import { MENU_LIST } from './Constance';

const useRestroMenu = (resId) => {
    const [resInfo,setResInfo] = useState(null)

    useEffect(()=>{
        fetchDate();
    },[])

    const fetchDate = async ()=>{
        const data = await fetch(MENU_LIST + resId )
        const json = await data.json();
        setResInfo(json)
        
    }
  return resInfo
}

export default useRestroMenu
