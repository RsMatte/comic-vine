## Teste Meliuz

Projeto realizado em React e criado através da ferramenta [Create React App](https://github.com/facebook/create-react-app).

### Instruções de Execução

- Clonar o repositório.
- Instalar o [Yarn](https://www.npmjs.com/package/yarn).
- Executar `yarn` na pasta raiz do projeto para instalar as dependências.
- Executar `yarn start` na pasta raiz do projeto para iniciar o projeto. Para acessar no browser, basta acessar http://localhost:3003.

### Bibliotecas de terceiros

| Dependência | Função |
| ------ | ------ |
| [axios](https://github.com/axios/axios)    | Cliente utilizado para fazer requisições HTTP  |
| [formik](https://formik.org/)    | Gerenciador de formulários no React  |
| [html-react-parser](https://www.npmjs.com/package/html-react-parser)    | Converte uma string HTML em elementos do React  |
| [redux](https://www.npmjs.com/package/redux)    | Gerenciador de estado em um container de componentes  |
| [redux-persist](https://www.npmjs.com/package/redux-persist)   | Utilizado para salvar o estado do redux no localStorage  |
| [styled-components](https://www.npmjs.com/package/styled-components)    | Permite utilização do CSS em JS através de componentes  |
| [typescript](https://www.npmjs.com/package/typescript)    | Superset da linguagem JavaScript, permite a utilização de tipagem estática  |
| [yup](https://www.npmjs.com/package/yup)    | Permite a utilização de schemas para validação de dados  |


### API

Foi utilizada apenas uma requisição HTTP nesse projeto, para retornar uma lista de 100 personagens através da URL: https://comicvine.gamespot.com.
Como a resposta sempre é bloqueada pelo CORS quando a origem é um localhost, foi utilizado um proxy através da URL: https://cors-anywhere.herokuapp.com/.

| Método | Rota | Descrição | Parâmetros |
|-------| ------ | ---- | ------ | ---- | 
|GET| /api/characters       |  Retorna a lista de personagens     | apiKey, format |


### Redux / Persist

A API citada acima só é chamada uma vez, quando se inicia o projeto pela primeira vez, pois em seguida a lista de personagens é salva no localStorage do navegador pelo redux-persist e utilizada em todas as funções.

Recursos salvos no localStorage:

- Lista principal de personagens, assim que a API é chamada pela primeira vez.
- Lista de busca por termo, assim que o usuário realiza a busca.
- Lista de personagens favoritos.
- Edição de dados dos personagens.
- Estado de busca booleano.
- Estado de favoritos booleano.

Como citado, existem 3 listas distintas salvas no storage, e são chamadas pela variável characterList no componente Home de acordo com a escolha do usuário.
Ao realizar uma busca, o estado de busca é salvo como verdadeiro, e a variável recebe a lista de busca. Ao clicar em "Favoritos", o estado de favoritos é salvo como verdadeiro, e a variável recebe a lista de favoritos adicionados manualmente por ele. Ao clicar em "Lista Completa", os dois estados são setados como falso e variável recebe a lista principal.

Não é a situação mais prática ter 3 listas salvas no frontend, e frequentemente com dados duplicados, porém acabei achando a melhor solução para o problema proposto. Inicialmente havia salvado apenas uma lista, e os estados de busca e favoritos, assim como os filtros eram gerenciados pelo estado do próprio componente, porém o código acabou ficando muito grande e difícil de trabalhar, além de ir contra a proposta de utilizar o Redux da melhor maneira possível.
A solução final acabou ficando com um funcionamento muito bom, permitindo o usuário recarregar a página, e usar os botões de goBack e goForward sem perder os estados.

### Considerações finais

Os testes e o layout do projeto no geral acabaram ficando mais simples, devido ao curto tempo disponível para o tamanho do projeto, e optei por entregar dentro do prazo (aos 45 do segundo tempo).
Os testes estão sendo feito no formulário de edição dos personagens e na busca na página inicial, que são os principais pontos de interação do cliente com a aplicação, e portanto locais críticos.

Gostei muito do desafio, acho que tem um bom papel em medir as habilidades do candidato.
Obrigado pela atenção e ficarei grato por qualquer feedback se possível =D