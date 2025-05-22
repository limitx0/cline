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
	// Shorten button text if it's long, or use a generic action verb
	let compactButtonText = task.buttonText || "Run"
	if (compactButtonText.length > 10) {
		const words = compactButtonText.split(" ")
		compactButtonText = words[0] // Use the first word
		if (words.length > 1 && words[0].toLowerCase() === "scan" && words[1].toLowerCase() === "project") {
			compactButtonText = "Scan"
		} else if (words.length > 1 && words[0].toLowerCase() === "draft" && words[1].toLowerCase() === "now") {
			compactButtonText = "Draft"
		}
	}

	return (
		<div
			className="bg-neutral-800/70 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out border border-neutral-700/50 backdrop-blur-sm flex items-center space-x-3 cursor-pointer"
			onClick={() => onExecute(task.actionCommand, task.title)}
			title={task.description} // Use native tooltip for the full description
		>
			<div className="flex-shrink-0">{renderIcon(task.icon)}</div>
			<div className="flex-grow min-w-0">
				{" "}
				{/* min-w-0 for text truncation if needed */}
				<h3 className="text-sm font-semibold text-neutral-100 truncate">{task.title}</h3>
				{/* Optional: very short description or remove entirely */}
				{/* <p className="text-xs text-neutral-400 truncate">{task.description.substring(0,30)}...</p> */}
			</div>
			<button
				// The whole card is clickable, this button is more of a visual cue
				// Or, make only this button clickable by removing onClick from parent div
				className="flex-shrink-0 bg-sky-600 hover:bg-sky-500 text-white text-xs font-medium py-1.5 px-3 rounded-md transition-colors duration-200 ease-in-out">
				{compactButtonText}
			</button>
		</div>
	)
}

export default QuickWinCard
