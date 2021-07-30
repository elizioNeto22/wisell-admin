import React, { useEffect, useRef, useState } from 'react'
import { useFormik, Formik } from 'formik'
import { object, string, number, SchemaOf } from 'yup'
import { Form, ButtonGroup, Button } from 'react-bootstrap'
import { IoSaveOutline } from 'react-icons/io5'
import { FcCancel } from 'react-icons/fc'
import { useQuery } from 'react-apollo'
import * as queries from '../../../../api/queries'

const CadastroVendedor = (props) => {
  const { id } = props.match.params
  const isAddMode = !id

  const [initialValues, setInitialValues] = useState({
    codigo: 0,
    pessoaFisica: { codigo: 0, descricao: '' },
    supervisor: { codigo: 0, descricao: '' },
    registro: '',
    usuario: '',
  })

  const { getFieldProps, isSubmitting, isValidating, errors, handleSubmit, setFieldValue } = useFormik({
    initialValues,
    validationSchema: object({
      pessoaFisica: object({
        codigo: number().min(1, 'Por favor, selecione uma opção de pessoa fisica').nullable(),
      }),
      supervisor: object({
        codigo: number().min(1, 'Por favor, selecione uma opção de supervisor').nullable(),
      }),
    }),
    onSubmit: (values) =>
      //dispatchToTodos(todosActions.addTodo(values.title))
      alert(JSON.stringify(values, null, 2)),

    //limpar campos
    //setFieldValue('codigo','0',false);
    //setFieldValue('descricao','',false);
  })

  const inputCodigo = useRef(null)
  const inputPessoaFisica = useRef(null)
  const inputSupervisor = useRef(null)

  useEffect(() => {
    if (!isAddMode) {
      // get user and set form fields
      const data = { codigo: id, descricao: 'edit', registro: '', usuario: '' }
      setFieldValue('codigo', data.codigo, false) //"codigo",data.codigo);
      setFieldValue('pessoaFisica', data.pessoaFisica, false) //"codigo",data.codigo);
      setFieldValue('supervisor', data.supervisor, false) //"codigo",data.codigo);
      //formik.setFieldValue("descricao",data.descricao);
      //inputCodigo = data.codigo;
      setInitialValues(data)
      //alert(JSON.stringify(data))
    }
  }, [id, isAddMode, setFieldValue])

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> Vendedor</h3>
      </div>
      <nav aria-label="breadcrumb">
        <p className="breadcrumb-item active">Cadastro de Vendedor</p>
      </nav>
      <div className="col-md-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="forms-sample">
              <Form.Group className="row">
                <label htmlFor="pessoaFisica" className="col-sm-2 col-form-label">
                  Pessoa Física:
                </label>
                <div className="col-sm-10">
                  <select
                    className="form-control form-control-sm"
                    id="pessoaFisica"
                    ref={inputPessoaFisica}
                    {...getFieldProps('pessoaFisica.codigo')}
                  >
                    <option defaultValue={0}>Selecione uma Pessoa Fisica</option>
                    <option value={25}>Pessoa Fisica: 1</option>
                    <option value={26}>Pessoa Fisica: 2</option>
                    <option value={27}>Pessoa Fisica: 3</option>
                    <option value={28}>Pessoa Fisica: 4</option>
                  </select>
                  <div>{errors.pessoaFisica?.codigo ? <small>{errors.pessoaFisica?.codigo}</small> : null}</div>
                </div>
              </Form.Group>

              <Form.Group className="row">
                <label htmlFor="supervisor" className="col-sm-2 col-form-label">
                  Supervisor:
                </label>
                <div className="col-sm-10">
                  <select
                    className="form-control form-control-sm"
                    id="supervisor"
                    ref={inputSupervisor}
                    {...getFieldProps('supervisor.codigo')}
                  >
                    <option defaultValue={0}>Selecione uma Supervisor</option>
                    <option value={25}>Supervisor: 1</option>
                    <option value={26}>Supervisor: 2</option>
                    <option value={27}>Supervisor: 3</option>
                    <option value={28}>Supervisor: 4</option>
                  </select>
                  <div>{errors.supervisor?.codigo ? <small>{errors.supervisor?.codigo}</small> : null}</div>
                </div>
              </Form.Group>

              <div className="col-sm-12">
                <div className="row">
                  <div className="col-sm-2" />
                  <p className="col-sm-2">1</p>
                  <p className="col-sm-2">2</p>
                  <p className="col-sm-2">3</p>
                  <p className="col-sm-2">4</p>
                  <p className="col-sm-2">5</p>
                </div>
                <Form.Group className="row">
                  <label for="customRange2" class="form-label col-sm-2 col-form-label">
                    Nível
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="range"
                      class="form-range-track-width"
                      min="1"
                      max="5"
                      id="customRange2"
                      style={{ width: '100%' }}
                    />
                  </div>
                </Form.Group>
              </div>

              <div className="row">
                <div className="col-md-3">
                  <Form.Group>
                    <div className="custom-file col-sm-8">
                      <label className="custom-file-label" htmlFor="uploadFoto">
                        Procurar img
                      </label>
                      <Form.Control
                        type="file"
                        className="form-control visibility-hidden"
                        id="uploadFoto"
                        lang="pt-br"
                      />
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-3 row">
                  <Form.Group className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input" />
                      <i className="input-helper"></i>
                      Ativo?
                    </label>
                  </Form.Group>
                </div>
              </div>

              <Form.Group className="row" style={{ float: 'right' }}>
                <ButtonGroup className="mr-2">
                  <Button type="button" className="btn btn-light btn-default btn-sm">
                    <FcCancel fontSize="20px" /> CANCELAR
                  </Button>
                </ButtonGroup>
                <Button type="submit" className="btn btn-success btn-md">
                  <IoSaveOutline fontSize="20px" /> SALVAR
                </Button>
              </Form.Group>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CadastroVendedor
