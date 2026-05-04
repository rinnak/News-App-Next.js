'use client'

import {useEffect} from 'react'

export default function Error({
    error,
    reset
                              }:{
    error: Error & { digest?: string }
    reset: () => void
}){
    useEffect(()=>{
        console.log(error)
    }, [error])

    return (
        <div>
            <h1>Что-то пошло не так</h1>
            <button onClick={() => reset()}>Попробовать снова</button>
        </div>
    )
}