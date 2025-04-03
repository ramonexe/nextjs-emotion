/** @jsxImportSource @emotion/react */
'use client';
import { css } from '@emotion/react';
import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
    href?: string;
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
    disabled?: boolean;
    variant?: 'default' | 'danger' | 'success';
    customBgColor?: string;
};

const buttonStyles = ({
    disabled,
    variant,
    customBgColor,
}: {
    disabled?: boolean;
    variant?: 'default' | 'danger' | 'success';
    customBgColor?: string;
}) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 0.5rem;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    background-color: ${customBgColor
        ? customBgColor
        : variant === 'danger'
        ? '#e63946'
        : variant === 'success'
        ? '#2a9d8f'
        : '#0070f3'};
    color: ${disabled ? '#aaa' : '#fff'};
    opacity: ${disabled ? 0.6 : 1};
    text-decoration: none;

    &:hover {
        opacity: ${!disabled && 0.9};
    }
`;

export default function Button({
    children,
    onClick,
    href,
    icon,
    iconPosition = 'left',
    disabled,
    variant = 'default',
    customBgColor,
}: ButtonProps) {
    const content = (
        <span
            css={css`
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
            `}
        >
            {icon && iconPosition === 'left' && <span>{icon}</span>}
            {children}
            {icon && iconPosition === 'right' && <span>{icon}</span>}
        </span>
    );

    if (href) {
        return (
            <Link
                href={href}
                css={buttonStyles({ disabled, variant, customBgColor })}
                passHref
            >
                {content}
            </Link>
        );
    }

    return (
        <button
            onClick={onClick}
            css={buttonStyles({ disabled, variant, customBgColor })}
            disabled={disabled}
        >
            {content}
        </button>
    );
}