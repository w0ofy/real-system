---
'@real-system/alert': patch
'@real-system/aspect-ratio': patch
'@real-system/badge': patch
'@real-system/button': patch
'@real-system/checkbox': patch
'@real-system/dialog': patch
'@real-system/field': patch
'@real-system/flex': patch
'@real-system/icon': patch
'@real-system/input': patch
'@real-system/link': patch
'@real-system/menu': patch
'@real-system/pin-input': patch
'@real-system/popover': patch
'@real-system/radio-group': patch
'@real-system/select': patch
'@real-system/separator': patch
'@real-system/spinner': patch
'@real-system/textarea': patch
'@real-system/toaster': patch
'@real-system/tooltip': patch
'@real-system/truncate': patch
'@real-system/typography': patch
'@real-system/visually-hidden': patch
'@real-system/core': patch
'@real-system/styled-library': patch
'@real-system/box-primitive': patch
'@real-system/dialog-primitive': patch
'@real-system/elements-primitive': patch
---

replace theme-library and styling-library with styled-library; 1 merged library to handle system styles + shouldForwardProp argument type changed from PropertyKey to string + upgrade project deps and fix DialogAction ref
