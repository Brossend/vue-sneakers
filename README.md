# vue-sneakers

Для запуска проекта в локальной среде следующие требования:

- Node js 18.17.1 версии или выше
- Пакетный менеджер npm. Установка: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

## Используемые команды

Установка зависимостей:

```
npm install
```

Запуск локального сервера:

```
npm dev
```

Запуск билда:

```
npm build
```

## Структура проекта

```
./
└── vue-sneakers
    ├── public # Папка с шаблонами и статичными фалами
    ├── src # Весь исходный код проекта
    │   ├── assets # Дополнительные статические ресурсы
    │   │   └── fonts
    │   │   └── icons
    │   │   └── images
    │   │   └── style
    │   ├── components # Все vue компоненты проекта (*)
    │   │   ├── SomeComponent
    │   │   ├── SomeComponent
    │   │   ├── ...
    │   ├── pages # Все vue страницы проекта
    │   │   ├── favorites
    │   │   │   └── favorites.vue
    │   │   └── ...
    │   ├── main.js
    └── └── App.vue
```

## Пример структуры компонентов

```
header
├── header.scss # Стили главного комонента
└── header.vue # Код главного компонента
```