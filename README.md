# <p align="center">API de procura por usuários do GITHUB</p>
#### <p align="center">Projeto pessoal</p>
##### <p align="center">Desenvolvido por: [Gabriel Mazzuco](https://github.com/gabrielmazz)


# Introdução

<p align="justify">
    Este projeto foi desenvolvido com o intuito de aprimorar meus conhecimentos em desenvolvimento web, utilizando a linguagem de programação JavaScript e a biblioteca ReactJS. A aplicação é uma API de procura por usuários do GITHUB, onde é possível pesquisar por usuários e visualizar informações sobre o mesmo.
</p>


<p align="center">
    <img src="/src/assets/img_readme/image.png" width="100%" height="" 
    style="box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">
</p>

# Como utilizar

<p align="justify">
    Para utilizar a aplicação, execute localmente o servidor do React. Dentro do site, digite o nome do usuário que deseja e clique no botão de pesquisa. A aplicação irá retornar as informações do usuário pesquisado como o próprio login, a URL do usuário, quando a conta foi criada, email, bio e assim por diante
</p>

# Tecnologias utilizadas

- [ReactJS](https://pt-br.reactjs.org/)
    - [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
    - [Tailwind CSS](https://tailwindcss.com/)
    - [Shadcn CSS](https://ui.shadcn.com/)
    - [React Icons](https://react-icons.github.io/react-icons/)

# Instalando as dependencies

1. Clone o repositório
```bash
git clone https://github.com/gabrielmazz/api-de-procura-por-usuarios-do-github.git
```

2. Instale as dependências
```bash
npm install
npm install -D tailwindcss postcss autoprefixer
npm install react-icons --save
```

3. Execute o servidor
```bash
npm run dev
```

# Como funciona a API

<p align="justify">
    A aplicação utiliza a API do GITHUB para buscar informações sobre os usuários. A API do GITHUB é uma API RESTful, que retorna os dados em formato JSON. Para utilizar a API, é necessário fazer uma requisição HTTP GET para a URL da API, passando o nome do usuário que deseja pesquisar. A API irá retornar um objeto JSON com as informações do usuário pesquisado.
</p>

```javascript
async function fetchGithubUserData() {

    setLoading(true)

    const res = await fetch(`https://api.github.com/users/${userName}`)
    const data = await res.json()

    if(data){
        setUserData(data)
        setLoading(false)
    }

}
```