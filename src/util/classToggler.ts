const toggle = (target, className) => {
  target.classList.contains(className)
    ? target.classList.remove(className)
    : target.classList.add(className);
}

export default toggle;