# Coffee Shop with MongoDB (No Images) - รหัสนักศึกษา: 67230096

## วิธีใช้งาน

1. ติดตั้ง MongoDB และเปิดใช้งาน MongoDB server
2. แตกไฟล์ zip นี้
3. เปิด terminal ในโฟลเดอร์
4. ติดตั้งแพ็กเกจ:
```
npm install
```
5. รันเซิร์ฟเวอร์:
```
npm start
```
6. เปิดเบราว์เซอร์ที่: http://localhost:8000/

## API
- GET `/api` - ดูรายการกาแฟทั้งหมด
- POST `/api` - เพิ่มรายการกาแฟใหม่ผ่าน Postman

### ตัวอย่าง JSON
```json
{
  "name": "Espresso",
  "size": "Small",
  "price": 60
}
```