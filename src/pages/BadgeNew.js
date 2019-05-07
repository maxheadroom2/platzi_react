import React from 'react';
import Badge from '../components/Badge'
// componentes
import NavBar from '../components/NavBar';
import header from '../images/badge-header.svg';
import BadgeForm from '../components/BadgeForm';
//Estilos
import './styles/BadgeNew.css';

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: 'Nombre',
      lastName: '',
      titulo: '',
      email: '',
      twitter: ''
    }
  };

  handleChange = e => {
    // si quisiera añadir un filtro de longitud o un input seria en esta seccion ejemplo las dos lineas abajo
    // var largo = e.target.value.length
    // largo === 9 ? alert('si') : console.log("no");
    // const nextForm = this.state.form
    // nextForm[e.target.name] = e.target.value;
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }

  render() {
    let {firstName, lastName, titulo, email, twitter} = this.state.form;
    return (
      <div>
        <NavBar/>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge firstName={firstName}
              lastName={lastName}
              avatarUrl="https://www.gravatar.com/avatar?d=identicon"
              titulo={titulo}
              email={email}
              twitter={twitter.length > 1 ? `@`+twitter : ``}
              footer="Sistema Inteligentes WEB"
              />
            </div>
            <div className="col-6">
              <BadgeForm
              onChange={this.handleChange}
              // por medio de formValues regresamos en valor al componente, esto por que el value del otro compomente se hace no controlado ya que el componente no guarda el valor
              formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Badges;
