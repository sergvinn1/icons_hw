// src/components/App/App.tsx
import { useState } from 'react'; // Імпортуємо useState для управління станом
import css from './App.module.css'; // Імпорт стилів для компонента App
import AppHeader from './AppHeader/AppHeader'; // Імпорт компонента AppHeader
import VoteOptions from './VoteOptions/VoteOptions'; // Імпорт компонента VoteOptions
import VoteStats from './VoteStats/VoteStats'; // Імпорт компонента VoteStats
import Notification from './Notification/Notification'; // Імпорт нового компонента Notification
import type { Votes, VoteType } from '../types/votes'; // Використовуємо 'import type' для імпорту інтерфейсів та типів

/**
 * Main App Component
 * Serves as the main container for all other application components.
 * Manages the state for icon status evaluations (votes).
 */
const App = () => {
  // Ініціалізуємо стан 'votes' за допомогою useState.
  // Початкове значення - об'єкт з нульовими лічильниками для кожного статусу.
  const [votes, setVotes] = useState<Votes>({
    active: 0,
    storage: 0,
    restoration: 0,
  });

  /**
   * handleVote Function
   * Updates the count for a specific icon status category.
   * Takes a 'type' parameter which corresponds to a VoteType ('active', 'storage', 'restoration').
   * Uses a functional update to ensure correct state updates based on the previous state.
   * @param {VoteType} type - The type of vote to increment ('active', 'storage', 'restoration').
   */
  const handleVote = (type: VoteType) => {
    setVotes(prevVotes => ({
      ...prevVotes, // Копіюємо попередній стан
      [type]: prevVotes[type] + 1, // Збільшуємо лічильник для обраного типу
    }));
  };

  /**
   * resetVotes Function
   * Resets all vote counts back to zero.
   * Sets the 'votes' state back to its initial zeroed values.
   */
  const resetVotes = () => {
    setVotes({
      active: 0,
      storage: 0,
      restoration: 0,
    });
  };

  // Розраховуємо загальну кількість голосів з усіх категорій.
  // totalVotes = active + storage + restoration
  const totalVotes = votes.active + votes.storage + votes.restoration;

  // Розраховуємо відсоток позитивних (активних) голосів.
  // Уникаємо ділення на нуль, якщо totalVotes дорівнює 0.
  // Використовуємо Math.round для округлення до цілого числа.
  const positiveRate = totalVotes === 0 ? 0 : Math.round((votes.active / totalVotes) * 100);

  return (
    <div className={css.app}>
      {/* Рендеримо компонент AppHeader */}
      <AppHeader />

      {/* Рендеримо компонент VoteOptions */}
      <VoteOptions
        onVote={handleVote} // Передаємо функцію handleVote як пропс onVote
        onReset={resetVotes} // Передаємо функцію resetVotes як пропс onReset
        canReset={totalVotes > 0} // Кнопка скидання активна, якщо є хоча б один голос
      />

      {/* Умовний рендеринг: показуємо статистику, якщо є голоси, інакше - повідомлення */}
      {totalVotes > 0 ? (
        <VoteStats
          votes={votes} // Передаємо об'єкт votes як пропс
          totalVotes={totalVotes} // Передаємо розраховану загальну кількість голосів
          positiveRate={positiveRate} // Передаємо розрахований відсоток позитивних голосів
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App; // Експорт компонента App за замовчуванням
