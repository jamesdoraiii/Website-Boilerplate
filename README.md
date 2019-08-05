# Lava

## Running with Docker

```bash
docker-compose up
```

## Running Locally

After cloning you need to create a `.env` file. You can copy from the `sample.env`

```bash
cp sample.env .env
```

Youll need to have postgres running locally and create a table called `lava_development`

```bash
npm start
```

## Priming database

There is a script that primes the datase from the `.csv` generated from the [Mastersheet](https://docs.google.com/spreadsheets/d/1dmzl6iNPMgX8GG4pa1i1Mvbb8SKiYQzyrjNuNCsGyO4/edit#gid=0)

```bash
# docker
docker-compose exec node npm run prime

# locally
npm run prime
```


## Graphiql

Graphiql is a ui that allows you to see documentation for the entire graphql api like filters, pagination, fieldNames etc. You can experiment with writing queries and mutations in the editor, check they work then copy and paste them into the project.

You can visit it at `http://localhost:3000/apis/graphiql`
