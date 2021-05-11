var anchors = document.querySelectorAll('a[href*="#"]')
for (var anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        var blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    });
}


var type = document.querySelector('.type')
if (type) {
    const typeButtons = type.querySelectorAll('.type__button')
    const portfolioList = document.querySelectorAll('.portfolio__item')
    typeButtons.forEach(function (button) {
        button.addEventListener('click', applyFilter)
    })

    function applyFilter(e) {
        const currentFilter = e.target.getAttribute('data-filter')

        portfolioList.forEach(function (portfolioItem) {
            if (currentFilter === 'all') {
                portfolioItem.classList.remove('hidden')
            } else {
                if (portfolioItem.getAttribute('data-filter') !== currentFilter) {
                    portfolioItem.classList.add('hidden')
                } else {
                    portfolioItem.classList.remove('hidden')
                }
            }
        })

        typeButtons.forEach(function (button) {
            button.classList.remove('active')
        })
        e.target.classList.add('active')
    }
}
