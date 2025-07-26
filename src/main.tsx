import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain="dev-2zxo07aavtfv8lzw.us.auth0.com"
    clientId="pBPp1q3bpTL6Jh55dGqQsoN8wffdVrZD"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
);
