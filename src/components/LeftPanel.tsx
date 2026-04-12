import StatusBar from './StatusBar'

export default function LeftPanel() {
  return (
    <div className="left-col">

      {/* top card — name + philosophy */}
      <div className="card card-top">
        <h1 className="name">Tiffany<br />Ho</h1>
        <StatusBar />
        <p className="philosophy-label">Philosophy</p>
        <p className="philosophy-text">
          Design is an ongoing journey: one of learning, experimenting, and evolving.
          I embrace each challenge as an opportunity to grow and adapt using my
          technical expertise and passion for innovation in design. I strive to make
          technology more intuitive, accessible, and meaningful to connect audiences
          and elevate impact
        </p>
      </div>

      {/* bottom card — tagline */}
      <div className="card card-bottom">
        <p className="tagline-main">Big Ideas start with a simple hello</p>
        <p className="tagline-sub">Let's build something bold together</p>
      </div>

    </div>
  )
}
