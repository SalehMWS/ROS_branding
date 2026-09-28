'use client'
import { useSyncExternalStore } from 'react'

function subscribe(onChange: () => void) {
  window.addEventListener('resize', onChange)
  return () => window.removeEventListener('resize', onChange)
}

/** 1280 is the server/prerender value, matching the previous initial state. */
const getSnapshot = () => window.innerWidth
const getServerSnapshot = () => 1280

export function useBreakpoint() {
  const width = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  return {
    isMobile: width < 480,
    isTablet: width < 768,
    isLaptop: width < 1024,
    width,
  }
}
