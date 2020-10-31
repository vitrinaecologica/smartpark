FROM node:buster

# create app dir
RUN mkdir -p /opt/smartpark/web

WORKDIR /opt/smartpark/web

# copy only build packages
COPY ./package*.json ./

COPY ./tsconfig*.json ./

COPY ./tslint*.json ./

COPY ./src ./src

RUN npm install 


CMD ["npm", "run start"]
