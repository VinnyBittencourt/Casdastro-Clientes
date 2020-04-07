import styled from 'styled-components';

export const Container = styled.div`
  display: flex; /* Informa que o componente sera do tipo flex */
  flex-direction: column; /* Indica que a horientação será em coluna (vertical)*/
  align-items: center; /* alinha no centro horizontal*/
  justify-content: center; /* alinha no centro vertical */
  padding: 2em;
`;

export const Title = styled.h1`
  font-size: 1.6em;
  font-weight: 800;
  margin: 1em 0;
`;

export const FormColumn = styled.form`
  display: flex;
  width: 100%;
  padding: 12px;
  flex-direction: column;
  
  /* Todo o espaço vertical em branco */ficara entre os componentes filhos*/
  justify-content: space-between; 
  
  /* Ocupa todo o espaço hotizontal possivel */
  align-items: stretch; 

  /* Dispositivos com mais de 767px de largura*/
  @media screen and (min-width: 767px) {
    max-width: 80%; /* A largura maxima do componente será de 80% da tela*/
  }
`;

export const InputColumn = styled.input`
  border: none; /* Remove a borda do componente */
  /* Adiciona um padding superior/inferior de 6px */
  /* e um padding esquerda/direira de 12px*/
  padding: 6px 12px; 
  font-size: 18px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 1em;

  /* Dispositivos com mais de 767 de largura */
  /* teram uma margem de 1em */
  @media screen and (min-width: 767px) {
    margin: 1em;
  }
`;

export const Button = styled.button`
  /* Transforma o texto em maiusculo */
  text-transform: uppercase; 
  font-weight: 700; /* Deixa o texto em negrito */
  padding: 0.8em;
  margin: 1em;
  border: none;
  border-radius: 8px;
  color: #fff;
  /* se o bottao possuir a proprieda add ele recebe uma cor, senão recebe outra*/
  background: ${props => (props.tipo === "add" ? "#47cf73" : "#F05D5E")};

  /* o mesmo que o anterior, mas para botões cujo mouse está em cima */
  &:hover {
    background: ${props => (props.tipo === "add" ? "#248c46" : "#d31415")};
  }
`;

export const ButtonTable = styled.button`
  text-transform: uppercase;
  font-weight: 700;
  padding: 0.5em;
  margin-right: 1em;
  border: none;
  border-radius: 8px;
  color: #fff;
  background: ${props => (props.tipo === "del" ? "#F05D5E" : "#47cf73")};

  &:hover {
    background: ${props => (props.tipo === "del" ? "#d31415" : "#248c46")};
  }
`;

export const Table = styled.table`
  width: 100%; 
  /* Faz o componente ocupar 100% da largura da tela*/

  /* Navega entre os filhos do table até o tr */
  & > thead > tr {
    font-size: 1.2em; 
    /*Determina o tamanho da fonte */ 
    /* como 1.5 vezes o tamanho atual */
  }

  /* navega até o th do cabeçalho para alinhar */
  /* a esquerda e adicionar uma espaço ao redor */
  & > thead > tr > th {
    
    /* Coloca o texto do cabeçalho alinhado a esquerda*/
    text-align: left; 
    
    /* Top/Bottom Left/Right || Top Left Bottom Right */
    padding: 5px 10px; 
  }

  /* Navega até o tr do tbody e usa o hover para colorir */ 
  /* a linha em que o mouse está */
  & > tbody > tr:hover {
    /* Adiciona um delay para que as alterações */ 
    /* abaixo aconteçam */
    transition: 1s; 
    
    background: #c6c7c4;
  }

  /* navega até o td do corpo para alinhar a esquerda */
  /* e adicionar uma espaço ao redor */
  & > tbody > tr td {
    text-align: left;
    padding: 5px 10px;
    
    border-bottom: 1px solid #aaa; 
    /* Adiciona uma borda inferior de 1pixel de espessura*/
  }

  /* Somente telas com no maximo 767px de largura */
  /* irão visualizar o codigo abaixo */
  @media (max-width: 767px) {
    & {
      display: block;
      position: relative;
      width: 100%;
    }

    & thead,
    & tbody,
    & th,
    & td,
    & tr {
      display: block;
    }

    & td,
    & th {
      height: 35px;
    }

    & thead {
      float: left; /* Alinha o titulo a esquerda*/
    }

    & thead tr {
      font-size: 1em;
    }

    & tbody {
      width: auto;
      position: relative;
      overflow-x: auto; 
      
      /* tudo que ultrapassar os limites do componente na 
      horizontal recebera uma barra de rolagem*/
      -webkit-overflow-scrolling: touch; 
      
      /* informa que a barra de rolagem sera 
      touch screen em dispositivos que possuem*/
      white-space: nowrap; /* não deixa o texto quebrar de linha*/
    }

    & tbody tr {
      display: inline-block;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  button {
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;
    border: 0;
    background: #da552f;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    margin-right: 10px;
    cursor: pointer;

    /* &:hover {
      opacity: 0.7;
    } */

    &[disabled] {
      opacity: 0.5;
      cursor: default;
    }
  }`


  


