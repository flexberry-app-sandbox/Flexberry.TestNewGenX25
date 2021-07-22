import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.books.caption'),
          title: i18n.t('forms.application.sitemap.books.title'),
          children: [{
            link: 'new-platform-test-new-gen-x2-country-l',
            caption: i18n.t('forms.application.sitemap.books.new-platform-test-new-gen-x2-country-l.caption'),
            title: i18n.t('forms.application.sitemap.books.new-platform-test-new-gen-x2-country-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'new-platform-test-new-gen-x2-book-l',
            caption: i18n.t('forms.application.sitemap.books.new-platform-test-new-gen-x2-book-l.caption'),
            title: i18n.t('forms.application.sitemap.books.new-platform-test-new-gen-x2-book-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'new-platform-test-new-gen-x2-author-l',
            caption: i18n.t('forms.application.sitemap.books.new-platform-test-new-gen-x2-author-l.caption'),
            title: i18n.t('forms.application.sitemap.books.new-platform-test-new-gen-x2-author-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'new-platform-test-new-gen-x2-language-l',
            caption: i18n.t('forms.application.sitemap.books.new-platform-test-new-gen-x2-language-l.caption'),
            title: i18n.t('forms.application.sitemap.books.new-platform-test-new-gen-x2-language-l.title'),
            icon: 'folder',
            children: null
          }]
        }
      ]
    };
  }),
})