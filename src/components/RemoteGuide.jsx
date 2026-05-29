import '../styles/RemoteGuide.css'

export default function RemoteGuide({ onDismiss }) {
  return (
    <div className="remote-guide">
      <div className="remote-guide-content">
        <h2>📺 Remote Control Guide</h2>
        <div className="controls-grid">
          <div className="control-item">
            <div className="control-icon">⬆️</div>
            <p>Move Up</p>
          </div>
          <div className="control-item">
            <div className="control-icon">⬇️</div>
            <p>Move Down</p>
          </div>
          <div className="control-item">
            <div className="control-icon">⬅️</div>
            <p>Move Left</p>
          </div>
          <div className="control-item">
            <div className="control-icon">➡️</div>
            <p>Move Right</p>
          </div>
          <div className="control-item">
            <div className="control-icon">✓</div>
            <p>Select / Play</p>
          </div>
        </div>
        <button className="dismiss-btn" onClick={onDismiss}>Got it!</button>
      </div>
    </div>
  )
}
