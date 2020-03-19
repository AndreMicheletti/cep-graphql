
# Via CEP - GraphQL server

Um servidor GraphQL simples que consulta a api do https://viacep.com.br

## Requisitos

- `node` versão 13 ou maior

## Como testar

- clone o repositório
- instale as dependencias `npm install`
- rode o servidor `npm start`
- acesse com um navegador a url local `localhost:4000`
- faça uma query simples

```
query {
  buscaCEP(cep: "01001000") {
    cep
    logradouro
    bairro
    complemento
  }
}
```
