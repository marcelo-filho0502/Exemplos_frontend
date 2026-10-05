import './LinesBackground.css'
import FloatingLines from './FloatingLines'

// Constantes fora do componente: o FloatingLines recria o WebGL quando
// o valor (array/objeto) de uma prop muda de referência.
const WAVES = ['top', 'middle', 'bottom']
const GRADIENT = ['#94a3b8', '#6f6f6f', '#6a6a6a']

// Fundo fixo atrás de todo o conteúdo, por cima do vídeo (mistura em "screen").
export default function LinesBackground() {
  return (
    <div className="lines-bg" aria-hidden="true">
      <FloatingLines
        enabledWaves={WAVES}
        linesGradient={GRADIENT}
        lineCount={8}
        lineDistance={8}
        bendRadius={8}
        bendStrength={-2}
        interactive
        parallax
        animationSpeed={1}
      />
    </div>
  )
}
