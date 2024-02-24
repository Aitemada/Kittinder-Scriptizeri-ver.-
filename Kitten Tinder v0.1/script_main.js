document.addEventListener('touchstart', handleTouchStart, false)
document.addEventListener('touchmove', handleTouchMove, false)

const suggestion = document.querySelector('.cat_suggestion')

let x1 = null
let y1 = null

function handleTouchStart(event) {
	const firstTouch = event.touches[0]
	x1 = firstTouch.clientx
	y1 = firstTouch.clientY
}

function handleTouchMove(event) {
	if (!x1 || !y1) {
		return false
	}
	let x2 = event.touches[0].clientx
	let y2 = event.touches[0].clientY
	//.console.log(x2, y2);
	let xDiff = x2 - x1
	let yDiff = y2 - y1

	if (Math.abs(xDiff) > Math.abs(yDiff)) {
		if (xDiff > 0) {
			alert('1')
			console.log('left')
			suggestion.style.left = '10000px'
		} else console.log('left')
	} else {
		//-t .-. b
		if (yDiff > 0) suggestion.textContent = 'down'
		else suggestion.textContent = 'top'
	}

	x1 = null
	y1 = null
}

let swipe_right = () => {
	// let i = 1
	suggestion.style.animation = 'flyleft'
    suggestion.style.animation_duratio =  "6s";
	// suggestion.style.display = 'none'
	// suggestion = document.getElementsByClassName('.cat_suggestion')[i]
	// i++
}
