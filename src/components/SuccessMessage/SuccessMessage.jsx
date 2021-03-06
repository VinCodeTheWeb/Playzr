import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Text, StyleSheet, Animated, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

// COLORS
import { Colors, Typo } from '~/styles';

// COMPONENTS
import { Row, Column } from '~/components/common';

// REDUX TYPES
import { CLEAR_MSG } from '~/redux/types/messageTypes';

const SuccessMessage = ({ title, text }) => {
  const [translateY, setTranslateY] = useState(new Animated.Value(-100));
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const animatedStyles = {
    transform: [
      {
        translateY,
      },
    ],
  };

  const openMessagePopUp = () => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 700,
    }).start();
  };

  const closeMessagePopUp = () => {
    Animated.timing(translateY, {
      toValue: -100,
      duration: 700,
    }).start(() => dispatch({ type: CLEAR_MSG }));
  };

  useEffect(() => {
    openMessagePopUp();
  }, []);

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <Row>
        <Column style={styles.clmn} cols={2} positionX="flex-start">
          <Text style={styles.title}>{t(title)}</Text>
        </Column>
        <Column style={styles.clmn} cols={2} positionX="flex-end">
          <Entypo
            name="cross"
            size={30}
            color={Colors.colors.white}
            onPress={closeMessagePopUp}
          />
        </Column>
        <Column style={styles.clmn}>
          <Text style={styles.text}>{t(text)}</Text>
        </Column>
      </Row>
    </Animated.View>
  );
};

SuccessMessage.defaultProps = {
  title: 'Title',
  text: 'Text',
};

SuccessMessage.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: Colors.colors.green,
    height: 100,
    zIndex: 2,
  },
  clmn: {
    height: 50,
  },
  title: {
    ...Typo.titleSuccessMessage,
  },
  text: {
    ...Typo.textSuccessMessage,
  },
});

export { SuccessMessage };
