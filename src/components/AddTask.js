import { useState } from "react"

const AddTask = ({ addTask }) => {
	const [text, setText] = useState("")
	const [day, setDay] = useState("")
	const [reminder, setReminder] = useState(false)

	const onSubmit = (self) => {
		self.preventDefault()
		addTask({text, day, reminder})

		if(!text){
			alert("Please fill in the task")
			return
		}

		setText("")
		setDay("")
		setReminder(false)
	}

	return (
		<form className="add-form" onSubmit={onSubmit}>
			<div className="form-control">
				<label>Task</label>
				<input type="text" placeholder="Add Task" value={text} 
				onChange={(self) => setText(self.target.value)} />
			</div>

			<div className="form-control">
				<label>Day & Time</label>
				<input type="text" placeholder="Add Day & Time"	value={day}
				onChange={(self) => setDay(self.target.value)} />
			</div>

			<div className="form-control form-control-check">
				<label>Set Reminder</label>
				<input type="checkbox"	value={reminder}  checked={reminder}
				onChange={(self) => setReminder(self.currentTarget.checked)} />
			</div>
			
			<input type="submit" value="Save Task" className="btn btn-block" />
		</form>
	)
}

export default AddTask