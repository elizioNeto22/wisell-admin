import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Collapse } from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'
import { Trans } from 'react-i18next'

class Sidebar extends Component {
  state = {}

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({ [menuState]: false })
    } else if (Object.keys(this.state).length === 0) {
      this.setState({ [menuState]: true })
    } else {
      Object.keys(this.state).forEach((i) => {
        this.setState({ [i]: false })
      })
      this.setState({ [menuState]: true })
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged()
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active')
    Object.keys(this.state).forEach((i) => {
      this.setState({ [i]: false })
    })

    const dropdownPaths = [
      { path: '/apps', state: 'appsMenuOpen' },
      { path: '/basic-ui', state: 'basicUiMenuOpen' },
      { path: '/form-elements', state: 'formElementsMenuOpen' },
      { path: '/tables', state: 'tablesMenuOpen' },
      { path: '/icons', state: 'iconsMenuOpen' },
      { path: '/charts', state: 'chartsMenuOpen' },
      { path: '/user-pages', state: 'userPagesMenuOpen' },
      { path: '/error-pages', state: 'errorPagesMenuOpen' },
    ]

    dropdownPaths.forEach((obj) => {
      if (this.isPathActive(obj.path)) {
        this.setState({ [obj.state]: true })
      }
    })
  }
  render() {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="text-center sidebar-brand-wrapper d-flex align-items-center">
          <a className="sidebar-brand brand-logo" href="index.html">
            <img src={require('../../assets/images/logoprincipal.svg')} alt="logo" />
          </a>
          <a className="sidebar-brand brand-logo-mini" href="index.html">
            <img src={require('../../assets/images/logo-mini.svg')} alt="logo" />
          </a>
        </div>
        <ul className="nav">
          <li className={this.isPathActive('/dashboard') ? 'nav-item active' : 'nav-item'}>
            <Link className="nav-link" to="/dashboard">
              <i className="mdi mdi-television menu-icon"></i>
              <span className="menu-title">
                <Trans>Apoio</Trans>
              </span>
            </Link>
          </li>
          <li className={this.isPathActive('/basic-ui') ? 'nav-item active' : 'nav-item'}>
            <div
              className={this.state.basicUiMenuOpen ? 'nav-link menu-expanded' : 'nav-link'}
              onClick={() => this.toggleMenuState('basicUiMenuOpen')}
              data-toggle="collapse"
            >
              <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              <span className="menu-title">
                <Trans>Vendas</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.basicUiMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {' '}
                  <Link
                    className={this.isPathActive('/basic-ui/buttons') ? 'nav-link active' : 'nav-link'}
                    to="/basic-ui/buttons"
                  >
                    <Trans>Painel de Controle</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  {' '}
                  <Link
                    className={this.isPathActive('/tables/vendedor') ? 'nav-link active' : 'nav-link'}
                    to="/tables/vendedor"
                  >
                    <Trans>Vendedor</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  {' '}
                  <Link
                    className={this.isPathActive('/tables/cliente') ? 'nav-link active' : 'nav-link'}
                    to="/tables/cliente"
                  >
                    <Trans>Cliente</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  {' '}
                  <Link
                    className={this.isPathActive('/tables/grupoEconomico') ? 'nav-link active' : 'nav-link'}
                    to="/tables/grupoEconomico"
                  >
                    <Trans>Grupo Econ??mico</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  {' '}
                  <Link
                    className={this.isPathActive('/tables/parceiroComercial') ? 'nav-link active' : 'nav-link'}
                    to="/tables/parceiroComercial"
                  >
                    <Trans>Parceiros Comerciais</Trans>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li className={this.isPathActive('/form-elements') ? 'nav-item active' : 'nav-item'}>
            <div
              className={this.state.formElementsMenuOpen ? 'nav-link menu-expanded' : 'nav-link'}
              onClick={() => this.toggleMenuState('formElementsMenuOpen')}
              data-toggle="collapse"
            >
              <i className="mdi mdi-format-list-bulleted menu-icon"></i>
              <span className="menu-title">
                <Trans>Entidades Jur??dicas</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.formElementsMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {' '}
                  <Link
                    className={this.isPathActive('/cadastros/filial') ? 'nav-link active' : 'nav-link'}
                    to="/cadastros/filial"
                  >
                    <Trans>Filial</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  {' '}
                  <Link
                    className={this.isPathActive('/tables/pessoafisica') ? 'nav-link active' : 'nav-link'}
                    to="/tables/pessoafisica"
                  >
                    <Trans>Pessoa Fisica</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  {' '}
                  <Link
                    className={this.isPathActive('/tables/pessoajuridica') ? 'nav-link active' : 'nav-link'}
                    to="/tables/pessoajuridica"
                  >
                    <Trans>Pessoa Jur??dica</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  {' '}
                  <Link
                    className={this.isPathActive('/tables/grupofilial') ? 'nav-link active' : 'nav-link'}
                    to="/tables/grupofilial"
                  >
                    <Trans>Grupo Filial</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  {' '}
                  <Link
                    className={this.isPathActive('/tables/tipofilial') ? 'nav-link active' : 'nav-link'}
                    to="/tables/tipofilial"
                  >
                    <Trans>Tipo Filial</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  {' '}
                  <Link
                    className={this.isPathActive('/tables/grupointerno') ? 'nav-link active' : 'nav-link'}
                    to="/tables/grupointerno"
                  >
                    <Trans>Grupo Interno</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  {' '}
                  <Link
                    className={this.isPathActive('/tables/grupoexterno') ? 'nav-link active' : 'nav-link'}
                    to="/tables/grupoexterno"
                  >
                    <Trans>Grupo Externo</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  {' '}
                  <Link
                    className={this.isPathActive('/tables/atividadecomercial') ? 'nav-link active' : 'nav-link'}
                    to="/tables/atividadecomercial"
                  >
                    <Trans>Atividade Comercial</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  {' '}
                  <Link
                    className={this.isPathActive('/tables/ramoatividade') ? 'nav-link active' : 'nav-link'}
                    to="/tables/ramoatividade"
                  >
                    <Trans>Ramo Atividade</Trans>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li className={this.isPathActive('/tables') ? 'nav-item active' : 'nav-item'}>
            <div
              className={this.state.tablesMenuOpen ? 'nav-link menu-expanded' : 'nav-link'}
              onClick={() => this.toggleMenuState('tablesMenuOpen')}
              data-toggle="collapse"
            >
              <i className="mdi mdi-table-large menu-icon"></i>
              <span className="menu-title">
                <Trans>Produto</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.tablesMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {' '}
                  <Link
                    className={this.isPathActive('/tables/produto') ? 'nav-link active' : 'nav-link'}
                    to="/tables/produto"
                  >
                    <Trans>Produto</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  {' '}
                  <Link
                    className={this.isPathActive('/tables/apresentacao') ? 'nav-link active' : 'nav-link'}
                    to="/tables/apresentacao"
                  >
                    <Trans>Apresenta????o</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  {' '}
                  <Link
                    className={this.isPathActive('/tables/marca') ? 'nav-link active' : 'nav-link'}
                    to="/tables/marca"
                  >
                    <Trans>Marca</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  {' '}
                  <Link
                    className={this.isPathActive('/tables/subcategoria') ? 'nav-link active' : 'nav-link'}
                    to="/tables/subcategoria"
                  >
                    <Trans>Sub-categoria</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  {' '}
                  <Link
                    className={this.isPathActive('/tables/categoria') ? 'nav-link active' : 'nav-link'}
                    to="/tables/categoria"
                  >
                    <Trans>Categoria</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  {' '}
                  <Link
                    className={this.isPathActive('/tables/secao') ? 'nav-link active' : 'nav-link'}
                    to="/tables/secao"
                  >
                    <Trans>Se????o</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  {' '}
                  <Link
                    className={this.isPathActive('/tables/departamento') ? 'nav-link active' : 'nav-link'}
                    to="/tables/departamento"
                  >
                    <Trans>Departamento</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  {' '}
                  <Link
                    className={this.isPathActive('/tables/unidade') ? 'nav-link active' : 'nav-link'}
                    to="/tables/unidade"
                  >
                    <Trans>Unidade</Trans>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
        </ul>
      </nav>
    )
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path)
  }

  componentDidMount() {
    this.onRouteChanged()
    // add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body')
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      el.addEventListener('mouseover', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open')
        }
      })
      el.addEventListener('mouseout', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open')
        }
      })
    })
  }
}

export default withRouter(Sidebar)
