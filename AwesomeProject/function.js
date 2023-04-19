import Clipboard from '@react-native-clipboard/clipboard';

export function copyToClipBoard(clipboardValue) {
    console.log (clipboardValue);
    Clipboard.setString(clipboardValue);
  }