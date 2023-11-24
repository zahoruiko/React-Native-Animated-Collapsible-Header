import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { TListData } from '../../utils/fakeData';
import { TListItemProps } from './ListItem';

type TListProps = {
  data: TListData[];
  listItem: TListItemProps;
  scrollY: Animated.AnimatedInterpolation<string | number>;
  paddingTop: number;
  handlerOnItemPress: (id: number) => void;
}

const List: React.FC<TListProps> = ({ data, listItem, scrollY, paddingTop, handlerOnItemPress }) => {
  return (
    <Animated.ScrollView
      contentContainerStyle={{ paddingTop: paddingTop }}
      scrollEventThrottle={16}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
      style={styles.scrollListContainer}
    >
      {data.map(item => listItem(item, handlerOnItemPress ))}
    </Animated.ScrollView>
  );
};

export default List;

const styles = StyleSheet.create({
  scrollListContainer: {
    marginBottom: 5
  }
});
