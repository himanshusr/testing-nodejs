# Restaurant Apis
## Features

| Apis | Endpoints | Methods
| ------ | ------ | ------ |
| Ping the server | [localhost:5000/health][PlGa] |GET|
| Get all veg restaurant | [localhost:5000/restaurants?veg=true][PlDb]| GET|
| Get all veg restaurant that have low cost | [localhost:5000/restaurants?veg=true&cost=low][PlGh] |GET|
| Get all veg restaurant that have low cost and have cuisines “french” | [localhost:5000/restaurants?veg=true&cost=low&cuisine=french][PlGd] |GET|
| Get all restaurant that have (high or low) cost and have cuisines “french” and “italian” | [localhost:5000/restaurants?cost=high,low&cuisine=french;italian][PlOd] |GET|
| Get all restaurant that have (high or low) cost and have cuisines “french” or “italian” | [localhost:5000/restaurants?cost=high,low&cuisine=french,italian][PlMe] |GET|
| Get all restaurants | [localhost:5000/restaurants][PlGa] |GET|
| Create a restaurant | [localhost:5000/restaurants][PlGa] |POST|
| Delete a restaurant | [localhost:5000/restaurants/:id][PlGa] |DELETE|
| Update a restaurant | [localhost:5000/restaurants/:id][PlGa] |PUT|

# Setup

1. Get the latest code

2. Do `npm install`

3. Create a new postgres database 

4. Make a copy of the knexfile

```
cp knexfile.js.sample knexfile.js
```

5. Edit `knexfile.js` as needed

6. Make a copy of .env.sample and edit as needed

```
cp .env.sample .env
```

7. Run the initial migration

```
./node_modules/knex/bin/cli.js migrate:latest
```

8. Run the seed

```
./node_modules/knex/bin/cli.js seed:run
```


## License

MIT
