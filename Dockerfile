FROM node:12

ENV PORT 90

EXPOSE 90

COPY package.json package.json
RUN npm install

COPY . .
RUN npm run build

CMD ["node", "dist/"]