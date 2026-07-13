import { Navbar } from './components/Navbar';
import { HeroCompiler } from './components/HeroCompiler';
import { ScrollPipelineStory } from './components/ScrollPipelineStory';
import { LiveInteractiveEditor } from './components/LiveInteractiveEditor';
import { PerformanceMetrics } from './components/PerformanceMetrics';
import { FeaturesArchitecture } from './components/FeaturesArchitecture';
import { DeveloperExperience } from './components/DeveloperExperience';
import { ComingSoon } from './components/ComingSoon';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#0a0d14] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <HeroCompiler />
      <ScrollPipelineStory />
      <LiveInteractiveEditor />
      <PerformanceMetrics />
      <FeaturesArchitecture />
      <DeveloperExperience />
      <ComingSoon />
      <Footer />
    </div>
  );
}

export default App;
