import axios from 'axios';
import { atom } from 'recoil';

export const brandState = atom({
  key: 'brand',
  default: 'TJ',
});
export const popularState = atom({
  key: 'popular',
  default: [],
});
export const loadingState = atom({ key: 'loading', default: true });
