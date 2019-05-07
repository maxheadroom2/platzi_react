import React from 'react';
import "./styles/Badge.css"
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
  render() {

  //para evitar escribir tanto desestructuramos creando una constante
  const {firstName, lastName, avatarUrl, titulo, twitter, footer} = this.props;

    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de conferencia" />
        </div>
        <div className="Badge__section-name">
          <img className="Badge__avatar" src={avatarUrl} alt="Avatar" />
          <h1>{firstName}<br />{lastName}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>{titulo}</h3>
          <p>{twitter}</p>
        </div>
        <div className="Badge__footer">{footer}</div>
      </div>
    )
  }
}

export default Badge;
