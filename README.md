React Native Navigation App
This project is a simple React Native app demonstrating navigation using Expo Router and React Navigation. It includes a login screen and a home screen, allowing users to navigate between them seamlessly.

Features
Login Screen:

Includes input fields for username and password.
A login button navigates users to the home screen.
Home Screen:

Displays a welcome message to the user.
Expo Router Integration:

Uses file-based routing for screen navigation.
Custom Tab Layout:

Configurable tab bar with custom icons and styling.
Getting Started
Prerequisites
Ensure you have the following installed on your machine:

Node.js (v14 or later)
Expo CLI
Yarn or npm
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
Install dependencies:

bash
Copy code
npm install
# or
yarn install
Start the app:

bash
Copy code
expo start
Project Structure
bash
Copy code
root
├── components/
│   ├── HapticTab.tsx           # Custom tab bar button with haptic feedback
│   ├── ui/
│   │   ├── IconSymbol.tsx      # Icon component for tab bar
│   │   └── TabBarBackground.tsx # Tab bar background customization
├── screens/
│   ├── LoginScreen.tsx         # Login screen
│   ├── HomeScreen.tsx          # Home screen
├── _layout.tsx                 # Tab and navigation layout
├── App.tsx                     # App entry point
├── app.config.js               # App configuration file
└── package.json
Usage
Login:

Navigate to the login screen on app start.
Enter dummy credentials (username and password).
Tap the login button to navigate to the home screen.
Home Screen:

Displays a simple "Welcome" message.
Dependencies
This project uses the following key dependencies:

Expo Router - File-based routing for Expo apps.
React Navigation - Navigation for React Native apps.
React Native Gesture Handler - For enhanced touch gestures.
Customization
Icons: Replace the icons in TabLayout (_layout.tsx) with any other icons from the IconSymbol library or your preferred library.

Styling: Modify styles in TabBarBackground.tsx or individual screens to match your theme.