# Todo Application

A simple and advanced Todo application built with React, Redux, and Tailwind CSS. This application allows users to manage tasks, mark them as important, and view tasks based on different criteria such as all tasks, today's tasks, important tasks, and completed tasks.

## Features

- **Add Tasks**: Users can add new tasks with a description and city.
- **Mark as Important**: Users can mark tasks as important.
- **Filter Tasks**: View tasks based on different criteria:
  - All Tasks
  - Today's Tasks
  - Important Tasks
  - Completed Tasks
- **Weather Integration**: Fetch and display weather information for tasks based on the city.
- **User Authentication**: Simple login/logout functionality.
- **Responsive Design**: The application is responsive and works well on different screen sizes.

## Screenshots

### Home Page
![Home Page]![Screenshot 2025-01-17 130144](https://github.com/user-attachments/assets/b72f188b-dbd8-4137-8cb8-26fd79a44f3d)


### Add Task
![Add Task]![Screenshot 2025-01-17 130250](https://github.com/user-attachments/assets/e409df42-f9f8-43a7-8392-27cd24725e69)

### Important Tasks
![Screenshot 2025-01-17 130338](https://github.com/user-attachments/assets/1f8726b0-ab39-4d20-ac07-9827f605a402)
![Important Tasks]

### Completed Tasks
![Completed Tasks]![Screenshot 2025-01-17 130354](https://github.com/user-attachments/assets/9d12952e-5107-43f2-9138-d09636b05375)

## Setup and Running Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/yourusernametodo-app.git](https://github.com/Aditya-stark/Todo-with-API.git)
   cd TodoApi
2. **Install dependencies**
   ```bash
   npm install
3. **Set up environment variables**
   
   - Create a .env file in the root directory.
   - Add your OpenWeatherMap API key:
   - my api key:
  ```bash
     VITE_WEATHER_API_KEY='9eadbafef18e4b34840132841251501'
```
```bash
   VITE_WEATHER_API_KEY=your_openweathermap_api_key
```
4. **Start the development server**
   ```bash
   npm run dev
`
   **Open the application in your browser**

5. **Folder Structure**
   ```bash
      .
    ├── public
    │   ├── index.html
    │   └── ...
    ├── src
    │   ├── assets
    │   │   ├── components
    │   │   │   ├── Header.jsx
    │   │   │   ├── SideNav.jsx
    │   │   │   ├── TaskInput.jsx
    │   │   │   ├── TaskList.jsx
    │   │   │   ├── TaskViews
    │   │   │   │   ├── MainTasks.jsx
    │   │   │   │   ├── TodayTasks.jsx
    │   │   │   │   ├── ImportantTasks.jsx
    │   │   │   │   ├── CompletedTasks.jsx
    │   │   │   └── ...
    │   ├── features
    │   │   ├── authSlice.js
    │   │   ├── taskSlice.js
    │   ├── services
    │   │   ├── api.js
    │   ├── store.js
    │   ├── App.jsx
    │   ├── index.js
    │   └── ...
    ├── .env
    ├── package.json
    └── README.md


### Summary
- **Features**: Overview of the features implemented.
- **Screenshots**: Visual representation of the application.
- **Setup and Running Instructions**: Step-by-step guide to set up and run the application.
- **Folder Structure**: Overview of the project structure.
- **Contributing**: Instructions for contributing to the project.
- **License**: License information.
- **Contact**: Contact information for further queries.

This README provides a comprehensive guide to setting up, running, and contributing to your Todo application.
### Summary
- **Features**: Overview of the features implemented.
- **Screenshots**: Visual representation of the application.
- **Setup and Running Instructions**: Step-by-step guide to set up and run the application.
- **Folder Structure**: Overview of the project structure.
- **Contributing**: Instructions for contributing to the project.
- **License**: License information.
- **Contact**: Contact information for further queries.
