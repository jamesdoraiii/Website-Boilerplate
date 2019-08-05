FROM node:10-alpine
RUN apk update && \
    apk upgrade && \
    apk add git
USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY . . 
EXPOSE 3000
