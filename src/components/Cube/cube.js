import './cube.scss'

const Cube = () => {
  return (
    <div className="cube-container">
      <div className="cube">
        <div className="face front" content="Hello" />
        <div className="face back" content="Hello" />
        <div className="face left" content="Hello" />
        <div className="face right" content="Hello" />
        <div className="face top" content="Hello" />
        <div className="face bottom" content="Hello" />
      </div>
    </div>
  )
}

export default Cube
