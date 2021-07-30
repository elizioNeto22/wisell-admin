import React, { useState } from 'react'
import { useQuery } from 'react-apollo'
import * as queries from '../../../../api/queries'
import { Link } from 'react-router-dom'

import { Form, Button } from 'react-bootstrap'
import { MdEdit, MdRemoveCircleOutline, MdAdd, MdSearch } from 'react-icons/md'
import { FaRegClone } from 'react-icons/fa'

const ParceiroComercial = () => {
  const [term, setTerm] = useState('')
  const { loading, error, data } = useQuery(queries.PARCEIROSCOMERCIAIS)

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  if (error) {
    return <h1>{error.message}</h1>
  }
  return (
    <div>
      <Form.Group className="page-header">
        <h4 className="page-title">Parcerias Comerciais</h4>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <Link to="/cadastros/parceiroComercial">
              <Button variant="default-dark">
                <MdAdd style={{ fontSize: '24px' }} />
                Adicionar Parceiro Comercial
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
                    placeholder="Pesquisar parceiro comercial"
                    aria-label="Pesquisar parceiro comercial"
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
                      <th> Parceiro </th>
                      <th> Função </th>
                      <th> Responsável </th>
                      <th> Ativo </th>
                      <th> usuario </th>
                      <th> Registro </th>
                      <th> Editar </th>
                      <th> Clonar </th>
                      <th> Remover </th>
                    </tr>
                  </thead>
                  <tbody>
                    {console.log(data)}
                    {data?.parceiroscomerciais?.map((item) => (
                      <tr key={item.codigo}>
                        <td>{item.codigo}</td>
                        <td>{item.parceiro}</td>
                        <td>{item.funcao}</td>
                        <td>{item.responsavel}</td>
                        <td>{item.ativo}</td>
                        <td>{item.usuario}</td>
                        <td>{item.registro}</td>
                        <td>
                          <Link to={`/cadastros/parceiroComercial/edit/${item.codigo}`}>
                            <Button className="btn btn-warning btn-rounded">
                              <MdEdit />
                            </Button>
                          </Link>
                        </td>
                        <td>
                          <Link to={`/cadastros/parceiroComercial/clone/${item.codigo}`}>
                            <Button className="btn btn-success btn-rounded">
                              <FaRegClone />
                            </Button>
                          </Link>
                        </td>
                        <td>
                          <Link to={`/cadastros/${item.codigo}/parceiroComercial`}>
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

export default ParceiroComercial
