import React from "react"
import { QuickWinTask } from "./quickWinTasks"

interface QuickWinCardProps {
	task: QuickWinTask
	onExecute: (command: string, title: string) => void
}

// Placeholder for actual icons. In a real scenario, these would be SVG components or an icon library.
const renderIcon = (iconName?: string) => {
	if (!iconName) return null
	// Example: Map iconName to actual icon components or SVG strings
	// For now, just return a simple text representation
	let emojiIcon = "❓"
	if (iconName === "ChecklistIcon") emojiIcon = "📋"
	if (iconName === "DocumentIcon") emojiIcon = "📄"
	if (iconName === "LightbulbIcon") emojiIcon = "💡"
	if (iconName === "SummarizeIcon") emojiIcon = "📝"

	return <div className="mb-3 text-2xl text-sky-400">{emojiIcon}</div>
}

const QuickWinCard: React.FC<QuickWinCardProps> = ({ task, onExecute }) => {
	return (
		<div className="bg-neutral-800/70 p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out border border-neutral-700/50 backdrop-blur-sm">
			{renderIcon(task.icon)}
			<h3 className="text-lg font-semibold text-neutral-100 mb-2">{task.title}</h3>
			<p className="text-sm text-neutral-300 mb-4 min-h-[3em]">{task.description}</p>
			<button
				onClick={() => onExecute(task.actionCommand, task.title)}
				className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75">
				{task.buttonText || "Try it ✨"}
			</button>
		</div>
	)
}

export default QuickWinCard
