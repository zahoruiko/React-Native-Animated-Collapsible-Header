import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';

type THeaderMenuProps = {
  leftButton: JSX.Element;
  rightButton: JSX.Element;
}

const HeaderMenu: React.FC<THeaderMenuProps> = ({ leftButton, rightButton }) => {
  return (
    <Animated.View style={styles.mainTopBar}>
      <View style={[styles.mainTopBarLeftButtonWrapper]}>
        {leftButton}
      </View>
      <View style={[styles.mainTopBarRightButtonWrapper]}>
        {rightButton}
      </View>
    </Animated.View>
  );
};

export default HeaderMenu;

const styles = StyleSheet.create({
  mainTopBar: {
    marginTop: 20,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  },
  mainTopBarLeftButtonWrapper: {
    width: 50,
    justifyContent: 'center',
    padding: 10,
    height: '100%'
  },
  mainTopBarRightButtonWrapper: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: 10
  },
});
