import React, { useContext } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '@/services/App';
import { ThemeProvider, ThemeContext } from '@/context/ThemeContext';

// Мок для react-router-dom
jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ element }) => <div>{element}</div>,
}));

// Мок для AppRouter
jest.mock('@/routes/Router', () => {
  // Возвращаем функцию напрямую как default-экспорт
  return jest.fn(() => <div data-testid="mocked-app-router">Mocked AppRouter</div>);
});

describe('Компонент App', () => {
  // Тест рендеринга AppRouter внутри ThemeProvider
  it('должен рендерить AppRouter внутри ThemeProvider', () => {
    render(<App />); // Рендерим App напрямую
    expect(screen.getByTestId('mocked-app-router')).toBeInTheDocument(); // Проверяем наличие мока
  });

  // Тест переключения темы
  it('должен переключать тему с светлой на темную и обратно', () => {
    const TestComponent = () => {
      const { theme, toggleTheme } = useContext(ThemeContext);
      return (
        <div>
          <span data-testid="значение-темы">{theme}</span>
          <button onClick={toggleTheme} data-testid="кнопка-переключения">
            Переключить
          </button>
        </div>
      );
    };

    const { getByTestId } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(getByTestId('значение-темы').textContent).toBe('light');
    fireEvent.click(getByTestId('кнопка-переключения'));
    expect(getByTestId('значение-темы').textContent).toBe('dark');
    fireEvent.click(getByTestId('кнопка-переключения'));
    expect(getByTestId('значение-темы').textContent).toBe('light');
  });
});
