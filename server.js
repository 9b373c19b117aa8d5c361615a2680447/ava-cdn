const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use('/files', express.static(path.join(__dirname, 'public')));

// Root endpoint
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Ava CDN</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
          }
          h1 {
            color: #333;
          }
          .file-list {
            list-style: none;
            padding: 0;
          }
          .file-list li {
            padding: 10px;
            margin: 5px 0;
            background-color: #f5f5f5;
            border-radius: 4px;
          }
          .file-list a {
            text-decoration: none;
            color: #0066cc;
          }
          .file-list a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <h1>Ava CDN - File Server</h1>
        <p>Dosyalar buradan indirebilirsin! (You can download files from here!)</p>
        <p>Available files at <a href="/files">/files</a></p>
      </body>
    </html>
  `);
});

// List files endpoint
app.get('/api/files', (req, res) => {
  const publicDir = path.join(__dirname, 'public');
  
  // Check if public directory exists
  if (!fs.existsSync(publicDir)) {
    return res.json({ files: [] });
  }

  fs.readdir(publicDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to read files' });
    }
    
    const fileList = files.map(file => ({
      name: file,
      url: `/files/${file}`
    }));
    
    res.json({ files: fileList });
  });
});

app.listen(PORT, () => {
  console.log(`CDN server is running on port ${PORT}`);
  console.log(`Access files at http://localhost:${PORT}/files`);
});
