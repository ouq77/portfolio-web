/**
 * Menu configuration
 * @type {
 *    {
 *      itemClass: string,
 *      itemHover: string,
 *      parts: {
 *        0: string, 1: string, 2: string, 3: string, 4: string, 5: string, 6: string, 7: string
 *      },
 *      topMargin: string
 *    }
 * }
 */
export const MENU_CONFIG: any = {
  itemClass: 'menu-item',
  itemHover: 'active',
  parts: {
    0: 'home',
    1: 'about',
    2: 'skills',
    3: 'experience',
    4: 'education',
    5: 'travel',
    6: 'contact',
    7: 'links',
  },
  topMargin: 'auto',
};

/**
 * Grid Rotator config
 * @type {
 *    {
 *      container: string,
 *      columns: number,
 *      animType: string,
 *      animSpeed: number,
 *      step: string,
 *      maxStep: number,
 *      preventClick: boolean,
 *      onhover: boolean,
 *      w1024: {
 *        columns: number
 *      },
 *      w768: {
 *        columns: number
 *      },
 *      w480: {
 *        columns: number
 *      },
 *      w320: {
 *        columns: number
 *      }
 *    }
 * }
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
};
