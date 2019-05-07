import React from 'react'


class BadgesList extends React.Component {
  render() {
    let {Badges} = this.props;
    return (
      <ul className="list-unstyled">
        {Badges.map( badge => {
        return (
        <li key={badge.id}>
          <p>
            {badge.firstName}
            {badge.firstName}
            {badge.lastName}
          </p>
        </li>
        );
        })}
      </ul>
    )
  }
}

export default BadgesList;
