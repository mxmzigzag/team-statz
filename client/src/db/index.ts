import { IDatabase } from "../types/db";
import db from "./db.json";

export const useDB = () => {
  const database = db as IDatabase;

  const getAll = (name: keyof IDatabase) => {
    return database[name];
  };

  const getFirst = (name: keyof IDatabase) => {
    return database[name][0];
  };

  const getOneById = (name: keyof IDatabase, id: string) => {
    return database[name].find((node) => node.id === id);
  };

  return { getAll, getFirst, getOneById };
};
