var mystyles = ['#453647']

d3.selectAll('.item')
	.data(mystyles)
	.style('background', 'mystyles[0]')