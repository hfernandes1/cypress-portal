# Pesquisa no Portal da Agi

 ## Apresentação

Olá :wave: ! Esse é meu projeto utilizando CYPRESS. 

O Objetivo deste projeto é criar um exemplo de cenários simples, afim de exemplificar testes em um campo de pesquisa. 
Vou tentar passar um passo a passo e no fim, deixar os comandos para rodar os testes e ver funcionando. Obrigado


## Fotos do projeto 📸

Testes           |   Comandos Personalizados           | 
:-------------------------: | :-------------------------:
![image](https://github.com/user-attachments/assets/f17bd723-ab53-45f7-8a0f-395a9ef9e33b)
 | ![image](https://github.com/user-attachments/assets/c8657137-e45c-4198-970d-1f54a8d3367c)



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


## 6 - criando as primeiras pastas :open_file_folder:

```
npm run cypress:open
```

Após a modificação no package.json, com esse comando, será possível executar o cypress e por default.

Ao executar esse comando, será adicionado alguns packages necessários para executar o projeto. 
* Clique em E2e testing 
* Chrome
* Start e2e testing.

## 7 - configure o cypress.config.js ⚙️

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


## 8 - Criar os diretórios para realizar os testes. 📁

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

## 10 - Criando comandos personalizados. 

Relembrando: Aqui é opcional; 
Existe a opção muito comum na comunidade de criar um page objects, que nada mais é que uma classe orientada a objetos que serve como interface para uma página do seu AUT. 🙂
Porém, aqui vamos substituir o PO utilizando os comandos personalizados do Cypress para economizar linhas e deixar o código mais funcional. 


![image](https://github.com/user-attachments/assets/7c4443e3-6f63-4660-87c8-d9192bb1b436)


## Project status
DONE :)
linkedin: https://www.linkedin.com/in/henrique-amaral-fernandes-794477121/
