import { spring } from 'svelte/motion'
import { get, writable } from 'svelte/store'

export const hidden = -5
export const visible = 10

export const panelHidden = writable(true)
export const panelY = spring(hidden, {})

panelHidden.subscribe((hide) => {
  panelY.set(hide ? hidden : visible)
})
