export type User = {
  id: string
  name: string
  email: string
  imageUrl: string
}

export type Promo = {
  id: string
  companyId: string
  companyName: string
  companyLogo: string
  title: string
  description: string
  location: string
}

export type RewardsCard = {
  id: string
  promoId: string
  promoTitle: string
  userId: string
  companyId: string
  companyName: string
  companyLogo: string
  companyLocation: string
  acquiredCount: number
  totalCount: number
  backgroundColor: string
  textColor: string
}
