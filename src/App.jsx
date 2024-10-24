
import './App.css'
import video from '/Video_For_Website.mp4'
function App() {


  return (
    <>
      <div className='Video'>
        <video src={video} autoPlay loop muted />
        <div className="content">
          <h1>welcome</h1>
          <p>to my site.</p>
        </div>
      </div>
    </>
  )
}

export default App
