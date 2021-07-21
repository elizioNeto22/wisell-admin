import React from 'react'
import { Form } from 'react-bootstrap'

const CadastroSecoes = () => {
  return (
    <div className="col-md-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h3 className="">Seção</h3>
          <p className="card-description"> Cadastro de Seção </p>
          <form className="forms-sample">
            <Form.Group className="row">
              <label htmlFor="codigo" className="col-sm-2 col-form-label">
                Código:
              </label>
              <div className="col-sm-10">
                <Form.Control
                  type="number"
                  className="form-control"
                  id="codigo"
                  placeholder="0"
                  aria-label="código readonly input"
                  readOnly
                />
              </div>
            </Form.Group>
            <Form.Group className="row">
              <label htmlFor="descricao" className="col-sm-2 col-form-label">
                Descrição:
              </label>
              <div className="col-sm-10">
                <Form.Control
                  type="text"
                  className="form-control"
                  id="descricao"
                  aria-label="descrição input"
                  placeholder="Descrição de seção"
                />
              </div>
            </Form.Group>
            <Form.Group className="row">
              <label htmlFor="secao" className="col-sm-2 col-form-label">
                Seção:
              </label>
              <div className="col-sm-10">
                <select className="form-control form-control-sm" id="secao">
                  <option selected disabled>
                    Selecione uma seção
                  </option>
                  <option>Seção: 1</option>
                  <option>Seção: 2</option>
                  <option>Seção: 3</option>
                  <option>Seção: 4</option>
                </select>
              </div>
            </Form.Group>
            <button type="submit" className="btn btn-primary btn-lg" style={{ float: 'right' }}>
              Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CadastroSecoes
