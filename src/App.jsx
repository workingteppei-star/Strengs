import { useState } from 'react'
import MenuForm from './components/MenuForm'
import MenuDisplay from './components/MenuDisplay'
import './App.css'

function App() {
  const [menu, setMenu] = useState(null)
  const [showMenu, setShowMenu] = useState(false)

  const handleGenerateMenu = (formData) => {
    setMenu(generateTrainingMenu(formData))
    setShowMenu(true)
  }

  const handleBackToForm = () => {
    setShowMenu(false)
  }

  return (
    <div className="app-container">
      {!showMenu ? (
        <MenuForm onGenerateMenu={handleGenerateMenu} />
      ) : (
        <MenuDisplay menu={menu} onBack={handleBackToForm} />
      )}
    </div>
  )
}

function generateTrainingMenu(formData) {
  const { name, experience, goal, trainingDays, focus } = formData

  const coreDrill = {
    title: '体幹トレーニング（アップ）',
    duration: '15～30分',
    exercises: [
      { name: 'クランチ', reps: '40回', sets: 1 },
      { name: 'バックEx', reps: '30回', sets: 1 },
      { name: 'レッグレイズ&クラッシュ', reps: '60回', sets: 1 },
      { name: 'フロアクラッシュ、街並クラッシュ', reps: '30回', sets: 1 },
      { name: 'サイドクラッシュ&レッグレイズクラッシュ', reps: '30回', sets: 1 },
      { name: '蛙まき', reps: '3回×3', sets: 3 }
    ]
  }

  const upperBody = {
    title: '上半身トレーニング（メイン）',
    duration: '45～60分',
    focus: 'BP強化',
    mainPhase: {
      name: 'ベンチプレス強化',
      warmup: 'SQ → 脇立 → 脇下',
      exercises: [
        { name: 'ウォームアップ', reps: '複数回' },
        { name: 'メインセット1', weight: '70kg', reps: '3-5', sets: 3 },
        { name: 'メインセット2', weight: '80kg', reps: '3', sets: 3 },
        { name: 'バックアップセット', weight: '60kg', reps: '8-10', sets: 2 }
      ]
    }
  }

  const lowerBody = {
    title: '下半身トレーニング',
    duration: '45～60分',
    mainPhase: {
      name: 'スクワット強化',
      warmup: 'SQ → 脇立 → 脇下',
      exercises: [
        { name: 'ウォームアップ', reps: '複数回' },
        { name: 'メインセット1', weight: '60kg', reps: '3-5', sets: 3 },
        { name: 'メインセット2', weight: '70kg', reps: '3', sets: 3 },
        { name: 'バックアップセット', weight: '50kg', reps: '8-10', sets: 2 }
      ]
    }
  }

  return {
    name,
    experience,
    goal,
    trainingDays,
    focus,
    generatedAt: new Date().toLocaleString('ja-JP'),
    coreDrill,
    upperBody,
    lowerBody
  }
}

export default App
