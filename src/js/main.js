const main = () => {
    let header = document.querySelector('.header');
    let headerHeight = header.offsetHeight;

    let lastScrollTop = 0;
    const HEADER = {
        toggleHide: (scrollPos) => {
            if (scrollPos > lastScrollTop) {
				if (scrollPos > (headerHeight * 3)) {
                    header.classList.add('on-hide');
				}
			} else {
				if (scrollPos > (headerHeight * 3)) {
                    header.classList.add('on-hide');
                    header.classList.remove('on-hide');
				}
			}
			lastScrollTop = scrollPos;
        },
        toggleOnScroll: (scrollPos) => {
            if (scrollPos > headerHeight) header.classList.add('on-scroll')
            else header.classList.remove('on-scroll')
        },
        toggleNav: () => {
            let hamburger = document.querySelector('.header__ham');
            hamburger.addEventListener('click', () => {
                if (header.classList.contains('open-nav')) {
                    header.classList.remove('open-nav')
                }
                else {
                    header.classList.add('open-nav')
                }
            })
        }
    }

    HEADER.toggleNav();
    window.addEventListener("scroll", function (event) {
        HEADER.toggleHide(this.scrollY);
        HEADER.toggleOnScroll(this.scrollY);
    }, false);
    window.addEventListener('click', function (event) {
        if (header.classList.contains('open-nav')) {
            if (!document.querySelectorAll('.header__ham:hover').length)
                if (!document.querySelectorAll('.header__menu-link-txt:hover').length)
                    if (!document.querySelectorAll('.header__download:hover').length)
                    header.classList.remove('open-nav')
        }
    })
}
export default main
