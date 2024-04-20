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
        }
    }

    window.addEventListener("scroll", function (event) {
        HEADER.toggleHide(this.scrollY);
        HEADER.toggleOnScroll(this.scrollY);
    }, false);
}
export default main
