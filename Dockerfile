FROM node:20
WORKDIR /app

RUN npm init -y && npm install \
  express@^4.17.2 \
  sequelize@^6.17.0 \
  "@sequelize/core@^7.0.0-alpha.10" \
  pg@^8.7.3 \
  bcrypt@^5.0.1 \
  body-parser@^1.19.1 \
  cors@^2.8.5 \
  jsonwebtoken@^8.5.1 \
  axios@^0.26.1 \
  dotenv@^10.0.0 \
  nodemon@^2.0.15 \
  ejs@^3.1.6 \
  iconv@^3.0.1 \
  async@^3.2.3

# Copy only backend source files
COPY index.js ./
COPY config/ ./config/
COPY models/ ./models/
COPY routes/ ./routes/
COPY utils/ ./utils/
COPY dump.sql ./

ENV PORT=8000
ENV JWT_TOKEN_SECRET=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTY0MDg3MTk2NCwiZXhwIjoxNjQwODc1NTY0fQ.X2KO-pDj3itxifz14dcY1jDMNGGc0KoIQlBE7I2DkbA
ENV TOKEN_EXPIRE_SECONDS=86400
EXPOSE 8000
CMD ["npx", "nodemon", "--watch", "./**", "index.js"]
