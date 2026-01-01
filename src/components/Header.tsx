import React, { useState, CSSProperties } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const styles: Record<string, CSSProperties> = {
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '70px',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      zIndex: 1000,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    container: {
      width: '90%',
      maxWidth: '1200px',
      height: '100%',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#333',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '10px', 
    },
    logoIcon: {
      width: '32px',
      height: '32px',
      backgroundColor: '#4F46E5',
      color: 'white',
      borderRadius: '8px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '18px',
    },
    link: {
      textDecoration: 'none',
      color: '#555',
      fontWeight: '500',
      fontSize: '16px',
      transition: 'color 0.2s',
    },
    ctaButton: {
      backgroundColor: '#4F46E5',
      color: 'white',
      padding: '10px 24px',
      borderRadius: '50px',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '14px',
      borderWidth: 0, 
      cursor: 'pointer',
      transition: 'background 0.2s',
    },
    mobileMenu: {
      position: 'absolute',
      top: '70px',
      left: 0,
      width: '100%',
      backgroundColor: 'white',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      alignItems: 'center',
    },
    mobileMenuBtn: {
      backgroundColor: 'transparent', 
      borderWidth: 0, 
      cursor: 'pointer',
      fontSize: '24px',
      color: '#333',
    }
  };

  return (
    <>
      
      <style>{`
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 30px;
        }
        
        .mobile-toggle {
          display: none;
        }

        /* Responsive Logic */
        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>

      <header style={styles.header}>
        <div style={styles.container}>
          <a href="#" style={styles.logo}>
            <div style={styles.logoIcon}>F</div>
            User Dashboard
          </a>

          
          <nav className="desktop-nav">
            <a href="#" style={styles.link}>Home</a>
            <a href="#" style={styles.link}>Services</a>
            <a href="#" style={styles.link}>Plans</a>
            <button style={styles.ctaButton}>Get Started</button>
          </nav>

        </div>

      </header>
    </>
  );
};

export default Header;