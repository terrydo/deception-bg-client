# pull official base image
FROM node:12.21.0-alpine3.12 as dev

# set working directory
WORKDIR /app

# add app
COPY . ./

RUN npm install
# start app
RUN npm start