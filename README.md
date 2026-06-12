#  HOTEL RESERVAS

##  Capturas de Tela do Sistema

### Tela 1
![Print 1](print1.png)

### Tela 2
![Print 2](print2.png)

### Tela 3
![Print 3](print3.png)

### Tela 4
![Print 4](print4.png)

### Tela 5
![Print 5](print5.png)

### Tela 6
![Print 6](print6.png)

### Tela 7
![Print 7](print7.png)

### Tela 8
![Print 8](print8.png)

### Tela 9
![Print 9](print9.png)

### Tela 10
(print10.png)

### Tela 11
![Print 11](print11.png)

### Tela 12
![Print 12](print12.png)

---

#  Descrição do Projeto

O Hotel Reservas é um sistema web desenvolvido para auxiliar no gerenciamento de quartos e reservas de um hotel. A aplicação permite o cadastro, consulta e remoção de quartos e reservas, oferecendo uma interface simples e intuitiva para administração.

---

#  Como Executar o Projeto

## 1. Clonar o repositório

```bash
git clone https://github.com/MoniqueBabler/hotelreservas.git
```
## 2. Acessar a Pasta do Projeto

```bash
cd hotelreservas
```

## 3. Instalar as Dependências

```bash
npm install
```

## 4. Criar o Arquivo .env

Na raiz do projeto, criar um arquivo chamado `.env` com o seguinte conteúdo:

```env
PORT=3000
DATABASE_URL="mysql://root@localhost:3306/mydb"
```

## 5. Executar as Migrations

```bash
npx prisma migrate dev
```

## 6. Iniciar o Servidor

```bash
npm run dev
```

O servidor estará disponível em:

```text
http://localhost:3000
```

## 7. Executar o Front-end

Abrir o arquivo `index.html` diretamente no navegador ou utilizar a extensão **Live Server** do VS Code.

---

#  Banco de Dados

O banco de dados é responsável pelo armazenamento das informações de:

- Quartos;
- Reserva;
- Relacionamento entre quartos e reserva.

A comunicação com o banco é realizada através do Prisma ORM.

---

#  Testes da API

Para realizar os testes das rotas da API foi utilizada a ferramenta:

- Insomnia

Principais operações testadas:

- GET
- POST
- DELETE

---

# 📋 Estrutura do Sistema

```text
hotelreservas/
│
├── api/
│   ├── controllers/
│   ├── models/
│   └── routes/
│
├── prisma/
│   └── schema.prisma
│
├── web/
│   ├── css/
│   ├── js/
│   ├── imagens/
│   └── index.html
│
├── .env
├── package.json
└── README.md
```

---

#  Passo a Passo de Execução

1. Clonar o repositório;
2. Instalar as dependências com `npm install`;
3. Configurar o arquivo `.env`;
4. Executar as migrations com `npx prisma migrate dev`;
5. Iniciar o servidor com `npm run dev`;
6. Abrir o front-end pelo navegador ou Live Server;
7. Utilizar o sistema para cadastrar quartos e reservas.

---

#  Conclusão

O sistema Hotel Reservas foi desenvolvido para facilitar o gerenciamento de quartos e reservas, utilizando tecnologias modernas de desenvolvimento web. A aplicação integra front-end, back-end e banco de dados, oferecendo uma solução completa para administração de hospedagens.
