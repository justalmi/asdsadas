import { useState } from 'react';

interface LoginProps {
  onNavigateToRegister: () => void;
  onNavigateToHome: () => void;
}

export function Login({ onNavigateToRegister, onNavigateToHome }: LoginProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    console.log('Login submitted:', formData);
    // После успешного входа можно перенаправить на главную
    onNavigateToHome();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="max-w-md w-full">
        {/* Back Button */}
        <button
          onClick={onNavigateToHome}
          className="mb-8 flex items-center gap-2 transition-opacity hover:opacity-80"
          style={{ color: 'var(--color-text-gray)' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/>
            <polyline points="12 19 5 12 12 5"/>
          </svg>
          Вернуться на главную
        </button>

        {/* Login Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--color-primary)' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 22V12H15V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 style={{ color: 'var(--color-text-dark)' }} className="mb-2">
              Вход в систему
            </h2>
            <p style={{ color: 'var(--color-text-gray)' }}>
              Войдите в свой аккаунт
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block mb-2"
                style={{ color: 'var(--color-text-dark)' }}
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 outline-none transition-colors"
                style={{
                  borderColor: 'var(--color-secondary)',
                  color: 'var(--color-text-dark)',
                }}
                placeholder="your@email.ru"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-2"
                style={{ color: 'var(--color-text-dark)' }}
              >
                Пароль *
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 outline-none transition-colors"
                style={{
                  borderColor: 'var(--color-secondary)',
                  color: 'var(--color-text-dark)',
                }}
                placeholder="Введите пароль"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 rounded-lg text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              Войти
            </button>
          </form>

          <div className="mt-6 text-center">
            <p style={{ color: 'var(--color-text-gray)' }}>
              Нет аккаунта?{' '}
              <button
                onClick={onNavigateToRegister}
                className="transition-opacity hover:opacity-80"
                style={{ color: 'var(--color-primary)' }}
              >
                Зарегистрироваться
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
