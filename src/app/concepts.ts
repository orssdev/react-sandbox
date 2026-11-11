import type { ComponentType } from 'react'
import { Feature1 } from '../features/feature1/index.ts'
import { Feature2 } from '../features/feature2/index.ts'
import { Feature3 } from '../features/feature3/index.ts'
import { Feature4 } from '../features/feature4/index.ts'
import { Feature5 } from '../features/feature5/index.ts'
import { Feature6 } from '../features/feature6/index.ts'

export type Concept = {
  name: string
  path: string
  Component: ComponentType
}

// Register each feature's entry point here.
export const concepts: Concept[] = [
  { name: 'feature1', path: '/feature1', Component: Feature1 },
  { name: 'feature2', path: '/feature2', Component: Feature2 },
  { name: 'feature3', path: '/feature3', Component: Feature3 },
  { name: 'feature4', path: '/feature4', Component: Feature4 },
  { name: 'feature5', path: '/feature5', Component: Feature5 },
  { name: 'feature6', path: '/feature6', Component: Feature6 },
]
