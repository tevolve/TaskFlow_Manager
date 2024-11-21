# TaskFlow Manager

## Descrição

O **TaskFlow Manager** é um aplicativo de gerenciamento de tarefas desenvolvido utilizando **Vue.js** para o front-end e **Elm** para o acompanhamento de produtividade. O projeto oferece funcionalidades para adicionar, listar e remover tarefas, além de calcular o número de tarefas concluídas.

O banco de dados para persistência das tarefas é gerido com **JSON Server**.

## Estrutura do Projeto

O projeto é dividido em duas partes principais:

1. **Vue.js** (para gerenciamento de tarefas):
    - Permite adicionar, listar e excluir tarefas.
    - Exibe o número de tarefas concluídas.

2. **Elm** (para visualização de produtividade):
    - Exibe o número de tarefas concluídas de forma simples.

3. **JSON Server**:
    - Usado para persistir as tarefas no formato JSON. 

## Como Rodar o Projeto

### Passo 1: Clonar o Repositório

Clone este repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/TaskFlowManager.git
cd TaskFlowManager
```

### Passo 2: Instalar Dependências
### Vue.js

Para rodar a parte do Vue.js, é necessário ter o Node.js e o Vue CLI instalados. Caso não tenha o Vue CLI, instale-o com o comando:
```bash
npm install -g @vue/cli
```
Instale as dependências do Vue.js:
```bash
npm install
```

### JSON Server

O projeto usa o **JSON Server** para simular um banco de dados. Instale o JSON Server globalmente com:
```bash
npm install -g json-server
```

### Passo 3: Rodar o *JSON Server*

Na raiz do projeto, execute o JSON Server para simular um banco de dados local:
```bash
json-server --watch db.json --port 5000
```

## Passo 4: Rodar o Front-end Vue.js

Agora, para rodar a aplicação Vue.js, execute o seguinte comando:
```bash
npm run serve
```
Isso irá rodar o servidor de desenvolvimento local e você poderá acessar a aplicação em http://localhost:8080.

## Funcionalidades
• **Adicionar tarefas:**
Você pode adicionar novas tarefas através do campo de texto e clicar no botão "Adicionar Tarefa".

• **Remover tarefas:**
As tarefas podem ser removidas clicando no botão "Excluir" ao lado da tarefa.

• **Exibir tarefas concluídas:** O número de tarefas concluídas será exibido abaixo da lista de tarefas.

• **Persistência de dados:** As tarefas são armazenadas localmente através do JSON Server.








