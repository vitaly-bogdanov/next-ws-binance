import { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router'

import { LayoutContent } from '../layouts';
import { LayoutNavlinks } from '../layouts';
import { TLink } from './components.type';

interface Props {
    links?: TLink[]
}

export const ComponentNavbar: FC<Props> = ({ links }) => {
    const router = useRouter();

    return (
        <Navbar>
            <LayoutContent>
                <LayoutNavlinks>
                    {links?.map((link, index) => (
                        <LayoutNavLinkText key={`${link.NAME}-${index}`}>
                            <Link shallow={true} key={index} href={link.PATH}>{link.NAME}</Link>
                        </LayoutNavLinkText>
                    ))}
                </LayoutNavlinks>
            </LayoutContent>
        </Navbar>
    );
}

const Navbar = styled.nav`
    width: 100%;
    background-color: #3f51b5;
    height: 70px;
`;

const LayoutNavLinkText = styled.span`
    font-size: 25px;
    color: white;
    cursor: pointer;
`;