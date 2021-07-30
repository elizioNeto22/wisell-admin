import React, { useEffect, useRef, useState } from 'react'
import { useFormik } from 'formik'
import { object, string, number } from 'yup'
import Datepicker from '../../../../assets/styles/components/datepicker'
import { Form, ButtonGroup, Button } from 'react-bootstrap'
import { IoSaveOutline } from 'react-icons/io5'
import { FcCancel } from 'react-icons/fc'

const CadastroCliente = (props) => {
  const { id } = props.match.params
  const isAddMode = !id

  const [initialValues, setInitialValues] = useState({
    codigo: 0,
    registro: '',
    usuario: '',
    empresa: { codigo: 0, descricao: '' },
    funcaoEmpresa: { codigo: 0 },
    parceiroComercial: { codigo: 0, descricao: '' },
    funcaoComercial: { codigo: 0, descricao: '' },
    supervisor: { codigo: 0, descricao: '' },
    comissaoPadrao: 0,
  })

  const { getFieldProps, isSubmitting, isValidating, errors, handleSubmit, setFieldValue } = useFormik({
    initialValues,
    validationSchema: object({
      empresa: object({
        codigo: number().min(1, 'Por favor, selecione uma opção de empresa').nullable(),
      }),
      funcaoEmpresa: object({
        codigo: number().min(1, 'Por favor, selecione uma opção de responsável').nullable(),
      }),
      parceiroComercial: object({
        codigo: number().min(1, 'Por favor, selecione uma opção de parceiroComercial').nullable(),
      }),
      funcaoComercial: object({
        codigo: number().min(1, 'Por favor, selecione uma opção de grupo economico').nullable(),
      }),
      supervisor: object({
        codigo: number().min(1, 'Por favor, selecione uma opção de supervisor').nullable(),
      }),
      // departamento: object().,
    }),
    onSubmit: (values) =>
      //dispatchToTodos(todosActions.addTodo(values.title))
      alert(JSON.stringify(values, null, 2)),

    //limpar campos
    //setFieldValue('codigo','0',false);
    //setFieldValue('descricao','',false);
  })

  const inputCodigo = useRef(null)
  const inputEmpresa = useRef(null)
  const inputFuncaoEmpresa = useRef(null)
  const inputParceiroComercial = useRef(null)
  const inputFuncaoComercial = useRef(null)
  const inputSupervisor = useRef(null)
  const inputComissaoPadrao = useRef(null)

  useEffect(() => {
    if (!isAddMode) {
      // get user and set form fields
      const dataSecao = {
        codigo: id,
        registro: '',
        usuario: '',
        empresa: { codigo: 0, descricao: '' },
        funcaoEmpresa: { codigo: 0 },
        parceiroComercial: { codigo: 0, descricao: '' },
        funcaoComercial: { codigo: 0, descricao: '' },
        supervisor: { codigo: 0, descricao: '' },
        comissaoPadrao: 0,
      }
      setFieldValue('codigo', dataSecao.codigo, false)
      setFieldValue('empresa', dataSecao.empresa.codigo, false)
      setFieldValue('funcaoEmpresa', dataSecao.funcaoEmpresa.codigo, false)
      setFieldValue('parceiroComercial', dataSecao.parceiroComercial.codigo, false)
      setFieldValue('funcaoComercial', dataSecao.funcaoComercial.codigo, false)
      setFieldValue('supervisor', dataSecao.supervisor.codigo, false)
      setFieldValue('comissaoPadrao', dataSecao.comissaoPadrao, false)

      setInitialValues(dataSecao)
      //formik.setFieldValue("descricao",data.descricao);
      //inputCodigo = data.codigo;
      //alert(JSON.stringify(data))
      // console.log(data)
    }
  }, [id, isAddMode, setFieldValue])

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> Parceiro Comercial </h3>
      </div>
      <nav aria-label="breadcrumb">
        <p className="breadcrumb-item active"> Cadastro de Parceiro Comercial</p>
      </nav>
      <div className="col-md-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="forms-sample">
              <Form.Group className="row">
                <label htmlFor="codigo" className="col-sm-2 col-form-label">
                  Código:
                </label>
                <div className="col-sm-1">
                  <Form.Control
                    type="number"
                    className="form-control"
                    id="codigo"
                    placeholder="0"
                    aria-label="código readonly input"
                    readOnly
                    ref={inputCodigo}
                    {...getFieldProps('codigo')}
                  />
                </div>
              </Form.Group>

              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="empresa" className="col-sm-4 col-form-label">
                      Empresa:
                    </label>
                    <div className="col-sm-8">
                      <select
                        className="form-control form-control-sm"
                        id="empresa"
                        ref={inputEmpresa}
                        {...getFieldProps('empresa.codigo')}
                      >
                        <option defaultValue={0}>Selecione uma Empresa</option>
                        <option value={25}>Empresa: 1</option>
                        <option value={26}>Empresa: 2</option>
                        <option value={27}>Empresa: 3</option>
                        <option value={28}>Empresa: 4</option>
                      </select>
                      <div>{errors.empresa?.codigo ? <small>{errors.empresa?.codigo}</small> : null}</div>
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="funcaoEmpresa" className="col-sm-3 col-form-label">
                      Função Empresa:
                    </label>
                    <div className="col-sm-9">
                      <select
                        className="form-control form-control-sm"
                        id="funcaoEmpresa"
                        ref={inputFuncaoEmpresa}
                        {...getFieldProps('funcaoEmpresa.codigo')}
                      >
                        <option defaultValue={0}>Selecione um Função Empresa</option>
                        <option value={21}>Função Empresa: 1</option>
                        <option value={22}>Função Empresa: 2</option>
                        <option value={23}>Função Empresa: 3</option>
                        <option value={24}>Função Empresa: 4</option>
                      </select>
                      <div>{errors.funcaoEmpresa?.codigo ? <small>{errors.funcaoEmpresa?.codigo}</small> : null}</div>
                    </div>
                  </Form.Group>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="parceiroComercial" className="col-sm-4 col-form-label">
                      Parceiro Comercial:
                    </label>
                    <div className="col-sm-8">
                      <select
                        className="form-control form-control-sm"
                        id="parceiroComercial"
                        ref={inputParceiroComercial}
                        {...getFieldProps('parceiroComercial.codigo')}
                      >
                        <option defaultValue={0}>Selecione uma Parceiro Comercial</option>
                        <option value={17}>Parceiro Comercial: 1</option>
                        <option value={18}>Parceiro Comercial: 2</option>
                        <option value={19}>Parceiro Comercial: 3</option>
                        <option value={20}>Parceiro Comercial: 4</option>
                      </select>
                      <div>
                        {errors.parceiroComercial?.codigo ? <small>{errors.parceiroComercial?.codigo}</small> : null}
                      </div>
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="funcaoComercial" className="col-sm-3 col-form-label">
                      Função Comercial:
                    </label>
                    <div className="col-sm-9">
                      <select
                        className="form-control form-control-sm"
                        id="funcaoComercial"
                        ref={inputFuncaoComercial}
                        {...getFieldProps('funcaoComercial.codigo')}
                      >
                        <option defaultValue={0}>Selecione um Função Comercial</option>
                        <option value={5}>Função Comercial: 1</option>
                        <option value={6}>Função Comercial: 2</option>
                        <option value={7}>Função Comercial: 3</option>
                        <option value={8}>Função Comercial: 4</option>
                      </select>
                      <div>
                        {errors.funcaoComercial?.codigo ? <small>{errors.funcaoComercial?.codigo}</small> : null}
                      </div>
                    </div>
                  </Form.Group>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="supervisor" className="col-sm-4 col-form-label">
                      Supervisor:
                    </label>
                    <div className="col-sm-8">
                      <select
                        className="form-control form-control-sm"
                        id="supervisor"
                        ref={inputSupervisor}
                        {...getFieldProps('supervisor.codigo')}
                      >
                        <option defaultValue={0}>Selecione um Supervisor</option>
                        <option value={5}>Supervisor: 1</option>
                        <option value={6}>Supervisor: 2</option>
                        <option value={7}>Supervisor: 3</option>
                        <option value={8}>Supervisor: 4</option>
                      </select>
                      <div>{errors.supervisor?.codigo ? <small>{errors.supervisor?.codigo}</small> : null}</div>
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-6 row">
                  <Form.Group className="row">
                    <label htmlFor="comissaoPadrao" className="col-sm-6 col-form-label">
                      Comissão (%):
                    </label>
                    <div className="col-sm-4">
                      <Form.Control
                        type="number"
                        className="form-control"
                        id="comissaoPadrao"
                        placeholder="0"
                        aria-label="comissão padrão input"
                        ref={inputComissaoPadrao}
                        {...getFieldProps('comissaoPadrao')}
                      />
                    </div>
                  </Form.Group>
                  <Form.Group className="row">
                    {/* <div className="col-md-2"> */}
                    <Form.Group className="form-check">
                      <label className="form-check-label text-muted ">
                        <input type="checkbox" className="form-check-input" />
                        <i className="input-helper"></i>
                        Ativo?
                      </label>
                    </Form.Group>
                    {/* </div> */}
                  </Form.Group>
                </div>
              </div>

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

export default CadastroCliente
