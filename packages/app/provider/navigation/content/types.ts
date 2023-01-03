export type ContentScreensParamList = {
  adventure: { publicId: string }
  comments: {
    publicId: string
    contentType: 'adventure' | 'scenario' | 'world' | 'comment'
  }
  profile:
    | {
        username?: string
        contentType?: 'adventure' | 'scenario' | 'world' | 'saved' | 'trash'
        sort?: string
        searchTerm?: string
        timeRange?: string
        multiplayer?: 'true' | 'false'
        published?: 'true' | 'false'
        safe?: 'true' | 'false'
      }
    | undefined
  profileEdit: undefined
  updateAvatar: undefined
  scenario: { publicId: string }
  world: { publicId: string }
}
