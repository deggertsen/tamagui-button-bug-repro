import gql from 'graphql-tag'

const GET_USER = gql`
  query UserContextGetUser {
    user {
      id
      createdAt
      acceptCommunityGuidelines
      blockedUsers
      canCreatorApply
      creator
      email
      accessibleFeatures
      hasPremium
      isAlpha
      isCurrentUser
      isDeveloper
      enableTestPayments
      newNotificationCount
      privateId
      firebaseUid
      rewardAvailable
      shouldPromptReview
      shouldShowModelPromo
      username
      verifiedAt
      hasHadSubscriptionAccess
      steamId
      pastSteamPurchaser
      steamGiftClaimed
      profile {
        id
        shortId
        title
        description
        thumbImageUrl
      }
      activePremium {
        userId
        name
        status
        platform
        activeUntil
        accessUntil
        subscriptionId
      }
      actionsBalance {
        id
        currentBalance
      }
      creditsBalance {
        id
        currentBalance
      }
      scalesBalance {
        id
        currentBalance
      }
      gameSettings {
        id
        ai21CountPen
        ai21FreqPen
        ai21PresPen
        alignCommands
        bannedWords
        commandList
        defaultMode
        enableAlpha
        enableBeta
        griffinRepPen
        isFullScreen
        lowBandwidth
        memoryLength
        mobileActionWindowSize
        modelType
        nsfwGeneration
        searchfilterFollowing
        searchfilterPublished
        searchfilterSafe
        searchfilterThirdPerson
        showFeedback
        showIconText
        showModes
        storyLineBreak
        temperature
        textLength
        textSpeed
        topK
        topP
        trainTheAi
        unrestrictedInput
        webActionWindowSize
        worldInfoCardStyle
        settingsDrawerOpened
        advancedSettingsOpened
        imageCacheSelected
        rawModelOutput
        imageSettingsOpened
        imgWidth
        imgHeight
        imgCfgScale
        imgSteps
        imgSampler
        imgSeed
        imgSeedSafe
        shouldAutoplayAds
        activeTab
      }
      newProductUpdates {
        id
        title
        description
        createdAt
      }
      continueAdventure {
        id
        publicId
      }
    }
  }
`

export default GET_USER
