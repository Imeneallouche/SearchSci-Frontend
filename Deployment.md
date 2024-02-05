# Deployment

in case you are interested to know how the frontend docker image has been deployed, here you go:

- build the docker image

```yaml
docker build . -t <DOCKER_IMAGE_NAME>
```

- see all the existing docker images in your pc

```yaml
docker image ls
```

- run the docker image that you have created

```yaml
docker run <DOCKER_IMAGE_NAME>
```

- see all the existing docker images with their IDs exposed

```yaml
docker ps
```

- execute the docker image locally

```yaml
docker exec -it <CONTAINER_ID> sh
```
