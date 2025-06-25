// assignmentmodule.js
const express = require('express');
const app = express();
const Student = require('./studentmodule');
const { computeAge } = require('./agemodule');
app.get('/stuinfo', (req, res) => {
  const { id, name, birthdate } = req.query;

  if (!id || !name || !birthdate) {
    return res.status(400).send('กรุณาระบุ id, name และ birthdate ใน query string');
  }
  const student = new Student(id, name, birthdate);
  const age = computeAge(birthdate);
  const output = `
Student Information:

Id: ${student.id}
Name: ${student.name}
Birthdate: ${student.birthdate}
Age: ${age}
  `;
  res.type('text/plain').send(output);
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});