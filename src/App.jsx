
import './App.css'

import ImageSection from './components/ImageSection/ImageSection'
import StatsSection from './components/StatsSection/StatsSection'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='app'>
      <main className="app__main">
        <ImageSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
