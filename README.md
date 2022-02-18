NextJS TypeScript TailwindUI GraphQL Boilerplate
---

Demonstrates a NextJS application with TypeScript and TailwindUI with a ASP.Net Core GraphQL based API utilizing the Hot Chocolate GraphQL library.


The frontend utilizes code generation for the GraphQL schema and queries and also demonstrates the use of MobX to manage state.

Traefik is used to proxy the API to the frontend.

## Getting Started:

Requires Git, Docker, a code editor such as Visual Studio Code.

1. Clone the Repository
2. Run ```docker-compose -f docker-compose.yml -f docker-compose.override.yml up -d```
3. Open the browser and navigate to http://app.localhost

Changes to /App/**/* are watched and automatically reloaded.

To regenerate the GraphQL code for the frontent, within /App/ run ``yarn generate-gql```


The GraphQL endpoint and the Banana Cake Pop IDE are available at at http://app.localhost/graphql/

The traefik dashboard is exposed at http://traefik.localhost/dashboard/


Within this repository are Github Actions that demonstrate a CI process of building and pushing the docker images to the GitHub registry.


[![App CD](https://github.com/rdacorporation/nextjs-typescript-tailwindui-graphql-boilerplate/actions/workflows/app-cd.yml/badge.svg)](https://github.com/rdacorporation/nextjs-typescript-tailwindui-graphql-boilerplate/actions/workflows/app-cd.yml)

[![GraphQL CD](https://github.com/rdacorporation/nextjs-typescript-tailwindui-graphql-boilerplate/actions/workflows/graphql-cd.yml/badge.svg)](https://github.com/rdacorporation/nextjs-typescript-tailwindui-graphql-boilerplate/actions/workflows/graphql-cd.yml)

Pull requests welcome.