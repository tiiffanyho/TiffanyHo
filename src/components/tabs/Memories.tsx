export default function Memories() {
  return (
    <>
      <h2 className="section-head">Memories</h2>
      <div className="memories-grid">
        {Array.from({ length: 6 }).map((_, i) => (
          <div className="memories-item" key={i}>Image</div>
        ))}
      </div>
    </>
  )
}
