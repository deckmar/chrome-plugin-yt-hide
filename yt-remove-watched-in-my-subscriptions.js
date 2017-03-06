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
    do {
      var w = document.querySelectorAll('yt-formatted-string.ytd-thumbnail-overlay-playback-status-renderer');
      if (w.length === 0) return;
      //console.log("Found " + w.length)
      //console.log("Removing one")
			var e = upTo(w[0], 'ytd-grid-video-renderer', 'style-scope ytd-grid-renderer');
      e.remove();
		} while(w.length > 0);
	} catch(ex) { console.warn(ex) }
};

removeWatched();

setInterval(removeWatched, 1000);
