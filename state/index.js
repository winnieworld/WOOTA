
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

export const modalState = atom({ key: 'modal', default: false})

export const SelectedState = atom({ key: 'selected', default:{}})