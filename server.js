import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';

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

// POST route for enrollment form
app.post('/submit-enrollment', async (req, res) => {
    const { name, address, contactNumber, email, courseName } = req.body;

    // Pabbly Webhook URL
    const webhookUrl = 'https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZkMDYzMjA0MzE1MjY5NTUzZDUxMzYi_pc';

    const enrollmentData = {
        name,
        address,
        contactNumber,
        email,
        courseName,
        enrollmentDate: new Date().toLocaleString(),
    };

    try {
        // Send form data to Pabbly webhook
        await axios.post(webhookUrl, enrollmentData);

        // Redirect user to thank you page after form submission
        res.redirect(`/thank-you.html?email=${encodeURIComponent(email)}&courseName=${encodeURIComponent(courseName)}`);
    } catch (error) {
        console.error('Error sending data to Pabbly:', error);
        res.status(500).send('An error occurred while submitting the enrollment.');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
