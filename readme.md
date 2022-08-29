# O framework
Esse é um framework que une a base comum de codigos entre os microserviços da aplicação Quebra Galho.
## Para rodar e utilizar
Para rodar e utilizar o framework você deve primeiro chamar a função ```dbHelper.init([path])``` com o parametro ```PATH```. Esse parametro indica ao arquivo de conexão com o banco de dados```connection.js``` o caminho especifico do banco.

> Caso encontre algum erro no arquivo ```connection.js```, fique atento ao caminho do banco apontado log gerado 