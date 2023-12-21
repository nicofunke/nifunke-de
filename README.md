# My Homepage

## Local Docker Deployment

I mean: Why not? 💁
Create `sample` image.

```
docker build -t sample:dev .
```

Run `sample` locally

```
docker run -itd --rm -v ${PWD}:/src -v /node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true sample:dev
```

## Deploy Docker Image

Deploy `sample` prod image

```
docker build -f Dockerfile.prod -t sample:prod .
```

Run `sample` prod image locally

```
docker run -it --rm -p 1337:80 sample:prod
```

Build image and push to docker hub

```
docker build -t nifunke/homepage:v1 .
docker tag nifunke/homepage:v1 nifunke/homepage:v1-release
docker push nifunke/homepage:v1-release
```

Create builder for ARM

```
docker buildx create --name mybuilder
```

Build image for ARM(e.g. Raspberry Pi)

```
docker buildx use mybuilder
docker buildx build --platform linux/amd64 -t nifunke/homepage:v1 --load .
```

Build image for ARM(e.g. Raspberry Pi) and push to docker hub

```
docker buildx use mybuilder
docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t nifunke/homepage:v1 --push .
```

Inspect image to see which platforms it supports

```
docker buildx imagetools inspect nifunke/homepage:v1
```

Example `docker-compose.yml` file

```yml
version: "2"
services:
  app:
    container_name: homepage_app
    image: nifunke/homepage:v1
    restart: always
    networks:
      - proxy
```

## TODO

- Scroll to top on route changes
- Mousefriend with varying styles on hover
- Better hover effect for contact icons
- Portfolio

Background with gradient overlay
linear-gradient(to bottom,var(--vy-white),rgba(245,245,245,.57) 50%,var(--vy-white)),url(https://assets-global.website-files.com/5f97e53f0dfe4317882c4b91/630124a4510a182394b78a68_map.jpg)

## Ideeen

- Animation Timeline
- View Transition
- Initial letter
