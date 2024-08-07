# Olympic Go

![Olympic Logo](assets/img/olimpic-logo.png)

## Sobre o Projeto

Este projeto é um fork do repositório [mp-hackathon-olimpiadas](https://github.com/codante-io/mp-hackathon-olimpiadas). A ideia era consumir a API das Olimpíadas e usar a criatividade para desenvolver uma aplicação que exibam dados sobre a competição. O projeto exibe o quadro de medalhas dos Jogos Olímpicos, permitindo aos usuários filtrar por país e ver o top 10 países por medalhas. Também é possível alternar entre os temas claro e escuro.

## Tecnologias Utilizadas

- ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
- ![Golang](https://img.shields.io/badge/-Golang-00ADD8?style=flat-square&logo=go&logoColor=white)

## Funcionalidades

- Exibição do quadro de medalhas por país
- Exibição do top 10 países por medalhas
- Filtro de medalhas por país
- Alternância entre temas claro e escuro
- Responsividade

## Como Rodar o Projeto

1. Clone o repositório
    ```sh
    git clone https://github.com/WesleyBSa/mp-hackathon-olimpiadas.git
    ```
2. Navegue até o diretório do projeto
    ```sh
    cd olympic-go
    ```
3. Execute o main.go e acesse a porta 4040. (go run ./cmd/main.go)

## Estrutura do Projeto

```
.
├── assets
│ ├── css
│ │ └── styles.css
│ ├── img
│ │ └── olimpic-logo.png
│ └── js
│ └── script.js
├── cmd
│ └── main.go
├── internal
│ ├── controllers
│ │ └── medal_controller.go
│ ├── models
│ │ └── medal.go
│ ├── repositories
│ │ └── medal_repository.go
│ ├── routes
│ │ └── routes.go
│ └── services
│ └── medal_service.go
├── index.html
└── README.md
```

## Capturas de Tela

### Tela Inicial
![Tela Inicial](web/assets/img/tema-claro.png)

### Quadro de Medalhas
![Quadro de Medalhas](web/assets/img/medalhas.png)

### Tema Escuro
![Tema Escuro](web/assets/img/tema-escuro.png)

## Contato

Desenvolvido por [Wesley B. Santana](https://www.linkedin.com/in/wesley-batista-74b7a1198/)

[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/WesleyBSa)
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/wesley-batista-74b7a1198/)