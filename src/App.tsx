import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { Register } from './components/Register';

type Page = 'home' | 'login' | 'register';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  if (currentPage === 'login') {
    return (
      <Login
        onNavigateToRegister={() => setCurrentPage('register')}
        onNavigateToHome={() => setCurrentPage('home')}
      />
    );
  }

  if (currentPage === 'register') {
    return (
      <Register
        onNavigateToLogin={() => setCurrentPage('login')}
        onNavigateToHome={() => setCurrentPage('home')}
      />
    );
  }

  return (
    <div className="min-h-screen">
      <Header onNavigateToAuth={() => setCurrentPage('login')} />
      <main>
        <Hero />
        <Services />
        <Process />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
