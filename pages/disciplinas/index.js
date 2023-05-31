import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsFillPencilFill } from 'react-icons/bs'

const index = () => {

  const [disciplinas, setDisciplinas] = useState([])

  useEffect(() => {
    axios.get('/api/disciplinas').then(resultado=>{
      setDisciplinas(resultado.data)
    })
  }, [])

  return (
    <Pagina titulo="Disciplinas">

      <Link href={'/disciplinas/form'} className="btn btn-primary mb-2" >Novo</Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Duração</th>
            <th>Modalidade</th>
          </tr>
        </thead>
        <tbody>
          {disciplinas.map((item, i) => (
            <tr key={i}>
              <td>
                <Link href={'/disciplinas/' + i}>
                  <BsFillPencilFill className='me-2 text-primary' />
                </Link>
                <AiOutlineDelete onClick={() => excluir(i)} className='text-danger' />
              </td>
              <td>{item.nome}</td>
              <td>{item.duracao}</td>
              <td>{item.modalidade}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  )
}

export default index

