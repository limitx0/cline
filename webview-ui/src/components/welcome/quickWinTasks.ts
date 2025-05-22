export interface QuickWinTask {
	id: string
	title: string
	description: string
	icon?: string // Placeholder for icon name or SVG path
	actionCommand: string // Identifier for the backend to know what to do
	buttonText?: string // Optional custom button text
}

export const quickWinTasks: QuickWinTask[] = [
	{
		id: "find_todos",
		title: "Find All TODOs",
		description: "Instantly scan your project and list all TODO, FIXME, or NOTE comments.",
		icon: "ChecklistIcon", // Example icon name
		actionCommand: "cline/findTodos",
		buttonText: "Scan Project ✨",
	},
	{
		id: "draft_readme",
		title: "Draft a README",
		description: "Let Cline generate a foundational README.md for your current project.",
		icon: "DocumentIcon", // Example icon name
		actionCommand: "cline/draftReadme",
		buttonText: "Draft Now 📄",
	},
	{
		id: "explain_code",
		title: "Explain Selected Code",
		description: "Highlight code in your editor, and Cline will provide a clear explanation.",
		icon: "LightbulbIcon", // Example icon name
		actionCommand: "cline/explainSelection",
		buttonText: "Explain Code 💡",
	},
	// Add a fourth one for balance if desired
	{
		id: "summarize_file",
		title: "Summarize Active File",
		description: "Get a quick summary of the currently open and active file in your editor.",
		icon: "SummarizeIcon", // Example icon name
		actionCommand: "cline/summarizeActiveFile",
		buttonText: "Summarize File 📝",
	},
]
