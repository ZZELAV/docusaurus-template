# docusaurus

## local development

with docker (use Hyper-V on Windows if live-reload is needed):

```
docker-compose up
```

on new docusaurus version remove volume (`docker volume rm docusaurus_ignore`) and recreate container

with npm:

```
npm start
```

## build

```
npm run build
```

## deployment

```
npm run deploy
```