// src/components/AppHeader/AppHeader.tsx
import css from './AppHeader.module.css'; // Імпорт стилів для компонента

/**
 * AppHeader Component
 * Displays the main title of the Ikonoteka application and a brief description/instruction.
 */
const AppHeader = () => {
  return (
    <div className={css.container}>
      {/* Заголовок додатку "Іконотека" */}
      <h1 className={css.title}>Іконотека</h1>
      {/* Короткий опис або інструкція для користувача */}
      <p className={css.description}>
        Ваш електронний каталог церковних ікон. Будь ласка, оцініть статус ікони, обираючи одну з опцій нижче.
      </p>
    </div>
  );
};

export default AppHeader; // Експорт компонента за замовчуванням
