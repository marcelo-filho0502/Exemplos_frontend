import FlexCarousel from './FlexCarousel'
import './App.css'

function App() {
  return (
    <main className="page">
      <section className="carousel-section">
        <FlexCarousel
          preset="liquid"
          intro="rise"
          cardHeight={0.4}
          gap={12}
          squeeze={0.2}
          focusOnClick
          captions
          fit="natural"
          radius={0}
          lensWidth={0.74}
          lensHeight={1.18}
          tilt={62}
          roundness={1}
          bend={0.30}
          reach={0.38}
          curl="twist"
          dispersion={0.45}
          liquid={0}
          followCursor={false}
          autoplay
          interval={3}
          autoplayStiffness={5}
          captureWheel={false}
        />
      </section>
    </main>
  )
}

export default App
