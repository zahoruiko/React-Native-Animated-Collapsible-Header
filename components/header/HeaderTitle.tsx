import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

type THeaderTitleProps = {
  title: string;
  titleScale: Animated.AnimatedInterpolation<string | number>;
  titleTranslateY: Animated.AnimatedInterpolation<string | number>;
}

const HeaderTitle: React.FC<THeaderTitleProps> = ({ title, titleScale, titleTranslateY }) => {
  return (
    <Animated.View
      style={[
        styles.topBar,
        {
          transform: [{ scale: titleScale }, { translateY: titleTranslateY }]
        }
      ]}
    >
      <View style={styles.topBarTitleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Animated.View>
  );
};

export default HeaderTitle;

const styles = StyleSheet.create({
  topBar: {
    marginTop: 170,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  },
  topBarTitleContainer: {
    width: '90%',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  }
});
