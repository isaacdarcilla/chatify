export const standard = defineScenario({
  message: {
    one: {
      data: {
        user: { create: { room: { create: {} } } },
        room: { create: {} },
      },
    },

    two: {
      data: {
        user: { create: { room: { create: {} } } },
        room: { create: {} },
      },
    },
  },
})
