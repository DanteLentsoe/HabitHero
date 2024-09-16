export const smoothScroll = (target: string): void => {
  const element = document.querySelector(target) as HTMLElement | null
  if (element) {
    const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    })
  }
}
