# KISP_9_23_TurahovaSaya_MD

# Конспект: разработка приложений на Expo

# 1. Создание проекта

Expo — фреймворк для React Native, который облегчает разработку приложений для Android и iOS.

- файловая маршрутизацию;
- готовые нативные модули;
- инструменты для разработки;
- интеграцию с Expo Application Services (EAS).

Создание стандартного проекта:

`npx create-expo-app@latest`

Просмотр доступных примеров:

`npx create-expo-app@latest --example`

Создание проекта на основе конкретного примера:

`npx create-expo-app@latest --example with-widgets`


# 2. Настройка среды

Для работы с Expo обычно необходимы:

- Node.js;
- редактор кода;
- Expo CLI;
- физическое устройство или эмулятор Android/iOS.

Expo CLI устанавливается автоматически вместе с проектом и запускается через npx.

# 3. Запуск разработки

Запуск сервера разработки:

`npx expo start`

После запуска в терминале появляется QR-код. Его можно отсканировать телефоном, чтобы открыть приложение.

Также проект можно запустить:

- в Android-эмуляторе;
- в iOS Simulator;
- через Expo Go.

Основной файл приложения в шаблоне:

`src/app/index.tsx`

После изменения этого файла приложение автоматически обновляется.

# 4. Следующие шаги

Если нужно удалить стандартный пример и начать разработку с чистого проекта, используется команда:

`npm run reset-project`

1. переносит существующие файлы в папку app-example;
2. создаёт новую папку приложения;
3. добавляет новый файл index.tsx.

# 5. Инструменты разработки

Expo CLI

Основные команды:

1. `npx expo start` - Запуск сервера разработки
2. `npx expo prebuild` - Создание нативных папок Android и iOS
3. `npx expo run:android` - Локальная сборка Android-приложения
4. `npx expo run:ios` - Локальная сборка iOS-приложения
5. `npx expo install package-name` - Установка совместимой библиотеки
6. `npx expo install --fix ` - Исправление версий зависимостей
7. `npx expo lint` - Настройка или запуск ESLint

# EAS CLI

EAS CLI используется для работы с облачными сервисами Expo:

- сборка приложения;
- публикация в магазины приложений;
- создание development, preview и production-сборок;
- выпуск OTA-обновлений;
- управление ключами и учётными данными;
- создание ad hoc-профилей для iOS.

Установка:

`npm install --global eas-cli`

# Expo Doctor

Инструмент для диагностики проекта:

`npx expo-doctor`

Он проверяет:

- конфигурацию проекта;
- файл package.json;
- совместимость зависимостей;
- конфигурационные файлы;
- общее состояние проекта.

При обнаружении ошибок Expo Doctor предлагает описание проблемы и варианты её исправления.

# Orbit

Orbit - приложение для macOS, Windows и Linux, предназначенное для запуска и установки сборок Expo и EAS.

Возможности Orbit:

- установка сборок на физические устройства;
- запуск Android-эмуляторов и iOS Simulator;
- установка OTA-обновлений;
- запуск файлов .apk и .app;
- работа с проектами из панели EAS.

# 6. Навигация

В React Native базовые компоненты и API встроены, но навигация вынесена в отдельные библиотеки.

# React Navigation

React Navigation - популярная библиотека навигации для React Native.

Она позволяет создавать:

- стековую навигацию;
- навигацию по вкладкам;
- навигацию через боковое меню;
- сложные переходы между экранами;
- жесты и анимации;
- глубокие ссылки;
- маршрутизацию для мобильных устройств и веба.

Навигаторы настраиваются непосредственно в коде приложения.

# Expo Router

Expo Router — рекомендуемая библиотека маршрутизации для Expo-проектов.

Её особенность — маршруты создаются на основе структуры папок и файлов. Например, файл в папке app или src/app автоматически становится экраном приложения.

Expo Router поддерживает:

- файловую маршрутизацию;
- динамические маршруты;
- типизированные маршруты;
- глубокие ссылки;
- ленивую загрузку;
- статический рендеринг для веба;
- интеграцию с Expo CLI и системой сборки.

# Introduction

Учебник показывает, как создать универсальное приложение StickerSmash на React Native и Expo для Android, iOS и веба.

- создание проекта с TypeScript;
- навигация и нижние вкладки через Expo Router;
- вёрстка с Flexbox;
- выбор изображений;
- модальные окна и наклейки;
- жесты и касания;
- создание и сохранение скриншотов;
- различия платформ;
- настройка иконки, заставки и статус-бара.

# Create your first app


1. Создать Expo-проект:

`npx create-expo-app@latest StickerSmash`
`cd StickerSmash`

2. Скачать и заменить стандартные изображения в папке:

assets/images

3. Очистить шаблонный код:

`npm run reset-project`

После этого в src/app остаются index.tsx и _layout.tsx.

4. Запустить приложение:

`npx expo start`

Приложение можно открыть через QR-код на телефоне или клавишей W в браузере.

5. Изменить главный экран в src/app/index.tsx:

- добавить StyleSheet;
- установить тёмный фон;
- изменить текст на Home screen;
- сделать текст белым.

Изменения автоматически применяются после сохранения благодаря серверу разработки.

# Add naviagtion

### 1. Файловая маршрутизация

Expo Router создаёт маршруты на основе файлов в `src/app`:

- `src/app/index.tsx` → маршрут `/`
- `src/app/about.tsx` → маршрут `/about`
- `src/app/_layout.tsx` → общий layout и настройка навигации
- `src/app/+not-found.tsx` → экран для несуществующих маршрутов
- `(tabs)` → группировка маршрутов без добавления сегмента в URL

Файл маршрута должен экспортировать React-компонент по умолчанию.

### 2. Stack

Stack — навигатор стека. Он открывает экраны последовательно, как страницы поверх друг друга: например, переход с Home на About добавляет About поверх Home.

```
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
```

Через Stack.Screen можно настраивать заголовок и внешний вид маршрута:

```
<Stack.Screen name="about" options={{ title: 'About' }} />
```

### 3. Переходы между экранами

Для навигации используется Link:

```
import { Link } from 'expo-router';

<Link href="/about">
  Go to About screen
</Link>
```

href указывает путь, на который перейдёт пользователь.

### 4. Обработка несуществующих маршрутов

Файл +not-found.tsx отображается, если пользователь перешёл по неправильному адресу.

```
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Not Found' }} />
      <Link href="/">Вернуться на главную</Link>
    </>
  );
}
```

### 5. Нижние вкладки

Для вкладочной навигации создаётся группа `(tabs)`:

```text
src/app
├── _layout.tsx
├── +not-found.tsx
└── (tabs)
    ├── _layout.tsx
    ├── index.tsx
    └── about.tsx
```

Файл `src/app/(tabs)/_layout.tsx`:

```
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="about" options={{ title: 'About' }} />
    </Tabs>
  );
}
```

Маршруты внутри (tabs) отображаются как вкладки, но сама группа не добавляется в URL.

### 6. Иконки вкладок

Установить библиотеку:

`npx expo install @expo/vector-icons`

Добавить иконки через `tabBarIcon`:

```
import Ionicons from '@expo/vector-icons/Ionicons';

<Tabs.Screen
  name="index"
  options={{
    title: 'Home',
    tabBarIcon: ({ color, focused }) => (
      <Ionicons
        name={focused ? 'home-sharp' : 'home-outline'}
        color={color}
        size={24}
      />
    ),
  }}
/>
```

### 7. Настройка внешнего вида

Общие параметры вкладок задаются через `screenOptions`:


``` 
 screenOptions={{
    tabBarActiveTintColor: '#ffd33d',
    headerStyle: {
      backgroundColor: '#25292e',
    },
    headerShadowVisible: false,
    headerTintColor: '#fff',
    tabBarStyle: {
      backgroundColor: '#25292e',
    },
  }}
```

# Build a screen

### 1. Структура экрана

Экран состоит из:

- изображения по центру;
- двух кнопок внизу:
  - Choose a photo;
  - Use this photo.

### 2. Компонент изображения

Используется Image из expo-image.

Создаётся переиспользуемый компонент ImageViewer:

```
type Props = {
  imgSource: ImageSourcePropType;
};

export default function ImageViewer({ imgSource }: Props) {
  return <Image source={imgSource} style={styles.image} />;
}
```

Изображение передаётся через проп imgSource:

```
<ImageViewer imgSource={PlaceholderImage} />
```

Размер изображения:
width: 320,
height: 440,
borderRadius: 18,


### 3. Компоненты вне src/app

Переиспользуемые компоненты хранятся в `src/components`, потому что файлы внутри `src/app` используются для маршрутов и layout-файлов.

Пример структуры:

```
src
├── app
│   └── (tabs)
│       └── index.tsx
└── components
    ├── button.tsx
    └── image-viewer.tsx
```

### 4. Кнопка через Pressable

Pressable используется для обработки нажатий:

```
<Pressable
  style={styles.button}
  onPress={() => alert('You pressed a button.')}
>
  <Text style={styles.buttonLabel}>{label}</Text>
</Pressable>
```

Текст кнопки передаётся через проп:

```
<Button label="Use this photo" />
```

### 5. Темизация кнопки

Для первой кнопки добавляется необязательный проп:

```
theme?: 'primary';
```

Использование:

```
<Button theme="primary" label="Choose a photo" />
<Button label="Use this photo" />
```

Кнопка с темой primary получает:

- жёлтую рамку;
- белый фон;
- иконку изображения;
- тёмный текст.

Иконка импортируется из `@expo/vector-icons`:

```
import FontAwesome from '@expo/vector-icons/FontAwesome';
```

### 6. Разметка главного экрана

```
<View style={styles.container}>
  <View style={styles.imageContainer}>
    <ImageViewer imgSource={PlaceholderImage} />
  </View>

  <View style={styles.footerContainer}>
    <Button theme="primary" label="Choose a photo" />
    <Button label="Use this photo" />
  </View>
</View>
```

flex: 1 у imageContainer занимает свободное пространство, а footerContainer располагает кнопки в нижней части экрана.

# Use an image picker

### 1. Установка библиотеки

```
npx expo install expo-image-picker
```

После установки перезапустите сервер:

```
npx expo start
```

### 2. Запуск выбора изображения

Импортируйте библиотеку:

```
import * as ImagePicker from 'expo-image-picker';
```

Создайте функцию выбора изображения:

```
const pickImageAsync = async () => {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ['images'],
    allowsEditing: true,
    quality: 1,
  });

  if (!result.canceled) {
    setSelectedImage(result.assets[0].uri);
  } else {
    alert('You did not select any image.');
  }
};
```

Основные параметры:

- `mediaTypes: ['images']` — выбирать только изображения;
- `allowsEditing: true` — разрешить обрезку;
- `quality: 1` — максимальное качество;
- `result.canceled` — пользователь отменил выбор;
- `result.assets[0].uri` — URI выбранного изображения.

### 3. Состояние выбранного изображения

В компоненте экрана хранится URI изображения:

```
import { useState } from 'react';

const [selectedImage, setSelectedImage] = useState<string | undefined>(
  undefined
);
```

После выбора обновляется состояние:

```
setSelectedImage(result.assets[0].uri);
```

### 4. Передача функции в кнопку

В компонент Button добавляется необязательный проп onPress:

```
type Props = {
  label: string;
  theme?: 'primary';
  onPress?: () => void;
};
```

Он передаётся в Pressable:

```
<Pressable style={styles.button} onPress={onPress}>
```

Теперь кнопку можно использовать так:

```
<Button
  theme="primary"
  label="Choose a photo"
  onPress={pickImageAsync}
/>
```

### 5. Отображение выбранного изображения

ImageViewer принимает новый проп:

```
type Props = {
  imgSource: ImageSourcePropType;
  selectedImage?: string;
};
```

Источник изображения выбирается условно:

```
const imageSource = selectedImage
  ? { uri: selectedImage }
  : imgSource;

return <Image source={imageSource} style={styles.image} />;
```

Если selectedImage есть, показывается изображение с устройства. Если нет — отображается стандартное изображение приложения.

В экране передаём выбранное изображение:

```
<ImageViewer
  imgSource={PlaceholderImage}
  selectedImage={selectedImage}
/>
```

# Create a modal

### 1. Состояние отображения кнопок

В index.tsx добавьте состояние:

```
const [showAppOptions, setShowAppOptions] = useState(false);
```

После выбора изображения:

```
setShowAppOptions(true);
```

Кнопки отображаются условно:

- если showAppOptions === false — кнопки выбора изображения;
- если true — кнопки Reset, Add sticker и Save.

### 2. Компоненты кнопок

Создаются два компонента:

- CircleButton — круглая кнопка с иконкой +;
- IconButton — кнопка с иконкой и текстовой подписью.

В index.tsx добавляются обработчики:

```
const onReset = () => {
  setShowAppOptions(false);
};

const onAddSticker = () => {
  // открыть модальное окно
};

const onSaveImageAsync = async () => {
  // сохранение изображения
};
```

Кнопки размещаются в строке:

```
<View style={styles.optionsRow}>
  <IconButton icon="refresh" label="Reset" onPress={onReset} />
  <CircleButton onPress={onAddSticker} />
  <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
</View>
```

### 3. Компонент EmojiPicker

Файл: `src/components/emoji-picker.tsx`

Компонент использует Modal и принимает:

- `isVisible` — видимость модального окна;
- `onClose` — закрытие;
- `children` — содержимое модального окна.

Основные свойства:

```
<Modal
  animationType="slide"
  transparent={true}
  visible={isVisible}
>
```

Модальное окно появляется снизу экрана. В заголовке есть кнопка закрытия:

```
<Pressable onPress={onClose}>
  <MaterialIcons name="close" color="#fff" size={22} />
</Pressable>
```

### 4. Управление модальным окном

В index.tsx добавьте состояние:

```
const [isModalVisible, setIsModalVisible] = useState(false);
```

Открытие:

```
const onAddSticker = () => {
  setIsModalVisible(true);
};
```

Закрытие:

```
const onModalClose = () => {
  setIsModalVisible(false);
};
```

Подключение компонента:

```
<EmojiPicker
  isVisible={isModalVisible}
  onClose={onModalClose}
>
  {/* Здесь будет список эмодзи */}
</EmojiPicker>
```

# Add gestures

### 1. Подключить обработку жестов

В index.tsx замените корневой <View> на:

```
<GestureHandlerRootView style={styles.container}>
  {/* содержимое приложения */}
</GestureHandlerRootView>
```

Импорт:

```
import { GestureHandlerRootView } from 'react-native-gesture-handler';
```

### 2. Подготовить анимированный стикер

В emoji-sticker.tsx:

- замените Image на Animated.Image;
- импортируйте Animated из react-native-reanimated;
- оберните изображение в GestureDetector.

```
import Animated from 'react-native-reanimated';
```

### 3. Добавить масштабирование двойным нажатием

Создайте общее значение:

```
const scaleImage = useSharedValue(imageSize);
```

Жест двойного нажатия:

```
const doubleTap = Gesture.Tap()
  .numberOfTaps(2)
  .onStart(() => {
    if (scaleImage.value !== imageSize * 2) {
      scaleImage.value *= 2;
    } else {
      scaleImage.value = Math.round(scaleImage.value / 2);
    }
  });
```

Анимированный стиль:

```
const imageStyle = useAnimatedStyle(() => ({
  width: withSpring(scaleImage.value),
  height: withSpring(scaleImage.value),
}));
```

Применение:

```
<GestureDetector gesture={doubleTap}>
  <Animated.Image
    source={stickerSource}
    resizeMode="contain"
    style={[{ width: imageSize, height: imageSize }, imageStyle]}
  />
</GestureDetector>
```

### 4. Добавить перемещение стикера

Создайте координаты:

```
const translateX = useSharedValue(0);
const translateY = useSharedValue(0);
```

Жест панорамирования:

```
const drag = Gesture.Pan().onChange(event => {
  translateX.value += event.changeX;
  translateY.value += event.changeY;
});
```

Стиль перемещения:

```
const containerStyle = useAnimatedStyle(() => ({
  transform: [
    { translateX: translateX.value },
    { translateY: translateY.value },
  ],
}));
```

### 5. Итоговая структура JSX

```
<GestureDetector gesture={drag}>
  <Animated.View style={[containerStyle, { top: -350 }]}>
    <GestureDetector gesture={doubleTap}>
      <Animated.Image
        source={stickerSource}
        resizeMode="contain"
        style={[{ width: imageSize, height: imageSize }, imageStyle]}
      />
    </GestureDetector>
  </Animated.View>
</GestureDetector>
```

# Take a screenshot

### 1. Установить библиотеки

```
npx expo install react-native-view-shot expo-media-library
```

- react-native-view-shot — делает скриншот компонента;
- expo-media-library — сохраняет изображение в медиатеку устройства.

### 2. Запросить разрешение

```
const [permissionResponse, requestPermission] =
  ImagePicker.useMediaLibraryPermissions();

useEffect(() => {
  if (!permissionResponse?.granted) {
    requestPermission();
  }
}, []);
```

Разрешение нужно для сохранения изображения в галерею.

### 3. Создать ссылку на область скриншота

```
const imageRef = useRef<View>(null);
```

Оберните изображение и стикер в View:

```
<View ref={imageRef} collapsable={false}>
  <ImageViewer
    imgSource={PlaceholderImage}
    selectedImage={selectedImage}
  />

  {pickedEmoji && (
    <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
  )}
</View>
```

collapsable={false} необходимо для корректного захвата View на Android.

### 4. Сделать и сохранить скриншот

Импорты:

```
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';
```

Функция сохранения:

```
const onSaveImageAsync = async () => {
  try {
    const localUri = await captureRef(imageRef, {
      height: 440,
      quality: 1,
    });

    await MediaLibrary.saveToLibraryAsync(localUri);
    alert('Saved!');
  } catch (error) {
    console.log(error);
  }
};
```

captureRef() возвращает URI созданного изображения, который затем передаётся в saveToLibraryAsync().

### 5. Подключить к кнопке Save

```
<IconButton
  icon="save-alt"
  label="Save"
  onPress={onSaveImageAsync}
/>
```

Теперь при нажатии save приложение захватывает изображение вместе со стикером и сохраняет его в медиатеку устройства.

# Handle platform differences

### Установка и импорт dom-to-image
Чтобы сделать скриншот в интернете и сохранить его как изображение, мы используем стороннюю библиотеку под названием dom-to-image. Он делает скриншот любого узла DOM и превращает его в векторное (SVG) или растровое (PNG или JPEG) изображение.

Остановите сервер разработки и выполните следующую команду для установки библиотеки:

`npm install dom-to-image`

### Добавить код, специфичный для платформы

Используя модуль из React Native, мы можем реализовать поведение, специфичное для платформы. Внутри `src/app/(tabs)/index.tsx:Platform`:

1. Импортируйте модуль из `.Platformreact-native`
2. Импортируйте библиотеку из `.domtoimagedom-to-image`
2. Обновите функцию, чтобы проверить, связана ли текущая платформа с этим свойством. Если это так, мы используем метод для преобразования и захвата тока в формате JPEG-изображения. В противном случае мы продолжим использовать ту же логику, что и для нативных платформ.`onSaveImageAsync()'web'Platform.OS'web'domtoimage.toJpeg()<View>`

## Configure status bar, splash screen and app icon
### Настройте строку статуса
`expo-status-bar` Библиотека предустановленна в каждом проекте, созданном с использованием . Эта библиотека предоставляет компонент для настройки стиля строки статуса приложения.`create-expo-appStatusBar`

Внутри `src/app/_layout.tsx`:

1. Импортировать из .StatusBarexpo-status-bar
2. Сгруппируйте существующие компоненты с компонентом Fragment от React.StatusBarStack

### Иконка изображения
Как и изображение заставки, свойство в файле app.json настраивает путь иконки приложения. По умолчанию новый проект Expo определяет правильный путь к . Нам не нужно ничего менять.`"icon""./assets/images/icon.png"`

В конечном итоге, когда вы будете создавать приложение для магазинов приложений, Expo Application Services (EAS) возьмёт это изображение и создаст оптимизированную иконку для каждого устройства.

### Заставка
Перед загрузкой контента приложения отображается заставка. Он использует меньшее изображение, например иконку приложения, которая расположена по центру. Он скрывается, когда содержимое приложения готово к отображению.

The `expo-splash-screen` Плагин уже предустановлен в каждом проекте, созданном с использованием . Эта библиотека предоставляет конфигурационный плагин для настройки заставочного экрана.`create-expo-app`

В app.json году плагин уже настроен так, чтобы использовать иконку приложения в качестве изображения заставки (предоставленного в загружаемых ассетах) с следующим фрагментом, так что нам не нужно ничего менять:`expo-splash-screen`

Однако для тестирования заставки мы не можем использовать Expo Go или билд для разработки. Чтобы проверить, нам нужно создать превью или производственную версию нашего приложения. Рекомендуем ознакомиться с следующими ресурсами, чтобы узнать больше о конфигурации заставки и способах её протестировать:

1. Создайте руководство по иконкам splash screen, чтобы узнать, как настраивается иконка splash screen.
2. Чтобы узнать, как создать предварительную сборку, ознакомьтесь с руководством по внутреннему распространению в EAS Tutorial, а чтобы создавать производственные сборки — в руководствах для Android и iOS.

# Learning resources

Создать проект Expo:
```
npx create-expo-app@latest
```

После создания проекта изучить:
1. инструменты Expo;
2. development builds для тестирования на устройстве или эмуляторе;
3. основной цикл разработки Expo;
4. Expo Router и навигацию по вкладкам;
5. настройку иконки приложения, splash screen и `app.json`;
6. публикацию приложения в App Store и Google Play;
7. отладку и поиск ошибок.

Необходимые знания:
1. React: компоненты, API, Hooks;
2. React Native: базовые компоненты, текст, платформенный код, списки;
3. Flexbox: размеры и компоновка элементов;
4. Жесты и анимации: React Native Gesture Handler и Reanimated.
5. При необходимости можно обращаться к сообществу Expo в Discord.