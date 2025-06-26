// src/types/votes.ts

/**
 * VoteType
 * Represents the possible categories for icon status evaluation in Ikonoteka.
 * - 'active': Icon is actively used/displayed.
 * - 'storage': Icon is in storage.
 * - 'restoration': Icon requires/is undergoing restoration.
 */
export type VoteType = 'active' | 'storage' | 'restoration';

/**
 * Votes Interface
 * Defines the structure for storing the count of votes for each icon status category.
 */
export interface Votes {
  active: number;       // Кількість голосів за статус "Активна"
  storage: number;      // Кількість голосів за статус "На зберіганні"
  restoration: number;  // Кількість голосів за статус "Реставрація"
}
