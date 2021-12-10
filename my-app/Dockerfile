# STAGE 1 - Build

FROM node:14-alpine AS build

WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:${PATH}

COPY package.json ./

COPY package-lock.json ./

RUN npm install

COPY . ./

RUN npm run build

#STAGE 2 - Prod

FROM nginx:1.20.2-alpine

COPY --from=build /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# to build => docker build -t react-portfolio:dev .
# to run in CLI => docker run --rm  -it -p 3000:80/tcp react-portfolio:dev