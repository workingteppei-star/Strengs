import './MenuDisplay.css'

export default function MenuDisplay({ menu, onBack }) {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="display-container">
      <div className="display-header">
        <button onClick={onBack} className="back-btn">
          ← 戻る
        </button>
        <button onClick={handlePrint} className="print-btn">
          🖨️ 印刷
        </button>
      </div>

      <div className="notebook">
        <div className="notebook-header">
          <h1>ウエイトトレーニングメニュー</h1>
          <div className="profile-section">
            <div className="profile-item">
              <span className="label">名前：</span>
              <span className="value">{menu.name}</span>
            </div>
            <div className="profile-item">
              <span className="label">経験：</span>
              <span className="value">{menu.experience}</span>
            </div>
            <div className="profile-item">
              <span className="label">目標：</span>
              <span className="value">{menu.goal}</span>
            </div>
            <div className="profile-item">
              <span className="label">週次：</span>
              <span className="value">{menu.trainingDays}</span>
            </div>
            <div className="profile-item">
              <span className="label">重点：</span>
              <span className="value">{menu.focus}</span>
            </div>
            <div className="profile-item">
              <span className="label">生成日時：</span>
              <span className="value">{menu.generatedAt}</span>
            </div>
          </div>
        </div>

        <div className="menu-section">
          <h2>体幹トレーニング（アップ）</h2>
          <p className="duration">所要時間：{menu.coreDrill.duration}</p>
          <div className="exercise-list">
            {menu.coreDrill.exercises.map((exercise, idx) => (
              <div key={idx} className="exercise-item">
                <div className="exercise-number">{idx + 1}</div>
                <div className="exercise-info">
                  <div className="exercise-name">{exercise.name}</div>
                  <div className="exercise-detail">
                    <span className="reps">{exercise.reps}</span>
                    {exercise.sets > 1 && <span className="sets">× {exercise.sets}セット</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="menu-section">
          <h2>上半身トレーニング（メイン）</h2>
          <p className="duration">所要時間：{menu.upperBody.duration}</p>
          <p className="focus-text">フォーカス：<strong>{menu.upperBody.focus}</strong></p>

          <div className="phase-box">
            <h3>{menu.upperBody.mainPhase.name}</h3>
            <div className="warmup">ウォームアップ：{menu.upperBody.mainPhase.warmup}</div>
            <div className="exercise-table">
              <table>
                <thead>
                  <tr>
                    <th>種目</th>
                    <th>重量</th>
                    <th>回数</th>
                    <th>セット数</th>
                  </tr>
                </thead>
                <tbody>
                  {menu.upperBody.mainPhase.exercises.map((exercise, idx) => (
                    <tr key={idx}>
                      <td>{exercise.name}</td>
                      <td>{exercise.weight || '-'}</td>
                      <td>{exercise.reps}</td>
                      <td>{exercise.sets}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="menu-section">
          <h2>下半身トレーニング</h2>
          <p className="duration">所要時間：{menu.lowerBody.duration}</p>

          <div className="phase-box">
            <h3>{menu.lowerBody.mainPhase.name}</h3>
            <div className="warmup">ウォームアップ：{menu.lowerBody.mainPhase.warmup}</div>
            <div className="exercise-table">
              <table>
                <thead>
                  <tr>
                    <th>種目</th>
                    <th>重量</th>
                    <th>回数</th>
                    <th>セット数</th>
                  </tr>
                </thead>
                <tbody>
                  {menu.lowerBody.mainPhase.exercises.map((exercise, idx) => (
                    <tr key={idx}>
                      <td>{exercise.name}</td>
                      <td>{exercise.weight || '-'}</td>
                      <td>{exercise.reps}</td>
                      <td>{exercise.sets}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="notes-section">
          <h3>📝 注意事項</h3>
          <ul>
            <li>ウォームアップは必ず実施してください</li>
            <li>各セット間に適切な休息を取ってください（60～90秒）</li>
            <li>正しいフォームを優先してください</li>
            <li>過度な負荷は避け、段階的に進めてください</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
