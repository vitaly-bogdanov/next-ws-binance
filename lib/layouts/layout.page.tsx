import Head from 'next/head';
import { FC } from 'react';
import styled from 'styled-components';

import { DEPTH_ROUTE } from '../../core/depth';
import { SYMBOL_ROUTE } from '../../core/symbol';
import { ComponentNavbar } from '../components';

interface Props {
    title?: string
    description?: string
}

export const LayoutClientPage: FC<Props> = ({ title, description, children }) => (
    <>
        <Head>
            <title>{ title }</title>
            <meta name="description" content={description} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <ComponentNavbar links={[DEPTH_ROUTE, SYMBOL_ROUTE]} />
        { children }
        <footer></footer>
    </>
);