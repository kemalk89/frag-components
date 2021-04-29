# fc-swim-lanes



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute | Description | Type                                                                              | Default     |
| ------------------- | --------- | ----------- | --------------------------------------------------------------------------------- | ----------- |
| `cards`             | --        |             | `CardItem[]`                                                                      | `undefined` |
| `lanes`             | --        |             | `SwimLaneItem[]`                                                                  | `undefined` |
| `renderCardContent` | --        |             | `(card: CardItem) => string`                                                      | `undefined` |
| `updateCardStatus`  | --        |             | `(newStatus: { cardId: string; newColumnId: string; position: number; }) => void` | `undefined` |


## Dependencies

### Used by

 - [app-container](../app-container)

### Depends on

- [fc-swim-lane](.)

### Graph
```mermaid
graph TD;
  fc-swim-lanes --> fc-swim-lane
  app-container --> fc-swim-lanes
  style fc-swim-lanes fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
