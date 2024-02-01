import { IDatabase } from "../types/db";
import db from "./db.json";

export const useDB = () => {
  const database = db as IDatabase;

  const getAll = (name: keyof IDatabase) => {
    if (database[name]) return database[name];

    return null;
  };

  const getFirst = (name: keyof IDatabase) => {
    if (database[name]) return database[name][0];

    return null;
  };

  return { getAll, getFirst };
};
