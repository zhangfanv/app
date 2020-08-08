import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from 'view-design/dist/locale/en-US';
import zh from 'view-design/dist/locale/zh-CN';
import language from './i18n.json'

Vue.use(VueI18n);
const messages = {
    en: Object.assign({ ...language.en }, en),
    zh: Object.assign({ ...language.zh }, zh)
};

const i18n = new VueI18n({
    locale: 'zh',  
    messages 
});

export default i18n;