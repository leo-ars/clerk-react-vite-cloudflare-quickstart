# Clerk + React + Vite + Cloudflare Quickstart Template

A modern, production-ready starter template that combines the power of **Clerk authentication**, **React**, **Vite**, and **Cloudflare Workers** for building fast, secure web applications.

## ✨ Features

- 🔐 **Authentication Ready**: Pre-configured Clerk authentication with sign-in/sign-up modals
- ⚡ **Lightning Fast**: Vite for instant development and optimized builds
- 🌐 **Edge Deployment**: Cloudflare Workers for global edge computing
- 🎨 **Clean UI**: Modern, responsive design with custom styling
- 📱 **Mobile Friendly**: Responsive layout that works on all devices
- 🔑 **API Integration**: Example API endpoint with authentication
- 🛡️ **TypeScript**: Full TypeScript support for type safety

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- A Clerk account (sign up at [clerk.com](https://clerk.com))
- A Cloudflare account (for deployment)

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd clerk-react-vite-cloudflare-quickstart
npm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
```

> **Important**: The `VITE_` prefix is required for Vite to expose environment variables to the client-side code.

### 3. Get Your Clerk Keys

1. Go to [Clerk Dashboard](https://dashboard.clerk.com/)
2. Create a new application or select an existing one
3. Copy your **Publishable Key** from the API Keys section
4. Paste it into your `.env.local` file

### 4. Run Development Server

```bash
npm run dev
```

Your app will be available at `http://localhost:5174`

## 🏗️ Project Structure

```
├── src/
│   ├── App.tsx          # Main application component with authentication
│   ├── main.tsx         # Entry point with ClerkProvider setup
│   ├── assets/          # Static assets
│   └── ...
├── worker/
│   └── index.ts         # Cloudflare Worker API endpoints
├── .env.local           # Environment variables (create this)
├── wrangler.jsonc       # Cloudflare Workers configuration
└── vite.config.ts       # Vite configuration
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to Cloudflare Workers
- `npm run lint` - Run ESLint

## 🔐 Authentication Flow

This template includes a complete authentication flow:

### Signed Out State
- Clean landing page with company branding
- **Login** and **Register** buttons that open Clerk modals
- SEO-focused messaging

### Signed In State
- Personalized welcome message
- User profile button with account management
- API integration example
- Protected content access

## 🌐 Cloudflare Workers API

The template includes a sample API endpoint in `worker/index.ts`:

```typescript
// Example API call from the frontend
fetch('/api/')
  .then(res => res.json())
  .then(data => console.log(data.name))
```

## 🎨 Customization

### Styling
- The app uses inline styles for simplicity
- Main color scheme uses `#F48120` (orange)
- Arial font family throughout
- Easy to customize in `src/App.tsx`

### Branding
- Update the company name in the headline
- Modify colors by changing the hex values
- Add your logo by replacing the text with an image

## 🚀 Deployment

### Deploy to Cloudflare Workers

1. Install Wrangler CLI:
```bash
npm install -g wrangler
```

2. Login to Cloudflare:
```bash
wrangler login
```

3. Deploy:
```bash
npm run deploy
```

### Environment Variables for Production

Add your environment variables to Cloudflare Workers:

```bash
wrangler secret put VITE_CLERK_PUBLISHABLE_KEY
```

## 📚 Learn More

- [Clerk Documentation](https://clerk.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [React Documentation](https://react.dev/)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you have any questions or run into issues:

1. Check the [Clerk Documentation](https://clerk.com/docs)
2. Visit the [Cloudflare Workers Discord](https://discord.gg/cloudflaredev)
3. Open an issue in this repository

---

**Happy coding!** 🎉

Built with ❤️ using Clerk, React, Vite, and Cloudflare Workers.
