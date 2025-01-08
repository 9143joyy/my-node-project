// gallery 的部分
var data1 = Vue.createApp({
    data() {
        return {
            gallery: [], // 初始化 gallery 為空陣列
        };
    },
    mounted() {
        // 使用 jQuery 的 $.ajax 發送請求
        $.ajax({
            url: "http://localhost:3000/gallery", // API 路徑
            method: "GET",    // HTTP 方法
            dataType: "json", // 資料格式
            success: (results) => {
                this.gallery = results; // 將回傳的資料綁定到 Vue 的 gallery
            },
            error: (xhr, status, error) => {
                console.error("Error fetching data:", status, error);
            },
        });
    },
});
data1.mount("#gallery");

// carousel 的部分
var data2 = Vue.createApp({
    data() {
        return {
            carousel: [], // 用來存放圖片資料
            currentIndex: 0, // 當前顯示圖片的索引
        };
    },
    mounted() {
        // 使用 jQuery 的 $.ajax 發送請求
        $.ajax({
            url: "http://localhost:3000/carousel",  // 伺服器端提供圖片資料的 API 路徑
            method: "GET",    // HTTP 方法
            dataType: "json", // 資料格式為 JSON
            success: (results) => {
                this.carousel = results; // 將回傳的資料綁定到 Vue 的 carousel
            },
            error: (xhr, status, error) => {
                console.error("Error fetching data:", status, error);
            }
        });

        // 設定一個定時器來自動切換圖片
        setInterval(this.nextImage, 3000);  // 每 3 秒自動切換圖片
    },
    methods: {
        // 讓圖片循環顯示，手動切換到下一張圖片
        nextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.carousel.length;  // 使用 carousel 而不是 gallery
        },
        // 手動切換到上一張圖片
        prevImage() {
            this.currentIndex = (this.currentIndex - 1 + this.carousel.length) % this.carousel.length;  // 使用 carousel 而不是 gallery
        }
    }
}).mount('#carousel');




  
  


  