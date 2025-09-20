'use client';

import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: AnimatedCounterProps) => {
  return (
    <p className='w-full'>
        <CountUp 
        end={amount} 
        decimals={2}
        decimal='.'
        prefix='$' />
    </p>
  )
}

export default AnimatedCounter
