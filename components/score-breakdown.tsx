"use client"

import type { ScoringResult } from "@/lib/scoring-engine"
import { Card } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle, CheckCircle } from "lucide-react"

interface ScoreBreakdownProps {
  result: ScoringResult
}

export function ScoreBreakdown({ result }: ScoreBreakdownProps) {
  return (
    <div className="space-y-4">
      <Card className="p-6 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
        <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">Save Data Analysis</h2>

        <div className="space-y-3 mb-6">
          <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-200 uppercase">Point Breakdown</h4>
          <div className="flex justify-between items-center">
            <span className="text-blue-800 dark:text-blue-200">Cards (Neutral/Monster):</span>
            <span className="font-semibold text-blue-900 dark:text-blue-100">{result.cardPoints}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-blue-800 dark:text-blue-200">Transforms:</span>
            <span className="font-semibold text-blue-900 dark:text-blue-100">{result.transformPoints}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-blue-800 dark:text-blue-200">Epiphanies (Vague/Divine):</span>
            <span className="font-semibold text-blue-900 dark:text-blue-100">{result.epiphanyPoints}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-blue-800 dark:text-blue-200">Removals (Cumulative):</span>
            <span className="font-semibold text-blue-900 dark:text-blue-100">{result.removalPoints}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-blue-800 dark:text-blue-200">Copies (Cumulative):</span>
            <span className="font-semibold text-blue-900 dark:text-blue-100">{result.copyPoints}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-blue-800 dark:text-blue-200">Taboo Cards (Always Saved):</span>
            <span className="font-semibold text-blue-900 dark:text-blue-100">{result.tabooPoints}</span>
          </div>
        </div>

        <div className="border-t-2 border-blue-200 dark:border-blue-800 pt-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-blue-900 dark:text-blue-100">Total Faded Memories:</span>
            <span className="text-2xl font-bold text-blue-900 dark:text-blue-100">{result.totalPoints}</span>
          </div>
        </div>

        <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-200 uppercase mb-3">Capacity</h4>
        <div className="space-y-2 mb-4 p-3 bg-white dark:bg-blue-900 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-sm text-blue-700 dark:text-blue-300">Base Cap:</span>
            <span className="font-semibold text-blue-900 dark:text-blue-100">{result.baseCap}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-blue-700 dark:text-blue-300">Taboo Deduction (20 pts each):</span>
            <span className="font-semibold text-red-600 dark:text-red-400">-{result.tabooDeduction}</span>
          </div>
          <div className="border-t border-blue-200 dark:border-blue-800 pt-2">
            <div className="flex justify-between items-center">
              <span className="font-bold text-blue-800 dark:text-blue-200">Effective Cap:</span>
              <span className="text-lg font-bold text-blue-900 dark:text-blue-100">{result.effectiveCap}</span>
            </div>
          </div>
        </div>

        {result.isOverCap ? (
          <Alert className="bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-700 dark:text-red-200">
              Over capacity by <span className="font-bold">{result.overCapAmount}</span> pts. The game will randomly
              remove cards starting with monsters and divine epiphanies until it fits.
            </AlertDescription>
          </Alert>
        ) : (
          <Alert className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-700 dark:text-green-200">
              All cards will be saved. Remaining capacity:{" "}
              <span className="font-bold">{result.effectiveCap - result.totalPoints}</span> pts
            </AlertDescription>
          </Alert>
        )}
      </Card>
    </div>
  )
}
