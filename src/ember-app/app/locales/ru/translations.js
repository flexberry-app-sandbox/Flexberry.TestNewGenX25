import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import NewPlatformTestNewGenX2AuthorLForm from './forms/new-platform-test-new-gen-x2-author-l';
import NewPlatformTestNewGenX2BookLForm from './forms/new-platform-test-new-gen-x2-book-l';
import NewPlatformTestNewGenX2CountryLForm from './forms/new-platform-test-new-gen-x2-country-l';
import NewPlatformTestNewGenX2LanguageLForm from './forms/new-platform-test-new-gen-x2-language-l';
import NewPlatformTestNewGenX2AuthorEForm from './forms/new-platform-test-new-gen-x2-author-e';
import NewPlatformTestNewGenX2BookEForm from './forms/new-platform-test-new-gen-x2-book-e';
import NewPlatformTestNewGenX2CountryEForm from './forms/new-platform-test-new-gen-x2-country-e';
import NewPlatformTestNewGenX2LanguageEForm from './forms/new-platform-test-new-gen-x2-language-e';
import NewPlatformTestNewGenX2AuthorModel from './models/new-platform-test-new-gen-x2-author';
import NewPlatformTestNewGenX2BookModel from './models/new-platform-test-new-gen-x2-book';
import NewPlatformTestNewGenX2CountryModel from './models/new-platform-test-new-gen-x2-country';
import NewPlatformTestNewGenX2LanguageModel from './models/new-platform-test-new-gen-x2-language';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'new-platform-test-new-gen-x2-author': NewPlatformTestNewGenX2AuthorModel,
    'new-platform-test-new-gen-x2-book': NewPlatformTestNewGenX2BookModel,
    'new-platform-test-new-gen-x2-country': NewPlatformTestNewGenX2CountryModel,
    'new-platform-test-new-gen-x2-language': NewPlatformTestNewGenX2LanguageModel
  },

  'application-name': 'Books',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Books',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Books',
          title: 'Books'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        books: {
          caption: 'Books',
          title: 'Books',
          'new-platform-test-new-gen-x2-country-l': {
            caption: 'Country',
            title: ''
          },
          'new-platform-test-new-gen-x2-book-l': {
            caption: 'Book',
            title: ''
          },
          'new-platform-test-new-gen-x2-author-l': {
            caption: 'Author',
            title: ''
          },
          'new-platform-test-new-gen-x2-language-l': {
            caption: 'Language',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'new-platform-test-new-gen-x2-author-l': NewPlatformTestNewGenX2AuthorLForm,
    'new-platform-test-new-gen-x2-book-l': NewPlatformTestNewGenX2BookLForm,
    'new-platform-test-new-gen-x2-country-l': NewPlatformTestNewGenX2CountryLForm,
    'new-platform-test-new-gen-x2-language-l': NewPlatformTestNewGenX2LanguageLForm,
    'new-platform-test-new-gen-x2-author-e': NewPlatformTestNewGenX2AuthorEForm,
    'new-platform-test-new-gen-x2-book-e': NewPlatformTestNewGenX2BookEForm,
    'new-platform-test-new-gen-x2-country-e': NewPlatformTestNewGenX2CountryEForm,
    'new-platform-test-new-gen-x2-language-e': NewPlatformTestNewGenX2LanguageEForm
  },

});

export default translations;
