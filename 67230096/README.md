# โครงงานร้านขายกาแฟ
## โฟลเดอร์: 65123456

### วิธีรันโปรเจกต์
1. ติดตั้งแพ็คเกจ
```
npm install
```
2. เริ่มต้นเซิร์ฟเวอร์
```
npm start
```

### API ที่รองรับ

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/coffees`        | ดึงรายการกาแฟทั้งหมด |
| GET    | `/api/coffees/:id`    | ดึงกาแฟตาม ID |
| POST   | `/api/coffees`        | เพิ่มกาแฟใหม่ |
| PUT    | `/api/coffees/:id`    | แก้ไขข้อมูลกาแฟ |
| DELETE | `/api/coffees/:id`    | ลบข้อมูลกาแฟ |

### ตัวอย่าง JSON สำหรับ POST/PUT

```json
{
  "name": "Espresso",
  "size": "Medium",
  "price": 55
}
```