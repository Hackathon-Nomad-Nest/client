export const FontTShirtSizes = ['3xs', '2xs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl'] as const;

export type FontSizes = typeof FontTShirtSizes[number];

export interface IThemeInterface {
  primaryColor: {
    peach: string;
    apricot: string;
    powderPink: string;
    turquoiseGreen: string;
    tealBlue: string;
  };
  fontSize: Map<FontSizes, string>;
  fontFamily: {
    firstFont: string;
    secondFont: string;
    lato: string;
    seasons: string;
  };
}

export const theme: IThemeInterface = {
  primaryColor: {
    peach: '#F9A778',
    apricot: '#FBCBB5',
    powderPink: '#EBD9D5',
    turquoiseGreen: '#4BB79D',
    tealBlue: '#1C697C'
  },

  fontSize: new Map([
    ['3xs', 'clamp(0.64rem, calc(0.58rem + 0.06vw), 0.76rem)'],
    ['2xs', 'clamp(0.70rem, calc(0.67rem + 0.12vw), 0.81rem)'],
    ['xs', 'clamp(0.76rem, calc(0.75rem + 0.06vw), 0.85rem)'],
    ['s', 'clamp(0.88rem, calc(0.83rem + 0.21vw), 1.17rem)'],
    ['m', 'clamp(1.01rem, calc(0.92rem + 0.43vw), 1.61rem)'],
    ['l', 'clamp(1.16rem, calc(1.00rem + 0.76vw), 2.22rem)'],
    ['xl', 'clamp(1.33rem, calc(1.08rem + 1.24vw), 3.07rem)'],
    ['2xl', 'clamp(1.53rem, calc(1.14rem + 1.93vw), 4.23rem)'],
    ['3xl', 'clamp(1.76rem, calc(1.18rem + 2.91vw), 5.84rem)'],
    ['4xl', 'clamp(2.02rem, calc(1.16rem + 4.31vw), 8.06rem)'],
    ['5xl', 'clamp(2.33rem, calc(1.07rem + 6.28vw), 11.12rem)'],
  ]),

  fontFamily: {
    //@TODO: font need to be change
    firstFont: 'Lato',
    secondFont: 'the-seasons',
    lato: 'Lato',
    seasons: 'the-seasons',
  },
};

export default theme;
