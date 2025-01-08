var express = require("express");
var cors = require("cors");  // 引入 CORS 套件
var server = express();
var path = require("path");

// 啟用 CORS
server.use(cors());

// 設定 web 根目錄為 public 資料夾
 // 提供 public 資料夾中的所有靜態檔案

server.use(express.static(path.join(__dirname,"public")))
// 使用內建的 JSON 和 URL 編碼解析器
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

var fileUpload = require("express-fileupload");
server.use(fileUpload({ defCharset: 'utf8', defParamCharset: 'utf8' }));

// 設定資料庫
var DB = require("nedb-promises");
var galleryDB = DB.create(path.join(__dirname, "db", "gallery.db"));  // 確保 "db" 資料夾存在
var carouselDB = DB.create(path.join(__dirname, "db", "carousel.db"));  // 確保 "db" 資料夾存在

// 插入資料前檢查是否已經有資料
async function checkAndInsertGallery() {
    const count = await galleryDB.count({});
    if (count === 0) {
        galleryDB.insert([
            { img: "flame.gif", text: "FLAME CLOCK" },
            { img: "solid.gif", text: "SOLID CLOCK" },
            { img: "spiral.gif", text: "SPIRAL CLOCK" },
        ]).then(() => {
            console.log("Gallery data inserted.");
        }).catch(err => {
            console.error("Error inserting gallery data:", err);
        });
    }
}

async function checkAndInsertCarousel() {
    const count = await carouselDB.count({});
    if (count === 0) {
        carouselDB.insert([
            { img: "/img/1.JPG" },
            { img: "/img/2.JPG" },
            { img: "/img/3.JPG" },
            { img: "/img/4.JPG" },
        ]).then(() => {
            console.log("Carousel data inserted.");
        }).catch(err => {
            console.error("Error inserting carousel data:", err);
        });
    }
}

// 在伺服器啟動時檢查並插入資料
checkAndInsertGallery();
checkAndInsertCarousel();

// 取得 gallery 資料
server.get("/gallery", (req, res) => {
    galleryDB.find({}).then(results => {
        if (results != null) {
            res.send(results);
        } else {
            res.send("Error!");
        }
    }).catch(err => {
        res.send("Error retrieving gallery data: " + err);
    });
});

// 取得 carousel 資料
server.get("/carousel", (req, res) => {
    carouselDB.find({}).then(results => {
        if (results != null) {
            res.send(results);
        } else {
            res.send("Error!");
        }
    }).catch(err => {
        res.send("Error retrieving carousel data: " + err);
    });
});

// 預設首頁
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

// 伺服器監聽
server.listen(3000, () => {
    console.log("Server is running at port 3000.");
});
