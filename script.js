// Data: set totalMarks and students here. Edit this array later.
const totalMarks = 1000;
const students = [
	{ name: 'Sanjana', marks: 12 },
    { name: 'Shambhavi', marks: 710 },
	{ name: 'Vaishnavi', marks: 21 },
    { name: 'Navin', marks: 15 },
    { name: 'Subrato', marks: 926 },
	{ name: 'Somya', marks: 14 },
	{ name: 'Monika', marks: 11 },

];

function renderChart(total, list){
	const chart = document.getElementById('chart');
	// adjust chart container height based on `total` so changes to totalMarks
	// scale the visual area for future-proofing (min/max clamps keep it reasonable)
	const baseline = 100; // baseline total that maps to default 360px
	const minHeight = 160;
	const maxHeight = 900;
	let computedHeight = Math.round((total / baseline) * 360);
	computedHeight = Math.max(minHeight, Math.min(maxHeight, computedHeight));
	chart.style.setProperty('--chart-height', computedHeight + 'px');

	chart.innerHTML = '';

	// update displayed total marks (if element exists)
	const totalEl = document.getElementById('totalMarksDisplay');
	if (totalEl) totalEl.textContent = total;

	list.forEach(student => {
		const percent = Math.max(0, Math.min(100, Math.round((student.marks / total) * 100)));

		const bar = document.createElement('div');
		bar.className = 'bar';
		bar.setAttribute('role','listitem');

		const fill = document.createElement('div');
		fill.className = 'bar__fill';
		fill.style.height = percent + '%';
		fill.setAttribute('title', `${student.name}: ${student.marks}/${total}`);

		const value = document.createElement('div');
		value.className = 'bar__value';
		value.textContent = `${student.marks}`;

		const label = document.createElement('div');
		label.className = 'bar__label';
		label.textContent = student.name;

		fill.appendChild(value);
		bar.appendChild(fill);
		bar.appendChild(label);
		chart.appendChild(bar);
	});
}

// Expose an update function so you can call it after changing data
function updateChart(newTotal, newStudents){
	renderChart(newTotal, newStudents);
}

// Initial render
renderChart(totalMarks, students);

// Example: later you can call `updateChart(150, [{name:'X',marks:120}, ...])`

