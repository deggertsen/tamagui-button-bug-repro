export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
  JSONObject: any;
};

export type AcceptCommunityGuidelinesResponse = MutationResponse & {
  __typename: 'AcceptCommunityGuidelinesResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type Action = {
  __typename: 'Action';
  adventureId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  decisionId?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  imageText?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  shareUrl?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  type: Scalars['String'];
  undoneAt?: Maybe<Scalars['DateTime']>;
  visualGenerationId?: Maybe<Scalars['String']>;
};

export type ActionDecisionInput = {
  actionId?: InputMaybe<Scalars['String']>;
  publicId?: InputMaybe<Scalars['String']>;
  userChoiceReasonId?: InputMaybe<Scalars['String']>;
  userChoiceReasonText?: InputMaybe<Scalars['String']>;
};

export type ActionInput = {
  characterName?: InputMaybe<Scalars['String']>;
  choicesMode?: InputMaybe<Scalars['Boolean']>;
  lengthOverride?: InputMaybe<Scalars['Int']>;
  publicId?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  ttaiSupportedVersion?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
};

export type ActionResponse = {
  __typename: 'ActionResponse';
  hasBannedWord?: Maybe<Scalars['Boolean']>;
  returnedInput?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['DateTime']>;
};

export type AddActionResponse = MutationResponse & {
  __typename: 'AddActionResponse';
  actionResponse?: Maybe<ActionResponse>;
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type AddAdventureResponse = MutationResponse & {
  __typename: 'AddAdventureResponse';
  adventure?: Maybe<Adventure>;
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type AddDeviceTokenResponse = MutationResponse & {
  __typename: 'AddDeviceTokenResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type AddFriendRequestResponse = MutationResponse & {
  __typename: 'AddFriendRequestResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type Adventure = Commentable & Savable & Searchable & Votable & {
  __typename: 'Adventure';
  actionCount: Scalars['Int'];
  actionWindow: Array<Action>;
  allPlayers: Array<Player>;
  allowComments: Scalars['Boolean'];
  authorsNote?: Maybe<Scalars['String']>;
  bannedWords?: Maybe<Array<Scalars['String']>>;
  blockedAt?: Maybe<Scalars['DateTime']>;
  comments: Array<Comment>;
  contentType: Scalars['String'];
  contextInspectorData?: Maybe<Scalars['JSONObject']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  events?: Maybe<Scalars['JSONObject']>;
  featured: Scalars['Boolean'];
  gameState?: Maybe<Scalars['JSONObject']>;
  generateEvents: Scalars['Boolean'];
  hasBannedWord?: Maybe<Scalars['Boolean']>;
  hasNewMessages: Scalars['Boolean'];
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  imageStyle?: Maybe<Scalars['String']>;
  isOwner: Scalars['Boolean'];
  isSaved: Scalars['Boolean'];
  lastAction?: Maybe<Action>;
  lastModelResponse?: Maybe<Scalars['JSONObject']>;
  memory?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  messages: Array<Message>;
  modelContext?: Maybe<Scalars['String']>;
  myPlayer?: Maybe<Player>;
  nsfw: Scalars['Boolean'];
  nsfwModeratorTag?: Maybe<Scalars['Boolean']>;
  playPublicId?: Maybe<Scalars['String']>;
  playerCount: Scalars['Int'];
  publicId: Scalars['String'];
  published: Scalars['Boolean'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  saveCount: Scalars['Int'];
  scenario?: Maybe<Scenario>;
  scenarioId?: Maybe<Scalars['String']>;
  shortCode?: Maybe<Scalars['String']>;
  showComments: Scalars['Boolean'];
  tags?: Maybe<Scalars['JSONObject']>;
  thirdPerson: Scalars['Boolean'];
  title?: Maybe<Scalars['String']>;
  totalComments: Scalars['Int'];
  totalSaves: Scalars['Int'];
  totalUpvotes: Scalars['Int'];
  undoneWindow: Array<Action>;
  unlisted: Scalars['Boolean'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: User;
  userId: Scalars['String'];
  userJoined: Scalars['Boolean'];
  userVote?: Maybe<Scalars['String']>;
  voteCount: Scalars['Int'];
  world?: Maybe<World>;
  worldEventId?: Maybe<Scalars['String']>;
  worldId?: Maybe<Scalars['String']>;
};


export type AdventureActionWindowArgs = {
  desc?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type AdventureCommentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type AdventureUndoneWindowArgs = {
  desc?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type AdventureInput = {
  allowComments?: InputMaybe<Scalars['Boolean']>;
  authorsNote?: InputMaybe<Scalars['String']>;
  bannedWords?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description?: InputMaybe<Scalars['String']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  generateEvents?: InputMaybe<Scalars['Boolean']>;
  imageStyle?: InputMaybe<Scalars['String']>;
  nsfw?: InputMaybe<Scalars['Boolean']>;
  publicId?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['JSONObject']>;
  thirdPerson?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  universe?: InputMaybe<Scalars['String']>;
};

export type AlterInput = {
  actionId?: InputMaybe<Scalars['String']>;
  publicId?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  ttaiSupportedVersion?: InputMaybe<Scalars['Int']>;
};

export type Attribute = {
  __typename: 'Attribute';
  attribute?: Maybe<Scalars['JSONObject']>;
};

export type BlockContentsUserResponse = MutationResponse & {
  __typename: 'BlockContentsUserResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type BlockUserResponse = MutationResponse & {
  __typename: 'BlockUserResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type BuyProductResponse = MutationResponse & {
  __typename: 'BuyProductResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  products?: Maybe<Array<Maybe<Product>>>;
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type CancelFriendRequestResponse = MutationResponse & {
  __typename: 'CancelFriendRequestResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type CancelInput = {
  sub?: InputMaybe<Scalars['ID']>;
};

export type CancelInputResponse = MutationResponse & {
  __typename: 'CancelInputResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  subscription?: Maybe<PremiumSubscription>;
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type ChangeEmailResponse = {
  __typename: 'ChangeEmailResponse';
  code: Scalars['Int'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type Comment = Votable & {
  __typename: 'Comment';
  commentText?: Maybe<Scalars['String']>;
  contentId?: Maybe<Scalars['String']>;
  contentType: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  publicId: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  reviewStatus?: Maybe<Scalars['String']>;
  totalUpvotes: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: User;
  userId: Scalars['ID'];
  userVote?: Maybe<Scalars['String']>;
};

export type CommentInput = {
  commentText?: InputMaybe<Scalars['String']>;
  contentType?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  publicId?: InputMaybe<Scalars['String']>;
};

export type Commentable = {
  allowComments: Scalars['Boolean'];
  comments: Array<Comment>;
  contentType: Scalars['String'];
  id: Scalars['ID'];
  publicId: Scalars['String'];
  showComments: Scalars['Boolean'];
  title?: Maybe<Scalars['String']>;
  totalComments: Scalars['Int'];
  userId: Scalars['String'];
};


export type CommentableCommentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type ConfirmFriendRequestResponse = MutationResponse & {
  __typename: 'ConfirmFriendRequestResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type Content = {
  __typename: 'Content';
  coverImageUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  shortId?: Maybe<Scalars['String']>;
  thumbImageUrl?: Maybe<Scalars['String']>;
  thumbShortId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ContentResponseInput = {
  contentPublicId?: InputMaybe<Scalars['String']>;
  contentType?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  responseType?: InputMaybe<Scalars['String']>;
  responseValue?: InputMaybe<Scalars['String']>;
};

export type ContentWorldInfoInput = {
  contentPublicId?: InputMaybe<Scalars['String']>;
  contentType?: InputMaybe<Scalars['String']>;
  isSelected?: InputMaybe<Scalars['Boolean']>;
  worldInfoId?: InputMaybe<Scalars['String']>;
};

export type ContentWorldInformation = {
  __typename: 'ContentWorldInformation';
  attributes?: Maybe<Scalars['JSONObject']>;
  contentDataId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  entry?: Maybe<Scalars['String']>;
  factionName?: Maybe<Scalars['String']>;
  genre?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isSelected?: Maybe<Scalars['Boolean']>;
  keys?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type CreateBlanketWorldInfoResponse = MutationResponse & {
  __typename: 'CreateBlanketWorldInfoResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
  worldInfo?: Maybe<WorldInfo>;
};

export type CreateCommentResponse = MutationResponse & {
  __typename: 'CreateCommentResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  content?: Maybe<Commentable>;
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type CreateContentWorldInfoResponse = MutationResponse & {
  __typename: 'CreateContentWorldInfoResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  contentWorldInformation?: Maybe<ContentWorldInformation>;
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type CreateDuplicateWiResponse = MutationResponse & {
  __typename: 'CreateDuplicateWIResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
  worldInformation?: Maybe<WorldInformation>;
};

export type CreateMessageResponse = MutationResponse & {
  __typename: 'CreateMessageResponse';
  chatMessage?: Maybe<Message>;
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type CreateScenarioOptionResponse = MutationResponse & {
  __typename: 'CreateScenarioOptionResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  scenario?: Maybe<Scenario>;
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type CreateScenarioResponse = MutationResponse & {
  __typename: 'CreateScenarioResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  scenario?: Maybe<Scenario>;
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type CreateWorldInfoResponse = MutationResponse & {
  __typename: 'CreateWorldInfoResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type CreateWorldResponse = MutationResponse & {
  __typename: 'CreateWorldResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
  world?: Maybe<World>;
};

export type Creator = {
  __typename: 'Creator';
  id: Scalars['ID'];
};

export type CreatorInput = {
  id?: InputMaybe<Scalars['ID']>;
  socialLinks?: InputMaybe<Scalars['JSONObject']>;
  types?: InputMaybe<Scalars['String']>;
  why?: InputMaybe<Scalars['String']>;
};

export type CurrencyPurchaseInput = {
  amount?: InputMaybe<Scalars['Int']>;
  captureId?: InputMaybe<Scalars['String']>;
  chargeId?: InputMaybe<Scalars['String']>;
  currencyPackageId?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
};

export type DecideActionResponse = MutationResponse & {
  __typename: 'DecideActionResponse';
  actions?: Maybe<Array<Maybe<Action>>>;
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type DeleteAccountResponse = {
  __typename: 'DeleteAccountResponse';
  code: Scalars['Int'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type DeleteAdventureResponse = MutationResponse & {
  __typename: 'DeleteAdventureResponse';
  adventure?: Maybe<Adventure>;
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type DeleteCommentResponse = MutationResponse & {
  __typename: 'DeleteCommentResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  comment?: Maybe<Comment>;
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type DeleteContentWiResponse = MutationResponse & {
  __typename: 'DeleteContentWIResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  contentWorldInformation?: Maybe<ContentWorldInformation>;
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type DeleteContentWorldInfoResponse = MutationResponse & {
  __typename: 'DeleteContentWorldInfoResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  contentWorldInformation?: Maybe<ContentWorldInformation>;
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type DeleteScenarioResponse = MutationResponse & {
  __typename: 'DeleteScenarioResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  scenario?: Maybe<Scenario>;
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type DeleteWorldInformationResponse = MutationResponse & {
  __typename: 'DeleteWorldInformationResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
  worldInformation?: Maybe<WorldInformation>;
};

export type DeleteWorldResponse = MutationResponse & {
  __typename: 'DeleteWorldResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
  world?: Maybe<World>;
};

export type DestroyAdventureResponse = MutationResponse & {
  __typename: 'DestroyAdventureResponse';
  adventure?: Maybe<Adventure>;
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type DestroyScenarioResponse = MutationResponse & {
  __typename: 'DestroyScenarioResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  scenario?: Maybe<Scenario>;
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type DestroyWorldResponse = MutationResponse & {
  __typename: 'DestroyWorldResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
  world?: Maybe<World>;
};

export type DuplicateAdventureResponse = MutationResponse & {
  __typename: 'DuplicateAdventureResponse';
  adventure?: Maybe<Adventure>;
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type DuplicateScenarioResponse = MutationResponse & {
  __typename: 'DuplicateScenarioResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  scenario?: Maybe<Scenario>;
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type EditActionResponse = MutationResponse & {
  __typename: 'EditActionResponse';
  actionResponse?: Maybe<ActionResponse>;
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type EmptyTrashResponse = MutationResponse & {
  __typename: 'EmptyTrashResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type EventInput = {
  clientInfo?: InputMaybe<Scalars['JSONObject']>;
  eventName?: InputMaybe<Scalars['String']>;
  platform?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
  variation?: InputMaybe<Scalars['String']>;
};

export type FollowUserResponse = MutationResponse & {
  __typename: 'FollowUserResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  currentUser?: Maybe<User>;
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
  targetUser?: Maybe<User>;
};

export type GameSettings = {
  __typename: 'GameSettings';
  activeTab?: Maybe<Scalars['String']>;
  advancedSettingsOpened?: Maybe<Scalars['Boolean']>;
  adventureDisplayMode?: Maybe<Scalars['String']>;
  ai21CountPen: Scalars['Float'];
  ai21FreqPen: Scalars['Int'];
  ai21PresPen: Scalars['Float'];
  alignCommands?: Maybe<Scalars['String']>;
  autoGenerateImages: Scalars['Int'];
  bannedWords?: Maybe<Array<Scalars['String']>>;
  baseModelSelected?: Maybe<Scalars['String']>;
  commandList?: Maybe<Scalars['JSONObject']>;
  defaultMode: Scalars['String'];
  displayColors?: Maybe<Scalars['String']>;
  displayTheme?: Maybe<Scalars['String']>;
  enableAlpha: Scalars['Boolean'];
  enableBeta: Scalars['Boolean'];
  griffinRepPen: Scalars['Float'];
  id: Scalars['ID'];
  imageCacheSelected?: Maybe<Scalars['String']>;
  imageSettingsOpened?: Maybe<Scalars['Boolean']>;
  imgCfgScale?: Maybe<Scalars['Int']>;
  imgHeight?: Maybe<Scalars['Int']>;
  imgSampler?: Maybe<Scalars['String']>;
  imgSeed?: Maybe<Scalars['String']>;
  imgSeedSafe?: Maybe<Scalars['Int']>;
  imgSteps?: Maybe<Scalars['Int']>;
  imgWidth?: Maybe<Scalars['Int']>;
  improveTheAi?: Maybe<Scalars['Boolean']>;
  isFullScreen?: Maybe<Scalars['Boolean']>;
  lowBandwidth: Scalars['Boolean'];
  memoryLength?: Maybe<Scalars['String']>;
  mobileActionWindowSize: Scalars['Int'];
  modelType: Scalars['String'];
  nsfwGeneration: Scalars['Boolean'];
  rawModelOutput?: Maybe<Scalars['Boolean']>;
  searchfilterFollowing: Scalars['Boolean'];
  searchfilterPublished: Scalars['Boolean'];
  searchfilterSafe: Scalars['Boolean'];
  searchfilterThirdPerson: Scalars['Boolean'];
  settingsDrawerOpened?: Maybe<Scalars['Boolean']>;
  shouldAutoplayAds?: Maybe<Scalars['Boolean']>;
  shouldShowJoinDiscordPopup?: Maybe<Scalars['Boolean']>;
  showFeedback: Scalars['Boolean'];
  showIconText?: Maybe<Scalars['Boolean']>;
  showImproveTheAi?: Maybe<Scalars['Boolean']>;
  showModes: Scalars['Boolean'];
  storyLineBreak?: Maybe<Scalars['Boolean']>;
  temperature: Scalars['Float'];
  textFont: Scalars['String'];
  textLength: Scalars['Int'];
  textSize: Scalars['Int'];
  textSpeed: Scalars['Int'];
  topK: Scalars['Int'];
  topP: Scalars['Float'];
  trainTheAi?: Maybe<Scalars['Boolean']>;
  unrestrictedInput: Scalars['Boolean'];
  webActionWindowSize: Scalars['Int'];
  worldInfoCardStyle?: Maybe<Scalars['String']>;
};

export type GameSettingsInput = {
  activeTab?: InputMaybe<Scalars['String']>;
  advancedSettingsOpened?: InputMaybe<Scalars['Boolean']>;
  adventureDisplayMode?: InputMaybe<Scalars['String']>;
  ai21CountPen?: InputMaybe<Scalars['Float']>;
  ai21FreqPen?: InputMaybe<Scalars['Int']>;
  ai21PresPen?: InputMaybe<Scalars['Float']>;
  alignCommands?: InputMaybe<Scalars['String']>;
  autoGenerateImages?: InputMaybe<Scalars['Int']>;
  bannedWords?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  baseModelSelected?: InputMaybe<Scalars['String']>;
  commandList?: InputMaybe<Scalars['JSONObject']>;
  defaultMode?: InputMaybe<Scalars['String']>;
  displayColors?: InputMaybe<Scalars['String']>;
  displayScreen?: InputMaybe<Scalars['String']>;
  displayTheme?: InputMaybe<Scalars['String']>;
  enableAlpha?: InputMaybe<Scalars['Boolean']>;
  enableBeta?: InputMaybe<Scalars['Boolean']>;
  energyBarAppearance?: InputMaybe<Scalars['String']>;
  energyBarDisplayMode?: InputMaybe<Scalars['String']>;
  griffinRepPen?: InputMaybe<Scalars['Float']>;
  hideEnergyBar?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  imageCacheSelected?: InputMaybe<Scalars['String']>;
  imageSettingsOpened?: InputMaybe<Scalars['Boolean']>;
  imgCfgScale?: InputMaybe<Scalars['Int']>;
  imgHeight?: InputMaybe<Scalars['Int']>;
  imgSampler?: InputMaybe<Scalars['String']>;
  imgSeed?: InputMaybe<Scalars['String']>;
  imgSeedSafe?: InputMaybe<Scalars['Int']>;
  imgSteps?: InputMaybe<Scalars['Int']>;
  imgWidth?: InputMaybe<Scalars['Int']>;
  improveTheAi?: InputMaybe<Scalars['Boolean']>;
  isFullScreen?: InputMaybe<Scalars['Boolean']>;
  lowBandwidth?: InputMaybe<Scalars['Boolean']>;
  memoryLength?: InputMaybe<Scalars['String']>;
  mobileActionWindowSize?: InputMaybe<Scalars['Int']>;
  modelType?: InputMaybe<Scalars['String']>;
  nsfwGeneration?: InputMaybe<Scalars['Boolean']>;
  proofRead?: InputMaybe<Scalars['Boolean']>;
  rawModelOutput?: InputMaybe<Scalars['Boolean']>;
  safeMode?: InputMaybe<Scalars['Boolean']>;
  searchfilterFollowing?: InputMaybe<Scalars['Boolean']>;
  searchfilterPublished?: InputMaybe<Scalars['Boolean']>;
  searchfilterSafe?: InputMaybe<Scalars['Boolean']>;
  searchfilterThirdPerson?: InputMaybe<Scalars['Boolean']>;
  settingsDrawerOpened?: InputMaybe<Scalars['Boolean']>;
  shouldAutoplayAds?: InputMaybe<Scalars['Boolean']>;
  shouldShowJoinDiscordPopup?: InputMaybe<Scalars['Boolean']>;
  showCommands?: InputMaybe<Scalars['Boolean']>;
  showFeedback?: InputMaybe<Scalars['Boolean']>;
  showIconText?: InputMaybe<Scalars['Boolean']>;
  showImageSettings?: InputMaybe<Scalars['Boolean']>;
  showImproveTheAi?: InputMaybe<Scalars['Boolean']>;
  showMenu?: InputMaybe<Scalars['Boolean']>;
  showModes?: InputMaybe<Scalars['Boolean']>;
  showTips?: InputMaybe<Scalars['Boolean']>;
  storyLineBreak?: InputMaybe<Scalars['Boolean']>;
  storySummaryPrompt?: InputMaybe<Scalars['Boolean']>;
  temperature?: InputMaybe<Scalars['Float']>;
  textFont?: InputMaybe<Scalars['String']>;
  textLength?: InputMaybe<Scalars['Int']>;
  textSize?: InputMaybe<Scalars['Int']>;
  textSpeed?: InputMaybe<Scalars['Int']>;
  topK?: InputMaybe<Scalars['Int']>;
  topP?: InputMaybe<Scalars['Float']>;
  trainTheAi?: InputMaybe<Scalars['Boolean']>;
  unrestrictedInput?: InputMaybe<Scalars['Boolean']>;
  webActionWindowSize?: InputMaybe<Scalars['Int']>;
  worldInfoCardStyle?: InputMaybe<Scalars['String']>;
};

export type GenerateWorldInfoAttributeResponse = MutationResponse & {
  __typename: 'GenerateWorldInfoAttributeResponse';
  attribute?: Maybe<Attribute>;
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type GenerateWorldInfoResponse = MutationResponse & {
  __typename: 'GenerateWorldInfoResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
  worldInfo?: Maybe<WorldInfo>;
};

export type GetImageInput = {
  actionId?: InputMaybe<Scalars['String']>;
  publicId?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
};

export type GetImageResponse = MutationResponse & {
  __typename: 'GetImageResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  imageUrl?: Maybe<Scalars['String']>;
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type GetRewardResponse = MutationResponse & {
  __typename: 'GetRewardResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  reward?: Maybe<Reward>;
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type IncreaseActionsBalanceResponse = MutationResponse & {
  __typename: 'IncreaseActionsBalanceResponse';
  actionsBalance?: Maybe<ResourceBalance>;
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type JoinAdventureResponse = MutationResponse & {
  __typename: 'JoinAdventureResponse';
  adventure?: Maybe<Adventure>;
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type LeaveAdventureResponse = MutationResponse & {
  __typename: 'LeaveAdventureResponse';
  adventure?: Maybe<Adventure>;
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type MarkAsTypingResponse = MutationResponse & {
  __typename: 'MarkAsTypingResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type MassDeleteWorldInfoResponse = MutationResponse & {
  __typename: 'MassDeleteWorldInfoResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type MemoryInput = {
  authorsNote?: InputMaybe<Scalars['String']>;
  imageStyle?: InputMaybe<Scalars['String']>;
  memory?: InputMaybe<Scalars['String']>;
  publicId?: InputMaybe<Scalars['String']>;
};

export type Message = {
  __typename: 'Message';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  messageText: Scalars['String'];
  publicId: Scalars['String'];
  user?: Maybe<User>;
  userId: Scalars['String'];
};

export type ModelFeedbackResponse = MutationResponse & {
  __typename: 'ModelFeedbackResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type ModelOption = {
  __typename: 'ModelOption';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  isAvailable?: Maybe<Scalars['Boolean']>;
  modelAccessLevel?: Maybe<Scalars['String']>;
  modelInfoLink?: Maybe<Scalars['String']>;
  modelLogName?: Maybe<Scalars['String']>;
  modelName: Scalars['String'];
  modelSettings?: Maybe<Array<Scalars['String']>>;
  modelSize?: Maybe<Scalars['String']>;
  modelTitle?: Maybe<Scalars['String']>;
  modelVendor?: Maybe<Scalars['String']>;
  modelVersion?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename: 'Mutation';
  acceptCommunityGuidelines: AcceptCommunityGuidelinesResponse;
  addAction: AddActionResponse;
  addAdventure: AddAdventureResponse;
  addDeviceToken: AddDeviceTokenResponse;
  addFriendRequest: AddFriendRequestResponse;
  blockContentsUser: BlockContentsUserResponse;
  blockUser: BlockUserResponse;
  buyProduct: BuyProductResponse;
  cancel: CancelInputResponse;
  cancelFriendRequest: CancelFriendRequestResponse;
  changeEmail: ChangeEmailResponse;
  confirmFriendRequest: ConfirmFriendRequestResponse;
  createBlankWorldInfo: CreateBlanketWorldInfoResponse;
  createComment: CreateCommentResponse;
  createContentWorldInfo: CreateContentWorldInfoResponse;
  createDuplicateWI: CreateDuplicateWiResponse;
  createMessage: CreateMessageResponse;
  createScenario: CreateScenarioResponse;
  createScenarioOption: CreateScenarioOptionResponse;
  createWorld: CreateWorldResponse;
  createWorldInfo: CreateWorldInfoResponse;
  decideActionV2: DecideActionResponse;
  deleteAccount: DeleteAccountResponse;
  deleteAdventure: DeleteAdventureResponse;
  deleteComment: DeleteCommentResponse;
  deleteContentWI: DeleteContentWiResponse;
  deleteContentWorldInfo: DeleteContentWorldInfoResponse;
  deleteScenario: DeleteScenarioResponse;
  deleteWorld: DeleteWorldResponse;
  deleteWorldInformation: DeleteWorldInformationResponse;
  destroyAdventure: DestroyAdventureResponse;
  destroyScenario: DestroyScenarioResponse;
  destroyWorld: DestroyWorldResponse;
  duplicateAdventure: DuplicateAdventureResponse;
  duplicateScenario: DuplicateScenarioResponse;
  editAction: EditActionResponse;
  emptyTrash: EmptyTrashResponse;
  followUser: FollowUserResponse;
  generateWorldInfo: GenerateWorldInfoResponse;
  generateWorldInfoAttribute: GenerateWorldInfoAttributeResponse;
  getImage: GetImageResponse;
  getReward: GetRewardResponse;
  increaseActionsBalance: IncreaseActionsBalanceResponse;
  joinAdventure: JoinAdventureResponse;
  leaveAdventure: LeaveAdventureResponse;
  markAsTyping: MarkAsTypingResponse;
  massDeleteWorldInfo: MassDeleteWorldInfoResponse;
  modelFeedback: ModelFeedbackResponse;
  noEmptyTypes?: Maybe<Scalars['Boolean']>;
  optIn: OptInResponse;
  playWorld: PlayWorldResponse;
  publishAdventure: PublishAdventureResponse;
  publishScenario: PublishScenarioResponse;
  publishWorld: PublishWorldResponse;
  redoAction: RedoActionResponse;
  relistAdventure: RelistAdventureResponse;
  relistScenario: RelistScenarioResponse;
  relistWorld: RelistWorldResponse;
  removeImage: RemoveImageResponse;
  removePlayer: RemovePlayerResponse;
  reportAI: ReportAiResponse;
  reportContent: ReportContentResponse;
  reportContentUser: ReportContentUserResponse;
  resetGameSettings: RestGameSettingsResponse;
  restoreAction: RestoreActionResponse;
  restoreAdventure: RestoreAdventureResponse;
  restoreScenario: RestoreScenarioResponse;
  restoreWorld: RestoreWorldResponse;
  retryAction: RetryActionResponse;
  saveContent: SaveContentResponse;
  saveGameSettings: SaveGameSettingsResponse;
  sawMessages: SawMessagesResponse;
  sawNotifications: SawNotificationsResponse;
  scalesTip: ScaleToTipResponse;
  sendExperimentEvent: SendExperimentEventResponse;
  sendUserEvent: SendUserEventResponse;
  sendVerifyEmail: SendVerifyEmailResponse;
  steamOrder: SteamOrderResponse;
  steamOrderFinalize: SteamOrderFinalizeResponse;
  steamUpgrade: User;
  submitCreatorApplication: SubmitCreatorApplicationResponse;
  testCustomFunction: TestCustomFunctionResponse;
  tradeResources: TradeResourcesResponse;
  unblockUser: UnblockUserResponse;
  undoAction: UndoActionResponse;
  undoToAction: UndoToActionResponse;
  unfollowUser: UnfollowUserResponse;
  unfriendUser: UnfriendUserResponse;
  unlistAdventure: UnlistAdventureResponse;
  unlistScenario: UnlistScenarioResponse;
  unlistWorld: UnlistWorldResponse;
  unpublishAdventure: UnpublishAdventureResponse;
  unpublishScenario: UnpublishScenarioResponse;
  unpublishWorld: UnpublishWorldResponse;
  updateAdventure: UpdateAdventureResponse;
  updateAdventureImage: UpdateAdventureImageResponse;
  updateAdventureMemory: UpdateAdventureMemoryResponse;
  updateAvatar: UpdateAvatarResponse;
  updateComment: UpdateCommentResponse;
  updateContentWorldInfo: UpdateContentWorldInfoResponse;
  updatePlayer: UpdatePlayerResponse;
  updateProfile: UpdateProfileResponse;
  updateScenario: UpdateScenarioResponse;
  updateScenarioImage: UpdateScenarioImageResponse;
  updateScenarioScripts: UpdateScenarioScriptsResponse;
  updateUser: UpdateUserResponse;
  updateWorld: UpdateWorldResponse;
  updateWorldInformation: UpdateWorldInformationResponse;
  voteContent: VoteContentResponse;
};


export type MutationAcceptCommunityGuidelinesArgs = {
  acceptCommunityGuidelines?: InputMaybe<Scalars['Boolean']>;
};


export type MutationAddActionArgs = {
  input?: InputMaybe<ActionInput>;
};


export type MutationAddAdventureArgs = {
  authorsNote?: InputMaybe<Scalars['String']>;
  memory?: InputMaybe<Scalars['String']>;
  prompt?: InputMaybe<Scalars['String']>;
  scenarioId?: InputMaybe<Scalars['String']>;
};


export type MutationAddDeviceTokenArgs = {
  platform?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};


export type MutationAddFriendRequestArgs = {
  targetUserId?: InputMaybe<Scalars['String']>;
};


export type MutationBlockContentsUserArgs = {
  contentPublicId?: InputMaybe<Scalars['String']>;
  contentType?: InputMaybe<Scalars['String']>;
};


export type MutationBlockUserArgs = {
  targetUserId?: InputMaybe<Scalars['String']>;
};


export type MutationBuyProductArgs = {
  cost?: InputMaybe<Scalars['Int']>;
  productId?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
};


export type MutationCancelArgs = {
  input?: InputMaybe<CancelInput>;
};


export type MutationCancelFriendRequestArgs = {
  targetUserId?: InputMaybe<Scalars['String']>;
};


export type MutationChangeEmailArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationConfirmFriendRequestArgs = {
  sourceUserId?: InputMaybe<Scalars['String']>;
};


export type MutationCreateBlankWorldInfoArgs = {
  input?: InputMaybe<WorldInfoGenerationInput>;
};


export type MutationCreateCommentArgs = {
  input?: InputMaybe<CommentInput>;
};


export type MutationCreateContentWorldInfoArgs = {
  input?: InputMaybe<ContentWorldInfoInput>;
};


export type MutationCreateDuplicateWiArgs = {
  contentPublicId?: InputMaybe<Scalars['String']>;
  contentType?: InputMaybe<Scalars['String']>;
  oldWorldInfo?: InputMaybe<WorldInformationInput>;
  worldInfo?: InputMaybe<WorldInformationInput>;
};


export type MutationCreateMessageArgs = {
  adventurePublicId?: InputMaybe<Scalars['String']>;
  messageText?: InputMaybe<Scalars['String']>;
};


export type MutationCreateScenarioOptionArgs = {
  publicId?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};


export type MutationCreateWorldInfoArgs = {
  contentPublicId?: InputMaybe<Scalars['String']>;
  contentType?: InputMaybe<Scalars['String']>;
  worldInfoWithIds?: InputMaybe<Scalars['JSONObject']>;
  worldInfoWithNoIds?: InputMaybe<Scalars['JSONObject']>;
};


export type MutationDecideActionV2Args = {
  input?: InputMaybe<ActionDecisionInput>;
};


export type MutationDeleteAdventureArgs = {
  publicId?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteCommentArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteContentWiArgs = {
  input?: InputMaybe<ContentWorldInfoInput>;
};


export type MutationDeleteContentWorldInfoArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteScenarioArgs = {
  publicId?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteWorldArgs = {
  publicId?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteWorldInformationArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationDestroyAdventureArgs = {
  publicId?: InputMaybe<Scalars['String']>;
};


export type MutationDestroyScenarioArgs = {
  publicId?: InputMaybe<Scalars['String']>;
};


export type MutationDestroyWorldArgs = {
  publicId?: InputMaybe<Scalars['String']>;
};


export type MutationDuplicateAdventureArgs = {
  publicId?: InputMaybe<Scalars['String']>;
};


export type MutationDuplicateScenarioArgs = {
  publicId?: InputMaybe<Scalars['String']>;
};


export type MutationEditActionArgs = {
  input?: InputMaybe<AlterInput>;
};


export type MutationFollowUserArgs = {
  targetUserId?: InputMaybe<Scalars['String']>;
};


export type MutationGenerateWorldInfoArgs = {
  input?: InputMaybe<WorldInfoGenerationInput>;
};


export type MutationGenerateWorldInfoAttributeArgs = {
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  worldInfo?: InputMaybe<Scalars['JSONObject']>;
};


export type MutationGetImageArgs = {
  input?: InputMaybe<GetImageInput>;
};


export type MutationJoinAdventureArgs = {
  playPublicId?: InputMaybe<Scalars['String']>;
  shortCode?: InputMaybe<Scalars['String']>;
};


export type MutationLeaveAdventureArgs = {
  playPublicId?: InputMaybe<Scalars['String']>;
};


export type MutationMarkAsTypingArgs = {
  publicId?: InputMaybe<Scalars['String']>;
};


export type MutationMassDeleteWorldInfoArgs = {
  ids?: InputMaybe<Scalars['JSONObject']>;
};


export type MutationModelFeedbackArgs = {
  adventureId?: InputMaybe<Scalars['String']>;
  feedbackData?: InputMaybe<Scalars['JSONObject']>;
};


export type MutationPlayWorldArgs = {
  input?: InputMaybe<PlayWorldInput>;
};


export type MutationPublishAdventureArgs = {
  publicId?: InputMaybe<Scalars['String']>;
};


export type MutationPublishScenarioArgs = {
  publicId?: InputMaybe<Scalars['String']>;
};


export type MutationPublishWorldArgs = {
  publicId?: InputMaybe<Scalars['String']>;
};


export type MutationRedoActionArgs = {
  input?: InputMaybe<AlterInput>;
};


export type MutationRelistAdventureArgs = {
  publicId?: InputMaybe<Scalars['String']>;
};


export type MutationRelistScenarioArgs = {
  publicId?: InputMaybe<Scalars['String']>;
};


export type MutationRelistWorldArgs = {
  publicId?: InputMaybe<Scalars['String']>;
};


export type MutationRemoveImageArgs = {
  input?: InputMaybe<AlterInput>;
};


export type MutationRemovePlayerArgs = {
  playerId?: InputMaybe<Scalars['String']>;
  publicId?: InputMaybe<Scalars['String']>;
};


export type MutationReportAiArgs = {
  input?: InputMaybe<ReportAiInput>;
};


export type MutationReportContentArgs = {
  input?: InputMaybe<ReportContentInput>;
};


export type MutationReportContentUserArgs = {
  input?: InputMaybe<ReportContentInput>;
};


export type MutationRestoreActionArgs = {
  input?: InputMaybe<AlterInput>;
};


export type MutationRestoreAdventureArgs = {
  publicId?: InputMaybe<Scalars['String']>;
};


export type MutationRestoreScenarioArgs = {
  publicId?: InputMaybe<Scalars['String']>;
};


export type MutationRestoreWorldArgs = {
  publicId?: InputMaybe<Scalars['String']>;
};


export type MutationRetryActionArgs = {
  input?: InputMaybe<AlterInput>;
};


export type MutationSaveContentArgs = {
  input?: InputMaybe<ContentResponseInput>;
};


export type MutationSaveGameSettingsArgs = {
  input?: InputMaybe<GameSettingsInput>;
};


export type MutationSawMessagesArgs = {
  publicId?: InputMaybe<Scalars['String']>;
};


export type MutationScalesTipArgs = {
  quantity?: InputMaybe<Scalars['Int']>;
  reason?: InputMaybe<Scalars['String']>;
  reasonId?: InputMaybe<Scalars['String']>;
  toUserId?: InputMaybe<Scalars['String']>;
};


export type MutationSendExperimentEventArgs = {
  input?: InputMaybe<EventInput>;
};


export type MutationSendUserEventArgs = {
  input?: InputMaybe<EventInput>;
};


export type MutationSteamOrderArgs = {
  periodName?: InputMaybe<Scalars['String']>;
  planName?: InputMaybe<Scalars['String']>;
  priceId: Scalars['String'];
};


export type MutationSteamOrderFinalizeArgs = {
  orderId: Scalars['String'];
};


export type MutationSubmitCreatorApplicationArgs = {
  input?: InputMaybe<CreatorInput>;
};


export type MutationTestCustomFunctionArgs = {
  func?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<Scalars['JSONObject']>;
  sharedLibrary?: InputMaybe<Scalars['String']>;
};


export type MutationTradeResourcesArgs = {
  input: TradeResourcesInput;
};


export type MutationUnblockUserArgs = {
  targetUserId?: InputMaybe<Scalars['String']>;
};


export type MutationUndoActionArgs = {
  input?: InputMaybe<AlterInput>;
};


export type MutationUndoToActionArgs = {
  input?: InputMaybe<AlterInput>;
};


export type MutationUnfollowUserArgs = {
  targetUserId?: InputMaybe<Scalars['String']>;
};


export type MutationUnfriendUserArgs = {
  targetUserId?: InputMaybe<Scalars['String']>;
};


export type MutationUnlistAdventureArgs = {
  publicId?: InputMaybe<Scalars['String']>;
};


export type MutationUnlistScenarioArgs = {
  publicId?: InputMaybe<Scalars['String']>;
};


export type MutationUnlistWorldArgs = {
  publicId?: InputMaybe<Scalars['String']>;
};


export type MutationUnpublishAdventureArgs = {
  publicId?: InputMaybe<Scalars['String']>;
};


export type MutationUnpublishScenarioArgs = {
  publicId?: InputMaybe<Scalars['String']>;
};


export type MutationUnpublishWorldArgs = {
  publicId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateAdventureArgs = {
  input?: InputMaybe<AdventureInput>;
};


export type MutationUpdateAdventureImageArgs = {
  image?: InputMaybe<Scalars['String']>;
  publicId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateAdventureMemoryArgs = {
  input?: InputMaybe<MemoryInput>;
};


export type MutationUpdateAvatarArgs = {
  shortId?: InputMaybe<Scalars['String']>;
  thumbImageUrl?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateCommentArgs = {
  input?: InputMaybe<CommentInput>;
};


export type MutationUpdateContentWorldInfoArgs = {
  input?: InputMaybe<WorldInfoUpdateInput>;
};


export type MutationUpdatePlayerArgs = {
  input?: InputMaybe<PlayerInput>;
};


export type MutationUpdateProfileArgs = {
  input?: InputMaybe<ProfileInput>;
};


export type MutationUpdateScenarioArgs = {
  input?: InputMaybe<ScenarioInput>;
};


export type MutationUpdateScenarioImageArgs = {
  image?: InputMaybe<Scalars['String']>;
  publicId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateScenarioScriptsArgs = {
  gameCode?: InputMaybe<Scalars['JSONObject']>;
  publicId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateUserArgs = {
  input?: InputMaybe<UserInput>;
};


export type MutationUpdateWorldArgs = {
  input?: InputMaybe<UpdateWorldInput>;
};


export type MutationUpdateWorldInformationArgs = {
  input?: InputMaybe<WorldInformationInput>;
};


export type MutationVoteContentArgs = {
  input?: InputMaybe<ContentResponseInput>;
};

export type MutationResponse = {
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type Notification = {
  __typename: 'Notification';
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  fromUser?: Maybe<User>;
  fromUserId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  params?: Maybe<Scalars['JSONObject']>;
  screen: Scalars['String'];
  title: Scalars['String'];
};

export type OptInResponse = MutationResponse & {
  __typename: 'OptInResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type PaymentProductPrice = {
  __typename: 'PaymentProductPrice';
  awardCredits: Scalars['Int'];
  awardVisualCredits: Scalars['Int'];
  id: Scalars['ID'];
  periodMonths: Scalars['Int'];
  planName: Scalars['String'];
  pricePerMonth: Scalars['Float'];
  pricePerUnit: Scalars['Float'];
  providerPriceId: Scalars['String'];
  providerPriceIdTest: Scalars['String'];
  providerPriceKey: Scalars['String'];
};

export type PlayWorldInput = {
  allowComments?: InputMaybe<Scalars['Boolean']>;
  charClass?: InputMaybe<Scalars['JSONObject']>;
  faction?: InputMaybe<Scalars['JSONObject']>;
  gender?: InputMaybe<Scalars['String']>;
  generateEvents?: InputMaybe<Scalars['Boolean']>;
  genericWorldInfo?: InputMaybe<Scalars['JSONObject']>;
  location?: InputMaybe<Scalars['JSONObject']>;
  name?: InputMaybe<Scalars['String']>;
  publicId?: InputMaybe<Scalars['String']>;
  race?: InputMaybe<Scalars['JSONObject']>;
  selectedClasses?: InputMaybe<Scalars['JSONObject']>;
  selectedFactions?: InputMaybe<Scalars['JSONObject']>;
  selectedLocations?: InputMaybe<Scalars['JSONObject']>;
  selectedRaces?: InputMaybe<Scalars['JSONObject']>;
  thirdPerson?: InputMaybe<Scalars['Boolean']>;
};

export type PlayWorldResponse = MutationResponse & {
  __typename: 'PlayWorldResponse';
  adventure?: Maybe<Adventure>;
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type Player = {
  __typename: 'Player';
  characterName?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  isTyping: Scalars['Boolean'];
  lastTypingAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
  userId: Scalars['String'];
};

export type PlayerInput = {
  characterName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type Premium = {
  __typename: 'Premium';
  accessUntil?: Maybe<Scalars['DateTime']>;
  activeUntil?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  platform: Scalars['String'];
  status: Scalars['String'];
  subscriptionId?: Maybe<Scalars['ID']>;
  userId: Scalars['ID'];
};

export type PremiumSubscription = {
  __typename: 'PremiumSubscription';
  endedAt?: Maybe<Scalars['DateTime']>;
  frequency?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  price?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  sourcePlanId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  tier?: Maybe<Scalars['Int']>;
};

export type Product = {
  __typename: 'Product';
  cost: Scalars['Int'];
  fileName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type: Scalars['String'];
};

export type ProductUpdate = {
  __typename: 'ProductUpdate';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type Profile = {
  __typename: 'Profile';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  shortId: Scalars['String'];
  thumbImageUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ProfileInput = {
  bio?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type PublishAdventureResponse = MutationResponse & {
  __typename: 'PublishAdventureResponse';
  adventure?: Maybe<Adventure>;
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type PublishScenarioResponse = MutationResponse & {
  __typename: 'PublishScenarioResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  scenario?: Maybe<Scenario>;
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type PublishWorldResponse = MutationResponse & {
  __typename: 'PublishWorldResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
  world?: Maybe<World>;
};

export type PurchasableProductsResponse = MutationResponse & {
  __typename: 'PurchasableProductsResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  products?: Maybe<Array<Maybe<Product>>>;
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type Query = {
  __typename: 'Query';
  adventure: Adventure;
  allContentWorldInfo: Array<ContentWorldInformation>;
  availableProducts: BuyProductResponse;
  avatars: Array<Content>;
  comments: Commentable;
  creditPrices: Array<PaymentProductPrice>;
  currentWorldInfoCount: Scalars['Int'];
  getAdventureActions: Array<Action>;
  getUserFacingNotes: UserNotes;
  modelOptions: Array<ModelOption>;
  noEmptyTypes?: Maybe<Scalars['Boolean']>;
  productUpdates: Array<ProductUpdate>;
  profileSearch?: Maybe<Array<Searchable>>;
  purchasableProducts: PurchasableProductsResponse;
  recentlyPlayed: Array<Searchable>;
  scenario: Scenario;
  search?: Maybe<Array<Searchable>>;
  subscriptionPrices: Array<PaymentProductPrice>;
  user: User;
  world: World;
  worldInfoType: Array<WorldInformation>;
};


export type QueryAdventureArgs = {
  publicId?: InputMaybe<Scalars['String']>;
};


export type QueryAllContentWorldInfoArgs = {
  input?: InputMaybe<ContentWorldInfoInput>;
};


export type QueryAvailableProductsArgs = {
  type?: InputMaybe<Scalars['String']>;
};


export type QueryCommentsArgs = {
  contentType?: InputMaybe<Scalars['String']>;
  publicId?: InputMaybe<Scalars['String']>;
};


export type QueryCreditPricesArgs = {
  providerName: Scalars['String'];
};


export type QueryCurrentWorldInfoCountArgs = {
  contentPublicId?: InputMaybe<Scalars['String']>;
  contentType?: InputMaybe<Scalars['String']>;
  filterUnused?: InputMaybe<Scalars['Boolean']>;
  match?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};


export type QueryGetAdventureActionsArgs = {
  adventureId?: InputMaybe<Scalars['String']>;
};


export type QueryGetUserFacingNotesArgs = {
  contentPublicId?: InputMaybe<Scalars['String']>;
  contentType?: InputMaybe<Scalars['String']>;
};


export type QueryProfileSearchArgs = {
  input?: InputMaybe<SearchInput>;
  username?: InputMaybe<Scalars['String']>;
};


export type QueryPurchasableProductsArgs = {
  type?: InputMaybe<Scalars['String']>;
};


export type QueryRecentlyPlayedArgs = {
  interval?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryScenarioArgs = {
  publicId?: InputMaybe<Scalars['String']>;
};


export type QuerySearchArgs = {
  input?: InputMaybe<SearchInput>;
};


export type QuerySubscriptionPricesArgs = {
  providerName: Scalars['String'];
};


export type QueryUserArgs = {
  username?: InputMaybe<Scalars['String']>;
};


export type QueryWorldArgs = {
  publicId?: InputMaybe<Scalars['String']>;
};


export type QueryWorldInfoTypeArgs = {
  contentPublicId?: InputMaybe<Scalars['String']>;
  contentType?: InputMaybe<Scalars['String']>;
  filterUnused?: InputMaybe<Scalars['Boolean']>;
  match?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
};

export type RedoActionResponse = MutationResponse & {
  __typename: 'RedoActionResponse';
  actionResponse?: Maybe<ActionResponse>;
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type RelistAdventureResponse = MutationResponse & {
  __typename: 'RelistAdventureResponse';
  adventure?: Maybe<Adventure>;
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type RelistScenarioResponse = MutationResponse & {
  __typename: 'RelistScenarioResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  scenario?: Maybe<Scenario>;
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type RelistWorldResponse = MutationResponse & {
  __typename: 'RelistWorldResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
  world?: Maybe<World>;
};

export type RemoveImageResponse = MutationResponse & {
  __typename: 'RemoveImageResponse';
  actionResponse?: Maybe<ActionResponse>;
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type RemovePlayerResponse = MutationResponse & {
  __typename: 'RemovePlayerResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  player?: Maybe<Player>;
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type ReportAiResponse = MutationResponse & {
  __typename: 'ReportAIResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type ReportAiInput = {
  action?: InputMaybe<Scalars['JSONObject']>;
  content?: InputMaybe<Scalars['JSONObject']>;
  id?: InputMaybe<Scalars['ID']>;
  other?: InputMaybe<Scalars['String']>;
  output?: InputMaybe<Scalars['String']>;
  reasons?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  revised?: InputMaybe<Scalars['String']>;
};

export type ReportContentInput = {
  contentPublicId?: InputMaybe<Scalars['String']>;
  contentType?: InputMaybe<Scalars['String']>;
  labels?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notes?: InputMaybe<Scalars['String']>;
};

export type ReportContentResponse = MutationResponse & {
  __typename: 'ReportContentResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  reportResponses?: Maybe<Array<Maybe<ReportResponse>>>;
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type ReportContentUserResponse = MutationResponse & {
  __typename: 'ReportContentUserResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  reportResponses?: Maybe<Array<Maybe<ReportResponse>>>;
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type ReportResponse = {
  __typename: 'ReportResponse';
  count: Scalars['Int'];
  label: Scalars['String'];
};

export type ReportUserInput = {
  labels?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notes?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type Resource = {
  __typename: 'Resource';
  currentBalance: Scalars['Int'];
  id: Scalars['Int'];
};

export type ResourceBalance = {
  __typename: 'ResourceBalance';
  currentBalance: Scalars['String'];
  id: Scalars['ID'];
};

export type RestGameSettingsResponse = MutationResponse & {
  __typename: 'RestGameSettingsResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type RestoreActionResponse = MutationResponse & {
  __typename: 'RestoreActionResponse';
  actionResponse?: Maybe<ActionResponse>;
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type RestoreAdventureResponse = MutationResponse & {
  __typename: 'RestoreAdventureResponse';
  adventure?: Maybe<Adventure>;
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type RestoreScenarioResponse = MutationResponse & {
  __typename: 'RestoreScenarioResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  scenario?: Maybe<Scenario>;
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type RestoreWorldResponse = MutationResponse & {
  __typename: 'RestoreWorldResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
  world?: Maybe<World>;
};

export type RetryActionResponse = MutationResponse & {
  __typename: 'RetryActionResponse';
  actionResponse?: Maybe<ActionResponse>;
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type Reward = {
  __typename: 'Reward';
  id: Scalars['ID'];
  index: Scalars['Int'];
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['String']>;
  quantity: Scalars['String'];
};

export type RewardCalendar = {
  __typename: 'RewardCalendar';
  id: Scalars['ID'];
  lastRewardIndex?: Maybe<Scalars['Int']>;
  rewards: Array<Reward>;
  title: Scalars['String'];
};

export type Savable = {
  id: Scalars['ID'];
  isSaved: Scalars['Boolean'];
  publicId: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  totalSaves: Scalars['Int'];
};

export type SaveContentResponse = MutationResponse & {
  __typename: 'SaveContentResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  content?: Maybe<Savable>;
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type SaveGameSettingsResponse = MutationResponse & {
  __typename: 'SaveGameSettingsResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type SawMessagesResponse = MutationResponse & {
  __typename: 'SawMessagesResponse';
  adventure?: Maybe<Adventure>;
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type SawNotificationsResponse = MutationResponse & {
  __typename: 'SawNotificationsResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type ScaleToTipResponse = MutationResponse & {
  __typename: 'ScaleToTipResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type Scenario = Commentable & Savable & Searchable & Votable & {
  __typename: 'Scenario';
  adventureCount: Scalars['Int'];
  adventuresPlayed: Scalars['Int'];
  allowComments: Scalars['Boolean'];
  authorsNote?: Maybe<Scalars['String']>;
  bannedWords?: Maybe<Array<Scalars['String']>>;
  blockedAt?: Maybe<Scalars['DateTime']>;
  comments: Array<Comment>;
  contentType: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  featured: Scalars['Boolean'];
  gameCode?: Maybe<Scalars['JSONObject']>;
  gameCodeOnInput?: Maybe<Scalars['String']>;
  gameCodeOnModelContext?: Maybe<Scalars['String']>;
  gameCodeOnOutput?: Maybe<Scalars['String']>;
  gameCodeSharedLibrary?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  isOwner: Scalars['Boolean'];
  isSaved: Scalars['Boolean'];
  lastModelInput?: Maybe<Scalars['String']>;
  memory?: Maybe<Scalars['String']>;
  nsfw: Scalars['Boolean'];
  nsfwModeratorTag?: Maybe<Scalars['Boolean']>;
  options: Array<Scenario>;
  prompt?: Maybe<Scalars['String']>;
  publicId: Scalars['String'];
  published: Scalars['Boolean'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  recentScriptLogs?: Maybe<Array<Scalars['String']>>;
  saveCount: Scalars['Int'];
  showComments: Scalars['Boolean'];
  tags?: Maybe<Scalars['JSONObject']>;
  thirdPerson: Scalars['Boolean'];
  title?: Maybe<Scalars['String']>;
  totalComments: Scalars['Int'];
  totalSaves: Scalars['Int'];
  totalUpvotes: Scalars['Int'];
  unlisted: Scalars['Boolean'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: User;
  userId: Scalars['String'];
  userVote?: Maybe<Scalars['String']>;
  voteCount: Scalars['Int'];
};


export type ScenarioCommentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type ScenarioInput = {
  allowComments?: InputMaybe<Scalars['Boolean']>;
  authorsNote?: InputMaybe<Scalars['String']>;
  bannedWords?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description?: InputMaybe<Scalars['String']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  gameCode?: InputMaybe<Scalars['JSONObject']>;
  memory?: InputMaybe<Scalars['String']>;
  nsfw?: InputMaybe<Scalars['Boolean']>;
  prompt?: InputMaybe<Scalars['String']>;
  publicId?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['JSONObject']>;
  thirdPerson?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type SearchInput = {
  contentType?: InputMaybe<Scalars['String']>;
  following?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  parentContentId?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['Boolean']>;
  safe?: InputMaybe<Scalars['Boolean']>;
  saved?: InputMaybe<Scalars['Boolean']>;
  screen?: InputMaybe<Scalars['String']>;
  searchTerm?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
  thirdPerson?: InputMaybe<Scalars['Boolean']>;
  timeRange?: InputMaybe<Scalars['String']>;
  trash?: InputMaybe<Scalars['Boolean']>;
};

export type Searchable = {
  allowComments: Scalars['Boolean'];
  blockedAt?: Maybe<Scalars['DateTime']>;
  contentType: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  featured: Scalars['Boolean'];
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  isOwner: Scalars['Boolean'];
  isSaved: Scalars['Boolean'];
  publicId: Scalars['String'];
  published: Scalars['Boolean'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  showComments: Scalars['Boolean'];
  tags?: Maybe<Scalars['JSONObject']>;
  thirdPerson: Scalars['Boolean'];
  title?: Maybe<Scalars['String']>;
  totalComments: Scalars['Int'];
  totalSaves: Scalars['Int'];
  totalUpvotes: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: User;
  userId: Scalars['String'];
  userVote?: Maybe<Scalars['String']>;
};

export type SendExperimentEventResponse = MutationResponse & {
  __typename: 'SendExperimentEventResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type SendUserEventResponse = MutationResponse & {
  __typename: 'SendUserEventResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type SendVerifyEmailResponse = MutationResponse & {
  __typename: 'SendVerifyEmailResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type SteamAgreement = {
  __typename: 'SteamAgreement';
  agreementId?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  failedAttempts?: Maybe<Scalars['Int']>;
  frequency?: Maybe<Scalars['String']>;
  itemId?: Maybe<Scalars['String']>;
  lastAmount?: Maybe<Scalars['String']>;
  lastPayment?: Maybe<Scalars['DateTime']>;
  nextPayment?: Maybe<Scalars['DateTime']>;
  outstanding?: Maybe<Scalars['String']>;
  period?: Maybe<Scalars['String']>;
  recurringAmt?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Scalars['String']>;
  timeCreated?: Maybe<Scalars['DateTime']>;
};

export type SteamOrderFinalizeResponse = {
  __typename: 'SteamOrderFinalizeResponse';
  awardCredits?: Maybe<Scalars['Int']>;
  code: Scalars['Int'];
  message: Scalars['String'];
  priceName?: Maybe<Scalars['String']>;
  productName?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type SteamOrderResponse = {
  __typename: 'SteamOrderResponse';
  agreements?: Maybe<Array<Maybe<SteamAgreement>>>;
  code: Scalars['Int'];
  message: Scalars['String'];
  orderId?: Maybe<Scalars['String']>;
  steamUrl?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
  transId?: Maybe<Scalars['String']>;
};

export type SubmitCreatorApplicationResponse = MutationResponse & {
  __typename: 'SubmitCreatorApplicationResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  creator?: Maybe<Creator>;
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type SubscribePayPalInput = {
  subscription?: InputMaybe<Scalars['String']>;
};

export type SubscribeStripeInput = {
  coupon?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename: 'Subscription';
  actionAdded: Action;
  actionRestored: Action;
  actionUpdated: Action;
  actionsUndone: Array<Action>;
  adventureUpdated: Adventure;
  commentAdded: Comment;
  commentUpdated: Comment;
  messageAdded: Message;
  messageUpdated: Message;
  noEmptyTypes?: Maybe<Scalars['Boolean']>;
  notificationAdded: Notification;
  userUpdated: User;
};


export type SubscriptionActionAddedArgs = {
  adventureId?: InputMaybe<Scalars['String']>;
};


export type SubscriptionActionRestoredArgs = {
  adventureId?: InputMaybe<Scalars['String']>;
};


export type SubscriptionActionUpdatedArgs = {
  adventureId?: InputMaybe<Scalars['String']>;
};


export type SubscriptionActionsUndoneArgs = {
  adventureId?: InputMaybe<Scalars['String']>;
};


export type SubscriptionAdventureUpdatedArgs = {
  publicId?: InputMaybe<Scalars['String']>;
};


export type SubscriptionCommentAddedArgs = {
  contentType?: InputMaybe<Scalars['String']>;
  publicId?: InputMaybe<Scalars['String']>;
};


export type SubscriptionCommentUpdatedArgs = {
  contentType?: InputMaybe<Scalars['String']>;
  publicId?: InputMaybe<Scalars['String']>;
};


export type SubscriptionMessageAddedArgs = {
  publicId?: InputMaybe<Scalars['String']>;
  targetType?: InputMaybe<Scalars['String']>;
};


export type SubscriptionMessageUpdatedArgs = {
  publicId?: InputMaybe<Scalars['String']>;
  targetType?: InputMaybe<Scalars['String']>;
};

export type SummaryInput = {
  publicId?: InputMaybe<Scalars['String']>;
  selectedSummary?: InputMaybe<Scalars['JSONObject']>;
};

export type TestCustomFunctionResponse = MutationResponse & {
  __typename: 'TestCustomFunctionResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  output?: Maybe<Scalars['JSONObject']>;
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type TradeResourcesInput = {
  fromResource: Scalars['String'];
  quantity: Scalars['Int'];
  toResource: Scalars['String'];
};

export type TradeResourcesResponse = {
  __typename: 'TradeResourcesResponse';
  actionsBalance: ResourceBalance;
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  creditsBalance: ResourceBalance;
  goldBalance: ResourceBalance;
  /** Human-readable message for the UI */
  message: Scalars['String'];
  scalesBalance: ResourceBalance;
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type Transfer = {
  __typename: 'Transfer';
  createdAt: Scalars['DateTime'];
  fromUser?: Maybe<User>;
  fromUserId: Scalars['String'];
  id: Scalars['ID'];
  product?: Maybe<Product>;
  quantity: Scalars['Int'];
  reason?: Maybe<Scalars['String']>;
  sourceTransferId?: Maybe<Scalars['String']>;
  toUser?: Maybe<User>;
  toUserId: Scalars['String'];
};

export type UnblockUserResponse = MutationResponse & {
  __typename: 'UnblockUserResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type UndoActionResponse = MutationResponse & {
  __typename: 'UndoActionResponse';
  actionResponse?: Maybe<ActionResponse>;
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type UndoToActionResponse = MutationResponse & {
  __typename: 'UndoToActionResponse';
  actionResponse?: Maybe<ActionResponse>;
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type UnfollowUserResponse = MutationResponse & {
  __typename: 'UnfollowUserResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  currentUser?: Maybe<User>;
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
  targetUser?: Maybe<User>;
};

export type UnfriendUserResponse = MutationResponse & {
  __typename: 'UnfriendUserResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type UnlistAdventureResponse = MutationResponse & {
  __typename: 'UnlistAdventureResponse';
  adventure?: Maybe<Adventure>;
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type UnlistScenarioResponse = MutationResponse & {
  __typename: 'UnlistScenarioResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  scenario?: Maybe<Scenario>;
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type UnlistWorldResponse = MutationResponse & {
  __typename: 'UnlistWorldResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
  world?: Maybe<World>;
};

export type UnpublishAdventureResponse = MutationResponse & {
  __typename: 'UnpublishAdventureResponse';
  adventure?: Maybe<Adventure>;
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type UnpublishScenarioResponse = MutationResponse & {
  __typename: 'UnpublishScenarioResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  scenario?: Maybe<Scenario>;
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type UnpublishWorldResponse = MutationResponse & {
  __typename: 'UnpublishWorldResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
  world?: Maybe<World>;
};

export type UpdateAdventureImageResponse = MutationResponse & {
  __typename: 'UpdateAdventureImageResponse';
  adventure?: Maybe<Adventure>;
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type UpdateAdventureMemoryResponse = MutationResponse & {
  __typename: 'UpdateAdventureMemoryResponse';
  adventure?: Maybe<Adventure>;
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type UpdateAdventureResponse = MutationResponse & {
  __typename: 'UpdateAdventureResponse';
  adventure?: Maybe<Adventure>;
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type UpdateAvatarResponse = MutationResponse & {
  __typename: 'UpdateAvatarResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  profile?: Maybe<Profile>;
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type UpdateCommentResponse = MutationResponse & {
  __typename: 'UpdateCommentResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  comment?: Maybe<Comment>;
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type UpdateContentWorldInfoResponse = MutationResponse & {
  __typename: 'UpdateContentWorldInfoResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  contentWorldInformation?: Maybe<ContentWorldInformation>;
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type UpdatePlayerResponse = MutationResponse & {
  __typename: 'UpdatePlayerResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  player?: Maybe<Player>;
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type UpdateProfileResponse = MutationResponse & {
  __typename: 'UpdateProfileResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  profile?: Maybe<Profile>;
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type UpdateScenarioImageResponse = MutationResponse & {
  __typename: 'UpdateScenarioImageResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  scenario?: Maybe<Scenario>;
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type UpdateScenarioResponse = MutationResponse & {
  __typename: 'UpdateScenarioResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  scenario?: Maybe<Scenario>;
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type UpdateScenarioScriptsResponse = MutationResponse & {
  __typename: 'UpdateScenarioScriptsResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  scenario?: Maybe<Scenario>;
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type UpdateStripeDefault = {
  ccToken?: InputMaybe<Scalars['String']>;
};

export type UpdateUserResponse = MutationResponse & {
  __typename: 'UpdateUserResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type UpdateWorldInformationResponse = MutationResponse & {
  __typename: 'UpdateWorldInformationResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
  worldInformation?: Maybe<Array<Maybe<WorldInformation>>>;
};

export type UpdateWorldInput = {
  allowComments?: InputMaybe<Scalars['Boolean']>;
  bannedWords?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  classIds?: InputMaybe<Scalars['JSONObject']>;
  classToAdd?: InputMaybe<Scalars['JSONObject']>;
  description?: InputMaybe<Scalars['String']>;
  factionIds?: InputMaybe<Scalars['JSONObject']>;
  factionToAdd?: InputMaybe<Scalars['JSONObject']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  genre?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  locationIds?: InputMaybe<Scalars['JSONObject']>;
  locationToAdd?: InputMaybe<Scalars['JSONObject']>;
  nsfw?: InputMaybe<Scalars['Boolean']>;
  predefinedClass?: InputMaybe<Scalars['String']>;
  predefinedFaction?: InputMaybe<Scalars['JSONObject']>;
  predefinedLocation?: InputMaybe<Scalars['String']>;
  predefinedRace?: InputMaybe<Scalars['String']>;
  publicId?: InputMaybe<Scalars['String']>;
  raceIds?: InputMaybe<Scalars['JSONObject']>;
  raceToAdd?: InputMaybe<Scalars['JSONObject']>;
  tags?: InputMaybe<Scalars['JSONObject']>;
  worldDescriptionIds?: InputMaybe<Scalars['JSONObject']>;
  worldName?: InputMaybe<Scalars['String']>;
  worldToAdd?: InputMaybe<Scalars['JSONObject']>;
  worlds?: InputMaybe<Scalars['JSONObject']>;
};

export type UpdateWorldResponse = MutationResponse & {
  __typename: 'UpdateWorldResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
  world?: Maybe<World>;
};

export type User = {
  __typename: 'User';
  acceptCommunityGuidelines?: Maybe<Scalars['Boolean']>;
  accessibleFeatures: Array<Scalars['String']>;
  actionsBalance: ResourceBalance;
  activePremium?: Maybe<Premium>;
  blockedUsers: Array<Scalars['String']>;
  canCreatorApply: Scalars['Boolean'];
  continueAdventure?: Maybe<Adventure>;
  createdAt?: Maybe<Scalars['DateTime']>;
  creator: Scalars['Boolean'];
  creditsBalance: ResourceBalance;
  email?: Maybe<Scalars['String']>;
  enableTestPayments?: Maybe<Scalars['Boolean']>;
  firebaseUid?: Maybe<Scalars['String']>;
  followers: Array<Profile>;
  followersCount: Scalars['Int'];
  following: Array<Profile>;
  followingCount: Scalars['Int'];
  friendCount: Scalars['Int'];
  friendedByCurrentUser: Scalars['Boolean'];
  friendedCurrentUser: Scalars['Boolean'];
  friends: Array<Profile>;
  gameSettings: GameSettings;
  goldBalance: ResourceBalance;
  hasHadSubscriptionAccess: Scalars['Boolean'];
  hasPremium: Scalars['Boolean'];
  id: Scalars['ID'];
  isAlpha: Scalars['Boolean'];
  isCurrentUser: Scalars['Boolean'];
  isDeveloper: Scalars['Boolean'];
  isFollowedByCurrentUser: Scalars['Boolean'];
  isOnline: Scalars['Boolean'];
  lastOnlineAt?: Maybe<Scalars['DateTime']>;
  newNotificationCount: Scalars['Int'];
  newNotifications: Array<Notification>;
  newProductUpdates: Array<ProductUpdate>;
  pastSteamPurchaser: Scalars['Boolean'];
  privateId: Scalars['String'];
  profile: Profile;
  rewardAvailable: Scalars['Boolean'];
  rewardCalendar?: Maybe<RewardCalendar>;
  sawNotificationsAt?: Maybe<Scalars['DateTime']>;
  sawUpdatesAt?: Maybe<Scalars['DateTime']>;
  scales: Scalars['Int'];
  scalesBalance: ResourceBalance;
  shouldPromptReview: Scalars['Boolean'];
  shouldShowModelPromo: Scalars['Boolean'];
  steamGiftClaimed?: Maybe<Scalars['Boolean']>;
  steamId?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  verifiedAt?: Maybe<Scalars['String']>;
};


export type UserNewNotificationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type UserInput = {
  bio?: InputMaybe<Scalars['String']>;
  modelPromoOverlayLastSeenAt?: InputMaybe<Scalars['DateTime']>;
  promptedToReviewAt?: InputMaybe<Scalars['DateTime']>;
  reviewedAt?: InputMaybe<Scalars['DateTime']>;
  sawUpdatesAt?: InputMaybe<Scalars['DateTime']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserNotes = {
  __typename: 'UserNotes';
  userFacingNotes: Scalars['String'];
};

export type Votable = {
  contentType: Scalars['String'];
  id: Scalars['ID'];
  publicId: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  totalUpvotes: Scalars['Int'];
  userVote?: Maybe<Scalars['String']>;
};

export type VoteContentResponse = MutationResponse & {
  __typename: 'VoteContentResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  content?: Maybe<Votable>;
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
};

export type World = Commentable & Savable & Searchable & Votable & {
  __typename: 'World';
  adventureCount: Scalars['Int'];
  adventuresPlayed: Scalars['Int'];
  allowComments: Scalars['Boolean'];
  bannedWords?: Maybe<Array<Scalars['String']>>;
  blockedAt?: Maybe<Scalars['DateTime']>;
  comments: Array<Comment>;
  contentType: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  featured: Scalars['Boolean'];
  genre?: Maybe<Scalars['String']>;
  hasEventChains: Scalars['Boolean'];
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  isOwner: Scalars['Boolean'];
  isSaved: Scalars['Boolean'];
  nsfw?: Maybe<Scalars['Boolean']>;
  nsfwModeratorTag?: Maybe<Scalars['Boolean']>;
  publicId: Scalars['String'];
  published: Scalars['Boolean'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  saveCount: Scalars['Int'];
  showComments: Scalars['Boolean'];
  tags?: Maybe<Scalars['JSONObject']>;
  thirdPerson: Scalars['Boolean'];
  title?: Maybe<Scalars['String']>;
  totalComments: Scalars['Int'];
  totalSaves: Scalars['Int'];
  totalUpvotes: Scalars['Int'];
  unlisted: Scalars['Boolean'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: User;
  userCreatedWorld: Scalars['Boolean'];
  userId: Scalars['String'];
  userOwnsWorld: Scalars['Boolean'];
  userVote?: Maybe<Scalars['String']>;
  voteCount: Scalars['Int'];
  worldName?: Maybe<Scalars['String']>;
};


export type WorldCommentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type WorldInfo = {
  __typename: 'WorldInfo';
  adventureId?: Maybe<Scalars['String']>;
  attributes?: Maybe<Scalars['JSONObject']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  entry?: Maybe<Scalars['String']>;
  factionName?: Maybe<Scalars['String']>;
  favorite?: Maybe<Scalars['Boolean']>;
  generator?: Maybe<Scalars['String']>;
  genre?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isSelected?: Maybe<Scalars['Boolean']>;
  keys?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  publicId?: Maybe<Scalars['String']>;
  scenarioId?: Maybe<Scalars['String']>;
  tags: Array<Maybe<Scalars['String']>>;
  tagsString?: Maybe<Scalars['String']>;
  tsv?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
  worldId?: Maybe<Scalars['String']>;
};

export type WorldInfoGenerationInput = {
  attributes?: InputMaybe<Scalars['JSONObject']>;
  background?: InputMaybe<Scalars['String']>;
  contentId?: InputMaybe<Scalars['String']>;
  contentType?: InputMaybe<Scalars['String']>;
  currentType?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  genre?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  isSelected?: InputMaybe<Scalars['Boolean']>;
  model?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type WorldInformation = {
  __typename: 'WorldInformation';
  adventureId?: Maybe<Scalars['String']>;
  attributes?: Maybe<Scalars['JSONObject']>;
  countContentWorldInfo?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  entry?: Maybe<Scalars['String']>;
  factionName?: Maybe<Scalars['String']>;
  favorite?: Maybe<Scalars['Boolean']>;
  generator?: Maybe<Scalars['String']>;
  genre?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isSelected?: Maybe<Scalars['Boolean']>;
  keys?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  publicId?: Maybe<Scalars['String']>;
  scenarioId?: Maybe<Scalars['String']>;
  tags: Array<Maybe<Scalars['String']>>;
  tagsString?: Maybe<Scalars['String']>;
  tsv?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
  worldId?: Maybe<Scalars['String']>;
};

export type WorldInformationInput = {
  attributes?: InputMaybe<Scalars['JSONObject']>;
  contentPublicId?: InputMaybe<Scalars['String']>;
  contentType?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  entry?: InputMaybe<Scalars['String']>;
  favorite?: InputMaybe<Scalars['Boolean']>;
  generator?: InputMaybe<Scalars['String']>;
  genre?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isSelected?: InputMaybe<Scalars['Boolean']>;
  keys?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['JSONObject']>;
  type?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type WorldInfoUpdateInput = {
  id?: InputMaybe<Scalars['ID']>;
  isSelected?: InputMaybe<Scalars['Boolean']>;
};

export type UserContextGetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserContextGetUserQuery = { __typename: 'Query', user: { __typename: 'User', id: string, createdAt?: string | null, acceptCommunityGuidelines?: boolean | null, blockedUsers: Array<string>, canCreatorApply: boolean, creator: boolean, email?: string | null, accessibleFeatures: Array<string>, hasPremium: boolean, isAlpha: boolean, isCurrentUser: boolean, isDeveloper: boolean, enableTestPayments?: boolean | null, newNotificationCount: number, privateId: string, firebaseUid?: string | null, rewardAvailable: boolean, shouldPromptReview: boolean, shouldShowModelPromo: boolean, username?: string | null, verifiedAt?: string | null, hasHadSubscriptionAccess: boolean, steamId?: string | null, pastSteamPurchaser: boolean, steamGiftClaimed?: boolean | null, profile: { __typename: 'Profile', id: string, shortId: string, title?: string | null, description?: string | null, thumbImageUrl?: string | null }, activePremium?: { __typename: 'Premium', userId: string, name: string, status: string, platform: string, activeUntil?: string | null, accessUntil?: string | null, subscriptionId?: string | null } | null, actionsBalance: { __typename: 'ResourceBalance', id: string, currentBalance: string }, creditsBalance: { __typename: 'ResourceBalance', id: string, currentBalance: string }, scalesBalance: { __typename: 'ResourceBalance', id: string, currentBalance: string }, gameSettings: { __typename: 'GameSettings', id: string, ai21CountPen: number, ai21FreqPen: number, ai21PresPen: number, alignCommands?: string | null, bannedWords?: Array<string> | null, commandList?: any | null, defaultMode: string, enableAlpha: boolean, enableBeta: boolean, griffinRepPen: number, isFullScreen?: boolean | null, lowBandwidth: boolean, memoryLength?: string | null, mobileActionWindowSize: number, modelType: string, nsfwGeneration: boolean, searchfilterFollowing: boolean, searchfilterPublished: boolean, searchfilterSafe: boolean, searchfilterThirdPerson: boolean, showFeedback: boolean, showIconText?: boolean | null, showModes: boolean, storyLineBreak?: boolean | null, temperature: number, textLength: number, textSpeed: number, topK: number, topP: number, trainTheAi?: boolean | null, unrestrictedInput: boolean, webActionWindowSize: number, worldInfoCardStyle?: string | null, settingsDrawerOpened?: boolean | null, advancedSettingsOpened?: boolean | null, imageCacheSelected?: string | null, rawModelOutput?: boolean | null, imageSettingsOpened?: boolean | null, imgWidth?: number | null, imgHeight?: number | null, imgCfgScale?: number | null, imgSteps?: number | null, imgSampler?: string | null, imgSeed?: string | null, imgSeedSafe?: number | null, shouldAutoplayAds?: boolean | null, activeTab?: string | null }, newProductUpdates: Array<{ __typename: 'ProductUpdate', id: string, title: string, description: string, createdAt: string }>, continueAdventure?: { __typename: 'Adventure', id: string, publicId: string } | null } };
