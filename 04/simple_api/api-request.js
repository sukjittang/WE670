const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
const esMember=[
    {id:21, 'fname': 'พัชรพล', 'lname': 'จันทร์นวล', 'tel': '0812345678'},
    {id:33, 'fname': 'แทนรัก', 'lname': 'มงคลกาล', 'tel': '0998745632'},
    {id:42, 'fname': 'ชาลิสา', 'lname': 'ดนตรีเทพ', 'tel': '0987612345'},
    {id:45, 'fname': 'วิชาญ', 'lname': 'อรรถทรัพย์', 'tel': '0875321594'},
    {id:47, 'fname': 'วิรัตน์', 'lname': 'รุ่งเรือง', 'tel': '0785214569'}
];
app.listen(port,'127.0.0.1',()=>{
    console.log(`Listening to request on port ${port}`);
});
app.get('/api/getmember',(req,res)=>{
    res.send(esMember);
});
app.get('/api/querymember',(req,res)=>{
        const myQueryString = req.query;
        if(Object.keys(myQueryString).length!= 0){
            const memId = esMember.find(element => element.id == parseInt(myQueryString.id));
            if(memId){
                res.send(memId);
            }else{
                res.status(404).send('ไม่พบข้อมูลสมาชิกของรหัสนี้');
            }
            
        }else{
            res.status(404).send('ไม่พบหน้า API ที่เรียก');
        }
});
app.get('/api/getmemid/:id',(req,res)=>{
        const memId = esMember.find(element => element.id === parseInt(req.params.id));
        if(memId){
            res.send(memId);
        }else{
            res.status(404).send('ไม่พบรหัสนักศึกษานี้');
        }
});
app.post('/api/addmember',(req,res)=>{
    // get data from request body
    const memId=req.body.id;
        const memFname=req.body.fname;
        const memLname=req.body.lname;
        const memTel=req.body.tel;
        const newMember={
            id:memId,
            'fname':memFname,
            'lname':memLname,
            'tel':memTel
        };
        esMember.push(newMember);
        res.send(esMember);
    });
app.post('/api/addmembers',(req,res)=>{
            // get data from request body
            const memArr = req.body;
            memArr.forEach(element=>{
                const memId=element.id;
                const memFname = element.fname;
                const memLname = element.lname;
                const memTel = element.tel;
                const newMembers = {
                    id:memId,
                    'fname':memFname,
                    'lname':memLname,
                    'tel':memTel
                };
                esMember.push(newMembers);
            });
           res.send(esMember);
        });
app.put('/api/editmem/:id',(req,res)=>{
    const memId = esMember.find(element => element.id === parseInt(req.body.id));
        if(memId){
            memId.fname = req.body.fname;
            memId.lname = req.body.lname;
            memId.tel = req.body.tel;
        }else{
            res.status(404).send('ไม่พบรหัสนักศึกษานี้');
        }
    res.send(esMember);
});

app.delete('/api/deletemem/:id',(req,res)=>{
        const memId = esMember.find(element => element.id === parseInt(req.params.id));
        if(memId){
            const index = esMember.indexOf(memId);
            esMember.splice(index,1);
        }else{
            res.status(404).send('ไม่พบรหัสสมาชิกนี้');
        }
        res.send(esMember);
});
    