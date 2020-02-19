# LinkApi-Test
An API made as a back-end test for the LinkApi company

The API documentation is avaliable on [swagger hub](https://app.swaggerhub.com/apis-docs/magnuspedro/LinkApi-Test/1.0.0#/default)

## Development

To make the integration with Pipedrive a cronjob made, it looks into the Pipedrive API every minute to retrieve new won transactions, as available in the API the pagination params are used and saved on a collection, so the cronjob starts from the last seen page.

The Bling integration is made by searching on the transaction collection for a status false (The transaction wasn't sent to Bling API). Then all found transactions are sent to the API, and the transaction status is switched to true.

Also, a Dockerfile and a docker-compose file were created to deploy the code using containers.
