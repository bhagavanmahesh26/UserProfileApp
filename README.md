# User Profiles Management App

A modern, responsive web application for managing user profiles built with React and Tailwind CSS.

## Features

- ✅ **CRUD Operations**: Create, Read, Update, and Delete user profiles
- ✅ **Local Storage**: Data persists in browser localStorage
- ✅ **Responsive Design**: Works on desktop, tablet, and mobile devices
- ✅ **Loading States**: Smooth loading indicators for better UX
- ✅ **Error Handling**: Comprehensive error states and validation
- ✅ **Modern UI**: Clean, professional design with Tailwind CSS
- ✅ **Form Validation**: Client-side validation with error messages
- ✅ **Grid Layout**: Responsive grid system for user cards

## Technologies Used

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Heroicons** - Beautiful SVG icons
- **Local Storage** - Data persistence

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd user-profiles-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

### Adding a User
1. Click the "Add User" button in the header
2. Fill in the required fields (First Name, Last Name, Email)
3. Optionally add additional information (Phone, Job Title, Location, Bio)
4. Click "Add User" to save

### Editing a User
1. Click the edit icon (pencil) on any user card
2. Modify the information in the form
3. Click "Update User" to save changes

### Deleting a User
1. Click the delete icon (trash) on any user card
2. Confirm the deletion in the modal dialog

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Application header with add button
│   ├── UserList.jsx        # Grid layout for user cards
│   ├── UserCard.jsx        # Individual user card component
│   ├── UserForm.jsx        # Form for adding/editing users
│   ├── LoadingSpinner.jsx  # Loading state component
│   ├── ErrorMessage.jsx    # Error display component
│   └── EmptyState.jsx      # Empty state when no users
├── hooks/
│   └── useLocalStorage.js  # Custom hook for localStorage
├── App.jsx                 # Main application component
├── main.jsx               # Application entry point
└── index.css              # Global styles with Tailwind
```

## Features in Detail

### Responsive Design
- Mobile-first approach with responsive grid
- Cards adapt from 1 column on mobile to 4 columns on desktop
- Touch-friendly buttons and interactions

### Data Persistence
- All user data is stored in browser localStorage
- Data persists between browser sessions
- No external database required

### Form Validation
- Required field validation
- Email format validation
- Phone number format validation
- Real-time error display

### Loading States
- Initial app loading spinner
- Form submission loading states
- Button disabled states during operations

### Error Handling
- Network error simulation
- Form validation errors
- User-friendly error messages
- Error dismissal functionality

## Customization

### Styling
The app uses Tailwind CSS with a custom color palette. You can modify colors in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  }
}
```

### Adding New Fields
To add new user fields:

1. Update the form data structure in `UserForm.jsx`
2. Add the input field to the form
3. Update the `UserCard.jsx` to display the new field
4. Add validation if needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).