import { Info, Label, Security } from '@mui/icons-material'
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  MenuList,
  Paper,
  Toolbar,
  Typography,
} from '@mui/material'
import React from 'react'
import Link from 'next/link'
import { Row } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { Colors } from '@/src/Theme/colors'
import { typography } from '@/src/Theme/typography'
import MenuData from '../../Common/menu.json'
import { getPrompts } from '@/src/Utils/prompt'
const Footer = () => {
  const router = useRouter()
  const MenuItemsData = MenuData
  const SubCategoiresData = getPrompts()
  let firstfiveprompts = SubCategoiresData.slice(0, 5)
  let secondfiveprompts = SubCategoiresData.slice(5, 10)
  let thirdfiveprompts = SubCategoiresData.slice(10, 15)
  return (
    <>
      <div style={{ marginTop: 10, marginBottom: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={4} md={4}>
            <strong
              style={{
                fontSize: 25,
                color: 'black',
                ...typography.body15Regular,
              }}
            >
              User interface-based Apps will help generate output from CHAT GPT without knowledge of
              Boring And Cognitively demanding so-called Prompt engineering
            </strong>
          </Grid>
          <Grid item xs={2} md={2}>
            <strong
              style={{
                fontSize: 25,
                paddingLeft: 15,
                color: 'black',
                ...typography.body27Bold,
              }}
            >
              Navigate
            </strong>
            <br />

            <MenuItem
              onClick={() =>
                router.push({
                  pathname: '/',
                })
              }
            >
              Home
            </MenuItem>
            <MenuItem
              component={Link}
              href="https://github.com/sandeepscet/prompt-apps/"
              target="_blank"
            >
              GitHub
            </MenuItem>
            <MenuItem onClick={() => alert('Launching Soon..')}>Newsletter</MenuItem>
          </Grid>
          <Grid item xs={2} md={2}>
            <strong
              style={{
                fontSize: 25,
                paddingLeft: 15,
                color: 'black',
                ...typography.body27Bold,
              }}
            >
              Apps
            </strong>

            {firstfiveprompts.map((x) => {
              return (
                <MenuItem
                  onClick={() =>
                    router.push({
                      pathname: '/PromptDetails',
                      query: { SubCategoryName: x.title },
                    })
                  }
                >
                  {x.title}
                </MenuItem>
              )
            })}
          </Grid>
          <Grid item xs={2} md={2}>
            <strong
              style={{
                fontSize: 25,
                paddingLeft: 15,
                color: 'black',
                ...typography.body27Bold,
              }}
            ></strong>

            {secondfiveprompts.map((x) => {
              return (
                <MenuItem
                  onClick={() =>
                    router.push({
                      pathname: '/PromptDetails',
                      query: { SubCategoryName: x.title },
                    })
                  }
                >
                  {x.title}
                </MenuItem>
              )
            })}
          </Grid>
          <Grid item xs={2} md={2}>
            <strong
              style={{
                fontSize: 25,
                paddingLeft: 15,
                color: 'black',
                ...typography.body27Bold,
              }}
            ></strong>
            {thirdfiveprompts.map((x) => {
              return (
                <MenuItem
                  onClick={() =>
                    router.push({
                      pathname: '/PromptDetails',
                      query: { SubCategoryName: x.title },
                    })
                  }
                >
                  {x.title}
                </MenuItem>
              )
            })}
          </Grid>
        </Grid>
      </div>
      <AppBar
        position="static"
        elevation={0}
        component="footer"
        color="default"
        style={{ height: 10 }}
      >
        <Toolbar style={{ justifyContent: 'center', backgroundColor: '#EFF7FD' }}>
          <Typography variant="caption">@2023 Prompt Apps. All rights reserved</Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Footer
