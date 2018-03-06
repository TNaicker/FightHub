import React from 'react';

const NormalRow = React.createClass({
  render() {
    return(
      <tr>
        <td>{this.props.row.normal_name}</td>
        <td>{this.props.row.damage}</td>
        <td>{this.props.row.guard}</td>
        <td>{this.props.row.attack_lvl}</td>
        <td>{this.props.row.startup}</td>
        <td>{this.props.row.active}</td>
        <td>{this.props.row.invuln}</td>
        <td>{this.props.row.recovery}</td>
        <td>{this.props.row.frame_advantage}</td>
      </tr>
    )
  }
})

export default React.createClass({
  render() {
    return (
      <div>
        <table className="normal-table table">
          <thead>
            <tr>
              <th>normal</th>
              <th>damage</th>
              <th>guard</th>
              <th>attack level</th>
              <th>startup</th>
              <th>active</th>
              <th>invlun</th>
              <th>recovery</th>
              <th>frame adv</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  },
  renderRows() {
    return this.props.charmoves.map((row, ind) => {
      return <NormalRow row={row} key={'NR ' + ind}/>
    })
  }
})
