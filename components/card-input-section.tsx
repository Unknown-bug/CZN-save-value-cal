"use client"

import { NumberInput } from "@/components/ui/number-input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface CardInputSectionProps {
  neutralCards: number
  monsterCards: number
  transforms: number
  vagueEpiphanies: number
  vividEpiphanies: number
  divineEpiphanies: number
  equipment: number
  uniqueCards: number
  tabooCards: number
  onNeutralChange: (value: number) => void
  onMonsterChange: (value: number) => void
  onTransformsChange: (value: number) => void
  onVagueEpiChange: (value: number) => void
  onVividEpiChange: (value: number) => void
  onDivineEpiChange: (value: number) => void
  onEquipmentChange: (value: number) => void
  onUniqueChange: (value: number) => void
  onTabooChange: (value: number) => void
}

export function CardInputSection({
  neutralCards,
  monsterCards,
  transforms,
  vagueEpiphanies,
  vividEpiphanies,
  divineEpiphanies,
  equipment,
  uniqueCards,
  tabooCards,
  onNeutralChange,
  onMonsterChange,
  onTransformsChange,
  onVagueEpiChange,
  onVividEpiChange,
  onDivineEpiChange,
  onEquipmentChange,
  onUniqueChange,
  onTabooChange,
}: CardInputSectionProps) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">Faded Memories Breakdown</h3>
      <Tabs defaultValue="cards" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="cards">Cards</TabsTrigger>
          <TabsTrigger value="epiphanies">Epiphanies</TabsTrigger>
          <TabsTrigger value="special">Special</TabsTrigger>
        </TabsList>

        <TabsContent value="cards" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="neutral" className="text-blue-800 dark:text-blue-200">
                Neutral Cards (+20 pts each)
              </Label>
              <NumberInput
                id="neutral"
                value={neutralCards}
                defaultValue={0}
                onChange={onNeutralChange}
                className="mt-1"
              />
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">Shared/neutral cards acquired</p>
            </div>
            <div>
              <Label htmlFor="monster" className="text-blue-800 dark:text-blue-200">
                Monster Cards (+80 pts each)
              </Label>
              <NumberInput
                id="monster"
                value={monsterCards}
                defaultValue={0}
                onChange={onMonsterChange}
                className="mt-1"
              />
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">Very heavy memory cost</p>
            </div>
            <div>
              <Label htmlFor="transforms" className="text-blue-800 dark:text-blue-200">
                Transform Events (+10 pts each)
              </Label>
              <NumberInput
                id="transforms"
                value={transforms}
                defaultValue={0}
                onChange={onTransformsChange}
                className="mt-1"
              />
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">Card transform actions</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="epiphanies" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="vague-epi" className="text-blue-800 dark:text-blue-200">
                Vague Epiphanies (+10 pts each)
              </Label>
              <NumberInput
                id="vague-epi"
                value={vagueEpiphanies}
                defaultValue={0}
                onChange={onVagueEpiChange}
                className="mt-1"
              />
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">Regular epiphanies</p>
            </div>
            <div>
              <Label htmlFor="vivid-epi" className="text-blue-800 dark:text-blue-200">
                Vivid/Clear Epiphanies (0 pts)
              </Label>
              <NumberInput
                id="vivid-epi"
                value={vividEpiphanies}
                defaultValue={0}
                onChange={onVividEpiChange}
                className="mt-1"
              />
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">Clear/vivid always saved</p>
            </div>
            <div>
              <Label htmlFor="divine-epi" className="text-blue-800 dark:text-blue-200">
                Divine Epiphanies (+20 pts each)
              </Label>
              <NumberInput
                id="divine-epi"
                value={divineEpiphanies}
                defaultValue={0}
                onChange={onDivineEpiChange}
                className="mt-1"
              />
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">Higher priority memory</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="special" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="equipment" className="text-blue-800 dark:text-blue-200">
                Equipment (0 pts)
              </Label>
              <NumberInput
                id="equipment"
                value={equipment}
                defaultValue={0}
                onChange={onEquipmentChange}
                className="mt-1"
              />
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">Never lost, always saved</p>
            </div>
            <div>
              <Label htmlFor="unique" className="text-blue-800 dark:text-blue-200">
                Unique Cards (0 pts)
              </Label>
              <NumberInput
                id="unique"
                value={uniqueCards}
                defaultValue={0}
                onChange={onUniqueChange}
                className="mt-1"
              />
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">Character unique cards</p>
            </div>
            <div>
              <Label htmlFor="taboo" className="text-blue-800 dark:text-blue-200">
                Taboo Cards (20 pts each)
              </Label>
              <NumberInput
                id="taboo"
                value={tabooCards}
                defaultValue={0}
                onChange={onTabooChange}
                className="mt-1"
              />
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">Always saved, reduces cap</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  )
}
