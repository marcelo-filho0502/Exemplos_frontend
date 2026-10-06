import Iridescence from './Iridescence'
import './IridescenceBackground.css'

// Constante fora do componente: o efeito recria o WebGL se o array mudar de referência.
const COLOR = [0.70, 0.5, 1.0]

export default function IridescenceBackground() {
  return (
    <div className="iridescence-bg" aria-hidden="true">
      <Iridescence color={COLOR} mouseReact={false} amplitude={0.1} speed={1.0} />
      <div className="iridescence-bg-scrim" />
    </div>
  )
}
