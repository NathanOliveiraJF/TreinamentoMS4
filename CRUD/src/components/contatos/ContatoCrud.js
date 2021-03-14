import React from 'react';
import ContatoLista from './ContatoLista';
import ContatoConsulta from './ContatoConsulta';
import ContatoAltera from './ContatoAlterar'

class ContatoCrud extends React.Component {
  constructor(props) {
    super(props);
    this.state = { objetos: contatos, objetoSelecionado: null, status: ETipoAcao.listando };
  }

  consultar = (objeto) => {
    this.setState({objetoSelecionado: objeto, status: ETipoAcao.consultando});
  }

  alterar = (objeto) => {
    this.setState({objetoSelecionado: objeto, status: ETipoAcao.alterando});
  }

  salvarAlteracao = (objeto) => {
    let objetoNoVetor = null;
    const objetos = this.state.objetos;
    for(var i = 0; i < objetos.length; i++) {
      if(objetos[i].ContatoId === objeto.ContatoId) {
        objetoNoVetor = objeto[i];
      }
    }

    if (objetoNoVetor !== null) {
      objetoNoVetor.Nome = objeto.Nome;
      objetoNoVetor.Numero = objeto.Numero;
    }

    this.setState({objetos: objetos});
  }

  voltar = () => {
    this.setState({status: ETipoAcao.listando});
  }


  renderComponente() {
    if (this.state.status === ETipoAcao.listando) {
      return (
        <div>
          <ContatoLista objetos={this.state.objetos} consultar={this.consultar} /> 
          <button className="tiny ui green button">Incluir</button>
        </div>
      );
    } else if (this.state.status === ETipoAcao.consultando) {
      return <ContatoConsulta voltar={this.voltar} objeto={this.state.objetoSelecionado}/>
    } else if (this.state.status === ETipoAcao.alterando) {
      return <ContatoAlterar voltar={this.voltar} objeto={this.state.objetoSelecionado}/>      
    } else {
      return <div></div>
    }
  }

  render() {
    return (
      <div>
        <h1>Contatos</h1>
        
        <ContatoLista objetos={this.state.objetos} consultar={this.consultar} />
        {this.renderComponente()}
      </div>
    );
  }
}


const contatos = [
  { ContatoId: "a", Nome: "Ana", Numero: "(11)1111-1111" },
  { ContatoId: "b", Nome: "Bruno", Numero: "(22)2222-2222" },
  { ContatoId: "c", Nome: "Carlos", Numero: "(33)3333-3333" },
];


const ETipoAcao = Object.freeze({
	"carregando":1, 
	"listando":2, 
	"consultando":3, 
	"incluindo":4, 
	"alterando":5
});
export default ContatoCrud;