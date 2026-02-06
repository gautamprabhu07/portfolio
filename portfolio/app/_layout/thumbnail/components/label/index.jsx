'use client';
// app/_layout/thumbnail/components/label/index.jsx

import { Label } from './index.styled';

/** @param {import('react').PropsWithChildren<unknown>} */
export function ThumbnailLabel({ children }) {
  return <Label>{children}</Label>;
}