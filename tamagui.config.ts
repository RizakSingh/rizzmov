import { createTamagui } from 'tamagui'
import { config } from '@tamagui/config'

export const tamaguiConfig = createTamagui({
  ...config,
  themes: {
    ...config.themes,
    dark: {
      ...config.themes.dark,
      background: '#050510',        // deep black-blue (base bg)
      backgroundStrong: '#000000',  // pure black (cards, panels)
      backgroundHover: '#0a0a2e',   // slightly lighter black-blue
      color: '#e8f0ff',             // soft white-blue (primary text)
      colorSecondary: '#8ab4f8',    // muted blue (secondary text)
      borderColor: '#1a3a6e',       // dark blue border
      borderColorHover: '#2952a3',  // brighter blue border on hover
      primary: '#1a56db',           // royal blue (buttons, accents)
      primaryHover: '#1e40af',      // darker royal blue on hover
      primaryPress: '#1e3a8a',      // deep blue on press
      accent: '#3b82f6',            // bright blue (highlights)
      accentSecondary: '#60a5fa',   // lighter blue (secondary highlights)
      glow: '#1a56db',              // blue glow color
      red: '#ff4444',               // red (errors, streak)
      success: '#22c55e',           // green (success states)
    },
     light: {
      ...config.themes.light,
      background: '#f0f4ff',        // soft blue-white page bg
      backgroundStrong: '#ffffff',  // pure white cards
      backgroundHover: '#dce8ff',   // light blue hover
      color: '#0a0a2e',             // dark navy text
      colorSecondary: '#1a3a6e',    // muted dark blue text
      borderColor: '#b8d0f5',       // light blue border
      borderColorHover: '#3b82f6',  // brighter border on hover
      primary: '#1a56db',           // same royal blue
      primaryHover: '#1e40af',      // darker on hover
      primaryPress: '#1e3a8a',      // deep blue on press
      accent: '#3b82f6',            // bright blue
      accentSecondary: '#60a5fa',   // lighter blue
      glow: '#1a56db',              // blue glow
      red: '#ff4444',               // errors
      success: '#22c55e',           // success
    },
  },
})

export type AppConfig = typeof tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}