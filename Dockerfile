# build the image
# docker build -t node-container .

# run the container
# docker run --rm -p 3000:80 -v mydata:/savedData node-container

#copy the message file out of the running container
# docker cp <container ID>:/app/message.txt /Repos/learnNode/savedData/

FROM node

WORKDIR /app

COPY /project/package.json /app

RUN npm install

COPY /project /app

EXPOSE 80 

CMD ["node", "app.js"]
