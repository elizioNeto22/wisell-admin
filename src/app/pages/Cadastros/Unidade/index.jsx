import React, { useState } from 'react'
import { useQuery } from 'react-apollo'
import * as queries from '../../../../api/queries'
import { Link } from 'react-router-dom'

import { Form, Button } from 'react-bootstrap'
import { MdEdit, MdRemoveCircleOutline } from 'react-icons/md'
import { FaRegClone } from 'react-icons/fa'

const Unidades = () => {
  const [term, setTerm] = useState('')
  const { loading, error, data } = useQuery(queries.UNIDADES)

  const handleSubmit = (event) => {
    event.preventDefault()
    //searchUnidades(term);
  }

  if (error) {
    return <h1>{error.message}</h1>
  }
  return (
    <div>
      <div className="page-header">
        <h3 className=""> Unidade </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <a href="/cadastros/unidade" className="btn btn-primary btn-lg">
              Cadastrar
            </a>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <form onSubmit={handleSubmit} className="card-body">
              <Form.Group>
                <div className="input-group">
                  <Form.Control
                    type="text"
                    className="form-control"
                    placeholder="Pesquisar Unidades"
                    aria-label="Pesquisar Unidades"
                    aria-describedby="basic-addon2"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                  />
                  <div className="input-group-append">
                    <button className="btn btn-sm btn-primary" type="button">
                      Pesquisar
                    </button>
                  </div>
                </div>
              </Form.Group>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th> Codigo </th>
                      <th> Descrição </th>
                      <th> Usuario </th>
                      <th> Registro </th>
                      <th> Editar </th>
                      <th> Clonar </th>
                      <th> Remover </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.unidades?.map((item) => (
                      <tr key={item.codigo}>
                        <td>{item.codigo}</td>
                        <td>{item.descricao}</td>
                        <td>{item.registro}</td>
                        <td>{item.usuario}</td>
                        <td>
                          <Link to={`/cadastros/${item.codigo}/unidade`}>
                            <Button className="btn btn-warning btn-rounded">
                              <MdEdit />
                            </Button>
                          </Link>
                        </td>
                        <td>
                          <Link to={`/cadastros/${item.codigo}/unidade`}>
                            <Button className="btn btn-success btn-rounded">
                              <FaRegClone />
                            </Button>
                          </Link>
                        </td>
                        <td>
                          <Link to={`/cadastros/${item.codigo}/unidade`}>
                            <Button className="btn btn-danger btn-rounded">
                              <MdRemoveCircleOutline />
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Form.Group>
                {error && <h3>{error}</h3>}
                {loading && <h3>Carregando...</h3>}
              </Form.Group>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Unidades
