FROM node:carbon
VOLUME ["/root"]
ADD setup-ffmpeg.sh /root
RUN /root/setup-ffmpeg.sh

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]
