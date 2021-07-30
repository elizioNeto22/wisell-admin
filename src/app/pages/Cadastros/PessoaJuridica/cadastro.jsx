import React, { useEffect, useRef, useState } from 'react'
import { useFormik } from 'formik'
import { object, string, number } from 'yup'
import { Form, ButtonGroup, Button } from 'react-bootstrap'
import { IoSaveOutline } from 'react-icons/io5'
import { FcCancel } from 'react-icons/fc'
import Datepicker from '../../../../assets/styles/components/datepicker'

const CadastroPessoaJuridica = (props) => {
  const { id } = props.match.params
  const isAddMode = !id

  const [initialValues, setInitialValues] = useState({
    codigo: 0,
    descricao: '',
    registro: '',
    usuario: '',
    fantasia: '',
    razaoSocial: '',
    cnpj: '',
    atividadeComercial: {
      codigo: 0,
      descricao: '',
      registro: '',
      usuario: '',
      ramoAtividade: {
        codigo: 0,
        descricao: '',
        registro: '',
        usuario: '',
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
      fantasia: string()
        .min(2, 'Deve conter pelo menos 2 caracteres')
        .max(100)
        .required('O campo fantasia é obrigatório!'),
      razaoSocial: string()
        .min(2, 'Deve conter pelo menos 2 caracteres')
        .max(100)
        .required('O campo razão social é obrigatório!'),
      cnpj: string()
        .min(2, 'Deve conter pelo menos 2 caracteres')
        .max(100)
        .required('O campo razão social é obrigatório!'),
      atividadeComercial: object({
        codigo: number().min(1, 'Por favor, selecione uma opção de atividade comercial').nullable(),
        ramoAtividade: object({
          codigo: number().min(1, 'Por favor, selecione uma opção de ramo atividade').nullable(),
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
  const inputFantasia = useRef(null)
  const inputRazaoSocial = useRef(null)
  const inputCnpj = useRef(null)
  const inputAtividadeComercial = useRef(null)
  const inputRamoAtividade = useRef(null)

  useEffect(() => {
    if (!isAddMode) {
      // get user and set form fields
      const dataSecao = {
        codigo: id,
        descricao: 'edit',
        registro: '',
        usuario: '',
        fantasia: '',
        razaoSocial: '',
        cnpj: '',
        atividadeComercial: {
          codigo: 0,
          descricao: 'Descrição Fabricante 85',
          registro: '',
          usuario: '',
          ramoAtividade: {
            codigo: 0,
            descricao: 'Descrição Apresentação 75',
            registro: '',
            usuario: '',
          },
        },
      }
      setFieldValue('codigo', dataSecao.codigo, false)
      setFieldValue('descricao', dataSecao.descricao, false)
      setFieldValue('fantasia', dataSecao.fantasia, false)
      setFieldValue('razaoSocial', dataSecao.razaoSocial, false)
      setFieldValue('cnpj', dataSecao.cnpj, false)
      setFieldValue('atividadeComercial', dataSecao.atividadeComercial.codigo, false)
      setFieldValue('ramoAtividade', dataSecao.atividadeComercial.ramoAtividade.codigo, false)

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
        <h3 className="page-title"> Pessoa Jurídica </h3>
      </div>
      <nav aria-label="breadcrumb">
        <p className="breadcrumb-item active">Cadastro de Pessoa Jurídica</p>
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
                    <label htmlFor="fantasia" className="col-sm-4 col-form-label">
                      Fantasia:
                    </label>
                    <div className="col-sm-8">
                      <Form.Control
                        type="text"
                        className="form-control"
                        id="fantasia"
                        aria-label="descrição input"
                        placeholder="Insira o nome fantasia"
                        ref={inputFantasia}
                        {...getFieldProps('fantasia')}
                      />
                      <div>{errors.fantasia ? <small>{errors.fantasia}</small> : null}</div>
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="razaoSocial" className="col-sm-3 col-form-label">
                      Razão Social:
                    </label>
                    <div className="col-sm-9">
                      <Form.Control
                        type="text"
                        className="form-control"
                        id="razaoSocial"
                        aria-label="descrição input"
                        placeholder="Descrição da razão social"
                        ref={inputRazaoSocial}
                        {...getFieldProps('razaoSocial')}
                      />
                      <div>{errors.razaoSocial ? <small>{errors.razaoSocial}</small> : null}</div>
                    </div>
                  </Form.Group>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="ramoAtividade" className="col-sm-4 col-form-label">
                      Ramo Atividade:
                    </label>
                    <div className="col-sm-8">
                      <select
                        className="form-control form-control-sm"
                        id="ramoAtividade"
                        ref={inputRamoAtividade}
                        {...getFieldProps('fabricante.ramoAtividade.codigo')}
                      >
                        <option defaultValue={0}>Selecione um Ramo Atividade</option>
                        <option value={21}>Ramo Atividade: 1</option>
                        <option value={22}>Ramo Atividade: 2</option>
                        <option value={23}>Ramo Atividade: 3</option>
                        <option value={24}>Ramo Atividade: 4</option>
                      </select>
                      <div>
                        {errors.atividadeComercial?.ramoAtividade?.codigo ? (
                          <small>{errors.atividadeComercial?.ramoAtividade?.codigo}</small>
                        ) : null}
                      </div>
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="atividadeComercial" className="col-sm-3 col-form-label">
                      Atividade Comercial:
                    </label>
                    <div className="col-sm-9">
                      <select
                        className="form-control form-control-sm"
                        id="atividadeComercial"
                        ref={inputAtividadeComercial}
                        {...getFieldProps('atividadeComercial.codigo')}
                      >
                        <option defaultValue={0}>Selecione uma Atividade Comercial</option>
                        <option value={25}>Atividade Comercial: 1</option>
                        <option value={26}>Atividade Comercial: 2</option>
                        <option value={27}>Atividade Comercial: 3</option>
                        <option value={28}>Atividade Comercial: 4</option>
                      </select>
                      <div>
                        {errors.atividadeComercial?.codigo ? <small>{errors.atividadeComercial?.codigo}</small> : null}
                      </div>
                    </div>
                  </Form.Group>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="cnpj" className="col-sm-4 col-form-label">
                      CNPJ:
                    </label>
                    <div className="col-sm-8">
                      <Form.Control
                        type="text"
                        className="form-control"
                        id="cnpj"
                        aria-label="descrição input"
                        placeholder="Insira o cnpj"
                        ref={inputCnpj}
                        {...getFieldProps('cnpj')}
                      />
                      <div>{errors.cnpj ? <small>{errors.cnpj}</small> : null}</div>
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="fundacao" className="col-sm-3 col-form-label">
                      Fundação:
                    </label>
                    <div className="col-sm-9">
                      <Datepicker />
                    </div>
                  </Form.Group>
                </div>
              </div>

              <Form.Group className="form-check">
                <label className="form-check-label text-muted">
                  <input type="checkbox" className="form-check-input" />
                  <i className="input-helper"></i>
                  Rede Varejista?
                </label>
              </Form.Group>

              <Form.Group className="form-check">
                <label className="form-check-label text-muted">
                  <input type="checkbox" className="form-check-input" />
                  <i className="input-helper"></i>
                  Matriz?
                </label>
              </Form.Group>

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

export default CadastroPessoaJuridica
