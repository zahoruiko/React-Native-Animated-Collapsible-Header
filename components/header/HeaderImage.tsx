import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { LinearGradient } from 'react-native-gradients';
import { TGradientColorsListForHeaderImage } from '../AnimatedHeaderWithList';

type THeaderImageProps = {
  headerTranslateY: Animated.AnimatedInterpolation<string | number>;
  imageOpacity: Animated.AnimatedInterpolation<string | number>;
  imageTranslateY: Animated.AnimatedInterpolation<string | number>;
  imageSrc: string;
  gradientColorsList: TGradientColorsListForHeaderImage[];
}

const HeaderImage: React.FC<THeaderImageProps> = ({ headerTranslateY, imageOpacity, imageTranslateY, imageSrc, gradientColorsList }) => {
  return (
    <Animated.View style={[styles.header, { transform: [{ translateY: headerTranslateY }] }]}>
      <Animated.Image
        style={[
          styles.headerBackground,
          {
            opacity: imageOpacity,
            transform: [{ translateY: imageTranslateY }]
          }
        ]}
        source={{
          uri: imageSrc
        }}
      />
      <LinearGradient colorList={gradientColorsList} angle={270} />
      {/* <LinearGradient colorList={gradientColorsList} angle={270} style={{ width: '100%' }} /> */}
    </Animated.View>
  );
};

export default HeaderImage;

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000',
    overflow: 'hidden',
    height: 240
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: 240,
    resizeMode: 'cover'
  }
});
