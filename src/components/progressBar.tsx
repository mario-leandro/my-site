import React from "react"
import "@/styles/progressBar.sass"

interface ProgressBarProps {
  label: string
  percentage: number
  color?: string
}

export default function ProgressBar({ label, percentage, color = '#3498db' }: ProgressBarProps) {
  return (
    <div className="progressBar">
      <div className="labelContainer">
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
      </div>
      <div className="barContainer">
        <div 
          className="bar"
          style={{ 
            width: `${percentage}%`,
            backgroundColor: color
          }}
        />
      </div>
    </div>
  )
}