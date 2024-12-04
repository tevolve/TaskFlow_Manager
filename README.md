# 📂 TaskFlow Manager

**TaskFlow Manager** é uma aplicação web criada para facilitar o gerenciamento de tarefas, utilizando Vue.js e Elm no front-end e JSON Server para persistência de dados. Este projeto foca em produtividade e simplicidade.

---

## 📋 Sumário

1. 🤖 [Introdução](#introdução)  
2. ⚙️ [Tech Stack](#tech-stack)  
3. 🔋 [Recursos](#recursos)  
4. 🤸 [Como usar](#como-usar)  
5. 💾 [Variáveis de Ambiente](#variáveis-de-ambiente)  
6. 📅 [Versões](#versões)  
7. 🤝 [Contribuições](#contribuições)  
8. 👥 [Autores](#autores)  

---

## <a name=”introduction”>🤖 Introdução</a>

O **TaskFlow Manager** combina o poder do **Vue.js** e **Elm** para criar uma experiência completa e agradável no gerenciamento de tarefas. Ele permite:

- Adicionar, listar e excluir tarefas.
- Visualizar o número de tarefas concluídas.
- Persistir dados usando **JSON Server**.

Ideal para quem busca produtividade e simplicidade, este projeto é uma ótima ferramenta para organizar suas atividades diárias.

<a href="https://github.com/Tevolve" target="_blank">
  <img src="https://img.shields.io/badge/Deixe_uma_estrela_-1A1A1A.svg?style=for-the-badge&logo=github&logoColor=white" />
</a>

---

## ⚙️ Tech Stack

- **Vue.js**  
- **Elm**  
- **JSON Server**

---

## 🔋 Recursos

- **Adição e Exclusão de Tarefas**: Organize suas tarefas com facilidade.  
- **Persistência de Dados**: As tarefas são salvas localmente usando o JSON Server.  
- **Visualização de Produtividade**: Acompanhe o progresso com gráficos e indicadores visuais.  
- **Interface Simples e Eficiente**: Desenvolvido com foco na usabilidade.  

---

## 🤸 Como usar

**00 – Pré-requisitos**

Certifique-se de ter as seguintes ferramentas instaladas:  

- [Git](https://git-scm.com/)  
- [Node.js](https://nodejs.org/)  
- [npm](https://www.npmjs.com/)  

**01 – Clonar o Repositório**  

```bash
git clone https://github.com/tevolve/TaskFlowManager.git
cd TaskFlowManager
```
**02 – Instalar Dependências**

Instale as dependências do Vue.js:
```bash
npm install
```

Instale o **JSON Server** globalmente:

bash
Copiar código
```bash
npm install -g json-server
```

**03 – Rodar o JSON Server**

Na raiz do projeto, execute:
```bash
json-server --watch db.json --port 5000
```

**04 – Rodar o Front-end Vue.js**

Execute o seguinte comando para iniciar a aplicação:
```bash
npm run serve
```

Acesse o projeto em http://localhost:8080.

## 💾 Variáveis de Ambiente
Defina as variáveis de ambiente no arquivo ```.env``` na raiz do projeto:
```bash
# Porta onde o servidor Vue.js será executado
VUE_APP_PORT=8080

# Porta usada pelo JSON Server
JSON_SERVER_PORT=5000
```

## 📅 Versões
- **1.0.0**  
  - Primeira versão estável com funcionalidades completas.  

## 🤝 Contribuições
Contribuições, sugestões e novos recursos são bem-vindos!  

1. Faça um fork do projeto:  

git fork
```bash https://github.com/tevolve/TaskFlowManager.git
```

2. Crie uma branch para sua feature:

```bash
git checkout -b minha-feature
```

3. Commit suas alterações:

```bash
git commit -m "Minha nova feature"
```

4. Envie para a branch principal:

```bash
git push origin minha-feature
```

5. Abra um Pull Request.


## 👥 Autores
<table>
  <tr>
    <td>
      <img src="https://github.com/tevolve width="100" style="border-radius: 50%;">
    </td>
    <td>
      <b>Tevolve</b><br>
      <a href="https://www.linkedin.com/in/tev0lv3/" target="_blank">LinkedIn</a> | 
      <a href="https://github.com/Tevolve" target="_blank">GitHub</a>
    </td>
  </tr>
</table>
