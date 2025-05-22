import React from "react"
import { QuickWinTask } from "./quickWinTasks"

interface QuickWinCardProps {
	task: QuickWinTask
	onExecute: () => void // Changed to accept no arguments
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

	return <div className="text-xl text-sky-400 flex items-center justify-center h-6 w-6">{emojiIcon}</div> // Centered icon, fixed size
}

const QuickWinCard: React.FC<QuickWinCardProps> = ({ task, onExecute }) => {
	// Standardize button text or use a generic action verb if too long
	let buttonDisplaytext = task.buttonText || "Run"
	if (buttonDisplaytext.length > 10 && buttonDisplaytext.includes(" ")) {
		// Prefer single-word action if possible from multi-word buttonText
		const commonActions = ["Scan", "Draft", "Explain", "Summarize", "Run", "Go", "View"]
		const firstWord = buttonDisplaytext.split(" ")[0]
		if (commonActions.some((action) => firstWord.toLowerCase().startsWith(action.toLowerCase()))) {
			buttonDisplaytext = firstWord
		} else {
			// Fallback for very long single words or unrecognised multi-word
			buttonDisplaytext = "Action"
		}
	}
	// Ensure even single very long words are capped if necessary for button width
	if (buttonDisplaytext.length > 9) {
		// Max ~9 chars for w-24 button with padding
		buttonDisplaytext = buttonDisplaytext.substring(0, 7) + ".."
	}

	return (
		<div
			className="bg-neutral-800/60 p-3 rounded-md shadow-sm hover:bg-rose-800/40 transition-colors duration-150 ease-in-out border border-neutral-700/30 flex items-center space-x-3 cursor-pointer group"
			onClick={() => onExecute()} // Changed to call onExecute without arguments
			title={task.description} // Use native tooltip for the full description
		>
			<div className="flex-shrink-0 text-neutral-400 group-hover:text-rose-300 transition-colors duration-150">
				{renderIcon(task.icon)}
			</div>
			<div className="flex-grow min-w-0">
				<h3 className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors duration-150 truncate">
					{task.title}
				</h3>
			</div>
			<button className="flex-shrink-0 bg-sky-600 hover:bg-sky-500 text-white text-xs font-medium py-1.5 rounded-md transition-colors duration-200 ease-in-out w-24 text-center">
				{buttonDisplaytext}
			</button>
		</div>
	)
}

export default QuickWinCard
