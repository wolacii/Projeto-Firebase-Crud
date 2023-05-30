import apiDeputados from '@/services/apiDeputados'
import React, { useEffect, useState } from 'react'

const index = () => {

    const [deputados, setDeputados] = useState([])

    useEffect(() => {
        async function carregar(){
            const res = await apiDeputados.get('/deputados')
            const deputados = res.data.dados
            setDeputados(deputados)
            
            const resMeses = await apiDeputados.get('/deputados/220593/despesas')
            // const deputados = res.data.dados
            
        }
        carregar()
    }, [])

    console.log(deputados)

    return (
        <div>index</div>
    )
}

export default index