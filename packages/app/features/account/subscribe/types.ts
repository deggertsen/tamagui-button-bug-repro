export type PlanBenefitType = {
  icon: string
  text: string
  TextComponent?: JSX.Element
  memberBenefit?: boolean
}

export type MemberBenefit = {
  perk: string
  nonMemberBenefit: PlanBenefitType
  memberBenefit: PlanBenefitType
}

export type PlanPrice = {
  duration: string
  monthlyPrice: string
  totalPrice: string
  totalCredits: string
  savings: string
  fullMonthlyPrice: string
  period: string
  renewing: boolean
  priceId?: string | null
  benefits: PlanBenefitType[]
  isValidForTrial: boolean
}

export type PlanMetadata = {
  planName: 'aid-low' | 'aid-mid' | 'aid-high'
  name: 'adventurer' | 'hero' | 'legend'
  title: string
  description: string
  welcome: string
  price: string
  prices: PlanPrice[] | null
  isValidForTrial: boolean
  benefits: PlanBenefitType[]
  image: string
  credits: number
}
