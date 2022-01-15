declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.styl';

// @ts-ignore
declare const process: {
  env: {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd';
    [key: string]: any;
  }
}

// https://github.com/microsoft/TypeScript/issues/15449
declare namespace JSX {
  interface IntrinsicElements {
    'van-button': any,
    'van-calendar': any,
    'van-nav-bar': any,
    'van-icon': any,
    'van-divider': any,
    'swiper-card': any,
    'card-swipe': any,
  }
}