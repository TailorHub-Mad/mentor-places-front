export type TCTAAction = 'compare' | 'advice' | 'contact' | 'scrollToTop' // TODO - add needed actions

const useAction = (action?: TCTAAction) => {
  const ACTION_HANDLERS: Record<TCTAAction, () => void> = {
    compare: () => {
      // TODO
      console.log('compare')
    },
    advice: () => {
      // TODO
      console.log('advice')
    },
    contact: () => {
      // TODO
      console.log('contact')
    },
    scrollToTop: () => {
      return window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  return action ? ACTION_HANDLERS[action] : undefined
}

export default useAction
