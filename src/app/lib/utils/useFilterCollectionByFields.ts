export function useFilterCollectionByFields<T, K extends keyof T>(collection: T[], requiredFields: K[]): T[] {
  return collection.filter((item) => requiredFields.every((field) => item[field] !== undefined && item[field] !== null))
}
