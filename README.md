# MediConsult

A React Native (Expo) mobile app for browsing doctors, booking appointments, and managing prescriptions. Built with Firebase Authentication and a REST API backend.

---

## Features

- **Authentication** — Sign up and sign in with email/password via Firebase Auth
- **Home** — Search, promotional sliders, and top-rated doctors
- **Doctor details** — View doctor info and book appointments
- **Book appointment** — Select date/time and confirm bookings
- **Appointments** — View and manage your upcoming and past appointments
- **Prescription** — Add and view prescriptions (with optional image/OCR support)
- **Profile** — User profile and sign out

---

## Tech Stack

| Category        | Technology |
|----------------|------------|
| Framework      | React Native (Expo ~50) |
| Navigation     | React Navigation (Stack, Bottom Tabs) |
| Auth           | Firebase Authentication |
| API            | Axios + REST API (Strapi-style) |
| Video (optional) | Agora React Native SDK |
| Fonts          | Outfit (Expo Font) |

---

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (optional; `npx expo` works without global install)
- [Expo Go](https://expo.dev/go) app on your phone for testing

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ajayv-19/doctor_management.git
cd doctor_management
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment variables

Create a `.env` file in the project root (and add it to `.gitignore` if not already). You’ll need:

**Firebase (required for login):**

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

**Backend API (for doctors, sliders, appointments):**

```env
BASE_URL=https://your-api.com/api
API_KEY=your_bearer_token
```

**Optional (e.g. prescription OCR):**

```env
REACT_APP_GOOGLE_VISION_API_KEY=your_google_vision_key
```

Configure these in the [Firebase Console](https://console.firebase.google.com/) and your API server.

### 4. Run the app

```bash
npm start
```

Then:

- Press **i** for iOS simulator  
- Press **a** for Android emulator  
- Or scan the QR code with **Expo Go** on your device  

Other scripts:

```bash
npm run android    # Start with Android
npm run ios        # Start with iOS
npm run web        # Start for web
```

---

## Project Structure

```
├── App.js                 # App entry, fonts, root navigator
├── firebase.js            # Firebase config and auth
├── app.json               # Expo config
├── package.json
├── assets/                # Images, fonts, colors
├── Components/
│   ├── Home/              # Header, Search, Slider, TopRatedDocs
│   ├── DoctorDetail/      # DocInfo, ActionButton
│   ├── BookAppointment/   # AppointmentDoctorInfo, BookingSection
│   ├── Appointment/       # AppointmentCardItem
│   └── DisplayText/       # DisText (e.g. OCR)
├── navigations/
│   ├── TabNavigation.js   # Bottom tabs: Home, Appointment, Prescription, Profile
│   ├── HomeNavigation.js # Home stack
│   └── Presnav.js        # Prescription stack
├── screens/
│   ├── Loginscreen.js
│   ├── Homescreen.js
│   ├── DocDetails.js
│   ├── BookAppointment.js
│   ├── appointment.js
│   ├── Prescription.js
│   └── Prof.js
└── Services/
    └── GlobalApi.js       # API client (sliders, doctors, appointments)
```

---

## API Expectations

The app expects a REST API that supports:

- `GET /sliders?populate=*` — Home sliders
- `GET /mydocs?populate=*` — Top-rated doctors
- `POST /appointments` — Create appointment
- `GET /appointments?populate=*` — User’s appointments

Responses should follow a Strapi-like format with `data` and optional `populate` relations. Use the same `BASE_URL` and `API_KEY` (Bearer) in `.env`.

---

## License

This project is for portfolio/educational use. Adjust licensing as needed for your case.

---

## Repository

**[doctor_management](https://github.com/ajayv-19/doctor_management)** — MediConsult app source code.
