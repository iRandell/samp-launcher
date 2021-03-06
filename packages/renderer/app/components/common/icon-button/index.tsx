import React, { FunctionComponent } from 'react'
import cn from 'classnames'

import { Props } from './types'

import styles from './styles.scss'

export const IconButton: FunctionComponent<Props> = (props) => {
  const { className, title, disabled, icon: Icon, onClick } = props

  return (
    <div
      className={cn(styles.container, { [styles.disabled]: disabled }, className)}
      title={title}
      onClick={onClick}
    >
      <Icon />
    </div>
  )
}
