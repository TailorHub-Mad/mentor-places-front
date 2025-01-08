import { useMemo } from 'react'
import { v4 as uuid4 } from 'uuid'

export const useStableUUIDs = <T,>(items: T[]): string[] => {
  return useMemo(() => {
    return items.map(() => uuid4())
  }, [items])
}
