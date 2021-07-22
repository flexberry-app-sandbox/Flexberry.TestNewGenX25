import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        books: {
          caption: 'books',
          title: 'books',
          'new-platform-test-new-gen-x2-country-l': {
            caption: 'new-platform-test-new-gen-x2-country-l',
            title: 'new-platform-test-new-gen-x2-country-l'
          },
          'new-platform-test-new-gen-x2-book-l': {
            caption: 'new-platform-test-new-gen-x2-book-l',
            title: 'new-platform-test-new-gen-x2-book-l'
          },
          'new-platform-test-new-gen-x2-author-l': {
            caption: 'new-platform-test-new-gen-x2-author-l',
            title: 'new-platform-test-new-gen-x2-author-l'
          },
          'new-platform-test-new-gen-x2-language-l': {
            caption: 'new-platform-test-new-gen-x2-language-l',
            title: 'new-platform-test-new-gen-x2-language-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
