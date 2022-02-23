# NextJS TypeScript TailwindUI GraphQL Boilerplate

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

The traefik dashboard is exposed at http://app.localhost/traefik/dashboard/

## Continuous Integration
Within this repository are Github Actions that demonstrate a CI process of building and pushing the docker images to the GitHub registry.


[![App CD](https://github.com/rdacorporation/nextjs-typescript-tailwindui-graphql-boilerplate/actions/workflows/app-cd.yml/badge.svg)](https://github.com/rdacorporation/nextjs-typescript-tailwindui-graphql-boilerplate/actions/workflows/app-cd.yml)

[![GraphQL CD](https://github.com/rdacorporation/nextjs-typescript-tailwindui-graphql-boilerplate/actions/workflows/graphql-cd.yml/badge.svg)](https://github.com/rdacorporation/nextjs-typescript-tailwindui-graphql-boilerplate/actions/workflows/graphql-cd.yml)

Pull requests welcome.

## Continuous Deployment

Any cloud provider that supports containers can be used to deploy the application. Detailed below are instructions to do so for various cloud offerings.

### Azure App Service for Containers

Via the Azure CLI, one can deploy this stack to an Azure App Service for Containers.

First, [install and configure the Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli) - logging into the desired Azure account and subscription then running the following commands:

``` bash
#/bin/bash

# Variables
resourceGroupName="nextjs-typescript-tailwindui-graphql-boilerplate"
aspName="AppServiceLinuxDockerPlan"
aspSku="F1"
appName="nextjs-typescript-tailwindui-graphql-boilerplate-$RANDOM"
location="CentralUS"

# Create a Resource Group
az group create --name $resourceGroupName --location $location

# Create an App Service Plan
az appservice plan create --name $aspName --resource-group $resourceGroupName --location $location --is-linux --sku $aspSku

# Create a multi-container app service
az webapp create --resource-group $resourceGroupName --plan $aspName --name $appName --multicontainer-config-type compose --multicontainer-config-file docker-compose-azure.yml

# Copy the result of the following command into a browser to see the web app.
echo http://$appName.azurewebsites.net

# Optional: Enable container CD - Copy the value of CI_CD_URL into the GH Actions workflows and uncomment the 'Trigger CD' actions. Remember to escape the $ sign with \$.
# az webapp deployment container config --enable-cd --name $appName --resource-group $resourceGroupName
```

### Azure Container Apps

> TODO: Add a configuration to deploy the application to Azure Container Apps

### Digital Ocean K8s Cluster

> TODO: Add a configuration to deploy the application to a Digital Ocean K8s cluster

### AWS EKS

> TODO: Add a configuration to deploy the application to AWS EKS

### Azure Kubernetes Service (AKS) via Terraform

> TODO: Add a terraform configuration

### Local K8s/K3s cluster via helm

> TODO: Add a helm chart