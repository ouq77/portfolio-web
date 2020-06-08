/**
 * Menu configuration
 */
export const MENU_CONFIG: any = {
  itemClass: 'menu-item',
  itemHover: 'active',
  parts: {
    0: 'home',
    1: 'about',
    2: 'experience',
    3: 'education',
    4: 'travel',
    5: 'contact',
  },
  topMargin: 'auto',
}

/**
 * Grid Rotator config
 */
export const GRID_ROTATOR_CONFIG: any = {
  animSpeed: 300,
  animType: 'rotateBottom',
  columns: 8,
  container: '#home',
  maxStep: 3,
  onhover: true,
  preventClick: true,
  step: 'random',
  w1024: {
    columns: 6,
  },
  w320: {
    columns: 2,
  },
  w480: {
    columns: 3,
  },
  w768: {
    columns: 4,
  },
}
