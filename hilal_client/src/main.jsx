import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './utils/i18n.js'; // initialize i18next
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ProtectedRoutes from './layouts/ProtectedRoutes.jsx';

const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId='945791699505-70e0rneu8v07lehbg2aoefohg1oq88mk.apps.googleusercontent.com'>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ProtectedRoutes>
            <App />
          </ProtectedRoutes>
        </QueryClientProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>

  </StrictMode>,
)
