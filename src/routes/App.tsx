import Header from "../components/Header"
import AboutMain from "../components/AboutMain"
import TechStack from "../components/TechStack"
import ProjectsMain from "../components/ProjectsMain"
import Contact from "../components/Contact"
function App() {


  return (
    <div className="h-svh flex flex-col gap-6">
      <Header />
      <AboutMain />
      <TechStack />
      <ProjectsMain />
      <Contact />
    </div>
  )
}

export default App
