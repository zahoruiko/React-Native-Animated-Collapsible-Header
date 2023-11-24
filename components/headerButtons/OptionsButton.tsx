import React from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import VerticalElipsisIcon from '../../assets/ellipsis-vertical.svg';

type TOptionsButtonProps = {
  onPress: (event: GestureResponderEvent) => void
}

const OptionsButton: React.FC<TOptionsButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <VerticalElipsisIcon width={20} height={20} />
    </TouchableOpacity>
  );
};

export default OptionsButton;
