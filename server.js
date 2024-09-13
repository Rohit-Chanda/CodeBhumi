import express from 'express';
import bodyParser from 'body-parser';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import xlsx from 'xlsx';

const app = express();
const port = 3000; // Or any port you prefer

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname));

// Serve your HTML files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/submit-enrollment', (req, res) => {
    const { name, address, contactNumber, email, courseName } = req.body;

    const filePath = './enrollments.xlsx';
    let workbook;

    if (existsSync(filePath)) {
        workbook = xlsx.readFile(filePath);
    } else {
        workbook = xlsx.utils.book_new();
        const worksheet = xlsx.utils.aoa_to_sheet([['Name', 'Address', 'Contact Number', 'Email', 'Course Name', 'Enrollment Date']]);
        xlsx.utils.book_append_sheet(workbook, worksheet, 'Enrollments');
    }

    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const newData = [[name, address, contactNumber, email, courseName, new Date().toLocaleString()]];
    xlsx.utils.sheet_add_aoa(worksheet, newData, { origin: -1 });

    xlsx.writeFile(workbook, filePath);

    res.redirect(`/thank-you.html?email=${encodeURIComponent(email)}&courseName=${encodeURIComponent(courseName)}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
