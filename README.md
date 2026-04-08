# ⚡ Harry Potter Character Explorer

A modern Angular web application for exploring Harry Potter characters, houses, spells, and books using the Potter API.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation & Run

```bash
# Install dependencies
npm install

# Start development server
npm start
```

Open http://localhost:4200/ in your browser.

## ✨ Features

- **Characters** - Browse and search Harry Potter characters
- **Houses** - Explore Hogwarts houses with color-coded hover effects
- **Spells** - Discover magical spells and their uses
- **Books** - View all Harry Potter books with details
- **Modern UI** - Sidebar navigation with responsive design
- **Real-time Search** - Filter characters by name and house
- **API Integration** - Fetches data from Potter API

## 🛠️ Technologies

- Angular 21.2.0
- TypeScript
- RxJS
- Angular Signals
- Reactive Forms
- HttpClient
- Potter API

## 📁 Project Structure

```
src/app/
├── components/
│   ├── character-search/    # Search & filter component
│   └── character-list/       # Character display component
├── models/
│   └── character.model.ts    # TypeScript interfaces
├── pipes/
│   └── house-color.pipe.ts   # Custom pipe for house colors
├── services/
│   └── harry-potter.service.ts  # API service
└── app.ts                    # Main app component
```

## 🎨 Features Demonstrated

✅ Angular standalone components  
✅ HttpClient for API calls  
✅ Reactive Forms (FormModule & ReactiveFormsModule)  
✅ Angular Signals for state management  
✅ Modern template syntax (@for, @if, @switch)  
✅ Custom pipes  
✅ Service layer architecture  
✅ TypeScript interfaces  
✅ Responsive design  

## 📝 Build Commands

```bash
npm start          # Development server
npm run build      # Production build
npm test           # Run tests
```

## 🌐 API

This app uses the [Potter API](https://potterapi-fedeperin.vercel.app/) for all Harry Potter data.

## 👨‍💻 Author

Created for Angular HTTP Client Lab Test 2

## 📄 License

Educational project for lab test purposes.
