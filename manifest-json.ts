import { defineManifest } from '@crxjs/vite-plugin'

export const manifest = defineManifest({
  manifest_version: 3,
  name: 'PoC Iframe Background',
  version: '0.0.1',
  background: {
    service_worker: 'src/sw.ts',
    type: 'module',
  },
  content_scripts: [
    {
      js: ['src/content.ts'],
      matches: ['https://www.google.com/'],
    },
  ],
  commands: {
    test_command: {
      description: 'Test Command',
      suggested_key: { default: 'Alt+B' },
    },
  },
  permissions: [
    'activeTab',
    'alarms',
    'bookmarks',
    'desktopCapture',
    'history',
    'identity',
    'notifications',
    'storage',
    'tabs',
    'tts',
    'webNavigation',
    'webRequest',
    'system.display',
    'idle',
  ],
})
