NextJS TypeScript TailwindUI GraphQL Boilerplate
---

Demonstrates a NextJS application with TypeScript and TailwindUI utilizing a ASP.Net Core GraphQL API that uses Hot Chocolate.

The frontend utilizes code generation for the GraphQL queries.

Traefik is used to proxy the API to the frontend

#### Getting Started:

Requires Git, Docker, a code editor such as Visual Studio Code.

1. Clone the Repository
2. Run ```docker-compose -f docker-compose.yml -f docker-compose.override.yml up -d```
3. Open the browser and navigate to http://app.localhost:3000


Also demonstrates Github actions to build and push docker images to the GitHub registry
