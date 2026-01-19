import React from 'react';

export const ZION_URL = 'https://zionsongs.adalo.com/songs';

export const PROPERTIES: any[] = [
  { name: 'AboutScreen', value: 'Zion Songs App v1.0', category: 'Screen' },
  { name: 'AppName', value: 'Zion Songs', category: 'Screen' },
  { name: 'Icon', value: 'Upload your church logo', category: 'Screen' },
  { name: 'ScreenOrientation', value: 'Portrait', category: 'Screen' },
  { name: 'ShowStatusBar', value: 'True (Checked)', category: 'Screen' },
  { name: 'TitleVisible', value: 'False (Unchecked)', category: 'Screen' },
  { name: 'HomeUrl', value: ZION_URL, category: 'WebViewer' },
  { name: 'Height', value: 'Fill Parent', category: 'WebViewer' },
  { name: 'Width', value: 'Fill Parent', category: 'WebViewer' },
  { name: 'UsesJavaScript', value: 'True (Checked)', category: 'WebViewer' },
  { name: 'IgnoreSslErrors', value: 'True (Checked)', category: 'WebViewer' },
  { name: 'ZoomEnabled', value: 'False (Recommended)', category: 'WebViewer' },
];

export const STEPS: any[] = [
  {
    id: 1,
    title: 'Project Setup',
    content: [
      'Open Kodular, Niotron, or MIT App Inventor.',
      'Create a New Project named "ZionSongs".',
      'Select "Google Pixel 4" or "Samsung Galaxy" as the preview device.'
    ]
  },
  {
    id: 2,
    title: 'Screen Configuration',
    content: [
      'Click on Screen1 in the Components list.',
      'Set "TitleVisible" to False for a full-screen look.',
      'Set "ScreenOrientation" to Portrait.',
      'Disable "ShowTitleBar" to maximize real estate.'
    ]
  },
  {
    id: 3,
    title: 'Adding WebViewer',
    content: [
      'Go to the User Interface palette.',
      'Drag and Drop a "WebViewer" component onto Screen1.',
      'Set Height and Width to "Fill Parent".',
      'Paste the HomeURL: https://zionsongs.adalo.com/songs'
    ]
  },
  {
    id: 4,
    title: 'Native Behavior (Blocks)',
    content: [
      'Switch to the "Blocks" editor view.',
      'Implement the "Back Button" handling logic (see Blocks tab).',
      'This prevents the app from closing when users navigate lyrics.'
    ]
  }
];

export const Icons = {
  Phone: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
  ),
  Puzzle: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19.439 7.85c0-1.57.144-2.227-1.082-3.453-1.227-1.226-1.884-1.082-3.453-1.082s-2.227-.144-3.453 1.082c-1.226 1.227-1.082 1.884-1.082 3.453s-.144 2.227 1.082 3.453c1.227 1.226 1.884 1.082 3.453 1.082s2.227.144 3.453-1.082c1.226-1.227 1.082-1.884 1.082-3.453Z"/><path d="M3.5 13.5c0-1.57.144-2.227-1.082-3.453-1.227-1.226-1.884-1.082-3.453-1.082s-2.227-.144-3.453 1.082c-1.226 1.227-1.082 1.884-1.082 3.453s-.144 2.227 1.082 3.453c1.227 1.226 1.884 1.082 3.453 1.082s2.227.144 3.453-1.082c1.226-1.227 1.082-1.884 1.082-3.453Z" transform="translate(11 7)"/><path d="M3.5 13.5c0-1.57.144-2.227-1.082-3.453-1.227-1.226-1.884-1.082-3.453-1.082s-2.227-.144-3.453 1.082c-1.226 1.227-1.082 1.884-1.082 3.453s-.144 2.227 1.082 3.453c1.227 1.226 1.884 1.082 3.453 1.082s2.227.144 3.453-1.082c1.226-1.227 1.082-1.884 1.082-3.453Z" transform="translate(0 7)"/></svg>
  ),
  Layout: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>
  ),
  Check: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  )
};
