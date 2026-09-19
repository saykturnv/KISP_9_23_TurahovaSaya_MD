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

### 1. Основы Expo Router

Expo Router — это фреймворк маршрутизации на основе файлов для React Native и веб-приложений. Он управляет навигацией между экранами и использует одни и те же компоненты на нескольких платформах. Чтобы начать, нам нужно знать о следующих конвенциях:

1. Каталог приложений: Специальная директория, содержащая только маршруты и их макеты. Любые файлы, добавленные в эту директорию, становятся экраном внутри нашего нативного приложения и страницей в интернете. В стандартном шаблоне он расположен на `src/app.`
2. Корневая верстка: файл `src/app/_layout.tsx.` Он определяет общие элементы интерфейса, такие как заголовки и панели вкладок, чтобы они были согласованы между разными маршрутами.
3. Правила имён файлов: Имена индексных файлов, такие как `index.tsx`, совпадают с родительским каталогом и не добавляют сегмент пути. Например, файл `index.tsx` в каталоге `src/app` совпадает с маршрутом./
4. Файл маршрута экспортирует компонент React в качестве своего значения по умолчанию. Он может использовать либо , , , либо расширение..js.jsx.ts.tsx
5. Android, iOS и веб имеют единую навигационную структуру.

Expo Router создаёт маршруты на основе файлов в `src/app`:

- `src/app/index.tsx` → маршрут `/`
- `src/app/about.tsx` → маршрут `/about`
- `src/app/_layout.tsx` → общий layout и настройка навигации
- `src/app/+not-found.tsx` → экран для несуществующих маршрутов
- `(tabs)` → группировка маршрутов без добавления сегмента в URL

Файл маршрута должен экспортировать React-компонент по умолчанию.

### 2. Добавьте новый экран в стек

Внутри `src/app/_layout.tsx`:

1. Добавьте компонент и проп для обновления названия маршрута.<Stack.Screen />options/about
2. Обновите название маршрута, добавив проп./indexHomeoptions

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
import { Text, View, StyleSheet } from 'react-native';
 import { Link } from 'expo-router'; 

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
      <Link href="/about" style={styles.button}>
        Go to About screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});

```

href указывает путь, на который перейдёт пользователь.

### 4. Обработка несуществующих маршрутов

Файл +not-found.tsx отображается, если пользователь перешёл по неправильному адресу.

```
import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Not Found' }} />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          Go back to Home screen!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});

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
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
          ),
        }}
      />
    </Tabs>
  );
}
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
import { View, StyleSheet } from 'react-native';
 import { Image } from 'expo-image'; 


const PlaceholderImage = require('@/assets/images/background-image.png');


export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

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
import { StyleSheet, View, Pressable, Text } from 'react-native';

type Props = {
  label: string;
};

export default function Button({ label }: Props) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});

```

Текст кнопки передаётся через проп:

```
import { View, StyleSheet } from 'react-native';

import Button from '@/components/button'; 
import ImageViewer from '@/components/image-viewer';

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});

```

### 5. Темизация кнопки

Для первой кнопки добавляется необязательный проп:

```
import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
  label: string;
  theme?: 'primary';
};

export default function Button({ label, theme }: Props) {
  if (theme === 'primary') {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 },
        ]}>
        <Pressable
          style={[styles.button, { backgroundColor: '#fff' }]}
          onPress={() => alert('You pressed a button.')}>
          <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} />
          <Text style={[styles.buttonLabel, { color: '#25292e' }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});

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

### 2. Обновить компонент кнопок

При нажатии основной кнопки мы вызовем функцию компонента. Обновите проп компонента в src/components/button.tsx:pickImageAsync()ButtononPressButton

```
import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
  label: string;
  theme?: 'primary';
  onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
  if (theme === 'primary') {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 },
        ]}>
        <Pressable style={[styles.button, { backgroundColor: '#fff' }]} onPress={onPress}>
          <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} />
          <Text style={[styles.buttonLabel, { color: '#25292e' }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}
```

```
const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
```

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
Перед внедрением модала мы добавим три новые кнопки. Эти кнопки видны после того, как пользователь выбирает изображение из медиабиблиотеки или использует заполняющее изображение. Одна из этих кнопок запускает модаль отбора эмодзи.

В `src/app/(tabs)/index.tsx`:

1. Объявите переменную булевого состояния, , чтобы показать или скрыть кнопки, открывающие модаль, а также несколько других опций. Когда экран приложения загружается, мы устанавливаем так, чтобы опции не отображались перед выбором изображения. Когда пользователь выбирает изображение или использует заполнительное изображение, мы устанавливаем его на .showAppOptionsfalsetrue
2. Обновите функцию, чтобы установить значение в после выбора изображения.pickImageAsync()showAppOptionstrue
3. Обновите кнопку без темы, добавив реквизит со следующим значением.
```
import { View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import Button from '@/components/button';
import ImageViewer from '@/components/image-viewer';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      {showAppOptions ? (
        <View />
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});

```

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
import { ImageSourcePropType, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

type Props = {
  imageSize: number;
  stickerSource: ImageSourcePropType;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  const scaleImage = useSharedValue(imageSize);

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      if (scaleImage.value !== imageSize * 2) {
        scaleImage.value = scaleImage.value * 2;
      } else {
        scaleImage.value = Math.round(scaleImage.value / 2);
      }
    });

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });

  return (
    <View style={{ top: -350 }}>
       <GestureDetector gesture={doubleTap}>
        <Animated.Image
          source={stickerSource}
          resizeMode="contain"
          style={[{ width: imageSize, height: imageSize }, imageStyle]}
        />
      </GestureDetector>
    </View>
  );
}

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

Мы можем сделать скриншот представления, вызвав метод изнутри функции. Он принимает опциональный аргумент, при котором мы можем передать и области для захвата скриншотов. Подробнее о доступных вариантах можно прочитать в документации библиотеки`.captureRef()react-native-view-shotonSaveImageAsync()widthheight`

Метод также возвращает обещание, которое выполняет URI скриншота. Мы передадим этот URI в качестве параметра `captureRef()MediaLibrary.saveToLibraryAsync()` и сохранить скриншот в медиабиблиотеке устройства.

Внутри src/app/(tabs)/index.tsx обновите функцию следующим кодом:`onSaveImageAsync()`

```
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { useEffect, useRef, useState } from 'react';
import { ImageSourcePropType, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { captureRef } from 'react-native-view-shot';

import Button from '@/components/button';
import CircleButton from '@/components/circle-button';
import EmojiList from '@/components/emoji-list';
import EmojiPicker from '@/components/emoji-picker';
import IconButton from '@/components/icon-button';
import ImageViewer from '@/components/image-viewer';

import EmojiSticker from '@/components/emoji-sticker';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<
    ImageSourcePropType | undefined
  >(undefined);
  const [permissionResponse, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const imageRef = useRef<View>(null);

  useEffect(() => {
    if (!permissionResponse?.granted) {
      requestPermission();
    }
  }, []);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });

      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri) {
        alert('Saved!');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
        </View>
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

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

```
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { useEffect, useRef, useState } from 'react';
import { ImageSourcePropType, View, StyleSheet, Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { captureRef } from 'react-native-view-shot';
import domtoimage from 'dom-to-image';

import Button from '@/components/button';
import ImageViewer from '@/components/image-viewer';
import IconButton from '@/components/icon-button';
import CircleButton from '@/components/circle-button';
import EmojiPicker from '@/components/emoji-picker';
import EmojiList from '@/components/emoji-list';
import EmojiSticker from '@/components/emoji-sticker';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | undefined>(undefined);
  const [permissionResponse, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const imageRef = useRef<View>(null);

  useEffect(() => {
    if (!permissionResponse?.granted) {
      requestPermission();
    }
  }, []);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    if (Platform.OS !== 'web') {
      try {
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });

        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          alert('Saved!');
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const dataUrl = await domtoimage.toJpeg(imageRef.current, {
          quality: 0.95,
          width: 320,
          height: 440,
        });

        let link = document.createElement('a');
        link.download = 'sticker-smash.jpeg';
        link.href = dataUrl;
        link.click();
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
        </View>
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

```
## Configure status bar, splash screen and app icon
### Настройте строку статуса
`expo-status-bar` Библиотека предустановленна в каждом проекте, созданном с использованием . Эта библиотека предоставляет компонент для настройки стиля строки статуса приложения.`create-expo-appStatusBar`

Внутри `src/app/_layout.tsx`:

1. Импортировать из .StatusBarexpo-status-bar
2. Сгруппируйте существующие компоненты с компонентом Fragment от React.StatusBarStack
```
import { Stack } from 'expo-router';

import { StatusBar } from 'expo-status-bar';


export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}

```

### Иконка изображения
Как и изображение заставки, свойство в файле app.json настраивает путь иконки приложения. По умолчанию новый проект Expo определяет правильный путь к . Нам не нужно ничего менять.`"icon""./assets/images/icon.png"`

В конечном итоге, когда вы будете создавать приложение для магазинов приложений, Expo Application Services (EAS) возьмёт это изображение и создаст оптимизированную иконку для каждого устройства.

### Заставка
Перед загрузкой контента приложения отображается заставка. Он использует меньшее изображение, например иконку приложения, которая расположена по центру. Он скрывается, когда содержимое приложения готово к отображению.

The `expo-splash-screen` Плагин уже предустановлен в каждом проекте, созданном с использованием . Эта библиотека предоставляет конфигурационный плагин для настройки заставочного экрана.`create-expo-app`

В app.json году плагин уже настроен так, чтобы использовать иконку приложения в качестве изображения заставки (предоставленного в загружаемых ассетах) с следующим фрагментом, так что нам не нужно ничего менять:`expo-splash-screen`

```
{
  "plugins": [
    [
      "expo-splash-screen",
      {
        "image": "./assets/images/splash-icon.png"
      }
    ]
  ]
}

```
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