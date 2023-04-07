import React, { useEffect, useState } from 'react'
import { Box, Button, Typography, Icon } from '@mui/material'
import { Colors } from '@/src/Theme/colors'
import { typography } from '@/src/Theme/typography'

const Subscription = () => {
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => {
    setHydrated(true)
  }, [])

  const featureActions = [
    {
      text: '',
      button: (
        <a
          target="_blank"
          href="https://www.producthunt.com/posts/june-ai-2"
          style={{ textDecoration: 'none' }}
        >
          <Button
            variant="secondary"
            style={{ ...typography.body12Regular, color: Colors.White, textTransform: 'none' }}
          >
            Upvote us on&nbsp;
            <Icon>
              <img
                src={'product-hunt-logo.png'}
                height={20}
                width={20}
                style={{ marginBottom: '1rem' }}
              />
            </Icon>
            Product Hunt 🚀
          </Button>
        </a>
      ),
    },
  ]

  const feature = featureActions[Math.floor(Math.random() * featureActions.length)]

  return (
    <Box
      sx={{
        width: '100%',
        // height:50,

        justifyContent: 'center',
        backgroundColor: Colors.Color14,
        '&:hover': {
          backgroundColor: Colors.Color14,
          opacity: [0.9, 0.8, 0.7],
        },
        paddingTop: 1,
      }}
    >
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        style={{
          ...typography.body18Regular,
          color: Colors.White,
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        {hydrated && feature['text']}
        {hydrated && feature['button']}

        {!hydrated && featureActions[0]['text']}
        {!hydrated && featureActions[0]['button']}
      </Typography>
    </Box>
  )
}
export default Subscription
