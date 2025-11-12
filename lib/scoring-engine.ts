export interface CardCount {
  neutral: number // +20 pts each (shared/neutral cards)
  monster: number // +80 pts each (very heavy memory)
  transforms: number // +10 pts each (transform events)
}

export interface EpiphanyCount {
  vague: number // +10 pts each (regular, non-vivid)
  vivid: number // 0 pts (clear/vivid, always saved)
  divine: number // +20 pts each (higher priority memory)
}

export interface RemovalRecord {
  count: number // total number of removal events in this run
}

export interface CopyRecord {
  count: number // total number of copy events in this run
}

export interface DeletionRecord {
  order: number // deletion order number
  isStartingCard: boolean // whether this is a starting card
  hasEpi: boolean // whether this deletion has an epiphany
}

export interface DupeRecord {
  order: number // dupe order number
  hasEpi: boolean // whether this dupe has an epiphany
}

export interface EquipmentAndUnique {
  equipment: number // 0 pts, always saved
  unique: number // 0 pts, always saved
  taboo: number // 20 pts each, always saved but reduces effective cap
}

export interface ScoringInput {
  cards: CardCount
  epiphanies: EpiphanyCount
  equipment: EquipmentAndUnique
  removals: RemovalRecord
  copies: CopyRecord
  baseCap: number
}

export interface ScoringResult {
  cardPoints: number
  transformPoints: number
  epiphanyPoints: number
  removalPoints: number
  copyPoints: number
  tabooPoints: number
  totalPoints: number

  baseCap: number
  tabooDeduction: number
  effectiveCap: number

  isOverCap: boolean
  overCapAmount: number
}

// Cumulative removal stacking costs
function getRemovalCumulativeCost(count: number): number {
  if (count <= 0) return 0
  if (count === 1) return 0
  if (count === 2) return 10
  if (count === 3) return 30
  if (count === 4) return 50
  // 5+ follows pattern of +20 each
  return 50 + (count - 4) * 20
}

// Cumulative copy stacking costs
function getCopyCumulativeCost(count: number): number {
  if (count <= 0) return 0
  if (count === 1) return 0
  if (count === 2) return 10
  if (count === 3) return 30
  if (count === 4) return 50
  // 5+ follows pattern of +20 each
  return 50 + (count - 4) * 20
}

export function calculateScore(input: ScoringInput): ScoringResult {
  // Card-based points
  const cardPoints = input.cards.neutral * 20 + input.cards.monster * 80
  const transformPoints = input.cards.transforms * 10

  // Epiphany points
  const epiphanyPoints = input.epiphanies.vague * 10 + input.epiphanies.divine * 20
  // vivid (clear) epiphanies are 0 pts

  // Cumulative removal and copy points
  const removalPoints = getRemovalCumulativeCost(input.removals.count)
  const copyPoints = getCopyCumulativeCost(input.copies.count)

  // Taboo card points (each costs 20, always saved)
  const tabooPoints = input.equipment.taboo * 20

  // Total Save Data Value
  const totalPoints = cardPoints + transformPoints + epiphanyPoints + removalPoints + copyPoints + tabooPoints

  // Effective cap calculation
  const tabooDeduction = input.equipment.taboo * 20
  const effectiveCap = input.baseCap - tabooDeduction

  // Check if over cap
  const isOverCap = totalPoints > effectiveCap
  const overCapAmount = Math.max(0, totalPoints - effectiveCap)

  return {
    cardPoints,
    transformPoints,
    epiphanyPoints,
    removalPoints,
    copyPoints,
    tabooPoints,
    totalPoints,

    baseCap: input.baseCap,
    tabooDeduction,
    effectiveCap,

    isOverCap,
    overCapAmount,
  }
}

// Helper function to calculate base cap from tier
// Tier 1-6 with varying caps (actual game values would go here)
export function getBaseCap(tier: number): number {
  // These are example values; actual game values may differ
  const tierCaps: Record<number, number> = {
    1: 11,
    2: 30,
    3: 60,
    4: 100,
    5: 150,
    6: 200,
  }
  return tierCaps[tier] || 200
}
