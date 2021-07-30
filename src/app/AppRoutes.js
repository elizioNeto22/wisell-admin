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
import GrupoFilial from './pages/Cadastros/GrupoFilial'
import CadastroGrupoFilial from './pages/Cadastros/GrupoFilial/cadastro'
import TipoFilial from './pages/Cadastros/TipoFilial'
import CadastroTipoFilial from './pages/Cadastros/TipoFilial/cadastro'
import GrupoInterno from './pages/Cadastros/GrupoInterno'
import CadastroGrupoInterno from './pages/Cadastros/GrupoInterno/cadastro'
import GrupoExterno from './pages/Cadastros/GrupoExterno'
import CadastroGrupoExterno from './pages/Cadastros/GrupoExterno/cadastro'
import AtividadeComercial from './pages/Cadastros/AtividadeComercial'
import CadastroAtividadeComercial from './pages/Cadastros/AtividadeComercial/cadastro'
import RamoAtividade from './pages/Cadastros/RamoAtividade'
import CadastroRamoAtividade from './pages/Cadastros/RamoAtividade/cadastro'
import PessoaJuridica from './pages/Cadastros/PessoaJuridica'
import CadastroPessoaJuridica from './pages/Cadastros/PessoaJuridica/cadastro'
import PessoaFisica from './pages/Cadastros/PessoaFisica'
import CadastroPessoaFisica from './pages/Cadastros/PessoaFisica/cadastro'
import Filial from './pages/Cadastros/Filial'
import ParceiroComercial from './pages/Cadastros/ParceiroComercial'
import CadastroParceiroComercial from './pages/Cadastros/ParceiroComercial/cadastro'
import GrupoEconomico from './pages/Cadastros/GrupoEconomico'
import CadastroGrupoEconomico from './pages/Cadastros/GrupoEconomico/cadastro'
import Cliente from './pages/Cadastros/Cliente'
import CadastroCliente from './pages/Cadastros/Cliente/cadastro'
import Vendedor from './pages/Cadastros/Vendedor'
import CadastroVendedor from './pages/Cadastros/Vendedor/cadastro'

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
          <Route path="/tables/unidade" exact component={Unidade} />
          <Route path="/cadastros/unidade" exact component={CadastroUnidades} />
          <Route path="/cadastros/unidade/edit/:id" exact component={CadastroUnidades} />
          <Route path="/cadastros/unidade/clone/:id" exact component={CadastroUnidades} />

          <Route path="/tables/Departamento" exact component={Departamento} />
          <Route path="/cadastros/departamento" exact component={CadastroDepartamentos} />
          <Route path="/cadastros/departamento/edit/:id" exact component={CadastroDepartamentos} />
          <Route path="/cadastros/departamento/clone/:id" exact component={CadastroDepartamentos} />

          <Route path="/tables/secao" exact component={Secao} />
          <Route path="/cadastros/secao" exact component={CadastroSecoes} />
          <Route path="/cadastros/secao/edit/:id" exact component={CadastroSecoes} />
          <Route path="/cadastros/secao/clone/:id" exact component={CadastroSecoes} />

          <Route path="/tables/categoria" exact component={Categoria} />
          <Route path="/cadastros/categoria" exact component={CadastroCategorias} />
          <Route path="/cadastros/categoria/edit/:id" exact component={CadastroCategorias} />
          <Route path="/cadastros/categoria/clone/:id" exact component={CadastroCategorias} />

          <Route path="/tables/subcategoria" exact component={SubCategorias} />
          <Route path="/cadastros/subcategoria" exact component={CadastrosSubcategorias} />
          <Route path="/cadastros/subcategoria/edit/:id" exact component={CadastrosSubcategorias} />
          <Route path="/cadastros/subcategoria/clone/:id" exact component={CadastrosSubcategorias} />

          <Route path="/tables/marca" exact component={Marcas} />
          <Route path="/cadastros/marca" exact component={CadastroMarcas} />
          <Route path="/cadastros/marca/edit/:id" exact component={CadastroMarcas} />
          <Route path="/cadastros/marca/clone/:id" exact component={CadastroMarcas} />

          <Route path="/tables/apresentacao" exact component={Apresentacoes} />
          <Route path="/cadastros/apresentacao" exact component={CadastroApresentacoes} />
          <Route path="/cadastros/apresentacao/edit/:id" exact component={CadastroApresentacoes} />
          <Route path="/cadastros/apresentacao/clone/:id" exact component={CadastroApresentacoes} />

          <Route path="/tables/produto" exact component={Produto} />
          <Route path="/cadastros/produto" exact component={CadastroProdutos} />
          <Route path="/cadastros/produto/edit/:id" exact component={CadastroProdutos} />
          <Route path="/cadastros/produto/clone/:id" exact component={CadastroProdutos} />

          <Route path="/tables/tipofilial" component={TipoFilial} />
          <Route path="/cadastros/tipofilial" component={CadastroTipoFilial} />

          <Route path="/tables/grupofilial" component={GrupoFilial} />
          <Route path="/cadastros/grupofilial" component={CadastroGrupoFilial} />

          <Route path="/tables/grupoexterno" component={GrupoExterno} />
          <Route path="/cadastros/grupoexterno" component={CadastroGrupoExterno} />

          <Route path="/tables/grupointerno" component={GrupoInterno} />
          <Route path="/cadastros/grupointerno" component={CadastroGrupoInterno} />

          <Route path="/tables/atividadecomercial" component={AtividadeComercial} />
          <Route path="/cadastros/atividadecomercial" component={CadastroAtividadeComercial} />

          <Route path="/tables/ramoatividade" component={RamoAtividade} />
          <Route path="/cadastros/ramoatividade" component={CadastroRamoAtividade} />

          <Route path="/tables/pessoajuridica" component={PessoaJuridica} />
          <Route path="/cadastros/pessoajuridica" component={CadastroPessoaJuridica} />

          <Route path="/tables/pessoafisica" component={PessoaFisica} />
          <Route path="/cadastros/pessoafisica" component={CadastroPessoaFisica} />

          <Route path="/cadastros/filial" component={Filial} />

          <Route path="/tables/grupoEconomico" exact component={GrupoEconomico} />
          <Route path="/cadastros/grupoEconomico" exact component={CadastroGrupoEconomico} />
          <Route path="/cadastros/grupoEconomico/edit/:id" exact component={CadastroGrupoEconomico} />
          <Route path="/cadastros/grupoEconomico/clone/:id" exact component={CadastroGrupoEconomico} />

          <Route path="/tables/parceiroComercial" exact component={ParceiroComercial} />
          <Route path="/cadastros/parceiroComercial" exact component={CadastroParceiroComercial} />
          <Route path="/cadastros/parceiroComercial/edit/:id" exact component={CadastroParceiroComercial} />
          <Route path="/cadastros/parceiroComercial/clone/:id" exact component={CadastroParceiroComercial} />

          <Route path="/tables/cliente" exact component={Cliente} />
          <Route path="/cadastros/cliente" exact component={CadastroCliente} />
          <Route path="/cadastros/cliente/edit/:id" exact component={CadastroCliente} />
          <Route path="/cadastros/cliente/clone/:id" exact component={CadastroCliente} />

          <Route path="/tables/vendedor" exact component={Vendedor} />
          <Route path="/cadastros/vendedor" exact component={CadastroVendedor} />
          <Route path="/cadastros/vendedor/edit/:id" exact component={CadastroVendedor} />
          <Route path="/cadastros/vendedor/clone/:id" exact component={CadastroVendedor} />

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
