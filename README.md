# AI Safety Incident Log

A web application for logging and tracking AI safety incidents. Built with Node.js, Express.js, MongoDB, and vanilla HTML/CSS.

## Features

- View all reported AI safety incidents
- Submit new incidents with title, description, and severity level
- Delete existing incidents
- Input validation for all fields
- Responsive design with severity-based visual indicators

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-safety-incident-log
```

2. Install dependencies:
```bash
npm install
```

3. Make sure MongoDB is running locally on port 27017

4. Seed the database with sample incidents:
```bash
npm run seed
```

5. Start the server:
```bash
npm run dev
```

The application will be available at http://localhost:4000

## API Endpoints

### GET /api/incidents
Returns all incidents in JSON format.

Example:
```bash
curl http://localhost:4000/api/incidents
```

### POST /api/incidents
Creates a new incident.

Example:
```bash
curl -X POST http://localhost:4000/api/incidents \
  -H "Content-Type: application/json" \
  -d '{
    "title": "AI System Malfunction",
    "description": "Description of the incident",
    "severity": "High"
  }'
```

### GET /api/incidents/:id
Returns a specific incident by ID.

Example:
```bash
curl http://localhost:4000/api/incidents/123456789
```

### DELETE /api/incidents/:id
Deletes a specific incident by ID.

Example:
```bash
curl -X DELETE http://localhost:4000/api/incidents/123456789
```

## Project Structure

```
/
├── backend/
│   ├── models/
│   │   └── Incident.js
│   ├── routes/
│   │   └── incidents.js
│   ├── server.js
│   └── seed.js
├── frontend/
│   ├── index.html
│   └── style.css
├── package.json
└── README.md
```

## Error Handling

- 400: Bad Request (validation errors)
- 404: Not Found (incident not found)
- 500: Server Error

## Design Choices

1. Used vanilla JavaScript instead of a frontend framework to keep things simple and reduce dependencies
2. Implemented server-side validation using Mongoose schema
3. Added visual indicators for incident severity using colored borders
4. Included confirmation dialog for incident deletion to prevent accidental deletions
5. Used responsive design to ensure good mobile experience

## Development

To run the application in development mode with auto-reload:
```bash
npm run dev
``` 