BhookhApp
BhookhApp is a React Native application designed to demonstrate a seamless navigation experience using Expo Router and React Navigation. The app includes a Login Screen and a Home Screen, offering basic user flow functionality.

Features
Login Screen:
Includes input fields for username and password.
A Login button that navigates users to the Home Screen.
Home Screen:
Displays a personalized welcome message to the user.
Expo Router Integration:
Utilizes file-based routing for screen navigation.
Custom Tab Layout:
Implements a custom tab bar with:
Haptic feedback on button press.
Configurable icons and styling.
Getting Started
Prerequisites
Ensure the following are installed on your machine:

Node.js (v14 or later).
Expo CLI.
Yarn or npm.
Installation
Clone the repository:
  git clone https://github.com/SagarP3011/BhookhApp.git  
  cd BhookhApp  
Install dependencies:
  npm install
Start the app:
  expo start  
Project Structure
  BhookhApp  
├── components/  
│   ├── HapticTab.tsx          # Custom tab bar button with haptic feedback  
│   ├── ui/  
│       ├── IconSymbol.tsx     # Icon component for tab bar  
│       └── TabBarBackground.tsx # Tab bar background customization  
├── screens/  
│   ├── LoginScreen.tsx        # Login screen  
│   ├── HomeScreen.tsx         # Home screen  
├── _layout.tsx                # Tab and navigation layout  
├── App.tsx                    # App entry point  
├── app.config.js              # App configuration file  
└── package.json               # Project metadata and dependencies  

Usage
Login:

Navigate to the Login Screen on app start.
Enter credentials (e.g., username and password).
Tap the Login button to navigate to the Home Screen.
Home Screen:

Displays a personalized "Welcome" message

Key Dependencies
Expo Router - File-based routing for Expo apps.
React Navigation - Flexible navigation solution for React Native apps.
React Native Gesture Handler - Enables advanced touch gestures.
Customization
Icons:

Replace icons in _layout.tsx with options from your preferred icon library.
Styling:

Adjust styles in TabBarBackground.tsx or individual screen files to match your app's theme.
