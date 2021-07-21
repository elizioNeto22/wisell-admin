import React from 'react'
import { Form,Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {MdEdit,MdRemoveCircleOutline} from 'react-icons/md'
import {FaRegClone} from 'react-icons/fa'

const Departamentos = () => {
  return (
    <div>
      <div className="page-header">
        <h3 className=""> Departamento </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <a href="/cadastros/departamento" className="btn btn-primary btn-lg">
              Cadastrar
            </a>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <Form.Group>
                <div className="input-group">
                  <Form.Control
                    type="text"
                    className="form-control"
                    placeholder="Pesquisar departamentos"
                    aria-label="Pesquisar Departamentos"
                    aria-describedby="basic-addon2"
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
                    <tr>
                      <td className="py-1">
                       1
                      </td>
                      <td> Herman Beck </td>
                      <td>
                        Marcos
                      </td>
                      <td> May 15, 2015 </td>
                      <td>   
                        <Link to={`/sale-page/${10}`}>
                            <Button className="btn btn-warning btn-rounded">
                                  <MdEdit />
                            </Button>
                         </Link> 
                      </td>
                      <td> 
                      <Link to={`/sale-page/${10}`}>
                            <Button className="btn btn-success btn-rounded">
                                  <FaRegClone />
                            </Button>
                         </Link> 
                      </td>
                      <td>
                        <Link to={`/sale-page/${10}`}>
                              <Button className="btn btn-danger btn-rounded">
                                    <MdRemoveCircleOutline />
                              </Button>
                          </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1">
                        2
                      </td>
                      <td> Messsy Adam </td>
                      <td>
                        Vinicius
                      </td>
                      <td> July 1, 2015 </td>
                      <td>   
                        <Link to={`/sale-page/${10}`}>
                            <Button className="btn btn-warning btn-rounded">
                                  <MdEdit />
                            </Button>
                         </Link> 
                      </td>
                      <td> 
                      <Link to={`/sale-page/${10}`}>
                            <Button className="btn btn-success btn-rounded">
                                  <FaRegClone />
                            </Button>
                         </Link> 
                      </td>
                      <td>
                        <Link to={`/sale-page/${10}`}>
                              <Button className="btn btn-danger btn-rounded">
                                    <MdRemoveCircleOutline />
                              </Button>
                          </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1">
                        3
                      </td>
                      <td> John Richards </td>
                      <td>
                       Caio
                      </td>
                      <td> Apr 12, 2015 </td>
                      <td>   
                        <Link to={`/sale-page/${10}`}>
                            <Button className="btn btn-warning btn-rounded">
                                  <MdEdit />
                            </Button>
                         </Link> 
                      </td>
                      <td> 
                      <Link to={`/sale-page/${10}`}>
                            <Button className="btn btn-success btn-rounded">
                                  <FaRegClone />
                            </Button>
                         </Link> 
                      </td>
                      <td>
                        <Link to={`/sale-page/${10}`}>
                              <Button className="btn btn-danger btn-rounded">
                                    <MdRemoveCircleOutline />
                              </Button>
                          </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1">
                       4
                      </td>
                      <td> Peter Meggik </td>
                      <td>
                       Hugo
                      </td>
                      <td> May 15, 2015 </td>
                      <td>   
                        <Link to={`/sale-page/${10}`}>
                            <Button className="btn btn-warning btn-rounded">
                                  <MdEdit />
                            </Button>
                         </Link> 
                      </td>
                      <td> 
                      <Link to={`/sale-page/${10}`}>
                            <Button className="btn btn-success btn-rounded">
                                  <FaRegClone />
                            </Button>
                         </Link> 
                      </td>
                      <td>
                        <Link to={`/sale-page/${10}`}>
                              <Button className="btn btn-danger btn-rounded">
                                    <MdRemoveCircleOutline />
                              </Button>
                          </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1">
                       5
                      </td>
                      <td> Edward </td>
                      <td>
                       Maria
                      </td>
                      <td> May 03, 2015 </td>
                      <td>   
                        <Link to={`/sale-page/${10}`}>
                            <Button className="btn btn-warning btn-rounded">
                                  <MdEdit />
                            </Button>
                         </Link> 
                      </td>
                      <td> 
                      <Link to={`/sale-page/${10}`}>
                            <Button className="btn btn-success btn-rounded">
                                  <FaRegClone />
                            </Button>
                         </Link> 
                      </td>
                      <td>
                        <Link to={`/sale-page/${10}`}>
                              <Button className="btn btn-danger btn-rounded">
                                    <MdRemoveCircleOutline />
                              </Button>
                          </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1">
                       6
                      </td>
                      <td> John Doe </td>
                      <td>
                        Junior
                      </td>
                      <td> April 05, 2015 </td>
                      <td>   
                        <Link to={`/sale-page/${10}`}>
                            <Button className="btn btn-warning btn-rounded">
                                  <MdEdit />
                            </Button>
                         </Link> 
                      </td>
                      <td> 
                      <Link to={`/sale-page/${10}`}>
                            <Button className="btn btn-success btn-rounded">
                                  <FaRegClone />
                            </Button>
                         </Link> 
                      </td>
                      <td>
                        <Link to={`/sale-page/${10}`}>
                              <Button className="btn btn-danger btn-rounded">
                                    <MdRemoveCircleOutline />
                              </Button>
                          </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1">
                       7
                      </td>
                      <td> Henry Tom </td>
                      <td>
                        Carol
                      </td>
                      <td> June 16, 2015 </td>
                      <td>   
                        <Link to={`/sale-page/${10}`}>
                            <Button className="btn btn-warning btn-rounded">
                                  <MdEdit />
                            </Button>
                         </Link> 
                      </td>
                      <td> 
                      <Link to={`/sale-page/${10}`}>
                            <Button className="btn btn-success btn-rounded">
                                  <FaRegClone />
                            </Button>
                         </Link> 
                      </td>
                      <td>
                        <Link to={`/sale-page/${10}`}>
                              <Button className="btn btn-danger btn-rounded">
                                    <MdRemoveCircleOutline />
                              </Button>
                          </Link>
                      </td>
                    </tr>
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

export default Departamentos
