const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// مسارات التجربة للتحقق
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Rabeh Backend is running!' });
});

// مسار تفعيل الرخصة
app.post('/api/activation/activate', (req, res) => {
    const { code } = req.body;
    if (code && code.length >= 10) {
        return res.json({ success: true, message: 'تم تفعيل الرخصة بنجاح!' });
    }
    return res.status(400).json({ error: 'كود التفعيل غير صحيح' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Rabeh server running on port ${PORT}`));
