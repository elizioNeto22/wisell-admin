import React, { useState } from 'react'
import { useQuery } from 'react-apollo'
import * as queries from '../../../../api/queries'
import { Link } from 'react-router-dom'

import { Form, Button } from 'react-bootstrap'
import { MdEdit, MdRemoveCircleOutline, MdAdd, MdSearch } from 'react-icons/md'
import { FaRegClone } from 'react-icons/fa'

const Cliente = () => {
  const [term, setTerm] = useState('')
  const { loading, error, data } = useQuery(queries.CLIENTES)

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  if (error) {
    return <h1>{error.message}</h1>
  }
  return (
    <div>
      <Form.Group className="page-header">
        <h4 className="page-title">Cliente</h4>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <Link to="/cadastros/cliente">
              <Button variant="default-dark">
                <MdAdd style={{ fontSize: '24px' }} />
                Adicionar Cliente
              </Button>
            </Link>
          </ol>
        </nav>
      </Form.Group>
      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div onSubmit={handleSubmit} className="card-body">
              <Form.Group>
                <div className="input-group">
                  <Form.Control
                    type="text"
                    className="form-control"
                    placeholder="Pesquisar cliente"
                    aria-label="Pesquisar cliente"
                    aria-describedby="basic-addon2"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                  />
                  <div className="input-group-append">
                    <Button
                      variant="outline-dark"
                      onClick={(evt) => {
                        evt.preventDefault()
                      }}
                    >
                      <MdSearch style={{ fontSize: '24px' }} />
                      Pesquisar
                    </Button>
                  </div>
                </div>
              </Form.Group>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th> Codigo </th>
                      <th> Nome </th>
                      <th> Tipo </th>
                      <th> Vendedor </th>
                      <th> Ativa </th>
                      <th> usuario </th>
                      <th> Registro </th>
                      <th> Editar </th>
                      <th> Clonar </th>
                      <th> Remover </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.clientes?.map((item) => (
                      <tr key={item.codigo}>
                        <td>{item.codigo}</td>
                        <td>{item.nome}</td>
                        <td>{item.tipo}</td>
                        <td>{item.vendedor}</td>
                        <td>{item.ativa}</td>
                        <td>{item.usuario}</td>
                        <td>{item.registro}</td>
                        <td>
                          <Link to={`/cadastros/cliente/edit/${item.codigo}`}>
                            <Button className="btn btn-warning btn-rounded">
                              <MdEdit />
                            </Button>
                          </Link>
                        </td>
                        <td>
                          <Link to={`/cadastros/cliente/clone/${item.codigo}`}>
                            <Button className="btn btn-success btn-rounded">
                              <FaRegClone />
                            </Button>
                          </Link>
                        </td>
                        <td>
                          <Link to={`/cadastros/${item.codigo}/cliente`}>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cliente
