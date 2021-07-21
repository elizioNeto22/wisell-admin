import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

const Categorias = () => {
  return (
    <div>
      <div className="page-header">
        <h3 className=""> Categoria </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <a href="/cadastros/categoria" className="btn btn-primary btn-lg">
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
                    placeholder="Pesquisar categoria"
                    aria-label="Pesquisar Categoria"
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
                      <th> Departamento </th>
                      <th> Seção </th>
                      <th> Editar </th>
                      <th> Clonar </th>
                      <th> Remover </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-1">
                        <img src={require('../../../../assets/images/faces/face1.jpg')} alt="user icon" />
                      </td>
                      <td> Herman Beck </td>
                      <td>
                        <ProgressBar variant="success" now={25} />
                      </td>
                      <td> Seção </td>
                      <td> $ 77.99 </td>
                      <td> Clonar </td>
                      <td>Remover </td>
                    </tr>
                    <tr>
                      <td className="py-1">
                        <img src={require('../../../../assets/images/faces/face2.jpg')} alt="user icon" />
                      </td>
                      <td> Messsy Adam </td>
                      <td>
                        <ProgressBar variant="danger" now={75} />
                      </td>
                      <td> Seção </td>
                      <td> $245.30 </td>
                      <td> Clonar </td>
                      <td>Remover </td>
                    </tr>
                    <tr>
                      <td className="py-1">
                        <img src={require('../../../../assets/images/faces/face3.jpg')} alt="user icon" />
                      </td>
                      <td> John Richards </td>
                      <td>
                        <ProgressBar variant="warning" now={90} />
                      </td>
                      <td> Seção </td>
                      <td> $138.00 </td>
                      <td> Clonar </td>
                      <td>Remover </td>
                    </tr>
                    <tr>
                      <td className="py-1">
                        <img src={require('../../../../assets/images/faces/face4.jpg')} alt="user icon" />
                      </td>
                      <td> Peter Meggik </td>
                      <td>
                        <ProgressBar variant="primary" now={50} />
                      </td>
                      <td> Seção </td>
                      <td> $ 77.99 </td>
                      <td> Clonar </td>
                      <td>Remover </td>
                    </tr>
                    <tr>
                      <td className="py-1">
                        <img src={require('../../../../assets/images/faces/face5.jpg')} alt="user icon" />
                      </td>
                      <td> Edward </td>
                      <td>
                        <ProgressBar variant="danger" now={60} />
                      </td>
                      <td> Seção </td>
                      <td> $ 160.25 </td>
                      <td> Clonar </td>
                      <td>Remover </td>
                    </tr>
                    <tr>
                      <td className="py-1">
                        <img src={require('../../../../assets/images/faces/face6.jpg')} alt="user icon" />
                      </td>
                      <td> John Doe </td>
                      <td>
                        <ProgressBar variant="info" now={65} />
                      </td>
                      <td> Seção </td>
                      <td> $ 123.21 </td>
                      <td> Clonar </td>
                      <td>Remover </td>
                    </tr>
                    <tr>
                      <td className="py-1">
                        <img src={require('../../../../assets/images/faces/face7.jpg')} alt="user icon" />
                      </td>
                      <td> Henry Tom </td>
                      <td>
                        <ProgressBar variant="warning" now={20} />
                      </td>
                      <td> Seção </td>
                      <td> $ 150.00 </td>
                      <td> Clonar </td>
                      <td>Remover </td>
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

export default Categorias