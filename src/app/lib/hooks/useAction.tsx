export type TCTAAction = 'compare' | 'advice' // TODO - add needed actions

const useAction = (action: TCTAAction) => {
  const ACTION_HANDLERS: Record<TCTAAction, () => void> = {
    compare: () => {
      console.log('compare')
    },
    advice: () => {
      console.log('advice')
    }
  }

  return ACTION_HANDLERS[action]
}

export default useAction
