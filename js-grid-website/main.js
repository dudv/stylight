const refreshGrid = (gridSelector) => {
	const gridElement = document.querySelector(gridSelector)
	const items = [...gridElement.children]
	const itemWidth = 340
	const gapSize = 10
	const clientWidth = document.body.clientWidth
	const itemsInRow = Math.floor(clientWidth / itemWidth)
	gridElement.style.marginLeft = (clientWidth - itemsInRow * (itemWidth + gapSize) - gapSize) / 2 + 'px'

	const itemOffsets = []
	items.forEach((item, idx) => {
		const itemHeight = Math.floor(200 + Math.random() * 400)
		const upperItemIdx = idx - itemsInRow
		const columndIdx = idx % itemsInRow
		const rowIdx = Math.floor(idx / itemsInRow)
		const upperItemTop = upperItemIdx >= 0 ? itemOffsets[upperItemIdx] : 0

		item.style.height = itemHeight + 'px'
		item.style.top = upperItemTop + gapSize * rowIdx + 'px'
		item.style.left = columndIdx * itemWidth + gapSize * columndIdx + 'px'

		itemOffsets.push(itemHeight + upperItemTop)
	})
}

const onWindowResize = refreshGrid.bind(null, '.grid')
window.onresize = onWindowResize
onWindowResize()