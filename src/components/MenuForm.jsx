import { useState } from 'react'
import './MenuForm.css'

export default function MenuForm({ onGenerateMenu }) {
  const [formData, setFormData] = useState({
    name: '',
    experience: '初心者',
    goal: '筋肥大',
    trainingDays: '3日',
    focus: '上半身'
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name.trim()) {
      onGenerateMenu(formData)
    } else {
      alert('名前を入力してください')
    }
  }

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h1>💪 ウエイトトレーニングメニュー作成</h1>
        <p className="subtitle">個人に合わせたカスタムメニューを生成します</p>

        <form onSubmit={handleSubmit} className="menu-form">
          <div className="form-group">
            <label htmlFor="name">名前 *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="あなたの名前"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="experience">経験レベル</label>
            <select
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            >
              <option value="初心者">初心者（0～6ヶ月）</option>
              <option value="初級">初級（6ヶ月～1年）</option>
              <option value="中級">中級（1～3年）</option>
              <option value="上級">上級（3年以上）</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="goal">目標</label>
            <select
              id="goal"
              name="goal"
              value={formData.goal}
              onChange={handleChange}
            >
              <option value="筋肥大">筋肥大（見た目重視）</option>
              <option value="筋力強化">筋力強化（重さ重視）</option>
              <option value="耐久性">耐久性（持久力重視）</option>
              <option value="バランス">バランス（総合的）</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="trainingDays">週の訓練日数</label>
            <select
              id="trainingDays"
              name="trainingDays"
              value={formData.trainingDays}
              onChange={handleChange}
            >
              <option value="2日">2日</option>
              <option value="3日">3日</option>
              <option value="4日">4日</option>
              <option value="5日">5日</option>
              <option value="6日">6日</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="focus">重点部位</label>
            <select
              id="focus"
              name="focus"
              value={formData.focus}
              onChange={handleChange}
            >
              <option value="上半身">上半身</option>
              <option value="下半身">下半身</option>
              <option value="全身">全身</option>
              <option value="体幹">体幹</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            メニューを生成
          </button>
        </form>
      </div>
    </div>
  )
}
