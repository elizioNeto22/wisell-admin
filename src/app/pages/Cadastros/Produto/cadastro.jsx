import React from 'react'
import { Form } from 'react-bootstrap'

const CadastroProdutos = () => {
  return (
    <div className="col-md-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h3 className="">Produto</h3>
          <p className="card-description"> Cadastro de Produto </p>
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
                  placeholder="Descrição do produto"
                />
              </div>
            </Form.Group>
            <Form.Group className="row">
              <label htmlFor="departamento" className="col-sm-2 col-form-label">
                Departamento:
              </label>
              <div className="col-sm-10">
                <select className="form-control form-control-sm" id="departamento">
                  <option selected disabled>
                    Selecione um departamento
                  </option>
                  <option>Departamento: 1</option>
                  <option>Departamento: 2</option>
                  <option>Departamento: 3</option>
                  <option>Departamento: 4</option>
                </select>
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
            <Form.Group className="row">
              <label htmlFor="categoria" className="col-sm-2 col-form-label">
                Categoria:
              </label>
              <div className="col-sm-10">
                <select className="form-control form-control-sm" id="categoria">
                  <option selected disabled>
                    Selecione uma categoria
                  </option>
                  <option>Categoria: 1</option>
                  <option>Categoria: 2</option>
                  <option>Categoria: 3</option>
                  <option>Categoria: 4</option>
                </select>
              </div>
            </Form.Group>
            <Form.Group className="row">
              <label htmlFor="subcategoria" className="col-sm-2 col-form-label">
                Subcategoria:
              </label>
              <div className="col-sm-10">
                <select className="form-control form-control-sm" id="subcategoria">
                  <option selected disabled>
                    Selecione uma subcategoria
                  </option>
                  <option>Subcategoria: 1</option>
                  <option>Subcategoria: 2</option>
                  <option>Subcategoria: 3</option>
                  <option>Subcategoria: 4</option>
                </select>
              </div>
            </Form.Group>
            <Form.Group className="row">
              <label htmlFor="fabricante" className="col-sm-2 col-form-label">
                Fabricante:
              </label>
              <div className="col-sm-10">
                <select className="form-control form-control-sm" id="fabricante">
                  <option selected disabled>
                    Selecione um fabricante
                  </option>
                  <option>Fabricante: 1</option>
                  <option>Fabricante: 2</option>
                  <option>Fabricante: 3</option>
                  <option>Fabricante: 4</option>
                </select>
              </div>
            </Form.Group>
            <Form.Group className="row">
              <label htmlFor="unidade" className="col-sm-2 col-form-label">
                Unidade:
              </label>
              <div className="col-sm-10">
                <select className="form-control form-control-sm" id="unidade">
                  <option selected disabled>
                    Selecione uma unidade
                  </option>
                  <option>Unidade: 1</option>
                  <option>Unidade: 2</option>
                  <option>Unidade: 3</option>
                  <option>Unidade: 4</option>
                </select>
              </div>
            </Form.Group>
            <Form.Group className="row">
              <label htmlFor="ean1" className="col-sm-2 col-form-label">
                EAN1:
              </label>
              <div className="col-sm-10">
                <select className="form-control form-control-sm" id="ean1">
                  <option selected disabled>
                    Selecione um Ean1
                  </option>
                  <option>Ean: 1</option>
                  <option>Ean: 2</option>
                  <option>Ean: 3</option>
                  <option>Ean: 4</option>
                </select>
              </div>
            </Form.Group>
            <Form.Group className="row">
              <label htmlFor="ean2" className="col-sm-2 col-form-label">
                EAN2:
              </label>
              <div className="col-sm-10">
                <select className="form-control form-control-sm" id="ean2">
                  <option selected disabled>
                    Selecione um Ean2
                  </option>
                  <option>Ean2: 1</option>
                  <option>Ean2: 2</option>
                  <option>Ean2: 3</option>
                  <option>Ean2: 4</option>
                </select>
              </div>
            </Form.Group>
            <Form.Group className="row">
              <label htmlFor="marca" className="col-sm-2 col-form-label">
                Marca:
              </label>
              <div className="col-sm-10">
                <select className="form-control form-control-sm" id="marca">
                  <option selected disabled>
                    Selecione uma marca
                  </option>
                  <option>Marca: 1</option>
                  <option>Marca: 2</option>
                  <option>Marca: 3</option>
                  <option>Marca: 4</option>
                </select>
              </div>
            </Form.Group>
            <Form.Group className="row">
              <label htmlFor="apresentacao" className="col-sm-2 col-form-label">
                Apresentação:
              </label>
              <div className="col-sm-10">
                <select className="form-control form-control-sm" id="apresentacao">
                  <option selected disabled>
                    Selecione uma apresentação
                  </option>
                  <option>Apresentação: 1</option>
                  <option>Apresentação: 2</option>
                  <option>Apresentação: 3</option>
                  <option>Apresentação: 4</option>
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

export default CadastroProdutos
