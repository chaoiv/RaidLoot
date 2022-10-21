import Database from '../database'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import SelectGear from './SelectGear'

export default function GearInterface({gamer}) {
    return (
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Database.getGamerGearArray(gamer).map((slot) => (
          <li key={gamer} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
            <div className="flex w-full items-center justify-between space-x-6 p-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="truncate text-sm font-medium text-gray-900">{Database.getGearSlotName(slot)}</h3>
                </div>
                {/* <p className="mt-1 truncate text-sm text-gray-500">{Database.gear('Pull API gear name')}</p> */}
              </div>
            </div>
            {Database.getGamerJob(gamer) >= 0 &&
              <p><SelectGear gamer={gamer} slot={slot} selected={Database.getGamerGearSlot(gamer, slot)} /></p>
            }
          </li>
        ))}
      </ul>
    )
  }7