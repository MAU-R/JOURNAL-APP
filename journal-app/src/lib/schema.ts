import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const journalEntries = sqliteTable('journal_entries', {
  id: integer('id').primaryKey().autoincrement(),
  date: text('date').notNull(),
  title: text('title').notNull(),
  content: text('content').notNull(),
});  