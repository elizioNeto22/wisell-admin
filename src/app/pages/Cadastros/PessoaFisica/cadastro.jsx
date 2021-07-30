import React, { useEffect, useRef, useState } from 'react'
import { useFormik } from 'formik'
import { object, string, number } from 'yup'
import { Form, ButtonGroup, Button } from 'react-bootstrap'
import { IoSaveOutline } from 'react-icons/io5'
import { FcCancel } from 'react-icons/fc'
import Datepicker from '../../../../assets/styles/components/datepicker'

const CadastroPessoaFisica = (props) => {
  const { id } = props.match.params
  const isAddMode = !id

  const [initialValues, setInitialValues] = useState({
    codigo: 0,
    registro: '',
    usuario: '',
    nomeReduzido: '',
    nome: '',
    cpf: '',
    email: '',
    login: '',
    senha: '',
    confirmacaoSenha: '',
    codigoAtivacao: '',
    profissao: '',
  })

  const { getFieldProps, isSubmitting, isValidating, errors, handleSubmit, setFieldValue } = useFormik({
    initialValues,
    validationSchema: object({
      nomeReduzido: string()
        .min(2, 'Deve conter pelo menos 2 caracteres')
        .max(100)
        .required('O campo Descrição é obrigatório!'),
      nome: string().min(2, 'Deve conter pelo menos 2 caracteres').max(100).required('O campo fantasia é obrigatório!'),
      cpf: string()
        .min(2, 'Deve conter pelo menos 2 caracteres')
        .max(100)
        .required('O campo razão social é obrigatório!'),
      email: string()
        .min(2, 'Deve conter pelo menos 2 caracteres')
        .max(100)
        .required('O campo razão social é obrigatório!'),
      login: string()
        .min(2, 'Deve conter pelo menos 2 caracteres')
        .max(100)
        .required('O campo razão social é obrigatório!'),
      senha: string()
        .min(2, 'Deve conter pelo menos 2 caracteres')
        .max(100)
        .required('O campo razão social é obrigatório!'),
      confirmacaoSenha: string()
        .min(2, 'Deve conter pelo menos 2 caracteres')
        .max(100)
        .required('O campo razão social é obrigatório!'),
      codigoAtivacao: string()
        .min(2, 'Deve conter pelo menos 2 caracteres')
        .max(100)
        .required('O campo razão social é obrigatório!'),
      profissao: string()
        .min(2, 'Deve conter pelo menos 2 caracteres')
        .max(100)
        .required('O campo razão social é obrigatório!'),
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
  const inputNomeReduzido = useRef(null)
  const inputNome = useRef(null)
  const inputCpf = useRef(null)
  const inputEmail = useRef(null)
  const inputLogin = useRef(null)
  const inputSenha = useRef(null)
  const inputConfirmacaoSenha = useRef(null)
  const inputProfissao = useRef(null)

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
        <h3 className="page-title"> Pessoa Fisica </h3>
      </div>
      <nav aria-label="breadcrumb">
        <p className="breadcrumb-item active">Cadastro de Pessoa Fisica</p>
      </nav>
      <div className="col-md-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="forms-sample">
              <Form.Group className="row">
                <label htmlFor="codigo" className="col-sm-1 col-form-label">
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

              <div className="form-row">
                <div className="col-md-6">
                  <Form.Group className="row ">
                    <label htmlFor="nomeReduzido" className="col-sm-3 col-form-label">
                      Nome Reduzido:
                    </label>
                    <div className="col-sm-9">
                      <Form.Control
                        type="text"
                        className="form-control"
                        id="nomeReduzido"
                        aria-label="descrição input"
                        placeholder="informe o nome reduzido"
                        ref={inputNomeReduzido}
                        {...getFieldProps('nomeReduzido')}
                      />
                      <div>{errors.nomeReduzido ? <small>{errors.nomeReduzido}</small> : null}</div>
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="nome" className="col-sm-3 col-form-label">
                      Nome:
                    </label>
                    <div className="col-sm-9">
                      <Form.Control
                        type="text"
                        className="form-control"
                        id="nome"
                        aria-label="descrição input"
                        placeholder="informe seu nome"
                        ref={inputNome}
                        {...getFieldProps('nome')}
                      />
                      <div>{errors.nome ? <small>{errors.nome}</small> : null}</div>
                    </div>
                  </Form.Group>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="cpf" className="col-sm-3 col-form-label">
                      CPF:
                    </label>
                    <div className="col-sm-9">
                      <Form.Control
                        type="text"
                        className="form-control"
                        id="cpf"
                        aria-label="descrição input"
                        placeholder="insira seu cpf"
                        ref={inputCpf}
                        {...getFieldProps('cpf')}
                      />
                      <div>{errors.cpf ? <small>{errors.cpf}</small> : null}</div>
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="profissao" className="col-sm-3 col-form-label">
                      Profissão:
                    </label>
                    <div className="col-sm-9">
                      <Form.Control
                        type="text"
                        className="form-control"
                        id="profissao"
                        aria-label="descrição input"
                        placeholder="informe sua profissão"
                        ref={inputProfissao}
                        {...getFieldProps('profissao')}
                      />
                      <div>{errors.profissao ? <small>{errors.profissao}</small> : null}</div>
                    </div>
                  </Form.Group>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="email" className="col-sm-3 col-form-label">
                      Email:
                    </label>
                    <div className="col-sm-9">
                      <Form.Control
                        type="text"
                        className="form-control"
                        id="email"
                        aria-label="descrição input"
                        placeholder="informe o seu email"
                        ref={inputEmail}
                        {...getFieldProps('email')}
                      />
                      <div>{errors.email ? <small>{errors.email}</small> : null}</div>
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="login" className="col-sm-3 col-form-label">
                      Login:
                    </label>
                    <div className="col-sm-9">
                      <Form.Control
                        type="text"
                        className="form-control"
                        id="login"
                        aria-label="descrição input"
                        placeholder="insira o login desejado"
                        ref={inputLogin}
                        {...getFieldProps('login')}
                      />
                      <div>{errors.login ? <small>{errors.login}</small> : null}</div>
                    </div>
                  </Form.Group>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="senha" className="col-sm-3 col-form-label">
                      Senha:
                    </label>
                    <div className="col-sm-9">
                      <Form.Control
                        type="text"
                        className="form-control"
                        id="senha"
                        aria-label="descrição input"
                        placeholder="defina sua senha"
                        ref={inputSenha}
                        {...getFieldProps('senha')}
                      />
                      <div>{errors.senha ? <small>{errors.senha}</small> : null}</div>
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="confirmacaoSenha" className="col-sm-3 col-form-label">
                      Confirmação Senha:
                    </label>
                    <div className="col-sm-9">
                      <Form.Control
                        type="text"
                        className="form-control"
                        id="confirmacaoSenha"
                        aria-label="descrição input"
                        placeholder="confirme a senha"
                        ref={inputConfirmacaoSenha}
                        {...getFieldProps('confirmacaoSenha')}
                      />
                      <div>{errors.confirmacaoSenha ? <small>{errors.confirmacaoSenha}</small> : null}</div>
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

export default CadastroPessoaFisica
