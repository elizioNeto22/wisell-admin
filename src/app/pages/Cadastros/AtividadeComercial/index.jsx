import React, { useState } from 'react'
import { useQuery } from 'react-apollo'
import * as queries from '../../../../api/queries'
import { Link } from 'react-router-dom'

import { Form, Button } from 'react-bootstrap'
import { MdEdit, MdRemoveCircleOutline, MdAdd, MdSearch } from 'react-icons/md'
import { FaRegClone } from 'react-icons/fa'

const AtividadeComercial = () => {
  const [term, setTerm] = useState('')
  const { loading, error, data } = useQuery(queries.ATIVIDADESCOMERCIAIS)

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  if (error) {
    return <h1>{error.message}</h1>
  }
  return (
    <div>
      <Form.Group className="page-header">
        <h4 className="page-title">Atividade Comercial</h4>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <Link to="/cadastros/atividadecomercial">
              <Button variant="default-dark">
                <MdAdd style={{ fontSize: '24px' }} />
                Adicionar Atividade Comercial
              </Button>
            </Link>
          </ol>
        </nav>
      </Form.Group>
      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
          <form onSubmit={handleSubmit} className="card-body">
              <Form.Group>
                <div className="input-group">
                  <Form.Control
                    type="text"
                    className="form-control"
                    placeholder="Pesquisar atividades comerciais"
                    aria-label="Pesquisar atividades comerciais"
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
                      <th> Descri????o </th>
                      <th> Ramo Atividade </th>
                      <th> Usuario </th>
                      <th> Registro </th>
                      <th> Editar </th>
                      <th> Clonar </th>
                      <th> Remover </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.atividadescomerciais?.map((item) => (
                      <tr key={item.codigo}>
                        <td>{item.codigo}</td>
                        <td>{item.descricao}</td>
                        <td>{item.ramoAtividade.codigo}</td>
                        <td>{item.usuario}</td>
                        <td>{item.registro}</td>
                        <td>
                          <Link to={`/cadastros/atividadecomercial/edit/${item.codigo}`}>
                            <Button className="btn btn-warning btn-rounded">
                              <MdEdit />
                            </Button>
                          </Link>
                        </td>
                        <td>
                          <Link to={`/cadastros/atividadecomercial/clone/${item.codigo}`}>
                            <Button className="btn btn-success btn-rounded">
                              <FaRegClone />
                            </Button>
                          </Link>
                        </td>
                        <td>
                          <Link to={`/cadastros/${item.codigo}/atividadecomercial`}>
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
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AtividadeComercial
