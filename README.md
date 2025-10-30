# Guix - Tourism Guide Management Platform

A comprehensive React Native mobile application built with Expo that connects tourism guides, hostesses, and agencies in a unified platform. The app facilitates reservation management, commission tracking, partner networking, and promotional activities for tourism-related businesses.

## 📱 Features

### For Guides
- 📊 **Dashboard**: Overview of activities and performance metrics
- 💰 **Commission Statements**: Track earnings and commissions
- 📅 **Reservation Management**: View and manage bookings
- 🤝 **Partner Network**: Connect with partner stores and hostesses
- 🏆 **Achievement Tracking**: Monitor personal achievements and goals
- 📈 **Daily Movement Reports**: Track daily activities and transactions
- 🏪 **Store Integration**: Access to partner stores (Havaianas, Hawaiian Kite Shops, etc.)
- 🔔 **Notifications**: Stay updated with real-time alerts
- 👤 **Profile Management**: Update personal information and preferences

### For Hostesses
- 🏠 **Dashboard**: Business overview and analytics
- ✅ **Check-in System**: Manage guest check-ins with detailed information
- 🎫 **Reservation Management**: Handle bookings with filtering options
- 💳 **Card/Rewards System**: 
  - Create and manage promotional campaigns
  - Define rewards and loyalty programs
  - View detailed card information
- 👥 **Client Management**: Track and manage customer database
- 🤝 **Guide Linking**: Connect with tourism guides
- 🎯 **Promotion Management**: Create and manage restaurant/venue promotions
- 🏪 **Store Access**: Integrated store listings

### For Agencies
- 📊 **Dashboard**: Agency performance metrics
- 👨‍💼 **Guide Management**: View and manage associated guides
- 🔗 **Guide Linking**: Connect new guides to the agency platform

### General Features
- 🔐 **Multi-role Authentication**: Separate registration flows for Guides, Hostesses, and Agencies
- 🗺️ **Location Services**: Google Maps integration for location-based features
- 📱 **WhatsApp Integration**: Direct communication channels
- ⭐ **Rating System**: Built-in rating components
- 🎨 **Modern UI**: Clean, intuitive interface with custom themes
- 🌐 **Real-time Updates**: Firebase-powered real-time data synchronization

## 🛠️ Technology Stack

- **Framework**: React Native (Expo SDK 40)
- **State Management**: Redux with Redux Thunk
- **Backend**: Firebase
  - Authentication
  - Firestore Database
  - Cloud Storage
- **Navigation**: React Navigation 4
- **UI Components**: Native Base
- **Maps**: React Native Maps
- **Additional Libraries**:
  - Axios for HTTP requests
  - Moment.js for date/time handling
  - React Native Modal
  - React Native Swiper
  - Country Picker
  - Phone Input

## 📋 Prerequisites

- Node.js (v12 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development) or Android Studio (for Android development)
- Firebase account

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/superdev947/guix.git
   cd guix
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   
   Update `src/constants/firebase.js` with your Firebase configuration:
   ```javascript
   const firebaseConfig = {
     apiKey: 'YOUR_API_KEY',
     authDomain: 'YOUR_AUTH_DOMAIN',
     databaseURL: 'YOUR_DATABASE_URL',
     projectId: 'YOUR_PROJECT_ID',
     storageBucket: 'YOUR_STORAGE_BUCKET',
     messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
     appId: 'YOUR_APP_ID',
   };
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

## 📱 Running the App

### Development
```bash
# Start Expo development server
npm start

# Run on iOS simulator
Press 'i' in the terminal after starting

# Run on Android emulator
Press 'a' in the terminal after starting

# Run on web
npm run web
```

### Building for Production

**Android**
```bash
npm run build
```

**iOS**
```bash
npm run build:ios
```

## 📁 Project Structure

```
guix/
├── src/
│   ├── assets/              # Images, fonts, and other static assets
│   ├── components/          # Reusable UI components
│   │   ├── Footers.js
│   │   └── Rating/          # Rating component with star system
│   ├── constants/           # App constants and configuration
│   │   ├── Color.js         # Color palette
│   │   ├── firebase.js      # Firebase configuration
│   │   ├── Images.js        # Image references
│   │   └── Layout.js        # Layout constants
│   ├── containers/          # Screen components
│   │   ├── Splash.js
│   │   ├── AuthScreen/      # Authentication screens
│   │   ├── GuideScreen/     # Guide-specific screens
│   │   ├── HostessScreen/   # Hostess-specific screens
│   │   ├── AgencyScreen/    # Agency-specific screens
│   │   └── MainScreens/     # Shared screens
│   ├── navigate/            # Navigation configuration
│   │   ├── Guest.js         # Guest navigation
│   │   ├── Guide.js         # Guide navigation
│   │   ├── Hostess.js       # Hostess navigation
│   │   └── Agency.js        # Agency navigation
│   ├── redux/               # State management
│   │   ├── Store.js
│   │   ├── actions/         # Redux actions
│   │   ├── reducers/        # Redux reducers
│   │   └── services/        # API services
│   └── Router.js            # Main router component
├── App.js                   # App entry point
├── app.json                 # Expo configuration
├── package.json             # Dependencies
└── babel.config.js          # Babel configuration
```

## 🔑 Key Components

### Authentication
The app supports three distinct user types with separate registration flows:
- **Guides**: Tourism guides managing their bookings and commissions
- **Hostesses**: Venue/restaurant managers handling reservations and promotions
- **Agencies**: Agency administrators managing multiple guides

### Navigation
Role-based navigation ensures users see only relevant screens:
- `Guest`: Authentication and onboarding screens
- `Guide`: Guide-specific features and dashboard
- `Hostess`: Hostess management interface
- `Agency`: Agency administration panel

### State Management
Redux manages the application state with organized reducers for:
- Authentication state
- User data
- Navigation state

## 🎨 Customization

### Colors
Modify the color scheme in `src/constants/Color.js`

### Layout
Adjust layout constants in `src/constants/Layout.js`

### Images
Manage image assets in `src/constants/Images.js`

## 🔧 Configuration

### App Settings
Edit `app.json` to configure:
- App name and slug
- Bundle identifiers
- App icons and splash screens
- Orientation and platform settings

## 📝 License

Private - All rights reserved

## 👥 Author

**superdev947**

## 🤝 Contributing

This is a private repository. Contact the owner for contribution guidelines.

## 📞 Support

For support, please contact the repository owner or create an issue in the repository.

---

Built with ❤️ using React Native and Expo
