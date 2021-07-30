import React, { useState } from 'react'
import { useQuery } from 'react-apollo'
import * as queries from '../../../../api/queries'
import { Link } from 'react-router-dom'

import { Form, Button } from 'react-bootstrap'
import { MdEdit, MdRemoveCircleOutline, MdAdd, MdSearch } from 'react-icons/md'
import { FaRegClone } from 'react-icons/fa'

const TipoFilial = () => {
  const [term, setTerm] = useState('')
  const { loading, error, data } = useQuery(queries.TIPOSFILIAIS)

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  if (error) {
    return <h1>{error.message}</h1>
  }
  return (
    <div>
      <Form.Group className="page-header">
        <h4 className="page-title">Tipo Filial</h4>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <Link to="/cadastros/tipofilial">
              <Button variant="default-dark">
                <MdAdd style={{ fontSize: '24px' }} />
                Adicionar Tipo Filial
              </Button>
            </Link>
          </ol>
        </nav>
      </Form.Group>
      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <Form.Group>
              <form onSubmit={handleSubmit} className="input-group">
                  <Form.Control
                    type="text"
                    className="form-control"
                    placeholder="Pesquisar tipo filial"
                    aria-label="Pesquisar Tipo Filial"
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
               </form>
              </Form.Group>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th> Codigo </th>
                      <th> Descrição </th>
                      <th> Vende Produto</th>
                      <th> Usuario </th>
                      <th> Registro </th>
                      <th> Editar </th>
                      <th> Clonar </th>
                      <th> Remover </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.tiposfiliais?.map((item) => (
                      <tr key={item.codigo}>
                        <td>{item.codigo}</td>
                        <td>{item.descricao}</td>
                        <td>{item.vende}</td>
                        <td>{item.usuario}</td>
                        <td>{item.registro}</td>
                        <td>
                          <Link to={`/cadastros/tipofilial/edit/${item.codigo}`}>
                            <Button className="btn btn-warning btn-rounded">
                              <MdEdit />
                            </Button>
                          </Link>
                        </td>
                        <td>
                          <Link to={`/cadastros/tipofilial/clone/${item.codigo}`}>
                            <Button className="btn btn-success btn-rounded">
                              <FaRegClone />
                            </Button>
                          </Link>
                        </td>
                        <td>
                          <Link to={`/cadastros/${item.codigo}/tipofilial`}>
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

export default TipoFilial
