-- 創建資料庫
CREATE DATABASE messages_db;

-- 使用剛剛創建的資料庫
USE messages_db;

-- 創建留言表格
CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
