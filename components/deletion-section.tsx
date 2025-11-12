"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { X } from "lucide-react"
import type { DeletionRecord } from "@/lib/scoring-engine"

interface DeletionSectionProps {
  deletions: DeletionRecord[]
  onAddDeletion: () => void
  onRemoveDeletion: (index: number) => void
  onToggleStartingCard: (index: number) => void
  onToggleEpi: (index: number) => void
}

export function DeletionSection({
  deletions,
  onAddDeletion,
  onRemoveDeletion,
  onToggleStartingCard,
  onToggleEpi,
}: DeletionSectionProps) {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100">Deletions</h3>
        <Button onClick={onAddDeletion} className="bg-blue-600 hover:bg-blue-700">
          + Add Deletion
        </Button>
      </div>

      <div className="space-y-3">
        {deletions.length === 0 ? (
          <p className="text-blue-600 dark:text-blue-400 text-sm">No deletions added</p>
        ) : (
          deletions.map((deletion, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900 rounded-lg">
              <span className="font-semibold text-blue-900 dark:text-blue-100 min-w-[60px]">#{deletion.order}</span>
              <div className="flex items-center gap-4 flex-1">
                <label className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
                  <Checkbox checked={deletion.isStartingCard} onCheckedChange={() => onToggleStartingCard(idx)} />
                  Starting Card
                </label>
                <label className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
                  <Checkbox checked={deletion.hasEpi} onCheckedChange={() => onToggleEpi(idx)} />
                  Has Epi
                </label>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onRemoveDeletion(idx)}
                className="text-red-600 hover:text-red-700"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          ))
        )}
      </div>
    </Card>
  )
}
