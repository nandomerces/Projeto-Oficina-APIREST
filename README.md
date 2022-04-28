<h1> :red_car: Oficina mecânica</h1>
Api Rest para gerenciamento de Oficina Mecânica, podendo manter o controle de clientes, funcionarios, peças, fornecedores, seguro e vendas realizadas,
assim tendo um controle melhor do estabelecimento.

<h2>:computer: Tecnologias Utilizadas<h2>
<ul>
    <li>Node.js</li>
    <li>Express</li>
    <li>Sqlite3</li>
    <li>Sequelize</li>
    <li>Jest</li>
</ul>

<h2>:hammer: Iniciando o projeto localmente</h2>
<li>Para instalar dependências do projeto:</li>
    
```  
npm install
```
    
<li>Para iniciar projeto em desenvolvimento:</li>
    
```  
npm start
```  
    
    
<h2>:rocket: Para usar API sem precisar baixar - Hospedagem no Heroku </h2>
<li>Efetuando um cadastro:</li>
<p>Deve-se usar o metodo POST acessando o link com a entidade desejada passando o objeto com os atributos requeridos </p>
    
```  
https://oficina-mecanica-resilia.herokuapp.com/pecas   // Link com a entidade PEÇAS, caso queira outra entidade basta substituir
```  
    
    
    
<p>Botar uma imagem aqui da requisição no Postman ou Insomnia</p>
    
<li>Buscando todos os cadastros da entidade:</li>
<p>Deve-se usar o metodo GET acessando o link com a entidade desejada</p>

```  
https://oficina-mecanica-resilia.herokuapp.com/pecas   // Link com a entidade PEÇAS, caso queira outra entidade basta substituir
```  


<p>Botar uma imagem aqui da requisição no Postman ou Insomnia</p>
    
    
    
<li>Buscando buscando cadastro com o filtro:</li>
<p>Deve-se usar o metodo GET acessando o link com a entidade desejada e o filtro pelo body</p>

```  
https://oficina-mecanica-resilia.herokuapp.com/pecas/atributos   // Link com a entidade PEÇAS, caso queira outra entidade basta substituir
```  


<p>Botar uma imagem aqui da requisição no Postman ou Insomnia</p>
    
    
    
<li>Atualizando cadastro da entidade:</li>
<p>Deve-se usar o metodo PUT acessando o link com a entidade desejada e usando um atributo para busca e outro(s) que irão ser modificados</p>

```  
https://oficina-mecanica-resilia.herokuapp.com/pecas   // Link com a entidade PEÇAS, caso queira outra entidade basta substituir
```  


<p>Botar uma imagem aqui da requisição no Postman ou Insomnia</p>

    
    
<li>Deletando cadastro da entidade:</li>
<p>Deve-se usar o metodo Delete acessando o link com a entidade desejada e passando o atributo como filtro, para ir no cadastro certo</p>

```  
https://oficina-mecanica-resilia.herokuapp.com/pecas   // Link com a entidade PEÇAS, caso queira outra entidade basta substituir
```  


<p>Botar uma imagem aqui da requisição no Postman ou Insomnia</p>
    
    
    
<h2>:key: Entidades do Projeto</h2>
    <p><b>Peças</b></p>
    
    id - PK
    nome - required
    preço - required
    categoria
    quantidade
    marca
    garantia
