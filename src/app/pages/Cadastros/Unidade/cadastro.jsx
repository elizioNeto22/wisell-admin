import React, { useEffect, useRef, useState } from 'react'
import { Form } from 'react-bootstrap'
import { object, string } from 'yup'
import { useFormik, Formik } from 'formik'


const CadastroUnidades = (props) => {
  const { id } = props.match.params
  const isAddMode = !id

  const [initialValues, setInitialValues] = useState({
    codigo: 0,
    descricao: '',
    registro: '',
    usuario: '',
  })

  const { getFieldProps, isSubmitting, isValidating, errors, handleSubmit, setFieldValue } = useFormik({
    initialValues,
    validationSchema: object({
      descricao: string()
        .min(2, 'Deve conter pelo menos 2 caracteres')
        .max(100)
        .required('O campo Descrição é obrigatório!'),
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

  useEffect(() => {
    if (!isAddMode) {
      // get user and set form fields
      const data = { codigo: id, descricao: 'edit', registro: '', usuario: '' }
      setFieldValue('codigo', data.codigo, false) //"codigo",data.codigo);
      setFieldValue('descricao', data.descricao, false) //"codigo",data.codigo);
      //formik.setFieldValue("descricao",data.descricao);
      //inputCodigo = data.codigo;
      setInitialValues(data)
      //alert(JSON.stringify(data))
    }
  }, [id, isAddMode, setFieldValue])

  return (
    <div>
    <div className="page-header">
    <h3 className="page-title"> Unidade </h3>
    
    </div>
    <nav aria-label="breadcrumb">
              <p className="breadcrumb-item active">Cadastro de unidade</p>
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
                  placeholder="Descrição da unidade"
                  ref={inputDescricao}
                  {...getFieldProps('descricao')}
                />
                 <div>{errors.descricao ? <small>{errors.descricao}</small> : null}</div>
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

export default CadastroUnidades
