import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import sanitize from 'sanitize-filename';


const router = express.Router();


const UPLOAD_DIR = process.env.UPLOAD_DIR || 'uploads';
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });


const maxSize = (parseInt(process.env.MAX_UPLOAD_SIZE_MB || '10', 10)) * 1024 * 1024;


const storage = multer.diskStorage({
destination: (req, file, cb) => cb(null, UPLOAD_DIR),
filename: (req, file, cb) => {
const ext = path.extname(file.originalname);
const base = sanitize(path.basename(file.originalname, ext));
const finalName = `${Date.now()}-${base}${ext}`;
cb(null, finalName);
}
});


const fileFilter = (req, file, cb) => {
const allowed = /jpeg|jpg|png|gif|pdf/;
const mimetype = allowed.test(file.mimetype);
const extname = allowed.test(path.extname(file.originalname).toLowerCase());
if (mimetype && extname) return cb(null, true);
cb(new Error('Invalid file type'));
};


const upload = multer({ storage, limits: { fileSize: maxSize }, fileFilter });


router.post('/single', upload.single('file'), (req, res) => {
if (!req.file) return res.status(400).json({ error: 'No file' });
res.json({ filename: req.file.filename, original: req.file.originalname, size: req.file.size });
});


router.post('/multiple', upload.array('files', 5), (req, res) => {
if (!req.files) return res.status(400).json({ error: 'No files' });
res.json(req.files.map(f => ({ filename: f.filename, original: f.originalname })));
});


export default router;