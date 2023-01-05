interface ErrorEventsAttributes {
  createdAt?: Date
  message: string
  locations?: object
  path: object
  extensions: object
  productId?: string
}

const sendErrorEvent = (body: ErrorEventsAttributes) => {
  const analyticsEndpoint = `${process.env.LATITUDE_API_URL}/events/error-event`
  void fetch(analyticsEndpoint, {
    method: 'POST',
    body: JSON.stringify({
      createdAt: new Date(),
      message: body.message,
      extensions: body.extensions,
      locations: body.locations ?? ['ai-dungeon-app'],
      path: body.path,
      productId: 'ed415c70-4fd6-4ac8-a6c7-b186b599a2e3',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export default sendErrorEvent
