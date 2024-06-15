export function getVh(percent) {
    let vh = Math.max(document.documentElement.clientHeight/100 || 0, window.innerHeight/100 || 0)
    return vh*percent;
  }
