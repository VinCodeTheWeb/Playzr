import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { SuccessMessage } from '~/components/SuccessMessage/SuccessMessage';
import { ErrorMessage } from '~/components/ErrorMessage/ErrorMessage';

import { changeLanguage } from '~/helpers';

import { AppPlayzr } from './AppPlayzr';

const AppContainer = () => {
  const dispatch = useDispatch();

  const {
    settings: { lng },
  } = useSelector((state) => state);

  const { success } = useSelector((state) => state.message);

  const { error } = useSelector((state) => state.message);

  useEffect(() => {
    changeLanguage(lng, dispatch);
  }, []);

  return (
    <NavigationContainer>
      {success.isSuccessShowing ? (
        <SuccessMessage title={success.title} text={success.text} />
      ) : null}
      {error.isErrorShowing ? (
        <ErrorMessage title={error.title} text={error.text} />
      ) : null}
      <AppPlayzr />
    </NavigationContainer>
  );
};

export { AppContainer };
