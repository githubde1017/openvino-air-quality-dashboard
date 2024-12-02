# 使用 Node.js 基礎映像
FROM node:14

# 設置工作目錄
WORKDIR /app

# 拷貝 package.json 和 package-lock.json
COPY package*.json ./

# 安裝依賴
RUN npm install

# 拷貝其餘的專案文件
COPY . .

# 開放端口
EXPOSE 3000

# 啟動應用
CMD ["npm", "start"]
