import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18nextConfig from '../next-i18next.config'
import { getToken } from '../services';

export const getI18nPaths = (id) => {
    return i18nextConfig.i18n.locales.map((lng) => ({
        params: {
            locale: lng,
            id: String(id)
        }
    }))
}

export async function getStaticPaths() {
    let token = await getToken();
    var myHeaders = new Headers();
    myHeaders.append("apiToken", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "withHtml": false
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/general/cms-articles/`, requestOptions);

    if (!response.ok) {
        console.log(`Failed to fetch data with status code ${response.status}`);
    }

    const data = await response.json();

    const ids = data?.response?.map((datum) => datum.id)

    return ({
        fallback: false,
        paths: [...ids?.map((id) => getI18nPaths(id)), ...["gold", "silver", "palladium", "platinum"].map((metal) => getI18nPaths(metal))].flat()
    })
}

export async function getI18nProps(ctx, ns = ['home', 'common']) {
    const locale = ctx?.params?.locale
    let props = {
        ...(await serverSideTranslations(locale, ns))
    }
    return props
}

export function makeStaticProps(ns = {}) {
    return async function getStaticProps(ctx) {
        return {
            props: {
                params: ctx.params,
                ...(await getI18nProps(ctx, ns))
            }
        }
    }
}
