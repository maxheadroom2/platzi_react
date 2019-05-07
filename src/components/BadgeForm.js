import React from 'react';

class BadgeForm extends React.Component {
  // se crea un metodo para el input
  // si queremos obtener lo escrito en el input seria | value: e.target.value
  // si quisieramos poner una alerta de a longitud del input seria asi en handleChange
  //
  // console.log({value: e.target.value.length});
  // var largo = e.target.value.length
  // largo === 9 ? alert('si') : console.log("no");

  // inicializamos el state, ya que usamos this.state y este no esta inicializado, dicho esto estamos controlando los inputs lo cual no tenemos 2 valores logicos de un solo input
  // state = {};

  // handleChange = e => {
  //    console.log({ value: e.target.value, name: e.target.name });
  //   this.setState({
  //      lo guardamos dentro de una llaves
  //     [e.target.name]: e.target.value,
  //   })
  // }

  handleClick = e => {
    console.log(" El boton se presiono ");
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(" Se envio el formulario ");
    console.log(this.state);
  }

  render() {
    let {onChange} = this.props;
    let {firstName, lastName, titulo, email, twitter} = this.props.formValues;
    return (
      <div>
        <h1>Nuevo Registro</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Primer Nombre</label>
            <input
            onChange={onChange}
            className="form-control"
            type="text"
            name="firstName"
            value={firstName}
            />
          </div>
          <div className="form-group">
            <label>Segundo Nombre</label>
            <input
            onChange={onChange}
            className="form-control"
            type="text"
            name="lastName"
            value={lastName}
            />
          </div>
          <div className="form-group">
            <label>Correo electronico</label>
            <input
            onChange={onChange}
            className="form-control"
            type="email"
            name="email"
            value={email}
            />
          </div>
          <div className="form-group">
            <label>Carrera</label>
            <input
            onChange={onChange}
            className="form-control"
            type="text"
            name="titulo"
            value={titulo}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
            onChange={onChange}
            className="form-control"
            type="text"
            name="twitter"
            value={twitter}
            />
          </div>
          <button
          onClick={this.handleClick}
          className="btn btn-primary"
          >Guardar</button>
        </form>
      </div>
    )
  }
}
export default BadgeForm;
