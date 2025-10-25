# Deployment Instructions

## Local Development

1. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

## Production Build

1. **Create a production build:**
   ```bash
   npm run build
   ```
   This creates a `dist` folder with optimized files.

2. **Preview the production build:**
   ```bash
   npm run preview
   ```

## Deployment Options

### Option 1: Static Hosting (Recommended)

The app is a static React application that can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository to Vercel for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect your repository
- **GitHub Pages**: Use GitHub Actions to deploy the `dist` folder
- **AWS S3**: Upload the `dist` folder contents to an S3 bucket with static website hosting

### Option 2: Traditional Web Server

Upload the contents of the `dist` folder to your web server's public directory.

### Option 3: Docker (Optional)

Create a simple Dockerfile for containerized deployment:

```dockerfile
FROM nginx:alpine
COPY dist/ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## Environment Variables

No environment variables are required for this application as it uses localStorage for data persistence.

## Performance

- **Bundle Size**: ~219KB (66KB gzipped)
- **CSS Size**: ~4KB (1.3KB gzipped)
- **First Load**: Optimized for fast initial load
- **Caching**: Static assets are cacheable

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Security Notes

- All data is stored locally in the browser
- No external API calls or data transmission
- No authentication required
- Safe for public deployment
