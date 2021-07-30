import React, { useEffect, useRef, useState } from 'react'
import { useFormik, Formik } from 'formik'
import { object, string, number, SchemaOf } from 'yup'
import { Form, ButtonGroup, Button } from 'react-bootstrap'
import { IoSaveOutline } from 'react-icons/io5'
import { FcCancel } from 'react-icons/fc'
import { useQuery } from 'react-apollo'
import * as queries from '../../../../api/queries'

const CadastroProdutos = (props) => {
  const { id } = props.match.params
  const isAddMode = !id
  const { data } = useQuery(queries.PRODUTOS)

  const [initialValues, setInitialValues] = useState({
    codigo: 0,
    descricao: '',
    registro: '',
    usuario: '',
    ean1: '',
    ean2: '',
    fabricante: {
      codigo: 0,
      descricao: '',
      registro: '',
      usuario: '',
      apresentacao: {
        codigo: 0,
        descricao: '',
        registro: '',
        usuario: '',
        marca: {
          codigo: 0,
          descricao: '',
          registro: '',
          usuario: '',
          subcategoria: {
            codigo: 0,
            descricao: '',
            registro: '',
            usuario: '',
            categoria: {
              codigo: 0,
              descricao: '',
              registro: '',
              usuario: '',
              secao: {
                codigo: 0,
                descricao: '',
                registro: '',
                usuario: '',
                departamento: {
                  codigo: 0,
                  descricao: '',
                  registro: '',
                  usuario: '',
                  unidade: {
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
    },
  })

  const { getFieldProps, isSubmitting, isValidating, errors, handleSubmit, setFieldValue } = useFormik({
    initialValues,
    validationSchema: object({
      descricao: string()
        .min(2, 'Deve conter pelo menos 2 caracteres')
        .max(100)
        .required('O campo Descrição é obrigatório!'),
      ean1: string().min(2, 'Deve conter pelo menos 2 caracteres').max(100).required('O campo EAN 1 é obrigatório!'),
      ean2: string().min(2, 'Deve conter pelo menos 2 caracteres').max(100).required('O campo EAN 2 é obrigatório!'),
      fabricante: object({
        codigo: number().min(1, 'Por favor, selecione uma opção de fabricante').nullable(),
        apresentacao: object({
          codigo: number().min(1, 'Por favor, selecione uma opção de apresentação').nullable(),
          marca: object({
            codigo: number().min(1, 'Por favor, selecione uma opção de marca').nullable(),
            subcategoria: object({
              codigo: number().min(1, 'Por favor, selecione uma opção de subcategoria').nullable(),
              categoria: object({
                codigo: number().min(1, 'Por favor, selecione uma opção de categoria').nullable(),
                secao: object({
                  codigo: number().min(1, 'Por favor, selecione uma opção de seção').nullable(),
                  departamento: object({
                    codigo: number().min(1, 'Por favor, selecione uma opção de departamento').nullable(),
                    unidade: object({
                      codigo: number().min(1, 'Por favor, selecione uma opção de unidade').nullable(),
                    }),
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
  const inputEan1 = useRef(null)
  const inputEan2 = useRef(null)
  const inputFabricante = useRef(null)
  const inputApresentacao = useRef(null)
  const inputMarca = useRef(null)
  const inputSubcategoria = useRef(null)
  const inputCategoria = useRef(null)
  const inputSecao = useRef(null)
  const inputDepartamento = useRef(null)
  const inputUnidade = useRef(null)

  useEffect(() => {
    if (!isAddMode) {
      // get user and set form fields
      const dataSecao = {
        codigo: id,
        descricao: 'edit',
        registro: '',
        usuario: '',
        ean1: '',
        ean2: '',
        fabricante: {
          codigo: 0,
          descricao: 'Descrição Fabricante 85',
          registro: '',
          usuario: '',
          apresentacao: {
            codigo: 0,
            descricao: 'Descrição Apresentação 75',
            registro: '',
            usuario: '',
            marca: {
              codigo: 0,
              descricao: 'Descrição Marca 65',
              registro: '',
              usuario: '',
              subcategoria: {
                codigo: 0,
                descricao: 'Descrição Subcategoria 55',
                registro: '',
                usuario: '',
                categoria: {
                  codigo: 0,
                  descricao: 'Descrição Categoria 45',
                  registro: '',
                  usuario: '',
                  secao: {
                    codigo: 0,
                    descricao: 'Descrição Seção 35',
                    registro: '',
                    usuario: '',
                    departamento: {
                      codigo: 25,
                      descricao: 'Descrição Departamento 25',
                      registro: '',
                      usuario: '',
                      unidade: {
                        codigo: 15,
                        descricao: 'Descrição Unidade 15',
                        registro: '',
                        usuario: '',
                      },
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
      setFieldValue('ean1', dataSecao.ean1, false)
      setFieldValue('ean2', dataSecao.ean2, false)
      setFieldValue('fabricante', dataSecao.fabricante.codigo, false)
      setFieldValue('apresentacao', dataSecao.fabricante.apresentacao.codigo, false)
      setFieldValue('marca', dataSecao.fabricante.apresentacao.marca.codigo, false)
      setFieldValue('subcategoria', dataSecao.fabricante.apresentacao.marca.subcategoria.codigo, false)
      setFieldValue('categoria', dataSecao.fabricante.apresentacao.marca.subcategoria.categoria.codigo, false)
      setFieldValue('secao', dataSecao.fabricante.apresentacao.marca.subcategoria.categoria.secao.codigo, false)
      setFieldValue(
        'departamento',
        dataSecao.fabricante.apresentacao.marca.subcategoria.categoria.secao.departamento.codigo,
        false
      )
      setFieldValue(
        'unidade',
        dataSecao.fabricante.apresentacao.marca.subcategoria.categoria.secao.departamento.unidade.codigo,
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
        <h3 className="page-title"> Produto </h3>
      </div>
      <nav aria-label="breadcrumb">
        <p className="breadcrumb-item active"> Cadastro de Produto</p>
      </nav>
      <div className="col-sm-12 grid-margin stretch-card">
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
                    <label htmlFor="ean1" className="col-sm-4 col-form-label">
                      EAN 1:
                    </label>
                    <div className="col-sm-8">
                      <Form.Control
                        type="text"
                        className="form-control"
                        id="ean1"
                        aria-label="descrição input"
                        placeholder="Descrição do ean 1"
                        ref={inputEan1}
                        {...getFieldProps('ean1')}
                      />
                      <div>{errors.ean1 ? <small>{errors.ean1}</small> : null}</div>
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="ean2" className="col-sm-3 col-form-label">
                      EAN 2:
                    </label>
                    <div className="col-sm-9">
                      <Form.Control
                        type="text"
                        className="form-control"
                        id="ean2"
                        aria-label="descrição input"
                        placeholder="Descrição do ean 2"
                        ref={inputEan2}
                        {...getFieldProps('ean2')}
                      />
                      <div>{errors.ean2 ? <small>{errors.ean2}</small> : null}</div>
                    </div>
                  </Form.Group>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="fabricante" className="col-sm-4 col-form-label">
                      Fabricante:
                    </label>
                    <div className="col-sm-8">
                      <select
                        className="form-control form-control-sm"
                        id="fabricante"
                        ref={inputFabricante}
                        {...getFieldProps('fabricante.codigo')}
                      >
                        <option defaultValue={0}>Selecione um Fabricante</option>
                        <option value={25}>Fabricante: 1</option>
                        <option value={26}>Fabricante: 2</option>
                        <option value={27}>Fabricante: 3</option>
                        <option value={28}>Fabricante: 4</option>
                      </select>
                      <div>{errors.fabricante?.codigo ? <small>{errors.fabricante?.codigo}</small> : null}</div>
                    </div>
                  </Form.Group>
                </div>

                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="apresentacao" className="col-sm-3 col-form-label">
                      Apresentação:
                    </label>
                    <div className="col-sm-9">
                      <select
                        className="form-control form-control-sm"
                        id="apresentacao"
                        ref={inputApresentacao}
                        {...getFieldProps('fabricante.apresentacao.codigo')}
                      >
                        <option defaultValue={0}>Selecione uma Apresentação</option>
                        <option value={21}>Apresentação: 1</option>
                        <option value={22}>Apresentação: 2</option>
                        <option value={23}>Apresentação: 3</option>
                        <option value={24}>Apresentação: 4</option>
                      </select>
                      <div>
                        {errors.fabricante?.apresentacao?.codigo ? (
                          <small>{errors.fabricante?.apresentacao?.codigo}</small>
                        ) : null}
                      </div>
                    </div>
                  </Form.Group>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="subcategoria" className="col-sm-4 col-form-label">
                      Subcategoria:
                    </label>
                    <div className="col-sm-8">
                      <select
                        className="form-control form-control-sm"
                        id="subcategoria"
                        ref={inputSubcategoria}
                        {...getFieldProps('fabricante.apresentacao.marca.subcategoria.codigo')}
                      >
                        <option defaultValue={0}>Selecione uma Subcategoria</option>
                        <option value={13}>Subcategoria: 1</option>
                        <option value={14}>Subcategoria: 2</option>
                        <option value={15}>Subcategoria: 3</option>
                        <option value={16}>Subcategoria: 4</option>
                      </select>
                      <div>
                        {errors.fabricante?.apresentacao?.marca?.subcategoria?.codigo ? (
                          <small>{errors.fabricante?.apresentacao?.marca?.subcategoria?.codigo}</small>
                        ) : null}
                      </div>
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="categoria" className="col-sm-3 col-form-label">
                      Categoria:
                    </label>
                    <div className="col-sm-9">
                      <select
                        className="form-control form-control-sm"
                        id="categoria"
                        ref={inputCategoria}
                        {...getFieldProps('fabricante.apresentacao.marca.subcategoria.categoria.codigo')}
                      >
                        <option defaultValue={0}>Selecione uma Categoria</option>
                        <option value={9}>Categoria: 1</option>
                        <option value={10}>Categoria: 2</option>
                        <option value={11}>Categoria: 3</option>
                        <option value={12}>Categoria: 4</option>
                      </select>
                      <div>
                        {errors.fabricante?.apresentacao?.marca?.subcategoria?.categoria?.codigo ? (
                          <small>{errors.fabricante?.apresentacao?.marca?.subcategoria?.categoria?.codigo}</small>
                        ) : null}
                      </div>
                    </div>
                  </Form.Group>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="secao" className="col-sm-4 col-form-label">
                      Seção:
                    </label>
                    <div className="col-sm-8">
                      <select
                        className="form-control form-control-sm"
                        id="secao"
                        ref={inputSecao}
                        {...getFieldProps('fabricante.apresentacao.marca.subcategoria.categoria.secao.codigo')}
                      >
                        <option defaultValue={0}>Selecione uma Seção</option>
                        <option value={5}>Seção: 1</option>
                        <option value={6}>Seção: 2</option>
                        <option value={7}>Seção: 3</option>
                        <option value={8}>Seção: 4</option>
                      </select>
                      <div>
                        {errors.fabricante?.apresentacao?.marca?.subcategoria?.categoria?.secao?.codigo ? (
                          <small>
                            {errors.fabricante?.apresentacao?.marca?.subcategoria?.categoria?.secao?.codigo}
                          </small>
                        ) : null}
                      </div>
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="departamento" className="col-sm-3 col-form-label">
                      Departamento:
                    </label>
                    <div className="col-sm-9">
                      <select
                        className="form-control form-control-sm"
                        id="departamento"
                        ref={inputDepartamento}
                        {...getFieldProps(
                          'fabricante.apresentacao.marca.subcategoria.categoria.secao.departamento.codigo'
                        )}
                      >
                        <option defaultValue={0}>Selecione um departamento</option>
                        <option value={1}>Departamento: 1</option>
                        <option value={2}>Departamento: 2</option>
                        <option value={3}>Departamento: 3</option>
                        <option value={4}>Departamento: 4</option>
                      </select>
                      <div>
                        {errors.fabricante?.apresentacao?.marca?.subcategoria?.categoria?.secao?.departamento
                          ?.codigo ? (
                          <small>
                            {
                              errors.fabricante?.apresentacao?.marca?.subcategoria?.categoria?.secao?.departamento
                                ?.codigo
                            }
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
                    <label htmlFor="marca" className="col-sm-4 col-form-label">
                      Marca:
                    </label>
                    <div className="col-sm-8">
                      <select
                        className="form-control form-control-sm"
                        id="marca"
                        ref={inputMarca}
                        {...getFieldProps('fabricante.apresentacao.marca.codigo')}
                      >
                        <option defaultValue={0}>Selecione uma Marca</option>
                        <option value={17}>Marca: 1</option>
                        <option value={18}>Marca: 2</option>
                        <option value={19}>Marca: 3</option>
                        <option value={20}>Marca: 4</option>
                      </select>
                      <div>
                        {errors.fabricante?.apresentacao?.marca?.codigo ? (
                          <small>{errors.fabricante?.apresentacao?.marca?.codigo}</small>
                        ) : null}
                      </div>
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="unidade" className="col-sm-3 col-form-label">
                      Unidade:
                    </label>
                    <div className="col-sm-9">
                      <select
                        className="form-control form-control-sm"
                        id="unidade"
                        ref={inputUnidade}
                        {...getFieldProps(
                          'fabricante.apresentacao.marca.subcategoria.categoria.secao.departamento.unidade.codigo'
                        )}
                      >
                        <option defaultValue={0}>Selecione uma unidade</option>
                        <option value={1}>Unidade: 1</option>
                        <option value={2}>Unidade: 2</option>
                        <option value={3}>Unidade: 3</option>
                        <option value={4}>Unidade: 4</option>
                      </select>
                      <div>
                        {errors.fabricante?.apresentacao?.marca?.subcategoria?.categoria?.secao?.departamento?.unidade
                          ?.codigo ? (
                          <small>
                            {
                              errors.fabricante?.apresentacao?.marca?.subcategoria?.categoria?.secao?.departamento
                                ?.unidade?.codigo
                            }
                          </small>
                        ) : null}
                      </div>
                    </div>
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
