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

    adicionarComentario = () => {
        console.log('adicionando comentario')

        const novoComentario = {
            nome: 'maria',
            email: 'qualquer@email.com',
            data: new Date(),
            mensagem: 'olá pessoal!!!!!'
        }

        // let lista = this.state.comentarios
        // lista.push(novoComentario)

        // this.setState({
        //     comentarios: lista
        // })


        // dessa forma é melhor do que a de cima!
        this.setState({
            comentarios: [...this.state.comentarios, novoComentario]
        })
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

                <button onClick={this.adicionarComentario}>Adicionar um Comentário</button>
            </div>
        );
    }
}

export default App;
