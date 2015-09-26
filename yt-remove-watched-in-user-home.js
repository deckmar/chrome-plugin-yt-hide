function upTo(el, tagName, andClassName) {
  tagName = tagName.toLowerCase();

  while (el && el.parentElement) {
    el = el.parentElement;
    if (el.tagName && el.tagName.toLowerCase() == tagName && el.className == andClassName) {
      return el;
    }
  }

  return null;
}

var removeWatched = function() {
	try {
		// All wathced-badges (note that the list "w" will shrink every time we remove an element)
		var w = document.getElementsByClassName('watched-badge');
		while(w.length > 0) {
			upTo(w[0], 'li', 'channels-content-item yt-shelf-grid-item yt-uix-shelfslider-item ').remove();
		}
	} catch(ex) { }
};

removeWatched();

setInterval(removeWatched, 500);
