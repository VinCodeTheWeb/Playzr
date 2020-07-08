import { colors } from './colors';

export const placeholderStyle = {
  fontFamily: 'spartan-medium',
  fontSize: 16,
};

export const textBtnBordered = {
  fontFamily: 'spartan-medium',
  fontSize: 20,
  textAlign: 'center',
  color: colors.white,
};

export const textBtn = {
  fontFamily: 'spartan-medium',
  fontSize: 16,
  textAlign: 'center',
  color: colors.black,
};

export const textBtnLoading = {
  ...textBtn,
  color: colors.black02,
};

export const titleSuccessMessage = {
  ...placeholderStyle,
  color: colors.white,
  marginLeft: 15,
};

export const textSuccessMessage = {
  fontFamily: 'spartan-regular',
  fontSize: 14,
  color: colors.white,
};
