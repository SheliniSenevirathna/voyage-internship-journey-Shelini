// routes/export.js
import express from 'express';
import { Parser as Json2csv } from 'json2csv';
import ExcelJS from 'exceljs';


const router = express.Router();


// POST /api/export/csv -> body: { data: [ ...objects ] }
router.post('/csv', async (req, res) => {
try {
const data = req.body.data || [];
if (!data.length) return res.status(400).json({ error: 'No data to export' });


const fields = Object.keys(data[0]);
const parser = new Json2csv({ fields });
const csv = parser.parse(data);


res.header('Content-Type', 'text/csv');
res.attachment('export.csv');
return res.send(csv);
} catch (err) {
console.error('CSV export error', err);
res.status(500).send('Export error');
}
});


// POST /api/export/xlsx -> body: { data: [ ...objects ] }
router.post('/xlsx', async (req, res) => {
try {
const data = req.body.data || [];
if (!data.length) return res.status(400).json({ error: 'No data to export' });


const workbook = new ExcelJS.Workbook();
const sheet = workbook.addWorksheet('Export');


const columns = Object.keys(data[0]).map(k => ({ header: k, key: k }));
sheet.columns = columns;


data.forEach(row => sheet.addRow(row));


res.header('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
res.attachment('export.xlsx');
await workbook.xlsx.write(res);
res.end();
} catch (err) {
console.error('XLSX export error', err);
res.status(500).send('Export error');
}
});


export default router;