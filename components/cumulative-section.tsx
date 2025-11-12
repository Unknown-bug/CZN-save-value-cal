"use client"

import { NumberInput } from "@/components/ui/number-input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"

interface CumulativeSectionProps {
  removalCount: number
  copyCount: number
  onRemovalChange: (value: number) => void
  onCopyChange: (value: number) => void
}

export function CumulativeSection({ removalCount, copyCount, onRemovalChange, onCopyChange }: CumulativeSectionProps) {
  // Helper to show cumulative costs
  const getRemovalCost = (count: number): number => {
    if (count <= 0) return 0
    if (count === 1) return 0
    if (count === 2) return 10
    if (count === 3) return 30
    if (count === 4) return 50
    return 50 + (count - 4) * 20
  }

  const getCopyCost = (count: number): number => {
    if (count <= 0) return 0
    if (count === 1) return 0
    if (count === 2) return 10
    if (count === 3) return 30
    if (count === 4) return 50
    return 50 + (count - 4) * 20
  }

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">Cumulative Events</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="removals" className="text-blue-800 dark:text-blue-200">
            Total Removal Events
          </Label>
          <NumberInput
            id="removals"
            value={removalCount}
            defaultValue={0}
            onChange={onRemovalChange}
            className="mt-1"
          />
          <div className="mt-2 p-3 bg-blue-50 dark:bg-blue-900 rounded-lg">
            <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">Stacking Cost:</p>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              {removalCount === 0 && "0 pts (no removals)"}
              {removalCount === 1 && "0 pts (1st removal)"}
              {removalCount === 2 && "10 pts (2nd removal)"}
              {removalCount === 3 && "30 pts (3rd removal)"}
              {removalCount === 4 && "50 pts (4th removal)"}
              {removalCount >= 5 && `${getRemovalCost(removalCount)} pts (5th+ stacking)`}
            </p>
          </div>
        </div>
        <div>
          <Label htmlFor="copies" className="text-blue-800 dark:text-blue-200">
            Total Copy Events
          </Label>
          <NumberInput
            id="copies"
            value={copyCount}
            defaultValue={0}
            onChange={onCopyChange}
            className="mt-1"
          />
          <div className="mt-2 p-3 bg-blue-50 dark:bg-blue-900 rounded-lg">
            <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">Stacking Cost:</p>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              {copyCount === 0 && "0 pts (no copies)"}
              {copyCount === 1 && "0 pts (1st copy)"}
              {copyCount === 2 && "10 pts (2nd copy)"}
              {copyCount === 3 && "30 pts (3rd copy)"}
              {copyCount === 4 && "50 pts (4th copy)"}
              {copyCount >= 5 && `${getCopyCost(copyCount)} pts (5th+ stacking)`}
            </p>
          </div>
        </div>
      </div>
    </Card>
  )
}
