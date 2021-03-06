export const useSlide = ({ nodeSlides, wrapper, items, prev, next }) => {
    let posX1 = 0,
        posX2 = 0,
        posInitial,
        posFinal,
        threshold = 100
    const slides = document.querySelectorAll(nodeSlides)
    const slidesLength = slides.length
    const slideSize = document.querySelectorAll(nodeSlides)[0].offsetWidth
    const firstSlide = slides[0]
    const lastSlide = slides[slidesLength - 1]
    const cloneFirst = firstSlide.cloneNode(true)
    const cloneLast = lastSlide.cloneNode(true)
    let index = 0
    let allowShift = true

    // Clone first and last slide
    items.appendChild(cloneFirst)
    items.insertBefore(cloneLast, firstSlide)
    wrapper.classList.add('loaded')

    // Mouse events
    items.onmousedown = dragStart

    // Touch events
    items.addEventListener('touchstart', dragStart)
    items.addEventListener('touchend', dragEnd)
    items.addEventListener('touchmove', dragAction)

    // Click events
    prev.addEventListener('click', function() {
        shiftSlide(-1)
    })
    next.addEventListener('click', function() {
        shiftSlide(1)
    })

    // Transition events
    items.addEventListener('transitionend', checkIndex)

    function dragStart(e) {
        e = e || window.event
        e.preventDefault()
        posInitial = items.offsetLeft

        if (e.type == 'touchstart') {
            posX1 = e.touches[0].clientX
        } else {
            posX1 = e.clientX
            document.onmouseup = dragEnd
            document.onmousemove = dragAction
        }
    }

    function dragAction(e) {
        e = e || window.event

        if (e.type == 'touchmove') {
            posX2 = posX1 - e.touches[0].clientX
            posX1 = e.touches[0].clientX
        } else {
            posX2 = posX1 - e.clientX
            posX1 = e.clientX
        }
        items.style.left = items.offsetLeft - posX2 + 'px'
    }

    function dragEnd(e) {
        posFinal = items.offsetLeft
        if (posFinal - posInitial < -threshold) {
            shiftSlide(1, 'drag')
        } else if (posFinal - posInitial > threshold) {
            shiftSlide(-1, 'drag')
        } else {
            items.style.left = posInitial + 'px'
        }

        document.onmouseup = null
        document.onmousemove = null
    }

    function shiftSlide(dir, action) {
        items.classList.add('shifting')

        if (allowShift) {
            if (!action) {
                posInitial = items.offsetLeft
            }

            if (dir == 1) {
                items.style.left = posInitial - slideSize + 'px'
                index++
            } else if (dir == -1) {
                items.style.left = posInitial + slideSize + 'px'
                index--
            }
        }

        allowShift = false
    }

    function checkIndex() {
        items.classList.remove('shifting')

        if (index == -1) {
            items.style.left = -(slidesLength * slideSize) + 'px'
            index = slidesLength - 1
        }

        if (index == slidesLength) {
            items.style.left = -(1 * slideSize) + 'px'
            index = 0
        }

        allowShift = true
    }
}
