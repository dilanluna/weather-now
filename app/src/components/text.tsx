import {
  StyleSheet,
  Text as NativeText,
  TextProps as NativeTextProps,
} from 'react-native';

type TextProps = {
  variant?: 'caption-1' | 'subheadline' | 'title-3' | 'title-2' | 'large-title';
} & NativeTextProps;

export default function Text({
  children,
  style,
  variant = 'subheadline',
  ...props
}: TextProps) {
  return (
    <NativeText
      {...props}
      style={[styles[variant], style]}>
      {children}
    </NativeText>
  );
}

const styles = StyleSheet.create({
  'caption-1': {
    fontFamily: 'Inter_500Medium',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
  },
  subheadline: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 20,
    letterSpacing: -0.5,
  },
  'title-3': {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0.38,
  },
  'title-2': {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0.38,
  },
  'large-title': {
    fontFamily: 'Inter_700Bold',
    fontSize: 34,
    fontWeight: '700',
    lineHeight: 41,
    letterSpacing: 0.37,
  },
});
