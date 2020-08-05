# Project Guidelines

## Definitions

### Misc

| Variable | Usage                                        | Data Type |
| -------- | :------------------------------------------- | :-------- |
| value    | used for controlled component input          | string    |
| elem     | when looping iterables (arrays)              | string    |
| key      | when looping enumerable properties (objects) | string    |
| value    | used for controlled component input          | string    |

### River

| Variable   | Usage                          | Data Type |
| ---------- | :----------------------------- | :-------- |
| rivers     | all the rivers in the database | array     |
| river      | a river object                 | object    |
| riverIndex | index of a specific river      | number    |
| riverName  | name of a river                | string    |

### Rapid

| Variable   | Usage                                   | Data Type |
| ---------- | :-------------------------------------- | :-------- |
| rapids     | array of all rapids in a specific river | array     |
| rapid      | a rapid object                          | object    |
| rapidIndex | index of a specific rapid               | number    |
| rapidName  | name of a specific rapid                | string    |

### Feature

| Variable     | Usage                                     | Data Type |
| ------------ | :---------------------------------------- | :-------- |
| features     | array of all Features in a specific river | array     |
| feature      | a Feature object                          | object    |
| featureIndex | index of a specific Feature               | number    |
| featureType  | hydraulic, eddy, etc.                     | number    |
| featureName  | name of a specific Feature                | string    |

## Variable Naming

### Functions

Use "verbNoun" eg. convertCurrency or displayUserName

### Arrays

Ends in "s"

### Booleans

Starts with "is" or "has". eg. isTeacher

### Array functions

Use relevent name to the array.

### Module import order

// 3rd party packages
import React from 'react'
import styled from 'styled-components'

// reusable components
import Button from '~/components/Button'

// utility functions
import { add, subtract } from '~/utils/calculate'

// submodules
import Intro from './Intro'
import Selector from './Selector'
