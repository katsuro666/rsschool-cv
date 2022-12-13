function mouseLighter(e) {
  const x = e.pageX - e.target.offsetLeft
	const y = e.pageY - e.target.offsetTop

	e.target.style.setProperty('--x', `${ x }px`)
	e.target.style.setProperty('--y', `${ y }px`)
}

document.querySelector('.contacts__socials').onmousemove = (e) => mouseLighter(e)
document.querySelector('.contacts__content').onmousemove = (e) => mouseLighter(e)
