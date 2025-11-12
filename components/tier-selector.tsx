"use client"

import { NumberInput } from "@/components/ui/number-input"
import { getBaseCap } from "@/lib/scoring-engine"

interface TierSelectorProps {
  selectedTier: number
  onTierChange: (tier: number) => void
}

export function TierSelector({ selectedTier, onTierChange }: TierSelectorProps) {
  const baseCap = getBaseCap(selectedTier)

  return (
    <div className="space-y-3">
      <div>
        <label className="text-sm font-medium text-blue-900 dark:text-blue-100 block mb-3">Save Data Tier</label>
        <NumberInput
          value={selectedTier}
          defaultValue={1}
          onChange={onTierChange}
          min={1}
          className="w-full md:w-32"
        />
      </div>
      <div className="text-sm text-blue-700 dark:text-blue-300">
        Base Cap for Tier {selectedTier}: <span className="font-bold">{baseCap}</span>
      </div>
    </div>
  )
}
