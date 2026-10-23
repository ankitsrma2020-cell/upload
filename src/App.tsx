import { useState, type FormEvent } from 'react'
import './App.css'

type IconName = 'bolt' | 'check' | 'chart' | 'layers' | 'sliders' | 'sparkles' | 'code'

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, string> = {
    bolt: 'M13 2 3 14h8l-1 8 10-12h-8l1-8Z', check: 'm5 12 4 4L19 6', chart: 'M5 20V10m7 10V4m7 16v-7', layers: 'm12 2 9 5-9 5-9-5 9-5Zm-9 10 9 5 9-5M3 17l9 5 9-5', sliders: 'M4 6h16M4 12h16M4 18h16M8 4v4m8 2v4m-5 4v4', sparkles: 'm12 3 1.4 5.6L19 10l-5.6 1.4L12 17l-1.4-5.6L5 10l5.6-1.4L12 3ZM19 17l.6 2.4L22 20l-2.4.6L19 23l-.6-2.4L16 20l2.4-.6L19 17Z', code: 'm8 9-3 3 3 3m8-6 3 3-3 3m-3-9-2 12',
  }
  return <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]} /></svg>
}
