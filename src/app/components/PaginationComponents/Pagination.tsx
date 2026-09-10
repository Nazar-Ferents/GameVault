'use client'

import {FC} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import {IGameGeneral} from "@/src/app/modules/gameModules/GameListModules/IGameGeneral";


type PropsType = {
    meta:IGameGeneral,
    basePath:string
}
const Pagination:FC<PropsType> = ({meta,basePath}) => {

    const router = useRouter()
    const searchParams = useSearchParams()
    const currentPage = Number(searchParams.get('page')??1)


    const changePage = (newPage:number)=>{
        const params = new URLSearchParams(searchParams.toString());
        params.set('page',newPage.toString())
        router.push(`${basePath}?${params.toString()}`)
    }

    const totalPage = Math.ceil(meta.count / 10)
    return (
        <div>
            <button onClick={()=>{
                if(meta.previous === null){
                    return
                }
                changePage(currentPage-1)

            }}>prev</button>
            <p>{currentPage} / {totalPage}</p>
            <button onClick={()=>{
                if(meta.next === null){
                    return
                }
                changePage(currentPage+1)

            }}>next</button>
        </div>
    )
}

export default Pagination;


