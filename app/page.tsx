"use client"

import { useState } from "react"
import { calculateScore, getBaseCap, type ScoringInput } from "@/lib/scoring-engine"
import { TierSelector } from "@/components/tier-selector"
import { CardInputSection } from "@/components/card-input-section"
import { CumulativeSection } from "@/components/cumulative-section"
import { ScoreBreakdown } from "@/components/score-breakdown"

export default function Home() {
  const [selectedTier, setSelectedTier] = useState(1)
  const [neutralCards, setNeutralCards] = useState(0)
  const [monsterCards, setMonsterCards] = useState(0)
  const [transforms, setTransforms] = useState(0)
  const [vagueEpiphanies, setVagueEpiphanies] = useState(0)
  const [vividEpiphanies, setVividEpiphanies] = useState(0)
  const [divineEpiphanies, setDivineEpiphanies] = useState(0)
  const [equipment, setEquipment] = useState(0)
  const [uniqueCards, setUniqueCards] = useState(0)
  const [tabooCards, setTabooCards] = useState(0)
  const [removalCount, setRemovalCount] = useState(0)
  const [copyCount, setCopyCount] = useState(0)

  const baseCap = getBaseCap(selectedTier)

  const scoringInput: ScoringInput = {
    cards: {
      neutral: neutralCards,
      monster: monsterCards,
      transforms: transforms,
    },
    epiphanies: {
      vague: vagueEpiphanies,
      vivid: vividEpiphanies,
      divine: divineEpiphanies,
    },
    equipment: {
      equipment: equipment,
      unique: uniqueCards,
      taboo: tabooCards,
    },
    removals: { count: removalCount },
    copies: { count: copyCount },
    baseCap: baseCap,
  }

  const result = calculateScore(scoringInput)

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-blue-100 mb-2">
            Save Data Tier Calculator
          </h1>
          <p className="text-blue-700 dark:text-blue-300">
            Calculate your Faded Memories points and determine what cards will be saved
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            <TierSelector selectedTier={selectedTier} onTierChange={setSelectedTier} />
            <CardInputSection
              neutralCards={neutralCards}
              monsterCards={monsterCards}
              transforms={transforms}
              vagueEpiphanies={vagueEpiphanies}
              vividEpiphanies={vividEpiphanies}
              divineEpiphanies={divineEpiphanies}
              equipment={equipment}
              uniqueCards={uniqueCards}
              tabooCards={tabooCards}
              onNeutralChange={setNeutralCards}
              onMonsterChange={setMonsterCards}
              onTransformsChange={setTransforms}
              onVagueEpiChange={setVagueEpiphanies}
              onVividEpiChange={setVividEpiphanies}
              onDivineEpiChange={setDivineEpiphanies}
              onEquipmentChange={setEquipment}
              onUniqueChange={setUniqueCards}
              onTabooChange={setTabooCards}
            />
            <CumulativeSection
              removalCount={removalCount}
              copyCount={copyCount}
              onRemovalChange={setRemovalCount}
              onCopyChange={setCopyCount}
            />
          </div>

          {/* Score Display (Sticky Sidebar) */}
          <div className="lg:sticky lg:top-8 h-fit">
            <ScoreBreakdown result={result} />
          </div>
        </div>
      </div>
    </main>
  )
}
