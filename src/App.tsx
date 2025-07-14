import { useState } from 'react'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser
} from '@clerk/clerk-react'
import './App.css'

function App() {
  const [apiResponse, setApiResponse] = useState('')
  const { user } = useUser()

  const fetchApiKey = () => {
    fetch('/api/')
      .then((res) => res.json() as Promise<{ name: string }>)
      .then((data) => setApiResponse(data.name))
      .catch(() => setApiResponse('Error fetching API'))
  }

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0',
      margin: '0',
      textAlign: 'center',
      overflow: 'hidden',
      backgroundColor: 'white',
      position: 'fixed',
      top: '0',
      left: '0'
    }}>
      {/* Headline */}
      <h1 style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        margin: '0 0 1rem 0',
        padding: '0',
        fontFamily: 'Arial, sans-serif',
        color: 'black'
      }}>
        Clerk + React + Vite +Cloudflare<span style={{ color: '#F48120' }}>.</span>com
      </h1>

      {/* Signed Out State */}
      <SignedOut>
        <p style={{
          fontSize: '1.1rem',
          color: '#666',
          marginBottom: '2rem',
          maxWidth: '500px',
          padding: '0 1rem',
          fontFamily: 'Arial, sans-serif'
        }}>
          A nice template for your next project
        </p>
        
        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <SignInButton mode="modal">
            <button style={{
              padding: '12px 32px',
              fontSize: '1.1rem',
              borderRadius: '8px',
              border: '2px solid #F48120',
              backgroundColor: '#F48120',
              color: 'white',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.2s',
              minWidth: '120px',
              fontFamily: 'Arial, sans-serif'
            }}>
              Login
            </button>
          </SignInButton>
          
          <SignUpButton mode="modal">
            <button style={{
              padding: '12px 32px',
              fontSize: '1.1rem',
              borderRadius: '8px',
              border: '2px solid #F48120',
              backgroundColor: 'transparent',
              color: '#F48120',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.2s',
              minWidth: '120px',
              fontFamily: 'Arial, sans-serif'
            }}>
              Register
            </button>
          </SignUpButton>
        </div>
      </SignedOut>

      {/* Signed In State */}
      <SignedIn>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem'
        }}>
          {/* Welcome message */}
          <p style={{
            fontSize: '1.2rem',
            color: '#333',
            margin: '0',
            padding: '0',
            fontFamily: 'Arial, sans-serif'
          }}>
            Welcome back, {user?.firstName || user?.emailAddresses[0]?.emailAddress}!
          </p>

          {/* User Button */}
          <UserButton 
            appearance={{
              elements: {
                avatarBox: "width: 50px; height: 50px;"
              }
            }}
          />

          {/* API Section */}
          <div style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '10px',
            padding: '1.5rem',
            maxWidth: '400px',
            width: '90%',
            margin: '0'
          }}>
            <h3 style={{
              margin: '0 0 1rem 0',
              color: '#1e293b',
              fontSize: '1.2rem',
              fontFamily: 'Arial, sans-serif'
            }}>
              Your API Information
            </h3>
            
            <button
              onClick={fetchApiKey}
              style={{
                padding: '10px 24px',
                fontSize: '1rem',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: '#F48120',
                color: 'white',
                cursor: 'pointer',
                fontWeight: '500',
                marginBottom: '1rem',
                fontFamily: 'Arial, sans-serif'
              }}
            >
              Fetch API Key
            </button>
            
            {apiResponse && (
              <div style={{
                backgroundColor: '#1e293b',
                color: '#e2e8f0',
                padding: '1rem',
                borderRadius: '6px',
                fontFamily: 'monospace',
                fontSize: '0.9rem',
                wordBreak: 'break-all'
              }}>
                API Response: {apiResponse}
              </div>
            )}
          </div>
        </div>
      </SignedIn>
    </div>
  )
}

export default App
