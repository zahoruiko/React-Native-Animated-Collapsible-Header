import React, { useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

import HeaderImage from './header/HeaderImage';
import HeaderMenu from './header/HeaderMenu';
import HeaderTitle from './header/HeaderTitle';
import List from './list/List';
import ListItem from './list/ListItem';
import { TListData } from '../utils/fakeData';


const HEADER_MAX_HEIGHT = 240;
const HEADER_MIN_HEIGHT = 70;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

type TAnimatedHeaderWithListProps = {
  listData: TListData[];
  headerImage: string;
  pageTitle: string;
  LeftHeaderButton: JSX.Element;
  RightHeaderButton: JSX.Element;
  handlerOnListItemPress: (id: number) => void
}

export type TGradientColorsListForHeaderImage = {
  offset: string;
  color: string;
  opacity: string;
}

const AnimatedHeaderWithList: React.FC<TAnimatedHeaderWithListProps> = ({
  listData, 
  headerImage, 
  pageTitle, 
  LeftHeaderButton, 
  RightHeaderButton, 
  handlerOnListItemPress 
}) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp'
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp'
  });
  const imageTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 100],
    extrapolate: 'clamp'
  });

  const titleScale = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE * 0.4, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0.7],
    extrapolate: 'clamp'
  });

  const titleTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -215],
    extrapolate: 'clamp'
  });

  const gradientColorsListForHeaderImage: TGradientColorsListForHeaderImage[] = [
    { offset: '0%', color: 'black', opacity: '0' },
    { offset: '20%', color: 'black', opacity: '0' },
    { offset: '60%', color: 'black', opacity: '0.1' },
    { offset: '80%', color: 'black', opacity: '0.2' },
    { offset: '90%', color: 'black', opacity: '0.35' },
    { offset: '100%', color: 'black', opacity: '0.8' }
  ];

  return (
    <View style={styles.wrapper}>
      <List
        data={listData}
        listItem={ListItem}
        scrollY={scrollY}
        paddingTop={HEADER_MAX_HEIGHT}
        handlerOnItemPress={handlerOnListItemPress}
      />
      <HeaderImage
        headerTranslateY={headerTranslateY}
        imageOpacity={imageOpacity}
        imageTranslateY={imageTranslateY}
        imageSrc={headerImage}
        gradientColorsList={gradientColorsListForHeaderImage}
      />
      <HeaderMenu 
        leftButton={LeftHeaderButton} 
        rightButton={RightHeaderButton} 
      />
      <HeaderTitle 
        title={pageTitle}
        titleScale={titleScale} 
        titleTranslateY={titleTranslateY} 
      />
    </View>
  );
}

export default AnimatedHeaderWithList;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'black',
  }
});
