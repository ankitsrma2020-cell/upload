import { useState, type FormEvent } from 'react'
import './App.css'

type IconName = 'bolt' | 'check' | 'chart' | 'layers' | 'sliders' | 'sparkles' | 'code'

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, string> = {
    bolt: 'M13 2 3 14h8l-1 8 10-12h-8l1-8Z', check: 'm5 12 4 4L19 6', chart: 'M5 20V10m7 10V4m7 16v-7', layers: 'm12 2 9 5-9 5-9-5 9-5Zm-9 10 9 5 9-5M3 17l9 5 9-5', sliders: 'M4 6h16M4 12h16M4 18h16M8 4v4m8 2v4m-5 4v4', sparkles: 'm12 3 1.4 5.6L19 10l-5.6 1.4L12 17l-1.4-5.6L5 10l5.6-1.4L12 3ZM19 17l.6 2.4L22 20l-2.4.6L19 23l-.6-2.4L16 20l2.4-.6L19 17Z', code: 'm8 9-3 3 3 3m8-6 3 3-3 3m-3-9-2 12',
  }
  return <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]} /></svg>
}

const features = [
  ['bolt', 'Fast Performance', 'Built with Vite for a fast and smooth development experience.'], ['check', 'Responsive Design', 'Beautiful layouts that feel right on every screen size.'], ['layers', 'Reusable Components', 'A clean structure that makes building and scaling simple.'], ['sliders', 'Easy Customization', 'Adapt colors, content and components to your vision.'], ['sparkles', 'Modern UI', 'Thoughtful details and polished interactions built in.'], ['code', 'Developer Friendly', 'A productive setup with familiar tools and clear code.'],
] as const

function App() {
  const [formSent, setFormSent] = useState(false)
  function handleSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); if (event.currentTarget.checkValidity()) setFormSent(true) }
  return <div className="app-shell">
    <header className="site-header"><a className="brand" href="#home" aria-label="My React App home"><span className="brand-mark">◆</span><span>My App</span></a><nav aria-label="Main navigation"><a className="active" href="#home">Home</a><a href="#about">About</a><a href="#features">Features</a><a href="#contact">Contact</a><a className="nav-button" href="#contact">Get Started</a></nav></header>
    <main>
      <selt App
