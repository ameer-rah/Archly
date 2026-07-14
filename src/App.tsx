import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { ProjectDetail } from './pages/ProjectDetail'
import { JoinStudent } from './pages/JoinStudent'
import { Firms } from './pages/Firms'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/join" element={<JoinStudent />} />
        <Route path="/firms" element={<Firms />} />
      </Routes>
    </BrowserRouter>
  )
}
