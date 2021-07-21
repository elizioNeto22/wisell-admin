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
          <li className="nav-item nav-profile not-navigation-link">
            <div className="nav-link">
              <Dropdown>
                <Dropdown.Toggle className="nav-link user-switch-dropdown-toggler p-0 toggle-arrow-hide bg-transparent border-0 w-100">
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="profile-image">
                      <img
                        className="img-xs rounded-circle"
                        src={require('../../assets/images/faces/face8.jpg')}
                        alt="profile"
                      />
                      <div className="dot-indicator bg-success"></div>
                    </div>
                    <div className="text-wrapper">
                      <p className="profile-name">Allen Moreno</p>
                      <p className="designation">Premium user</p>
                    </div>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown">
                  <Dropdown.Item
                    className="dropdown-item p-0 preview-item d-flex align-items-center"
                    href="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <div className="d-flex">
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-bookmark-plus-outline mr-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
                        <i className="mdi mdi-account-outline mr-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-alarm-check mr-0"></i>
                      </div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item preview-item d-flex align-items-center text-small"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <Trans>Gerenciamento de Conta</Trans>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item preview-item d-flex align-items-center text-small"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <Trans>Change Password</Trans>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item preview-item d-flex align-items-center text-small"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <Trans>Check Inbox</Trans>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item preview-item d-flex align-items-center text-small"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <Trans>Sign Out</Trans>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </li>

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
                    className={this.isPathActive('/basic-ui/buttons') ? 'nav-link active' : 'nav-link'}
                    to="/basic-ui/buttons"
                  >
                    <Trans>Vendedor</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  {' '}
                  <Link
                    className={this.isPathActive('/basic-ui/buttons') ? 'nav-link active' : 'nav-link'}
                    to="/basic-ui/buttons"
                  >
                    <Trans>Cliente</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  {' '}
                  <Link
                    className={this.isPathActive('/basic-ui/buttons') ? 'nav-link active' : 'nav-link'}
                    to="/basic-ui/buttons"
                  >
                    <Trans>Grupo Econômico</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  {' '}
                  <Link
                    className={this.isPathActive('/basic-ui/buttons') ? 'nav-link active' : 'nav-link'}
                    to="/basic-ui/buttons"
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
                <Trans>Entidades Jurídicas</Trans>
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
                    <Trans>Pessoa Jurídica</Trans>
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
                    <Trans>Apresentação</Trans>
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
                    <Trans>Seção</Trans>
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
