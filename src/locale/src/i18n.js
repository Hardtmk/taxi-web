'use strict';

import { derived } from 'svelte/store';
import { locale, _, init, addMessages, getLocaleFromHostname, isLoading } from 'svelte-i18n';

const defaultLocaleFromHostname = () => {
	return getLocaleFromHostname(/^(.*?)\./)?.toLowerCase() || 'en';
};

const initI18n = async (
	initialLocale = defaultLocaleFromHostname(),
	fallbackLocale,
	locales = []
) => {
	const _locales = locales.map((locale) => fetch(`/lang/${locale}.json`));
	const _localesResults = await Promise.all(_locales);
	const _localesDictionary = await await Promise.all(
		_localesResults.map((result) => result.json())
	);

	_localesDictionary.forEach((locale, index) => {
		addMessages(locales[index], locale);
	});

	init({
		initialLocale,
		fallbackLocale
	});
};

const isLocaleLoaded = derived(locale, ($locale) => typeof $locale === 'string');

export { _, locale, initI18n, isLocaleLoaded, isLoading };
