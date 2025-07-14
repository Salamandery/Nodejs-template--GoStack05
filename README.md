<div align="center">
  <h1>GoStack05 Node.js Template – Transactions API</h1>
  <p>
    <img src="https://img.shields.io/badge/node-%3E%3D12.0.0-green" />
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" />
    <img src="https://img.shields.io/badge/tests-Jest%20%26%20Supertest-brightgreen" />
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg" />
  </p>
  <p>API de transações financeiras desenvolvida para o desafio GoStack da Rocketseat 🚀</p>
</div>

---

## 📑 Sumário
- [Descrição](#descrição)
- [Tecnologias e Bibliotecas](#tecnologias-e-bibliotecas)
- [Padrões e Arquitetura](#padrões-e-arquitetura)
- [Setup e Execução](#setup-e-execução)
- [Rotas da API](#rotas-da-api)
- [Modelo de Dados](#modelo-de-dados)
- [Autor](#autor)

---

## 📝 Descrição
API desenvolvida para o desafio GoStack da Rocketseat. Permite criar e listar transações financeiras, controlando entradas (income) e saídas (outcome), com validação de saldo e testes automatizados.

---

## 🚀 Tecnologias e Bibliotecas

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" />
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white" />
</div>

- **Node.js** – Runtime JavaScript
- **Express** – Framework web
- **TypeScript** – Tipagem estática
- **Jest** & **Supertest** – Testes automatizados
- **uuidv4** – Geração de IDs únicos
- **ESLint** (Airbnb) & **Prettier** – Padrão e formatação de código

---

## 🏗️ Padrões e Arquitetura
- **MVC simplificado**: Separação em Models, Repositories, Services e Routes
- **Service Layer**: Regras de negócio isoladas em services
- **Repository Pattern**: Manipulação de dados em memória via repositórios
- **Validação de saldo**: Não permite transação de saída sem saldo suficiente
- **Testes automatizados**: Cobertura de criação, listagem e validação de transações

---

## ⚙️ Setup e Execução

```bash
# 1. Instale as dependências
yarn

# 2. Rode o servidor em modo desenvolvimento
yarn dev:server

# 3. Build para produção
yarn build

# 4. Execute os testes
yarn test
```

> Requisitos: Node.js >= 12, Yarn

---

## 📚 Rotas da API

### ➕ POST `/transactions`
Cria uma nova transação.

**Body JSON:**
```json
{
  "title": "Salário",
  "type": "income" | "outcome",
  "value": 2000
}
```
**Resposta:**
```json
{
  "id": "uuid",
  "title": "Salário",
  "type": "income",
  "value": 2000
}
```

### 📄 GET `/transactions`
Lista todas as transações e o balanço atual.

**Resposta:**
```json
{
  "transactions": [
    { "id": "uuid", "title": "Salário", "type": "income", "value": 2000 },
    { "id": "uuid", "title": "Bicicleta", "type": "outcome", "value": 1500 }
  ],
  "balance": {
    "income": 2000,
    "outcome": 1500,
    "total": 500
  }
}
```

---

## 🗃️ Modelo de Dados

```ts
Transaction {
  id: string;
  title: string;
  value: number;
  type: 'income' | 'outcome';
}
```

---

## 👤 Autor
by **Rodolfo M. F. Abreu**
<p align="center">
  <sub>Desenvolvido para o desafio GoStack 🚀</sub>
</p>

---

<p align="center">
  <img src="https://img.shields.io/badge/Feito%20com%20%E2%9D%A4%20por-Rocketseat-blueviolet" />
</p>


