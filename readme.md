# 🦸‍♂️ Personal App Store

Live link: https://personal-app-store-89cac.web.app/


A modern, responsive web application for discovering, browsing, and managing applications. Built with React and Vite, featuring real-time search, sorting, and local app installation tracking.

## 📋 Features

- **Browse Apps**: Explore a curated collection of applications
- **Search Functionality**: Live search with case-insensitive filtering
- **Sort & Filter**: Sort apps by downloads (high-low, low-high) and popularity (ratings)
- **App Details**: View detailed information about each app with charts and reviews
- **Install Apps**: Install/uninstall apps with localStorage persistence
- **My Installation**: Track and manage your installed applications
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Beautiful UI**: Gradient designs, smooth animations, and intuitive navigation

## 🛠 Technologies Used

- **Frontend Framework**: React 19.2
- **Build Tool**: Vite 7.2
- **Styling**: Tailwind CSS 4.1 + DaisyUI 5.5
- **Routing**: React Router 7.12
- **Charts**: Recharts 3.6 (for app review distribution)
- **Icons**: React Icons 5.5
- **Notifications**: React Toastify 11.0
- **Package Manager**: npm

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/MSabbirHossen/Personal_App-Store.git
cd Personal_App-Store
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Preview production build:

```bash
npm run build
```

5. Preview production build:

```bash
npm run preview
```

## 📁 Project Structure

src/
├── components/
│ ├── AppCard/ # Individual app card component
│ ├── Header/ # Header with banner
│ ├── Navbar/ # Navigation bar with active route indicator
│ ├── Footer/ # Footer with social links
│ ├── Home/ # Home page
│ └── Root/ # Root layout component
├── pages/
│ ├── AllApps/ # All applications page with search & sort
│ ├── AppDetails/ # Detailed app information page
│ ├── Banner/ # Home page banner
│ ├── Installation/ # My installed apps page
│ ├── TrendingApps/ # Trending apps section
│ ├── TrustSection/ # Trust/stats section
│ ├── Route/ # Route configuration
│ └── Error/ # Error pages
├── utility/
│ └── localStorage.js # LocalStorage helper functions
└── main.jsx # Application entry point

## 🎯 Key Features Explained

### Search

- Real-time search filters apps by title
- Case-insensitive matching
- Shows "No App Found" when no results

### Sort

- Most Popular: Sorts by average rating (highest first)
- Downloads: High to Low: Descending order
- Downloads: Low to High: Ascending order

### App Installation

- Click "Install Now" button to install apps
- Button changes to "✓ Installed" when app is installed
- Apps are saved to localStorage for persistence
- View all installed apps in "My Installation" page

### Responsive Design

- Mobile-first approach
- Breakpoints for tablet (md) and desktop (lg)
- Touch-friendly UI elements
- Smooth animations and transitions

### 🚀 Deployment

This project can be deployed to:

- Vercel: npm run build then push to GitHub
- Netlify: Connect GitHub repository and set build command to npm run build
- Cloudflare Pages: Similar to Netlify

## 📝 API Data

Apps data is stored in appsData.json with the following structure:

```json
{
  "id": number,
  "image": string,
  "title": string,
  "website": string,
  "companyName": string,
  "description": string,
  "size": number,
  "reviews": number,
  "ratingAvg": number,
  "downloads": number,
  "ratings": [
    { "name": "1 star", "count": number },
    ...
  ]
}
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 📞 Contact & Support

- GitHub: [Personal_App-Store](https://github.com/MSabbirHossen/Personal_App-Store.git)
- Report issues or suggest features via GitHub Issues
<hr>
Made with ❤️ by: [Part_Time_Coder](https://www.linkedin.com/in/parttimecoder) and [MS Hossen](https://www.linkedin.com/in/ms-hossen)

---

## **FIX 5: Update vite.config.js for Production Routing**

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    historyApiFallback: true,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
```
