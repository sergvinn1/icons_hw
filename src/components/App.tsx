// src/components/App/App.tsx
import css from './App.module.css'; // Імпорт стилів для компонента App
import AppHeader from './AppHeader/AppHeader'; // Імпорт нового компонента AppHeader

/**
 * Main App Component
 * Serves as the main container for all other application components.
 * Currently renders the AppHeader component.
 */
const App = () => {
  return (
    <div className={css.app}>
      {/* Рендеримо компонент AppHeader тут */}
      <AppHeader />
      {/* Тут будуть додаватися інші компоненти, такі як опції голосування та статистика */}
    </div>
  );
};

export default App; // Експорт компонента App за замовчуванням
