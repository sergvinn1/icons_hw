// src/components/Notification/Notification.tsx
import React from 'react'; // Імпортуємо React
import css from './Notification.module.css'; // Імпорт стилів для компонента

/**
 * Notification Component
 * Displays a message indicating that there is no feedback yet.
 * This component does not accept any props.
 */
const Notification: React.FC = () => {
  return (
    <p className={css.message}>Ще немає відгуків</p>
  );
};

export default Notification; // Експорт компонента за замовчуванням
