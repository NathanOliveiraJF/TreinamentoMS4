import React from "react";

class ContatoLista extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItens() {
    return  (
      this.props.objetos.map(x => {
        return (
          <tr key={x.ContatoId}>
            <td>{x.Nome}</td>
            <td>{x.Numero}</td>
            <td>
              <button onClick={() => {this.props.consultar(x)}} className="tiny ui gray button">Consultar</button>
              <button  onClick={() => {this.props.alterar(x)}} className="tiny ui blue button">Alterar</button>
              <button className="tiny ui red button">Excluir</button>
            </td>
          </tr>
        );
      })
    );
  }

  render() {
    return (
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Numero</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.renderItens() }
        </tbody>
      </table>
    );
  }
}



export default ContatoLista;
