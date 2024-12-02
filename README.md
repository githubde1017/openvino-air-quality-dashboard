# 空氣品質 Dashboard 專案

這是一個基於 OpenVINO 的空氣品質 Dashboard 專案，旨在實時監控和顯示不同地點的空氣品質數據。

## 目標

- 使用 OpenVINO 優化的 AI 模型進行數據處理。
- 提供一個用戶友好的界面，顯示實時空氣品質指標。
- 支持多種數據源，方便用戶查詢和分析。

## 技術棧

- **前端**: React.js
- **後端**: Node.js, Express
- **數據庫**: MongoDB (或其他數據庫)
- **AI 模型**: OpenVINO
- **容器化**: Docker

## 安裝指南

### 前提條件

- 確保你已安裝 [Node.js](https://nodejs.org/) 和 [Docker](https://www.docker.com/).

### 環境設置

1. **克隆倉庫**:

   ```bash
   git clone https://github.com/yourusername/air-quality-dashboard.git
   cd air-quality-dashboard
   ```

2. **安裝依賴**:

   ```bash
   npm install
   ```

3. **運行 Docker**:

   確保 Docker 正在運行，然後構建並運行容器：

   ```bash
   docker build -t air-quality-dashboard .
   docker run -dp 3000:3000 air-quality-dashboard
   ```

4. **訪問應用**:

   打開瀏覽器，並訪問 `http://localhost:3000`。

## 使用說明

- 在應用啟動後，將自動加載空氣品質數據。
- 用戶可以選擇不同的地點來查看空氣品質指標，例如 PM2.5、PM10、CO2 等。

## 貢獻

歡迎貢獻！請遵循以下步驟：

1. Fork 此倉庫。
2. 創建一個新的分支 (`git checkout -b feature/YourFeature`)。
3. 提交你的更改 (`git commit -m 'Add some feature'`)。
4. 推送到分支 (`git push origin feature/YourFeature`)。
5. 提交 Pull Request。

