import { Heading, Box } from "@chakra-ui/react"
import React from 'react'

import LibraryGrid from './grid/grid.component'

const TechStack = () => (
  <>
    <Heading as="h2" size="lg" my="8">
      <Box display="inline" role="img" aria-label="developer" mr={2}>
        👨‍💻
      </Box>
      Latest articles
    </Heading>
    <LibraryGrid />
  </>
)

export default TechStack
