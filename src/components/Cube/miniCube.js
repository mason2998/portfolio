import './miniCube.scss'

const MiniCube = () => {
  return (
    <div className="cube-container-mini">
      <div className="cube-mini">
        <div className="mini-face front" content="Hello" />
        <div className="mini-face back" content="Hello" />
        <div className="mini-face left" content="Hello" />
        <div className="mini-face right" content="Hello" />
        <div className="mini-face top" content="Hello" />
        <div className="mini-face bottom" content="Hello" />
      </div>
    </div>
  )
}

export default MiniCube
