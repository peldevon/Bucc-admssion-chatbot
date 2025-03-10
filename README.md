# BUCC Admission Chatbot

An AI-powered chatbot designed to assist prospective students with admission-related queries. Built with **React.js** (frontend), **Flask** (backend), and **Rasa** (NLP).

## Features
- **Text and Voice Support**: Users can type or speak their queries.
- **Admission Queries**: Answers questions about admission requirements, deadlines, fees, and scholarships.
- **Dynamic Responses**: Uses Rasa for natural language understanding and dialogue management.

## Prerequisites
- Python 3.8+
- Node.js 14+ and npm
- Rasa 3.x

## Setup Instructions
### 1. Clone the Repository
git clone https://github.com/peldevon/Bucc-admssion-chatbot.git

cd bucc-chatbot

### 2. Virtual Environment Creation & Backend Setup
```bash
# Create and activate virtual environment
python -m venv venv
source venv/Scripts/activate  # On Mac:venv/bin/activate 

# Navigate to backend directory
cd backend

# Install dependencies
pip install -r requirement.txt

# Start the backend server
python app.py
```

### 3. Rasa Setup
```bash
# Navigate to rasa-project directory
cd rasa-project

# Install Rasa (if not already installed)
pip install rasa

# Train the model
rasa train

# Start Rasa server (in separate terminals)
rasa run  # Start Rasa server
```

### 4. Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```

## Development

To work on this project:
1. Start the backend server
2. Run the Rasa server
3. Start the frontend development server
4. Access the application at `http://localhost:3000`



