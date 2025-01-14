import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';

// Initialize SQLite database
const sqlite = new Database('./database/journal.db');

// Connect Drizzle to SQLite
export const db = drizzle(sqlite);