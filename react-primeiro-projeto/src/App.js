import React, { Component } from 'react';
import './App.css';
import Comentario from './components/Comentario';

class App extends Component {

    state = {
        comentarios: [
            {
                nome: 'joao',
                email: 'joao@mail.com',
                data: new Date(2012, 3, 4),
                mensagem: 'olá tudo bem?'
            },
            {
                nome: 'pedro',
                email: 'pedro@mail.com',
                data: new Date(2012, 3, 4),
                mensagem: 'olá, sim, tudo bem'
            }
        ]
    }

    render() {
        return (
            <div className="App">
                <h1>Hello World</h1>

                {
                    this.state.comentarios.map((comentario, indice) =>
                        <Comentario 
                        key={indice}
                        nome={comentario.nome} 
                        email={comentario.email} 
                        data={comentario.data}>
                        {comentario.mensagem}
                        </Comentario>
                    )
                }
            </div>
        );
    }
}

export default App;
