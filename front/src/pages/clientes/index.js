import React, { Component } from "react";
import api from "../../services/api";

import {
    Container,
    Title,
    FormColumn,
    InputColumn,
    Button,
    ButtonTable,
    Table,
    Actions,
} from "./style";

export default class Clientes extends Component {
    state = {
        nome: "",
        email: "",
        cpf: "",
        list: [],
        clienteInfo: {},
        page: 1,
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(this.state);
        const { nome, email, cpf, list } = this.state;
        const response = await api.post("/cliente", {
            nome,
            email,
            cpf,
        });

        this.setState({
            list: [...list, response.data],
            nome: "",
            email: "",
            cpf: "",
        });
    };

    async componentDidMount(page = 1) {
        //Componente que é executado assim que inicia a aplicação
        const response = await api.get(`/cliente?page=${page}`);
        console.log(response.data);
        const { docs, ...clienteInfo } = response.data;
        this.setState({ list: docs, clienteInfo, page });
    }

    nextPage = () => {
        const { page, clienteInfo } = this.state;
        if (page === clienteInfo.pages) return;
        const pageNumber = page + 1;
        this.componentDidMount(pageNumber);
    };

    prevPage = () => {
        const { page } = this.state;
        if (page === 1) return;
        const pageNumber = page - 1;
        this.componentDidMount(pageNumber);
    };

    render() {
        const { nome, email, cpf, list } = this.state;
        return (
            <Container>
                <Title>Cadastro de Clientes</Title>
                <FormColumn onSubmit={this.handleSubmit}>
                    <InputColumn
                        type='text'
                        name='nome'
                        id='nome'
                        placeholder='Digite seu nome'
                        value={nome}
                        onChange={(e) =>
                            this.setState({ nome: e.target.value })
                        }
                    />
                    <InputColumn
                        type='text'
                        name='email'
                        id='email'
                        placeholder='Digite seu e-mail'
                        value={email}
                        onChange={(e) =>
                            this.setState({ email: e.target.value })
                        }
                    />
                    <InputColumn
                        type='text'
                        name='cpf'
                        id='cpf'
                        placeholder='Digite seu cpf'
                        value={cpf}
                        onChange={(e) => this.setState({ cpf: e.target.value })}
                    />
                    <div>
                        <Button type='submit' tipo='add'>
                            Salvar
                        </Button>
                        <Button tipo='remove'>Cancelar</Button>
                    </div>
                </FormColumn>

                <Table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>CPF</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((cli) => (
                            <tr key={cli._id}>
                                <td>{cli.nome}</td>
                                <td>{cli.email}</td>
                                <td>{cli.cpf}</td>
                                <td>
                                    <ButtonTable tipo='put'>
                                        Alterar
                                    </ButtonTable>
                                    <ButtonTable tipo='del'>
                                        Excluir
                                    </ButtonTable>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Actions>
                    <button onClick={this.prevPage}>Anterior</button>
                    <button onClick={this.nextPage}>Próximo</button>
                </Actions>
            </Container>
        );
    }
}
