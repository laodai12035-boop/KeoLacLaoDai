# Kẹo Lạc Lão Đại 🥜

> **Website thương mại điện tử** cho thương hiệu kẹo lạc truyền thống Việt Nam — thiết kế hoài cổ, giao diện ấm cúng, thuần HTML/CSS/JS, deploy thẳng lên GitHub Pages.

## 🌐 Live Demo

Deploy URL: `https://<your-username>.github.io/<repo-name>/`

---

## 📁 Cấu trúc dự án

```
WebsiteKeoLacLaoDai/
├── index.html          # Trang chủ (Hero, Câu chuyện, Sản phẩm nổi bật)
├── products.html       # Trang sản phẩm (lưới 8 sản phẩm, lọc, sắp xếp)
├── order.html          # Form đặt hàng nhanh
├── my-orders.html      # Quản lý đơn hàng (dashboard)
├── css/
│   └── style.css       # Toàn bộ design system + responsive
├── js/
│   ├── main.js         # Navigation, scroll effects, toast
│   ├── products.js     # Dữ liệu sản phẩm & hàm render
│   └── orders-db.js    # CRUD đơn hàng bằng localStorage
└── assets/
    ├── hero_banner.png
    └── products_flatlay.png
```

---

## ✨ Tính năng

| Trang | Tính năng |
|---|---|
| **Trang chủ** | Hero animation, câu chuyện thương hiệu, sản phẩm nổi bật, CTA section |
| **Sản phẩm** | Lưới 8 sản phẩm, filter theo loại, sort giá/tên, slide panel chi tiết |
| **Đặt hàng** | Form validate, chọn sản phẩm trực quan, tính phí ship tự động, modal xác nhận |
| **Đơn hàng** | Thống kê, tìm kiếm, lọc trạng thái, cập nhật status, xoá đơn, xuất CSV |

---

## 🎨 Design System

- **Font**: Playfair Display (heading) · Lora (body) · Be Vietnam Pro (UI)
- **Màu chủ đề**: Nâu gỗ `#3D2B1F` · Vàng lạc `#C8922A` · Xanh rêu `#5C6E41` · Kem sepia `#FAF3E0`
- **Hiệu ứng**: CSS bamboo texture, scroll reveal, hover lift cards, page transition

---

## 🗃️ Order Database (localStorage)

Mỗi đơn hàng được lưu theo cấu trúc:

```json
{
  "id": "LD-20250417-3842",
  "date": "2025-04-17T09:30:00.000Z",
  "status": "processing",
  "name": "Nguyễn Văn A",
  "phone": "0912345678",
  "address": "Số 1, Đường ABC, Hà Nội",
  "productName": "Kẹo Lạc Mật Mía",
  "productVariant": "500g",
  "unitPrice": 85000,
  "quantity": 2,
  "subtotal": 170000,
  "shippingFee": 30000,
  "total": 200000,
  "payment": "cod"
}
```

---

## 🚀 Deploy lên GitHub Pages

```bash
# 1. Tạo repo mới trên GitHub
# 2. Clone về và copy file vào
git clone https://github.com/<username>/<repo>.git
cp -r WebsiteKeoLacLaoDai/* <repo>/

# 3. Commit & push
cd <repo>
git add .
git commit -m "feat: Kẹo Lạc Lão Đại website"
git push origin main

# 4. Vào Settings > Pages > Source: Deploy from branch main /root
```

---

## 📱 Responsive

- ✅ Desktop (1200px+)
- ✅ Tablet (768px – 1024px)  
- ✅ Mobile (320px – 767px)

---

*© 2025 Kẹo Lạc Lão Đại. Thiết kế với ❤️ từ làng quê Việt Nam.*
