import React from 'react';

const NormalRow1 = React.createClass({
  render() {
    return(
      <tr>
        <td>{this.props.row.normal_name}</td>
        <td>{this.props.row.damage}</td>
        <td>{this.props.row.guard}</td>
        <td>{this.props.row.attack_lvl}</td>
        <td>{this.props.row.startup}</td>
      </tr>
    )
  }
})
const NormalRow2 = React.createClass({
  render() {
    return(
      <tr>
        <td>{this.props.row.normal_name}</td>
        <td>{this.props.row.active}</td>
        <td>{this.props.row.invuln}</td>
        <td>{this.props.row.recovery}</td>
        <td>{this.props.row.frame_advantage}</td>
      </tr>
    )
  }
})

const NormalInfoMobile2 = React.createClass({
  render() {
    return (
      <div>
        <table className="mobile-table table table-bordered">
          <thead>
            <tr>
              <th>normal</th>
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
      return <NormalRow2 row={row} key={'NRM2 ' + ind}/>
    })
  }
})

const NormalInfoMobile1 = React.createClass({
  render() {
    return (
      <div>
        <table className="mobile-table table table-bordered">
          <thead>
            <tr>
              <th>normal</th>
              <th>damage</th>
              <th>guard</th>
              <th>attack level</th>
              <th>startup</th>
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
      return <NormalRow1 row={row} key={'NRM ' + ind} />
    })
  }
})

export { NormalInfoMobile1, NormalInfoMobile2 };
