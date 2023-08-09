# EP Veículos

Projeto desenvolvido como parte de um processo seletivo demonstrando habilidades em Front-end. Trata-se de uma plataforma automotiva que expõe sua frota e realiza agendamento de visitas para os seus clientes logados.

## Stack e Tecnologias

- Vite: [Vite](https://vitejs.dev/),
- React: [React](https://legacy.reactjs.org/)
- Material UI: [Material UI](https://mui.com/material-ui/)
- Typescript: [Typescript](https://www.typescriptlang.org/)
- Redux Toolkit: [Redux Toolkit](https://redux-toolkit.js.org/)
- Axios: [Axios](https://axios-http.com/)

### Rodando o Projeto

Primeiramente você deve clonar o repositório usando o git Bash ou um prompt de comando com o seguinte comando:

`git clone https://github.com/ericsporto/schedule-vehicle-visit.git`

Após terminado, abrir a pasta gerada no Vs Code, abrir seu terminal dentro dele e executar os comandos:

`yarn` (Para instalar todas as dependências)

`yarn dev` (Para rodar o projeto em modo desenvolvimento)

#### Observações

O Redux (Gerenciador de estado) foi instalado e configurado mas, não foi utilizado, visto que é uma aplicação simples e que, de fato, não houve comunicação, via Api, com nenhum banco de dados.
O agendamento das visitas foi feito simulando a condição de envio de dados via requisição e o fluxo deste acontecimento pode ser demonstrado de forma real, dentro do projeto.
Vale lembrar que, para soluções mais básicas, podemos utilizar a Context Api, para armazenar dados do usuário logado, por exemplo, e ter esses dados em qualquer parte da aplicação (header, footer, componentes, etc.) sem precisar passar por props.
Para uma aplicação mais robusta e que precise de um gerenciamento de estado, o Redux funciona muito bem, porém sua implementação e complexidade de código (mesmo com o Toolkit), abrem espaço para outras soluções de fácil implementação e de mesma eficácia como o Zustand.

##### Desenvolvedor do Projeto

Eric de Souza Porto Carvalho [Github](https://github.com/ericsporto)

