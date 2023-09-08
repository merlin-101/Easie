import Image from 'next/image'
import styles from '../page.module.css'
import './logo.css'
import { Typography } from '@mui/material'

export default function Logo() {
  return (
    <div className={styles.center}>
      <Typography variant='h1' color={'#f5b841'}>
        Eas
      </Typography>
      <Image
        src='/surfer.svg'
        alt='Logo'
        width={100}
        height={100}
        priority
        className='surf'
      />
      <Typography variant='h1' color={'#f5b841'}>
        er
      </Typography>
    </div>
  )
}
