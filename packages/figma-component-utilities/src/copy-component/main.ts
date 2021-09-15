import {
  formatErrorMessage,
  formatSuccessMessage,
  insertBeforeNode,
  pluralize
} from '@create-figma-plugin/utilities'

import { OFFSET } from '../utilities/constants.js'

export default async function (): Promise<void> {
  if (figma.currentPage.selection.length === 0) {
    figma.closePlugin(formatErrorMessage('Select a component'))
    return
  }
  const components = figma.currentPage.selection.filter(function (
    node
  ): node is ComponentNode {
    return node.type === 'COMPONENT'
  })
  if (components.length === 0) {
    figma.closePlugin(formatErrorMessage('No components in selection'))
    return
  }
  const newSelection = []
  for (const component of components) {
    const clone = component.clone()
    clone.x = component.x + OFFSET
    clone.y = component.y + OFFSET
    insertBeforeNode(clone, component)
    newSelection.push(clone)
  }
  figma.currentPage.selection = newSelection
  figma.closePlugin(
    formatSuccessMessage(
      `Copied ${components.length} ${pluralize(components.length, 'component')}`
    )
  )
}
