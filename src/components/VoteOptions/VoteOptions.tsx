// src/components/VoteOptions/VoteOptions.tsx
import React from 'react'; // Імпортуємо React
import css from './VoteOptions.module.css'; // Імпорт стилів для компонента
import type { VoteType } from '../../types/votes'; // Імпортуємо тип VoteType

/**
 * VoteOptionsProps Interface
 * Defines the types for the props accepted by the VoteOptions component.
 * @property {function(type: VoteType): void} onVote - Function to call when a vote button is clicked.
 * @property {function(): void} onReset - Function to call when the reset button is clicked.
 * @property {boolean} canReset - Determines if the reset button should be displayed.
 */
interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

/**
 * VoteOptions Component
 * Renders buttons for voting on icon status and a reset button.
 * @param {VoteOptionsProps} props - The props for the component.
 */
const VoteOptions: React.FC<VoteOptionsProps> = ({ onVote, onReset, canReset }) => {
  return (
    <div className={css.container}>
      {/* Кнопка "Активна" - для голосування за статус 'active' */}
      <button className={css.button} onClick={() => onVote('active')}>
        Активна
      </button>
      {/* Кнопка "На зберіганні" - для голосування за статус 'storage' */}
      <button className={css.button} onClick={() => onVote('storage')}>
        На зберіганні
      </button>
      {/* Кнопка "Реставрація" - для голосування за статус 'restoration' */}
      <button className={css.button} onClick={() => onVote('restoration')}>
        Реставрація
      </button>

      {/* Кнопка "Скинути" - відображається, якщо canReset є true */}
      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Скинути
        </button>
      )}
    </div>
  );
};

export default VoteOptions; // Експорт компонента за замовчуванням
