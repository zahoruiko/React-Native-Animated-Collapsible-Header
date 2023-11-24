import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AnimatedHeaderWithList from './components/AnimatedHeaderWithList';
import BackButton from './components/headerButtons/BackButton';
import OptionsButton from './components/headerButtons/OptionsButton';
import { listData } from './utils/fakeData';

const pageTitle = 'Page title';
const headerImage = 'https://unsplash.it/500/400';

const handleBackButtonPress = () => console.log('handleBackButtonPress');
const LeftHeaderButton = () => <BackButton onPress={handleBackButtonPress} />;

const handleOptionsButtonPress = () => console.log('handleOptionsButtonPress');
const RightHeaderButton = () => <OptionsButton onPress={handleOptionsButtonPress} />;

const handlerOnListItemPress = (id: number) => console.log('Pressed List Item id #' + id);

function App() {
  return (
    <SafeAreaView style={styles.saveArea}>
      <AnimatedHeaderWithList 
        listData={listData} 
        headerImage={headerImage} 
        pageTitle={pageTitle} 
        LeftHeaderButton={<LeftHeaderButton />} 
        RightHeaderButton={<RightHeaderButton />} 
        handlerOnListItemPress={handlerOnListItemPress} />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  saveArea: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: Platform.OS === 'android' ? -25 : 0
  }
});
