1. Change package versions in `package.json` to latest.
2. Run `npm update` and `npm install`
3. Remove related Docker container by running `docker compose down -v` and Docker image `docker rmi docusaurus-docs`
4. Recreate Docker container with `docker compose up`
