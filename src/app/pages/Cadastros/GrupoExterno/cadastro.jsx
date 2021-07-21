import React, { useEffect, useRef, useState } from 'react'
import { useFormik, Formik } from 'formik'
import { object, string, number, SchemaOf } from 'yup'
import { Form } from 'react-bootstrap'

const CadastroGrupoExterno = (props) => {
  const { id } = props.match.params
  const isAddMode = !id

  const [initialValues, setInitialValues] = useState({
    codigo: 0,
    descricao: '',
    registro: '',
    usuario: '',
    responsavel: {
      codigo: 0,
      descricao: '',
      registro: '',
      usuario: '',
    },
  })

  const { getFieldProps, isSubmitting, isValidating, errors, handleSubmit, setFieldValue } = useFormik({
    initialValues,
    validationSchema: object({
      descricao: string()
        .min(2, 'Deve conter pelo menos 2 caracteres')
        .max(100)
        .required('O campo Descrição é obrigatório!'),
      responsavel: object({
        codigo: number().min(1, 'Por favor, selecione uma opção de responsável').nullable(),
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
  const inputResponsavel = useRef(null)

  useEffect(() => {
    if (!isAddMode) {
      // get user and set form fields
      const dataSecao = {
        codigo: id,
        descricao: 'edit',
        registro: '',
        usuario: '',
        responsavel: {
          codigo: 25,
          descricao: 'Descrição Responsável 95',
          registro: '',
          usuario: '',
        },
      }
      setFieldValue('codigo', dataSecao.codigo, false) //"codigo",data.codigo);
      setFieldValue('descricao', dataSecao.descricao, false) //"codigo",data.codigo);
      setFieldValue('responsavel', dataSecao.responsavel.codigo, false) //"codigo",data.codigo);
      //formik.setFieldValue("descricao",data.descricao);
      //inputCodigo = data.codigo;
      setInitialValues(dataSecao)
      //alert(JSON.stringify(data))
      // console.log(data)
    }
  }, [id, isAddMode, setFieldValue])

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> Grupo Externo </h3>
      </div>
      <nav aria-label="breadcrumb">
        <p className="breadcrumb-item active">Cadastro de grupo externo</p>
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
                    placeholder="Descrição do grupo externo"
                    ref={inputDescricao}
                    {...getFieldProps('descricao')}
                  />
                  <div>{errors.descricao ? <small>{errors.descricao}</small> : null}</div>
                </div>
              </Form.Group>
              <Form.Group className="row">
                <label htmlFor="responsavel" className="col-sm-2 col-form-label">
                  Responsável:
                </label>
                <div className="col-sm-10">
                  <select
                    className="form-control form-control-sm"
                    id="responsavel"
                    ref={inputResponsavel}
                    {...getFieldProps('responsavel.codigo')}
                  >
                    <option value={0} selected>
                      Selecione um responsável
                    </option>
                    <option value={29}>Grupo Externo: 1</option>
                    <option value={30}>Grupo Externo: 2</option>
                    <option value={31}>Grupo Externo: 3</option>
                    <option value={32}>Grupo Externo: 4</option>
                  </select>
                  <div>{errors.responsavel?.codigo ? <small>{errors.responsavel?.codigo}</small> : null}</div>
                </div>
              </Form.Group>
              <button type="submit" className="btn btn-primary btn-lg" style={{ float: 'right' }}>
                Salvar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CadastroGrupoExterno
