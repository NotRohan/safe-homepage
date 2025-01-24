import React from 'react'
import css from './style.module.css'
import { Typography } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'
import clsx from 'clsx'

export default function Partners({ caption, items }: BaseBlock) {
  return (
    <section className={css.sectionContainer}>
      <Typography className={css.caption}>{caption}</Typography>
      <div className={css.itemsWrapper}>
        {items?.map((item, index) => (
          <div className={clsx(css.itemWrapper, index === 6 && css.highlighted)} key={index}>
            {item.image?.src && <img src={item.image.src} className={css.itemImage} alt={item.image.alt} />}
            <Typography variant="body" className={css.itemTitle}>
              {item.title}
            </Typography>
          </div>
        ))}
      </div>
    </section>
  )
}
