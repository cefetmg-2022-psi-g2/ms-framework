# Para rodar e utilizar
Para rodar e utilizar o framework você deve preencher o arquivo ```.env``` com a variavel de ambiente ```DB_PATH```. Essa variavel indica ao arquivo de conexão com o banco de dados```connection.js``` o caminho especifico do banco de dados.

> Atenção: lembre-se que a variavel db_path utiliza __dirname, assim tendo acesso ao contexto das pastas em que é executado.

> Caso encontre algum erro no arquivo ```connection.js```, fique atento ao caminho apontado pela variavel db_path log gerado 