// src/components/VoteStats/VoteStats.tsx
import React from 'react'; // Імпортуємо React
import css from './VoteStats.module.css'; // Імпорт стилів для компонента
import type { Votes } from '../../types/votes'; // Імпортуємо інтерфейс Votes

/**
 * VoteStatsProps Interface
 * Defines the types for the props accepted by the VoteStats component.
 * @property {Votes} votes - An object containing the count of votes for each category.
 * @property {number} totalVotes - The total number of all votes.
 * @property {number} positiveRate - The percentage of 'active' (positive) votes.
 */
interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

/**
 * VoteStats Component
 * Displays the statistics of icon status evaluations.
 * @param {VoteStatsProps} props - The props for the component.
 */
const VoteStats: React.FC<VoteStatsProps> = ({ votes, totalVotes, positiveRate }) => {
  return (
    <div className={css.container}>
      {/* Відображення кількості голосів за статус "Активна" */}
      <p className={css.stat}>Активна: <strong>{votes.active}</strong></p>
      {/* Відображення кількості голосів за статус "На зберіганні" */}
      <p className={css.stat}>На зберіганні: <strong>{votes.storage}</strong></p>
      {/* Відображення кількості голосів за статус "Реставрація" */}
      <p className={css.stat}>Реставрація: <strong>{votes.restoration}</strong></p>
      {/* Відображення загальної кількості голосів */}
      <p className={css.stat}>Всього: <strong>{totalVotes}</strong></p>
      {/* Відображення відсотка позитивних голосів (активних) */}
      <p className={css.stat}>Активні: <strong>{positiveRate.toFixed(0)}%</strong></p>
    </div>
  );
};

export default VoteStats; // Експорт компонента за замовчуванням
