# React Tasks Project

A comprehensive collection of React practice tasks and examples with interactive UI components.

## 🚀 Features

- Modern React practices and patterns
- Fully responsive UI with Tailwind CSS
- Interactive UI components with clean design
- Custom animations and transitions
- Component-based architecture
- Accessible UI elements
- Cross-browser compatibility

## 🛠️ Technologies Used

- React 18
- Tailwind CSS for styling
- React Router for navigation
- React Icons for beautiful iconography
- React Data Table Component for data display
- React Spinners for loading states
- Lucide React for additional icons
- Vite for fast development
- Styled Components for component styling

## 🏃‍♂️ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abhijeet0540/React-Task.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   
   Navigate to `http://localhost:5173` to view the application

## 📁 Project Structure

```
src/
├── components/         # UI components
│   ├── Task.jsx        # Main task component
│   ├── SingleBtn.jsx   # Single button component
│   ├── FiveBtn.jsx     # Multiple button component
│   ├── InputText.jsx   # Text input component
│   ├── Calculator.jsx  # Calculator component
│   ├── StopWatch.jsx   # Stopwatch component
│   └── ...            # Other components
├── assets/            # Images, fonts, and other static files
├── Fonts/             # Custom fonts
├── pages/             # Page components
├── hooks/             # Custom React hooks
├── utils/             # Utility functions
└── index.css          # Global styles with Tailwind
```

## 🎨 UI Components

| Component | Description |
|-----------|-------------|
| **SingleBtn** | Simple button with hover effects |
| **FiveBtn** | Multiple interactive buttons with color changing background |
| **InputText** | Text input with real-time display |
| **Calculator** | Functional calculator with styled buttons |
| **EmailValidation** | Form with email validation and data table |
| **StopWatch** | Interactive timer with start/stop functionality |
| **GoogleFont** | Custom font implementation |
| **DNAAnimation** | Animated DNA helix using CSS animations |

## 📝 Tasks List

- [x] Basic Components
- [x] Interactive Buttons
- [x] Form Input Handling
- [x] Responsive Design
- [x] Custom Animations
- [x] Data Tables
- [ ] Dark/Light Mode Toggle
- [ ] Advanced Form Validation
- [ ] State Management Implementation
- [ ] Unit Testing

## 🎭 UI Design System

### Colors
- Primary: Blue shades (`bg-blue-500`, `hover:bg-blue-700`)
- Dark backgrounds: Zinc (`bg-zinc-800`, `bg-zinc-900`)
- Accent: Yellow (`bg-yellow-900`)
- Text: White and dark zinc for contrast

### Typography
- Custom fonts: AQIRA, rockybilly, and Galaksi
- Responsive text sizing with Tailwind (`text-base`, `sm:text-lg`, `lg:text-xl`)
- Font weights: Regular and bold for emphasis

### Components

#### Buttons
```jsx
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full px-4 py-2">
  Click Me
</button>
```

#### Inputs
```jsx
<input
  type="text"
  className="px-4 py-2 rounded-lg bg-zinc-900 border border-gray-500 focus:ring-2 focus:ring-[#FAB12F]"
  placeholder="Enter text..."
/>
```

#### Containers
```jsx
<div className="w-screen h-screen flex items-center justify-center bg-zinc-900 text-white">
  {/* Content */}
</div>
```

### Animations
Custom keyframe animations are defined in `index.css`:
```css
@keyframes glowing {
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
}
```

## 📱 Responsive Design

The UI is fully responsive using Tailwind's breakpoint system:

- **Small screens**: Default styling
- **Medium screens**: `sm:` prefix (640px+)
- **Large screens**: `lg:` prefix (1024px+)

Example:
```jsx
<div className="w-[90vw] sm:w-[50vw] lg:w-[35vw] text-lg sm:text-2xl lg:text-3xl">
  Responsive content
</div>
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 💻 Using UI Components

All components are designed to be easily reusable. Here's how to use them in your own projects:

### Basic Usage

```jsx
import { SingleBtn, InputText, StopWatch } from './components';

function MyApp() {
  return (
    <div className="app-container">
      <SingleBtn />
      <InputText />
      <StopWatch />
    </div>
  );
}
```

### Navigation Between Components

Each component includes a back button for easy navigation:

```jsx
<div className='absolute top-5 left-5 text-4xl cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full'>
  <VscArrowSmallLeft onClick={() => window.history.back()}/>
</div>
```

### Customizing Components

Components can be customized by passing props:

```jsx
// Example of a customizable button component
<SingleBtn
  text="Custom Button"
  bgColor="bg-purple-500"
  hoverColor="hover:bg-purple-700"
/>
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📧 Contact

Project Link: [https://github.com/Abhijeet0540/React-Task](https://github.com/Abhijeet0540/React-Task)
