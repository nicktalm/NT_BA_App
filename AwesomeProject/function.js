import Clipboard from '@react-native-clipboard/clipboard';

export function copyToClipBoard(clipboardValue) {
    Clipboard.setString(clipboardValue);
  }