export default function Gallery() {
  return (
    <>
      <h2 className="section-head">Gallery</h2>
      <div className="gallery-grid">
        {Array.from({ length: 6 }).map((_, i) => (
          <div className="gallery-item" key={i}>Image</div>
        ))}
      </div>
    </>
  )
}
