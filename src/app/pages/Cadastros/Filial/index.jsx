import React, { useEffect, useRef, useState } from 'react'
import { useFormik } from 'formik'
import { object, string, number } from 'yup'
import Datepicker from '../../../../assets/styles/components/datepicker'
import { Form, ButtonGroup, Button } from 'react-bootstrap'
import { IoSaveOutline } from 'react-icons/io5'
import { FcCancel } from 'react-icons/fc'

const CadastroProdutos = (props) => {
  const { id } = props.match.params
  const isAddMode = !id

  const [initialValues, setInitialValues] = useState({
    codigo: 0,
    descricao: '',
    registro: '',
    usuario: '',
    empresa: {
      codigo: 0,
      descricao: '',
      registro: '',
      usuario: '',
      responsavel: {
        codigo: 0,
        descricao: '',
        registro: '',
        usuario: '',
        supervisor: {
          codigo: 0,
          descricao: '',
          registro: '',
          usuario: '',
          grupofilial: {
            codigo: 0,
            descricao: '',
            registro: '',
            usuario: '',
            grupointerno: {
              codigo: 0,
              descricao: '',
              registro: '',
              usuario: '',
              grupoexterno: {
                codigo: 0,
                descricao: '',
                registro: '',
                usuario: '',
                tipofilial: {
                  codigo: 0,
                  descricao: '',
                  registro: '',
                  usuario: '',
                },
              },
            },
          },
        },
      },
    },
  })

  const { getFieldProps, isSubmitting, isValidating, errors, handleSubmit, setFieldValue } = useFormik({
    initialValues,
    validationSchema: object({
      descricao: string()
        .min(2, 'Deve conter pelo menos 2 caracteres')
        .max(100)
        .required('O campo Descrição é obrigatório!'),
      empresa: object({
        codigo: number().min(1, 'Por favor, selecione uma opção de empresa').nullable(),
        responsavel: object({
          codigo: number().min(1, 'Por favor, selecione uma opção de apresentação').nullable(),
          supervisor: object({
            codigo: number().min(1, 'Por favor, selecione uma opção de supervisor').nullable(),
            grupofilial: object({
              codigo: number().min(1, 'Por favor, selecione uma opção de grupo filial').nullable(),
              grupointerno: object({
                codigo: number().min(1, 'Por favor, selecione uma opção de grupo interno').nullable(),
                grupoexterno: object({
                  codigo: number().min(1, 'Por favor, selecione uma opção de grupo externo').nullable(),
                  tipofilial: object({
                    codigo: number().min(1, 'Por favor, selecione uma opção de tipo filial').nullable(),
                  }),
                }),
              }),
            }),
          }),
        }),
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
  const inputDescricao = useRef(null)
  const inputEmpresa = useRef(null)
  const inputResponsavel = useRef(null)
  const inputSupervisor = useRef(null)
  const inputGrupoFilial = useRef(null)
  const inputGrupoInterno = useRef(null)
  const inputGrupoExterno = useRef(null)
  const inputTipoFilial = useRef(null)

  useEffect(() => {
    if (!isAddMode) {
      // get user and set form fields
      const dataSecao = {
        codigo: id,
        descricao: 'edit',
        registro: '',
        usuario: '',
        empresa: {
          codigo: 0,
          descricao: 'Descrição Empresa 85',
          registro: '',
          usuario: '',
          responsavel: {
            codigo: 0,
            descricao: 'Descrição responsável 75',
            registro: '',
            usuario: '',
            supervisor: {
              codigo: 0,
              descricao: 'Descrição supervisor 65',
              registro: '',
              usuario: '',
              grupofilial: {
                codigo: 0,
                descricao: 'Descrição grupo filial 55',
                registro: '',
                usuario: '',
                grupointerno: {
                  codigo: 0,
                  descricao: 'Descrição grupo interno 45',
                  registro: '',
                  usuario: '',
                  grupoexterno: {
                    codigo: 0,
                    descricao: 'Descrição grupo externo 35',
                    registro: '',
                    usuario: '',
                    tipofilial: {
                      codigo: 25,
                      descricao: 'Descrição tipo filial 25',
                      registro: '',
                      usuario: '',
                    },
                  },
                },
              },
            },
          },
        },
      }
      setFieldValue('codigo', dataSecao.codigo, false)
      setFieldValue('descricao', dataSecao.descricao, false)
      setFieldValue('empresa', dataSecao.empresa.codigo, false)
      setFieldValue('responsavel', dataSecao.empresa.responsavel.codigo, false)
      setFieldValue('supervisor', dataSecao.empresa.responsavel.supervisor.codigo, false)
      setFieldValue('grupofilial', dataSecao.empresa.responsavel.supervisor.grupofilial.codigo, false)
      setFieldValue('grupointerno', dataSecao.empresa.responsavel.supervisor.grupofilial.grupointerno.codigo, false)
      setFieldValue(
        'grupoexterno',
        dataSecao.empresa.responsavel.supervisor.grupofilial.grupointerno.grupoexterno.codigo,
        false
      )
      setFieldValue(
        'tipofilial',
        dataSecao.empresa.responsavel.supervisor.grupofilial.grupointerno.grupoexterno.tipofilial.codigo,
        false
      )
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
        <h3 className="page-title"> Filial </h3>
      </div>
      <nav aria-label="breadcrumb">
        <p className="breadcrumb-item active"> Cadastro de Filial</p>
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
                    ref={inputDescricao}
                    {...getFieldProps('descricao')}
                  />
                  <div>{errors.descricao ? <small>{errors.descricao}</small> : null}</div>
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
                        <option defaultValue={0}>Selecione um Empresa</option>
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
                    <label htmlFor="responsavel" className="col-sm-3 col-form-label">
                      Responsável:
                    </label>
                    <div className="col-sm-9">
                      <select
                        className="form-control form-control-sm"
                        id="responsavel"
                        ref={inputResponsavel}
                        {...getFieldProps('empresa.responsavel.codigo')}
                      >
                        <option defaultValue={0}>Selecione um Responsável</option>
                        <option value={21}>Responsável: 1</option>
                        <option value={22}>Responsável: 2</option>
                        <option value={23}>Responsável: 3</option>
                        <option value={24}>Responsável: 4</option>
                      </select>
                      <div>
                        {errors.empresa?.responsavel?.codigo ? (
                          <small>{errors.empresa?.responsavel?.codigo}</small>
                        ) : null}
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
                        {...getFieldProps('empresa.responsavel.supervisor.codigo')}
                      >
                        <option defaultValue={0}>Selecione uma Supervisor</option>
                        <option value={17}>Supervisor: 1</option>
                        <option value={18}>Supervisor: 2</option>
                        <option value={19}>Supervisor: 3</option>
                        <option value={20}>Supervisor: 4</option>
                      </select>
                      <div>
                        {errors.empresa?.responsavel?.supervisor?.codigo ? (
                          <small>{errors.empresa?.responsavel?.supervisor?.codigo}</small>
                        ) : null}
                      </div>
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="fundacao" className="col-sm-3 col-form-label">
                      Abertura em:
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
                    <label htmlFor="grupointerno" className="col-sm-4 col-form-label">
                      Grupo Interno:
                    </label>
                    <div className="col-sm-8">
                      <select
                        className="form-control form-control-sm"
                        id="grupointerno"
                        ref={inputGrupoInterno}
                        {...getFieldProps('empresa.responsavel.supervisor.grupofilial.grupointerno.codigo')}
                      >
                        <option defaultValue={0}>Selecione um Grupo Interno</option>
                        <option value={5}>Grupo Interno: 1</option>
                        <option value={6}>Grupo Interno: 2</option>
                        <option value={7}>Grupo Interno: 3</option>
                        <option value={8}>Grupo Interno: 4</option>
                      </select>
                      <div>
                        {errors.empresa?.responsavel?.supervisor?.grupofilial?.grupointerno?.codigo ? (
                          <small>{errors.empresa?.responsavel?.supervisor?.grupofilial?.grupointerno?.codigo}</small>
                        ) : null}
                      </div>
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="grupoexterno" className="col-sm-3 col-form-label">
                      Grupo Externo:
                    </label>
                    <div className="col-sm-9">
                      <select
                        className="form-control form-control-sm"
                        id="grupoexterno"
                        ref={inputGrupoExterno}
                        {...getFieldProps(
                          'empresa.responsavel.supervisor.grupofilial.grupointerno.grupoexterno.codigo'
                        )}
                      >
                        <option defaultValue={0}>Selecione um Grupo Externo</option>
                        <option value={5}>Grupo Externo: 1</option>
                        <option value={6}>Grupo Externo: 2</option>
                        <option value={7}>Grupo Externo: 3</option>
                        <option value={8}>Grupo Externo: 4</option>
                      </select>
                      <div>
                        {errors.empresa?.responsavel?.supervisor?.grupofilial?.grupointerno?.grupoexterno?.codigo ? (
                          <small>
                            {errors.empresa?.responsavel?.supervisor?.grupofilial?.grupointerno?.grupoexterno?.codigo}
                          </small>
                        ) : null}
                      </div>
                    </div>
                  </Form.Group>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="grupofilial" className="col-sm-4 col-form-label">
                      Grupo Filial:
                    </label>
                    <div className="col-sm-8">
                      <select
                        className="form-control form-control-sm"
                        id="grupofilial"
                        ref={inputGrupoFilial}
                        {...getFieldProps('empresa.responsavel.supervisor.grupofilial.codigo')}
                      >
                        <option defaultValue={0}>Selecione uma Grupo Filial</option>
                        <option value={13}>Grupo Filial: 1</option>
                        <option value={14}>Grupo Filial: 2</option>
                        <option value={15}>Grupo Filial: 3</option>
                        <option value={16}>Grupo Filial: 4</option>
                      </select>
                      <div>
                        {errors.empresa?.responsavel?.supervisor?.grupofilial?.codigo ? (
                          <small>{errors.empresa?.responsavel?.supervisor?.grupofilial?.codigo}</small>
                        ) : null}
                      </div>
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="tipofilial" className="col-sm-3 col-form-label">
                      Tipo Filial:
                    </label>
                    <div className="col-sm-9">
                      <select
                        className="form-control form-control-sm"
                        id="tipofilial"
                        ref={inputTipoFilial}
                        {...getFieldProps(
                          'empresa.responsavel.supervisor.grupofilial.grupointerno.grupoexterno.tipofilial.codigo'
                        )}
                      >
                        <option defaultValue={0}>Selecione um Tipo Filial</option>
                        <option value={1}>Tipo Filial: 1</option>
                        <option value={2}>Tipo Filial: 2</option>
                        <option value={3}>Tipo Filial: 3</option>
                        <option value={4}>Tipo Filial: 4</option>
                      </select>
                      <div>
                        {errors.empresa?.responsavel?.supervisor?.grupofilial?.grupointerno?.grupoexterno?.tipofilial
                          ?.codigo ? (
                          <small>
                            {
                              errors.empresa?.responsavel?.supervisor?.grupofilial?.grupointerno?.grupoexterno
                                ?.tipofilial?.codigo
                            }
                          </small>
                        ) : null}
                      </div>
                    </div>
                  </Form.Group>
                </div>
              </div>

              <div className="row">
                <div className="col-md-8">
                  <Form.Group className="row">
                    <label htmlFor="observacao" className="col-sm-3 col-form-label">
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

export default CadastroProdutos
