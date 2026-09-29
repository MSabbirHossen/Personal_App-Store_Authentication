# 🦸‍♂️ Personal App Store

<<<<<<< HEAD
Live link: https://personal-app-store-89cac.web.app/


A modern, responsive web application for discovering, browsing, and managing applications. Built with React and Vite, featuring real-time search, sorting, and local app installation tracking.
=======
> A modern, responsive web application for discovering, browsing, and managing applications. Built with React and Vite, featuring real-time search, sorting, and local app installation tracking.
>>>>>>> 337a3dfb76e2c916bd7ae792f73abe0eebb29c16

**Live Demo:** [https://personal-app-store-89cac.web.app/](https://personal-app-store-89cac.web.app/)

---

## 📋 Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Features Explained](#key-features-explained)
- [Deployment](#deployment)
- [Data Structure](#data-structure)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)
- [Contact & Support](#contact--support)

---

## ✨ Features

### Core Features
- 🔍 **Live Search** - Real-time search with case-insensitive filtering
- 📊 **Smart Sorting** - Sort by popularity (ratings) and downloads
- 📱 **App Installation** - Install/uninstall apps with localStorage persistence
- 📦 **Installation Manager** - Track and manage all your installed applications
- 📈 **Detailed Analytics** - View comprehensive app information with charts and reviews
- 🎨 **Beautiful UI** - Gradient designs, smooth animations, and intuitive navigation
- 📱 **Responsive Design** - Seamlessly works on mobile, tablet, and desktop

### Advanced Features
- 🔐 **Authentication** - Firebase auth with email/password and OAuth
- 🛡️ **Protected Routes** - Secure pages for authenticated users
- 💾 **Data Persistence** - localStorage for app installations across sessions

---

## 🛠️ Technologies

### Frontend Stack
| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19.2.0 | UI Framework |
| Vite | 7.2.4 | Build Tool & Dev Server |
| Tailwind CSS | 4.1.18 | Styling |
| DaisyUI | 5.5.14 | Component Library |
| React Router | 7.12.0 | Routing |
| Firebase | 12.12.1 | Authentication & Hosting |

### Additional Libraries
- **Recharts** 3.6.0 - Data visualization (charts)
- **React Icons** 5.5.0 - Icon library
- **React Toastify** 11.1.0 - Toast notifications

### Development Tools
- **ESLint** 9.39.1 - Code linting
- **npm** - Package manager

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/MSabbirHossen/Personal_App-Store_Authentication.git
cd Personal_App-Store_Authentication
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
Create a `.env.local` file in the root directory:
```env
VITE_API_KEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_PROJECT_ID=your_firebase_project_id
VITE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_APP_ID=your_firebase_app_id
VITE_MEASUREMENT_ID=your_firebase_measurement_id
```

4. **Start the development server:**
```bash
npm run dev
```
The app will open at `http://localhost:5173`

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

---

## 📁 Project Structure

```
src/
├── Auth/                          # Firebase auth instance
├── AuthenticationButton/           # OAuth button components
├── components/
│   ├── AppCard/                  # Reusable app card
│   ├── Developer/                # Developer page
│   ├── Footer/                   # Site footer
│   ├── Header/                   # Home header with banner
│   ├── Home/                     # Home page layout
│   ├── Navbar/                   # Navigation bar
│   ├── Profile/                  # User profile page
│   ├── Root/                     # Root layout wrapper
│   ├── SignIn/                   # Login form
│   └── SignUp/                   # Registration form
├── Context/
│   └── AuthContext/              # Authentication context
├── Firebase/
│   └── firebase.config.js        # Firebase configuration
├── pages/
│   ├── AllApps/                  # Browse all apps with search/sort
│   ├── AppDetails/               # Individual app details page
│   ├── Banner/                   # Hero banner section
│   ├── Error/
│   │   └── Error404.jsx         # 404 not found page
│   ├── Installation/             # My installations page
│   ├── Route/                    # Route configuration
│   ├── TrendingApps/             # Top trending apps section
│   └── TrustSection/             # Statistics section
├── Provider/
│   ├── AuthProvider.jsx          # Authentication logic & state
│   └── PrivateRoute.jsx          # Protected route wrapper
├── utility/
│   └── localStorage.js           # LocalStorage helper functions
├── App.jsx                       # Main app component
├── App.css                       # Global styles
├── index.css                     # Entry CSS
└── main.jsx                      # Application entry point

public/
├── appsData.json                 # Mock app data
└── [static assets]

.env.example                      # Environment variables template
firebase.json                     # Firebase configuration
vite.config.js                    # Vite configuration
tailwind.config.js                # Tailwind CSS configuration
eslint.config.js                  # ESLint configuration
package.json                      # Project dependencies
```

---

## 🎯 Key Features Explained

### 🔍 Search Functionality
- **Real-time filtering** - Results update as you type
- **Case-insensitive** - Search works regardless of letter case
- **Smart matching** - Filters by app title
- **Clear feedback** - Shows "No App Found" when no results match

**Location:** `src/pages/AllApps/AllApps.jsx`

### 📊 Sort & Filter Options
Sort apps using three methods:

| Option | Description |
|--------|-------------|
| **Most Popular** | Sorted by average rating (highest first) |
| **Downloads: High to Low** | Descending order by download count |
| **Downloads: Low to High** | Ascending order by download count |

**Location:** `src/pages/AllApps/AllApps.jsx`

### 📦 App Installation System
- Click **"Install Now"** button to install an app
- Button changes to **"✓ Installed"** after installation
- All installations are saved to **localStorage** for persistence
- View all installed apps in the **"My Installation"** page
- Uninstall apps with one click

**Locations:**
- App installation: `src/pages/AppDetails/AppDetailsHeader.jsx`
- Manage installations: `src/pages/Installation/Installation.jsx`
- Storage helpers: `src/utility/localStorage.js`

### 📱 Responsive Design
- **Mobile-first approach** - Optimized for phones first
- **Adaptive breakpoints:**
  - `grid-cols-1` - Mobile (< 768px)
  - `sm:grid-cols-2` - Small screens (768px - 1024px)
  - `lg:grid-cols-4` - Large screens (> 1024px)
- **Touch-friendly** - Larger tap targets on mobile
- **Smooth animations** - CSS transitions and Tailwind animations

### 🔐 Authentication & Protected Routes
- **Email/Password** - Traditional sign-up and login
- **OAuth Support** - Google and GitHub authentication
- **Email Verification** - Verify email before access
- **Protected Routes** - App details, installations, and profile require login
- **Auto Redirect** - Unauthenticated users redirected to sign-in

**Locations:**
- Auth provider: `src/Provider/AuthProvider.jsx`
- Route protection: `src/Provider/PrivateRoute.jsx`

---

## 🚀 Deployment

### Firebase Hosting (Recommended)

1. **Install Firebase CLI:**
```bash
npm install -g firebase-tools
```

2. **Login to Firebase:**
```bash
firebase login
```

3. **Build the project:**
```bash
npm run build
```

4. **Deploy:**
```bash
firebase deploy
```

### Other Hosting Options

**Vercel:**
```bash
npm run build
git push origin main
# Deploy automatically from GitHub
```

**Netlify:**
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

**Cloudflare Pages:**
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Build output directory: `dist`

---

## 📝 Data Structure

### App Data Format

The apps data is stored in `public/appsData.json` with the following structure:

```json
{
  "id": 1,
  "image": "https://images.unsplash.com/...",
  "title": "Discord",
  "website": "https://discord.com",
  "companyName": "Discord Inc",
  "description": "All-in-one voice, video, and text chat...",
  "size": 128,
  "reviews": 45230,
  "ratingAvg": 4.5,
  "downloads": 1500000,
  "ratings": [
    { "name": "1 star", "count": 234 },
    { "name": "2 star", "count": 456 },
    { "name": "3 star", "count": 1230 },
    { "name": "4 star", "count": 12340 },
    { "name": "5 star", "count": 30940 }
  ]
}
```

### Field Descriptions

| Field | Type | Description |
|-------|------|-------------|
| `id` | number | Unique identifier |
| `image` | string | App cover image URL |
| `title` | string | App name |
| `website` | string | Publisher's website |
| `companyName` | string | Developer name |
| `description` | string | App description |
| `size` | number | File size in MB |
| `reviews` | number | Total number of reviews |
| `ratingAvg` | number | Average rating (0-5) |
| `downloads` | number | Total download count |
| `ratings` | array | Star rating distribution |

---

## 📱 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | Latest ✅ |
| Firefox | Latest ✅ |
| Safari | Latest ✅ |
| Edge | Latest ✅ |
| iOS Safari | Latest ✅ |
| Chrome Mobile | Latest ✅ |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Commit: `git commit -m 'Add amazing feature'`
5. Push: `git push origin feature/amazing-feature`
6. Open a Pull Request

---

## 📄 License

This project is open source and available under the **MIT License**. See the LICENSE file for details.

---

## 📞 Contact & Support

### Get in Touch
- **GitHub Issues:** [Report bugs or suggest features](https://github.com/MSabbirHossen/Personal_App-Store_Authentication/issues)
- **GitHub Repository:** [Personal_App-Store_Authentication](https://github.com/MSabbirHossen/Personal_App-Store_Authentication)

### Creators
- **[Part_Time_Coder](https://www.linkedin.com/in/parttimecoder)** - LinkedIn
- **[MS Hossen](https://www.linkedin.com/in/ms-hossen)** - LinkedIn

---

<div align="center">

Made with ❤️ by the Personal App Store Team

**[⬆ Back to Top](#personal-app-store)**

</div>
