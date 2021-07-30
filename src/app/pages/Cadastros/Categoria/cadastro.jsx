import React, { useEffect, useRef, useState } from 'react'
import { useFormik, Formik } from 'formik'
import { object, string, number, SchemaOf } from 'yup'
import { Form, ButtonGroup, Button } from 'react-bootstrap'
import { IoSaveOutline } from 'react-icons/io5'
import { FcCancel } from 'react-icons/fc'
import { useQuery } from 'react-apollo'
import * as queries from '../../../../api/queries'

const CadastroCategorias = (props) => {
  const { id } = props.match.params
  const isAddMode = !id
  const { data } = useQuery(queries.CATEGORIAS)

  const [initialValues, setInitialValues] = useState({
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
      secao: object({
        codigo: number().min(1, 'Por favor, selecione uma opção de seção').nullable(),
        departamento: object({
          codigo: number().min(1, 'Por favor, selecione uma opção de departamento').nullable(),
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
  const inputSecao = useRef(null)
  const inputDepartamento = useRef(null)

  useEffect(() => {
    if (!isAddMode) {
      // get user and set form fields
      const dataSecao = {
        codigo: id,
        descricao: 'edit',
        registro: '',
        usuario: '',
        secao: {
          codigo: 35,
          descricao: 'Descrição Seção 35',
          registro: '',
          usuario: '',
          departamento: {
            codigo: 25,
            descricao: 'Descrição Dep 25',
            registro: '',
            usuario: '',
          },
        },
      }
      setFieldValue('codigo', dataSecao.codigo, false) //"codigo",data.codigo);
      setFieldValue('descricao', dataSecao.descricao, false) //"codigo",data.codigo);
      setFieldValue('secao', dataSecao.secao.codigo, false) //"codigo",data.codigo);
      setFieldValue('departamento', dataSecao.secao.departamento.codigo, false) //"codigo",data.codigo);
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
       <h3 className="page-title"> Categoria </h3>
      </div>
        <nav aria-label="breadcrumb">
          <p className="breadcrumb-item active">Cadastro de Categoria</p>
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
                  placeholder="Descrição de categoria"
                  ref={inputDescricao}
                  {...getFieldProps('descricao')}
                />
                <div>{errors.descricao ? <small>{errors.descricao}</small> : null}</div>
              </div>
            </Form.Group>
            <Form.Group className="row">
              <label htmlFor="secao" className="col-sm-2 col-form-label">
                Seção:
              </label>
              <div className="col-sm-10">
              <select
                    className="form-control form-control-sm"
                    id="categoria"
                    ref={inputSecao}
                    {...getFieldProps('secao.codigo')}
                  >
                    <option value={0} selected>
                      Selecione uma Seção
                    </option>
                    {data?.categorias?.map(({ secao }) => (
                      <option value={secao.codigo}>{secao.descricao}</option>
                    ))}
                  </select>
                <div>{errors.secao?.codigo ? <small>{errors.secao?.codigo}</small> : null}</div>
              </div>
            </Form.Group>
            <Form.Group className="row">
              <label htmlFor="departamento" className="col-sm-2 col-form-label">
                Departamento:
              </label>
              <div className="col-sm-10">
                <select
                  className="form-control form-control-sm"
                  id="departamento"
                  ref={inputDepartamento}
                  {...getFieldProps('secao.departamento.codigo')}
                >
                 <option value={0} selected>
                      Selecione um departamento
                    </option>
                    {data?.categorias?.map(({ secao }) => (
                      <option value={secao.departamento.codigo}>{secao.departamento.descricao}</option>
                    ))}
                </select>
              <div>
                {errors.secao?.departamento?.codigo ? <small>{errors.secao?.departamento?.codigo}</small> : null}
              </div>
            </div>
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

export default CadastroCategorias
