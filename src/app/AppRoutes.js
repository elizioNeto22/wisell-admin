import React, { Component, Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Spinner from '../app/shared/Spinner'
import Unidade from './pages/Cadastros/Unidade'
import CadastroUnidades from './pages/Cadastros/Unidade/cadastro'
import Departamento from './pages/Cadastros/Departamento'
import CadastroDepartamentos from './pages/Cadastros/Departamento/cadastro'
import Secao from './pages/Cadastros/Secao'
import CadastroSecoes from './pages/Cadastros/Secao/cadastro'
import Categoria from './pages/Cadastros/Categoria'
import CadastroCategorias from './pages/Cadastros/Categoria/cadastro'
import SubCategorias from './pages/Cadastros/Subcategoria'
import CadastrosSubcategorias from './pages/Cadastros/Subcategoria/cadastro'
import Produto from './pages/Cadastros/Produto'
import CadastroProdutos from './pages/Cadastros/Produto/cadastro'
import Marcas from './pages/Cadastros/Marca'
import CadastroMarcas from './pages/Cadastros/Marca/cadastro'
import Apresentacoes from './pages/Cadastros/Apresentacao'
import CadastroApresentacoes from './pages/Cadastros/Apresentacao/cadastro'

const Dashboard = lazy(() => import('./dashboard/Dashboard'))

const Buttons = lazy(() => import('./basic-ui/Buttons'))
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'))

const BasicElements = lazy(() => import('./form-elements/BasicElements'))

const BasicTable = lazy(() => import('./tables/BasicTable'))

const Mdi = lazy(() => import('./icons/Mdi'))

const ChartJs = lazy(() => import('./charts/ChartJs'))

const Error404 = lazy(() => import('./error-pages/Error404'))
const Error500 = lazy(() => import('./error-pages/Error500'))

const Login = lazy(() => import('./user-pages/Login'))
const Register1 = lazy(() => import('./user-pages/Register'))

class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/tables/unidade" component={Unidade} />
          <Route path="/cadastros/unidade" component={CadastroUnidades} />
          <Route path="/tables/Departamento" component={Departamento} />
          <Route path="/cadastros/departamento" component={CadastroDepartamentos} />
          <Route path="/tables/secao" component={Secao} />
          <Route path="/cadastros/secao" component={CadastroSecoes} />
          <Route path="/tables/categoria" component={Categoria} />
          <Route path="/cadastros/categoria" component={CadastroCategorias}/>
          <Route path="/tables/subcategoria" component={SubCategorias}/>
          <Route path="/cadastros/subcategoria" component={CadastrosSubcategorias}/>
          <Route path="/tables/produto" component={Produto}/>
          <Route path="/cadastros/produto" component={CadastroProdutos}/>
          <Route path="/tables/marca" component={Marcas}/>
          <Route path="/cadastros/marca" component={CadastroMarcas}/>
          <Route path="/tables/apresentacao" component={Apresentacoes}/>
          <Route path="/cadastros/apresentacao" component={CadastroApresentacoes}/>
          

          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/basic-ui/buttons" component={Buttons} />
          <Route path="/basic-ui/dropdowns" component={Dropdowns} />
          <Route path="/form-Elements/basic-elements" component={BasicElements} />
          <Route path="/tables/basic-table" component={BasicTable} />
          <Route path="/icons/mdi" component={Mdi} />
          <Route path="/charts/chart-js" component={ChartJs} />
          <Route path="/user-pages/login-1" component={Login} />
          <Route path="/user-pages/register-1" component={Register1} />
          <Route path="/error-pages/error-404" component={Error404} />
          <Route path="/error-pages/error-500" component={Error500} />

          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    )
  }
}

export default AppRoutes
