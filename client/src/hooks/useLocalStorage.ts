import { createStorage, StorageProperties } from "../utils/createStorage";

export function useLocalStorage<T = string>(props: StorageProperties<T>) {
  return createStorage<T>("localStorage", "use-local-storage")(props);
}
