# Pesquisa no Portal da Agi

 ## Apresentação

Olá :wave: ! Esse é meu projeto utilizando CYPRESS. 

O Objetivo deste projeto é criar um exemplo de cenários simples, afim de exemplificar testes em um campo de pesquisa. 
Vou tentar passar um passo a passo e no fim, deixar os comandos para rodar os testes e ver funcionando. Obrigado


## Fotos do projeto 📸

Comandos Personalizados           |   Testes API           | 
:-------------------------: | :-------------------------:
![image](https://github.com/user-attachments/assets/5957a371-3e02-4516-aa37-0b8259574938) | ![image](https://github.com/user-attachments/assets/d8a865e6-e411-4997-b336-164bb9826a96)

Testes WEB      |   Docker         | 
:-------------------------: | :-------------------------:
![image](https://github.com/user-attachments/assets/9e950a47-435b-4410-9498-bf8ae5905e13) | ![image](https://github.com/user-attachments/assets/e9355822-c79a-41ff-9825-5968c09fe4c6)



## Passo a passo :foot:

Vamos começar com o passo a passo para você fazer o seu também ?


<!-- Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)! -->

## 1 - instalar o Nodejs ⏬

```
https://nodejs.org/en/
```
Você pode usar outros gerenciadores de pacodes como o cmder, mas gosto do node e vou passar os stepts utilizando o comando "npm"

## 2 - Crie o projeto node 🔝

```
npm init --yes

```
Após rodar esse comando ele vai criar um arquivo package.json e isso confirma que está sendo criado um projeto node. 


## 3 - Instale o cypress ⏬

```
npm install cypress

```
Caso você queira baixar uma versão específica, é só rodar o comando com um "@" e o numero da versão, exemplo: npm install cypress@3.6.1
Caso deseje instalar a ultima versão, é só rodar o comando acima. 


## 4 - configurando package.json 📦

package.json               | 
:-------------------------:
![image](https://github.com/user-attachments/assets/ef2d4953-0e01-4108-9c07-07df94fc4b79)


## 5 - criando as primeiras pastas :open_file_folder:

```
npm run cypress:open
```

Após a modificação no package.json, com esse comando, será possível executar o cypress e por default.

Ao executar esse comando, será adicionado alguns packages necessários para executar o projeto. 
* Clique em E2e testing 
* Chrome
* Start e2e testing.

## 6 - configure o cypress.config.js ⚙️

adicionei a baseUrl ( nesse caso irei colocar a página "https://blogdoagi.com.br/", que é o foco desse projeto pessoal ) e também adicionei o "hideXhr" para não aparecer todas as requisições ao executar os testes. 

![image](https://github.com/user-attachments/assets/2fea4e8d-def9-4663-9015-5c02219e8b1a)



```
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: { hideXhr:true },
    baseUrl: "https://blogdoagi.com.br/",
  },
});

```


## 7 - Criar os diretórios para realizar os testes. 📁

Vamos começar a criar as pastas para realizar os testes, eu criei um arquivo simples dentro da pasta e2e: 

![image](https://github.com/user-attachments/assets/4530831e-8380-495f-a605-2e197c18391e)

## instalando o XPath

Em alguns casos específicos o seletor do cypress não é preciso, fazendo com que precisamos de um novo seletor. 

```
npm install cypress-xpath
```
Adicione a linha abaixo no arquivo e2e.js

```
require('cypress-xpath');
```

## 8 - Criando comandos personalizados. 

Relembrando: Aqui é opcional; 
Existe a opção muito comum na comunidade de criar um page objects, que nada mais é que uma classe orientada a objetos que serve como interface para uma página do seu AUT. 🙂
Porém, aqui vamos substituir o PO utilizando os comandos personalizados do Cypress para economizar linhas e deixar o código mais funcional. 


![image](https://github.com/user-attachments/assets/7c4443e3-6f63-4660-87c8-d9192bb1b436)


## 9 - Docker
 Instale o Docker:
 
* Windows:
```
Baixe e instale o Docker Desktop for Windows.
Durante a instalação, verifique se a opção para adicionar Docker ao PATH está selecionada.
Reinicie o computador após a instalação.
```
Na pasta Cypress ( raiz ) crie um arquivo chamado de *dockerfile*

Depois de criar o Dockerfile, você pode escrever o arquivo:  

```
# Use a imagem base do Node.js com uma versão compatível com seu projeto
FROM cypress/browsers:node-18.16.0-chrome-112.0.5615.121-1-ff-112.0.1-edge-112.0.1722.48-1

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o arquivo de dependências
COPY package.json package-lock.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todo o conteúdo do projeto para o diretório de trabalho do container
COPY . .

# Instale o Cypress
RUN npm install cypress 

# Comando padrão para rodar os testes no container
CMD ["npx", "cypress", "run", "cy:run"]


```

Rodar o container com os seguintes comandos:

Build da Imagem:

```
docker build -t cypress-e2e-project .
```

Rodar o Container:

```
docker run -it cypress-e2e-project
```

Esse setup deve ser suficiente para rodar seus testes E2E usando Cypress dentro de um container Docker.

## Rodando o Projeto

É possível executar o projeto iniando o Cypress e pela interface do mesmo, selecionar os testes.
```
npm run cypress:open
```

Ou é possível rodar em background ( dessa maneira, o cypress armazena videos e screenshots em casos de falha ) 

```
npx cypress run 
```
Relatório no modo headless         | 
:-------------------------: | 
![image](https://github.com/user-attachments/assets/5c0bf51c-b188-46b4-857b-8eb141f454bb)



## Project status
DONE :)
linkedin: https://www.linkedin.com/in/henrique-amaral-fernandes-794477121/
