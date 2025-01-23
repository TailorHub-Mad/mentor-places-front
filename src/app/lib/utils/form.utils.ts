import type { FieldValues, UseFormWatch } from 'react-hook-form'

export const checkIsFormCompleted = <T extends FieldValues>(watch: UseFormWatch<T>) =>
  Object.values(watch()).filter((elm) => !elm).length > 0
