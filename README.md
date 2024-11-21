# TaskFlow Manager

## Descrição
TaskFlow Manager é uma aplicação para gerenciar tarefas com integração de Vue.js e Elm. A aplicação permite aos usuários criar, editar, excluir e marcar tarefas como concluídas. Também oferece um contador de produtividade que exibe quantas tarefas foram completadas no dia.

## Tecnologias Usadas
- **Vue.js**: Framework JavaScript para construir a interface do usuário.
- **Elm**: Usado para gerenciar o contador de produtividade e exibir o número de tarefas completadas.
- **JSON Server**: Para simulação de uma API RESTful para persistência de dados localmente.
- **TailwindCSS**: Framework de CSS para design responsivo e estilização moderna.

## Como Rodar o Projeto

### Passo 1: Clonar o repositório

Clone o repositório para o seu computador:

```bash
git clone https://github.com/seu-usuario/TaskFlowManager.git
cd TaskFlowManager
```

### Passo 2: Instalar Dependências
Instale as dependências do Vue.js e do Elm:

Para Vue.js:
```bash
npm install
```

Para Elm: Instale o compilador Elm, caso ainda não tenha: Instalar Elm

Compile o código Elm:
```bash
elm make src/elm/ProductivityTracker.elm --output=src/elm/ProductivityTracker.js
```

### Passo 3: Rodar o Projeto
Para rodar o servidor local do Vue.js:
```bash
npm run dev
```

### Passo 4: Rodar a API JSON Server
Instale o **JSON Server** para simular a API:
```bash
npm install -g json-server
```
Suba a API com o seguinte comando:
```bash
json-server --watch db.json
```
Isso permitirá que a aplicação interaja com a API simulada.

### Passo 5: Acessar a Aplicação
Abra o navegador e acesse:
```bash
http://localhost:3000
```

## Funcionalidades

• **Cadastro de tarefas:**
Adicione tarefas com título e descrição.

• **Edição e exclusão de tarefas:**
Modifique ou remova tarefas existentes.

• **Contador de produtividade:**
Exibe quantas tarefas foram concluídas no dia.

• **Filtro de status:**
Filtre tarefas por "pendente" ou "concluída".

• **Design responsivo:** A aplicação é otimizada para dispositivos móveis e desktops. 




