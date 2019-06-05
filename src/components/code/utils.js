import { path } from 'ramda'

import { highlightAuto } from '../../highlight'

export const highlightCode = value => path(['value'], highlightAuto(value))
