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
    entidade: { codigo: 0, descricao: '' },
    responsavel: { codigo: 0 },
    comprador: { codigo: 0, descricao: '' },
    grupoEconomico: { codigo: 0, descricao: '' },
    vendedor: { codigo: 0, descricao: '' },
  })

  const { getFieldProps, isSubmitting, isValidating, errors, handleSubmit, setFieldValue } = useFormik({
    initialValues,
    validationSchema: object({
      entidade: object({
        codigo: number().min(1, 'Por favor, selecione uma opção de entidade').nullable(),
      }),
      responsavel: object({
        codigo: number().min(1, 'Por favor, selecione uma opção de responsável').nullable(),
      }),
      comprador: object({
        codigo: number().min(1, 'Por favor, selecione uma opção de comprador').nullable(),
      }),
      grupoEconomico: object({
        codigo: number().min(1, 'Por favor, selecione uma opção de grupo economico').nullable(),
      }),
      vendedor: object({
        codigo: number().min(1, 'Por favor, selecione uma opção de vendedor').nullable(),
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
  const inputEntidade = useRef(null)
  const inputResponsavel = useRef(null)
  const inputComprador = useRef(null)
  const inputVendedor = useRef(null)
  const inputGrupoEconomico = useRef(null)

  useEffect(() => {
    if (!isAddMode) {
      // get user and set form fields
      const dataSecao = {
        codigo: id,
        registro: '',
        usuario: '',
        entidade: { codigo: 0, descricao: '' },
        responsavel: { codigo: 0 },
        comprador: { codigo: 0, descricao: '' },
        grupoEconomico: { codigo: 0, descricao: '' },
        vendedor: { codigo: 0, descricao: '' },
      }
      setFieldValue('codigo', dataSecao.codigo, false)
      setFieldValue('entidade', dataSecao.entidade.codigo, false)
      setFieldValue('responsavel', dataSecao.responsavel.codigo, false)
      setFieldValue('comprador', dataSecao.comprador.codigo, false)
      setFieldValue('grupoEconomico', dataSecao.grupoEconomico.codigo, false)
      setFieldValue('vendedor', dataSecao.vendedor.codigo, false)

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
        <h3 className="page-title"> Cliente </h3>
      </div>
      <nav aria-label="breadcrumb">
        <p className="breadcrumb-item active"> Cadastro de Cliente</p>
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
                    <label htmlFor="entidade" className="col-sm-4 col-form-label">
                      Entidade:
                    </label>
                    <div className="col-sm-8">
                      <select
                        className="form-control form-control-sm"
                        id="entidade"
                        ref={inputEntidade}
                        {...getFieldProps('entidade.codigo')}
                      >
                        <option defaultValue={0}>Selecione uma Entidade</option>
                        <option value={25}>Entidade: 1</option>
                        <option value={26}>Entidade: 2</option>
                        <option value={27}>Entidade: 3</option>
                        <option value={28}>Entidade: 4</option>
                      </select>
                      <div>{errors.entidade?.codigo ? <small>{errors.entidade?.codigo}</small> : null}</div>
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="responsavel" className="col-sm-3 col-form-label">
                      Responsável:
                    </label>
                    <div className="col-sm-9">
                      <select
                        className="form-control form-control-sm"
                        id="responsavel"
                        ref={inputResponsavel}
                        {...getFieldProps('responsavel.codigo')}
                      >
                        <option defaultValue={0}>Selecione um Responsável</option>
                        <option value={21}>Responsável: 1</option>
                        <option value={22}>Responsável: 2</option>
                        <option value={23}>Responsável: 3</option>
                        <option value={24}>Responsável: 4</option>
                      </select>
                      <div>{errors.responsavel?.codigo ? <small>{errors.responsavel?.codigo}</small> : null}</div>
                    </div>
                  </Form.Group>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="comprador" className="col-sm-4 col-form-label">
                      Comprador:
                    </label>
                    <div className="col-sm-8">
                      <select
                        className="form-control form-control-sm"
                        id="comprador"
                        ref={inputComprador}
                        {...getFieldProps('comprador.codigo')}
                      >
                        <option defaultValue={0}>Selecione uma Comprador</option>
                        <option value={17}>Comprador: 1</option>
                        <option value={18}>Comprador: 2</option>
                        <option value={19}>Comprador: 3</option>
                        <option value={20}>Comprador: 4</option>
                      </select>
                      <div>{errors.comprador?.codigo ? <small>{errors.comprador?.codigo}</small> : null}</div>
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="desde" className="col-sm-3 col-form-label">
                      Desde:
                    </label>
                    <div className="col-sm-9">
                      <Datepicker />
                    </div>
                  </Form.Group>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="grupoEconomico" className="col-sm-4 col-form-label">
                      Grupo Econômico:
                    </label>
                    <div className="col-sm-8">
                      <select
                        className="form-control form-control-sm"
                        id="grupoEconomico"
                        ref={inputGrupoEconomico}
                        {...getFieldProps('empresa.responsavel.supervisor.grupofilial.grupoEconomico.codigo')}
                      >
                        <option defaultValue={0}>Selecione um Grupo Econômico</option>
                        <option value={5}>Grupo Econômico: 1</option>
                        <option value={6}>Grupo Econômico: 2</option>
                        <option value={7}>Grupo Econômico: 3</option>
                        <option value={8}>Grupo Econômico: 4</option>
                      </select>
                      <div>{errors.grupoEconomico?.codigo ? <small>{errors.grupoEconomico?.codigo}</small> : null}</div>
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="vendedor" className="col-sm-3 col-form-label">
                      Vendedor:
                    </label>
                    <div className="col-sm-9">
                      <select
                        className="form-control form-control-sm"
                        id="vendedor"
                        ref={inputVendedor}
                        {...getFieldProps('empresa.responsavel.supervisor.grupofilial.grupointerno.vendedor.codigo')}
                      >
                        <option defaultValue={0}>Selecione um Vendedor</option>
                        <option value={5}>Vendedor: 1</option>
                        <option value={6}>Vendedor: 2</option>
                        <option value={7}>Vendedor: 3</option>
                        <option value={8}>Vendedor: 4</option>
                      </select>
                      <div>{errors.vendedor?.codigo ? <small>{errors.vendedor?.codigo}</small> : null}</div>
                    </div>
                  </Form.Group>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="observacao" className="col-sm-4 col-form-label">
                      Observação:
                    </label>
                    <textarea className="form-control col-sm-8" id="observacao" rows="3"></textarea>
                  </Form.Group>
                </div>
                <div className="col-md-2">
                  <Form.Group className="form-check">
                    <label className="form-check-label text-muted ">
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

export default CadastroCliente
