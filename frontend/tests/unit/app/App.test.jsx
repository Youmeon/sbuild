import React, { useContext } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '@/services/App';
import { ThemeProvider, ThemeContext } from '@/context/ThemeContext';

// Моки для react-router-dom
jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ element }) => <div>{element}</div>,
}));

// Мок для Router
jest.mock('@/routes/Router', () => ({
  default: () => <div data-testid="mocked-app-router">Mocked AppRouter</div>,
}));

describe('Компонент App', () => {
  // Тест рендеринга базового компонента
  it('должен рендерить AppRouter внутри ThemeProvider', () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );
    expect(screen.getByTestId('mocked-app-router')).toBeInTheDocument();
  });

  // Тест переключения темы в обоих направлениях
  it('должен переключать тему с светлой на темную и обратно', () => {
    // Вспомогательный компонент для тестирования контекста
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

    // Рендеринг тестового компонента внутри провайдера
    const { getByTestId } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    // Проверка начального значения темы
    expect(getByTestId('значение-темы').textContent).toBe('light');

    // Первое переключение: light -> dark
    fireEvent.click(getByTestId('кнопка-переключения'));
    expect(getByTestId('значение-темы').textContent).toBe('dark');

    // Второе переключение: dark -> light
    fireEvent.click(getByTestId('кнопка-переключения'));
    expect(getByTestId('значение-темы').textContent).toBe('light');
  });
});
