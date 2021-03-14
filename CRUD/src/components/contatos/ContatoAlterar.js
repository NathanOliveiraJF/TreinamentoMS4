import React from 'react';

class ContatoAlterar extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    //const obj = this.props.objeto;
    return (
      <div>
        <button onClick={() => {this.props.voltar()}} className="tiny ui gray button">Consultar</button>
      <form>
        
      </form>
      </div>
    );
  }
}


export default ContatoAlterar;