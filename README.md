# ava-cdn

A simple CDN (Content Delivery Network) server for serving and downloading static files.

## Features

- Serve static files from a public directory
- Simple web interface to view available files
- API endpoint to list all available files
- Easy file downloads

## Installation

1. Clone the repository:
```bash
git clone https://github.com/9b373c19b117aa8d5c361615a2680447/ava-cdn.git
cd ava-cdn
```

2. Install dependencies:
```bash
npm install
```

## Usage

1. Start the server:
```bash
npm start
```

2. The server will run on port 3000 by default. You can access it at:
   - Main page: `http://localhost:3000`
   - Files directory: `http://localhost:3000/files`
   - API to list files: `http://localhost:3000/api/files`

3. To add your own files, place them in the `public` directory.

4. To use a different port, set the PORT environment variable:
```bash
PORT=8080 npm start
```

## Downloading Files

Files can be downloaded by accessing:
```
http://localhost:3000/files/{filename}
```

For example:
- `http://localhost:3000/files/sample.txt`
- `http://localhost:3000/files/sample.json`

## API

### GET /api/files

Returns a JSON list of all available files:

```json
{
  "files": [
    {
      "name": "sample.txt",
      "url": "/files/sample.txt"
    }
  ]
}
```

## License

ISC