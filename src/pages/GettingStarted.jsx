import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useState } from 'react'
import { Link } from "react-router-dom";

const people = [
  { id: 1, name: 'Software Engineer/Developer' },
  { id: 2, name: 'Designer' },
  { id: 3, name: 'Both' },
]

export default function Example() {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(people[1])

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <div className="flex flex-col items-center justify-left text-left pt-[150px]">
        <h1 className="text-[25px] font-medium text-white pb-[10px] text-left flex">Please Choose your Field!👨‍🍳</h1>
    
    <div className="flex flex-col items-center justify-left m-auto h-screen w-52 text-left">
      <Combobox value={selected} onChange={(value) => setSelected(value)} onClose={() => setQuery('')}>
        <div className="relative w-[400px]">
          <ComboboxInput
            className={clsx(
              'w-full rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-white',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
            )}
            displayValue={(person) => person?.name}
            onChange={(event) => setQuery(event.target.value)}
          />
          <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
            <ChevronDownIcon className="size-4 fill-white/60 group-data-[hover]:fill-white" />
          </ComboboxButton>
        </div>

        <ComboboxOptions
          anchor="bottom"
          transition
          className={clsx(
            'w-[var(--input-width)] rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible',
            'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
          )}
        >
          {filteredPeople.map((person) => (
            <ComboboxOption
              key={person.id}
              value={person}
              className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
            >
              <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
              <div className="text-[15px] text-white">{person.name}</div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>

      <Link to={'/form'}>
      <button className="text-white bg-transparent border border-white/60 text-[15px] p-[8px] mt-[100px] rounded-[10px] w-full">Continue</button>
      </Link>
    </div>
    </div>
  )
}