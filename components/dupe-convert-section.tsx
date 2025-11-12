"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { NumberInput } from "@/components/ui/number-input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { X } from "lucide-react"
import type { DupeRecord } from "@/lib/scoring-engine"

interface DupeConvertSectionProps {
  dupes: DupeRecord[]
  converts: number
  forbiddenCards: number
  onAddDupe: () => void
  onRemoveDupe: (index: number) => void
  onToggleDupeEpi: (index: number) => void
  onConvertsChange: (value: number) => void
  onForbiddenChange: (value: number) => void
}

export function DupeConvertSection({
  dupes,
  converts,
  forbiddenCards,
  onAddDupe,
  onRemoveDupe,
  onToggleDupeEpi,
  onConvertsChange,
  onForbiddenChange,
}: DupeConvertSectionProps) {
  return (
    <>
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100">Duplicates (Dupes)</h3>
          <Button onClick={onAddDupe} className="bg-blue-600 hover:bg-blue-700">
            + Add Dupe
          </Button>
        </div>

        <div className="space-y-3">
          {dupes.length === 0 ? (
            <p className="text-blue-600 dark:text-blue-400 text-sm">No dupes added</p>
          ) : (
            dupes.map((dupe, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900 rounded-lg">
                <span className="font-semibold text-blue-900 dark:text-blue-100 min-w-[60px]">#{dupe.order}</span>
                <div className="flex items-center gap-4 flex-1">
                  <label className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
                    <Checkbox checked={dupe.hasEpi} onCheckedChange={() => onToggleDupeEpi(idx)} />
                    Has Epi
                  </label>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onRemoveDupe(idx)}
                  className="text-red-600 hover:text-red-700"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ))
          )}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">Converts & Other</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="converts" className="text-blue-800 dark:text-blue-200">
              Convert Actions (10 pts each)
            </Label>
            <NumberInput
              id="converts"
              value={converts}
              defaultValue={0}
              onChange={onConvertsChange}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="forbidden" className="text-blue-800 dark:text-blue-200">
              Forbidden Cards (10 pts each)
            </Label>
            <NumberInput
              id="forbidden"
              value={forbiddenCards}
              defaultValue={0}
              onChange={onForbiddenChange}
              className="mt-1"
            />
          </div>
        </div>
      </Card>
    </>
  )
}
