export const onScroll = () => {
  const castElement = document.querySelector('.Cast');
  const reviewsElement = document.querySelector('.Reviews');
  if (castElement) {
    castElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (reviewsElement) {
    reviewsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
      return;
  }
};
